// Reads hero.rewritten.html and produces three files:
//   index.html   - clean shell with <link>/<script type="module"> and SEO meta
//   styles.css   - the contents of the original <style>...</style> block
//   app.js       - the contents of the original <script>...</script> block
//
// This script also performs the following transformations specified in the
// optimization plan:
//
// Phase 3:
//   - Removes duplicate `overflow: hidden;` on `.card`.
//
// Phase 5:
//   - Adds a @media (prefers-reduced-motion: reduce) block to styles.css.
//   - Adds SEO/social meta tags + favicon + canonical placeholder to index.html.
//   - Adds pre-paint inline script that applies the `dark` class from
//     localStorage to <html> before first paint (no FOUC).
//   - Switches body.dark selectors to also support html.dark via :root.dark.
//   - Wraps the custom-cursor init code in a prefers-reduced-motion +
//     pointer:fine guard (in app.js).
//   - Drops the redundant `localStorage.getItem('theme') === 'dark'` line
//     near the bottom of the original script (now handled pre-paint).
//
// Note: Phase 4 (splitting per-route HTML into ES modules) is performed by
// scripts/split-pages.mjs. This script just extracts the monolithic script
// into app.js; the page-splitter rewrites it from there.
//
// Usage:  node scripts/split-html.mjs

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'hero.rewritten.html');

async function main() {
  const html = await fs.readFile(SRC, 'utf8');

  // ── Carve out the <style>, <body>, and <script> blocks ────────────────
  const styleOpen = html.indexOf('<style>');
  const styleClose = html.indexOf('</style>', styleOpen);
  if (styleOpen < 0 || styleClose < 0) throw new Error('Could not find <style> block');
  let css = html.slice(styleOpen + '<style>'.length, styleClose);

  const scriptOpen = html.indexOf('<script>');
  const scriptClose = html.indexOf('</script>', scriptOpen);
  if (scriptOpen < 0 || scriptClose < 0) throw new Error('Could not find <script> block');
  let js = html.slice(scriptOpen + '<script>'.length, scriptClose);

  // ── CSS transformations ───────────────────────────────────────────────

  // Remove the duplicate `overflow: hidden;` on .card. The original line is:
  //   "border: 1.5px solid var(--border); padding: 24px 24px 22px; overflow: hidden;\n      background: transparent; cursor: pointer;\n      position: relative; overflow: hidden; border-radius: 3px;"
  // We drop the first occurrence on the `.card` block.
  css = css.replace(
    /(\.card\s*\{[^}]*?padding:\s*24px 24px 22px;)\s*overflow:\s*hidden;/,
    '$1'
  );

  // Theme strategy: keep all existing `body.dark` selectors intact. The
  // pre-paint inline script in <head> sets `dark` on <html> (so a single
  // root-level color override prevents FOUC), and a tiny inline script at
  // the start of <body> mirrors it onto <body> so the existing CSS keeps
  // working. See index.html below.

  // Append prefers-reduced-motion overrides at the very end so they win.
  const reducedMotion = `\n\n    /* ════════════════════════════\n       Reduced motion + a11y\n    ════════════════════════════ */\n    @media (prefers-reduced-motion: reduce) {\n      *, *::before, *::after {\n        animation-duration: .001ms !important;\n        animation-iteration-count: 1 !important;\n        transition-duration: .001ms !important;\n        scroll-behavior: auto !important;\n      }\n      .c-dot, .c-ring { display: none !important; }\n      .card:hover { transform: none !important; box-shadow: none !important; }\n      .card:hover .card-img img { transform: none !important; }\n      #app { animation: none !important; }\n    }\n    @media (pointer: coarse) {\n      .c-dot, .c-ring { display: none !important; }\n    }\n`;
  css += reducedMotion;

  await fs.writeFile(path.join(ROOT, 'styles.css'), css.trim() + '\n', 'utf8');

  // ── JS transformations ───────────────────────────────────────────────

  // Wrap the cursor *event listeners* (not the const declarations) in a
  // prefers-reduced-motion + pointer:fine guard. We keep cdot/cring in
  // module scope so toggleTheme() can still recolor them later.
  // The original block is:
  //   const cdot = document.getElementById('cdot');
  //   const cring = document.getElementById('cring');
  //   let mx=0,my=0,rx=0,ry=0;
  //
  //   document.addEventListener('mousemove', e => { ... });
  //   ... lots of cursor logic ...
  //   <blank line>
  //   function toggleTheme() {
  //
  // We open the guard right before `document.addEventListener('mousemove'`
  // and close it right before `function toggleTheme(`.

  js = js.replace(
    /(\n\s*)(document\.addEventListener\('mousemove')/,
    `$1// Skip the cursor effect on touch devices and when the user prefers reduced motion.\n    const _wantsCursor = (typeof matchMedia !== 'undefined')\n      && matchMedia('(prefers-reduced-motion: no-preference)').matches\n      && matchMedia('(pointer: fine)').matches;\n    if (_wantsCursor) {\n    $2`
  );

  // Close the cursor guard right before the unrelated scroll listener (which
  // toggles `#nav.scrolled`) so non-cursor code stays unconditional.
  js = js.replace(
    /(\n)(\s*window\.addEventListener\('scroll')/,
    `\n    } // end if(_wantsCursor)\n$1$2`
  );

  // Drop the late `if (localStorage.getItem('theme') === 'dark') ...` line
  // near the bottom of the script. The pre-paint inline script in <head>
  // handles this now (and also avoids FOUC).
  js = js.replace(
    /\n\s*if \(localStorage\.getItem\('theme'\) === 'dark'\) document\.body\.classList\.add\('dark'\);\s*\n/,
    '\n'
  );

  // Make toggleTheme() flip the class on <html> too, so the pre-paint
  // :root.dark rule stays in sync with the runtime body.dark cascade.
  js = js.replace(
    /document\.body\.classList\.toggle\('dark'\);/,
    `document.body.classList.toggle('dark');\n      document.documentElement.classList.toggle('dark', document.body.classList.contains('dark'));`
  );

  // Remove the first three duplicate barriersHTML() declarations.
  // diff-barriers.mjs verified all four bodies are byte-identical, so we
  // keep only the last (the one JS was actually using under last-wins
  // semantics) — required because <script type="module"> rejects redeclares.
  js = removeDuplicateBarriersHTML(js);

  // Add 'use strict' at the top of app.js.
  js = `'use strict';\n` + js.trimStart();

  await fs.writeFile(path.join(ROOT, 'app.js'), js.trim() + '\n', 'utf8');

  // ── Build the new index.html shell ───────────────────────────────────

  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Aditi Deshpande - Product Designer</title>
  <meta name="description" content="Aditi Deshpande - Product Designer specializing in interaction design, UX research, accessibility, and AI-integrated workflows." />
  <meta name="theme-color" content="#F0EDE6" />
  <meta name="color-scheme" content="light dark" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="Aditi Deshpande - Product Designer" />
  <meta property="og:description" content="Selected work in interaction design, UX research, accessibility, and AI-integrated workflows." />
  <meta property="og:image" content="/assets/img/about/about-fa7bd9c9-1536.webp" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Aditi Deshpande - Product Designer" />
  <meta name="twitter:description" content="Selected work in interaction design, UX research, accessibility, and AI-integrated workflows." />

  <link rel="canonical" href="https://aditi-deshpande.example/" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23F0EDE6'/%3E%3Ctext x='50%25' y='54%25' text-anchor='middle' font-family='Cormorant Garamond, serif' font-size='44' font-weight='700' fill='%231a1a1a' dominant-baseline='middle'%3Ea%3C/text%3E%3Ccircle cx='40' cy='44' r='3.5' fill='%23C4502A'/%3E%3C/svg%3E" type="image/svg+xml" />

  <script>
    // Pre-paint theme: apply saved preference before first paint to prevent FOUC.
    // We tag <html> here (so the critical-CSS :root.dark rule kicks in immediately);
    // a second inline script at the start of <body> mirrors the class onto <body>
    // so the existing body.dark selectors in styles.css keep working.
    try { if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark'); } catch (e) {}
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500;1,700&family=Cormorant+Garamond:wght@700&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

  <link rel="preload" as="image" href="/assets/img/work/work-11b74571-1226.webp" imagesrcset="/assets/img/work/work-11b74571-800.webp 800w, /assets/img/work/work-11b74571-1226.webp 1226w" imagesizes="(max-width: 768px) 100vw, 900px" fetchpriority="high" />

  <style>
    /* Critical CSS: prevent flash before the stylesheet loads. */
    :root { color-scheme: light dark; }
    html, body { background: #F0EDE6; color: #1a1a1a; font-family: 'DM Sans', system-ui, sans-serif; min-height: 100vh; margin: 0; }
    :root.dark, body.dark { background: #1a1a1a; color: #e2ded7; }
  </style>

  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <script>
    // Mirror the pre-paint dark class from <html> onto <body> so existing
    // body.dark CSS selectors (in styles.css) take effect immediately.
    if (document.documentElement.classList.contains('dark')) document.body.classList.add('dark');
  </script>
  <div class="c-dot" id="cdot"></div>
  <div class="c-ring" id="cring"></div>
  <div id="nav"></div>
  <div id="app"></div>
  <div class="toast" id="toast"></div>

  <script type="module" src="./app.js"></script>
</body>
</html>
`;

  await fs.writeFile(path.join(ROOT, 'index.html'), indexHtml, 'utf8');

  // Stats
  const cssBytes = (await fs.stat(path.join(ROOT, 'styles.css'))).size;
  const jsBytes = (await fs.stat(path.join(ROOT, 'app.js'))).size;
  const htmlBytes = (await fs.stat(path.join(ROOT, 'index.html'))).size;
  console.log('Wrote:');
  console.log(`  index.html   ${(htmlBytes / 1024).toFixed(2)} KB`);
  console.log(`  styles.css   ${(cssBytes / 1024).toFixed(2)} KB`);
  console.log(`  app.js       ${(jsBytes / 1024).toFixed(2)} KB`);
}

// ── Helpers ────────────────────────────────────────────────────────────

function removeDuplicateBarriersHTML(text) {
  const re = /function barriersHTML\(\)/g;
  const starts = [];
  let m;
  while ((m = re.exec(text))) starts.push(m.index);
  if (starts.length < 2) return text;

  function skipTemplate(text, i) {
    while (i < text.length) {
      const c = text[i];
      if (c === '\\') { i += 2; continue; }
      if (c === '`') return i;
      if (c === '$' && text[i+1] === '{') {
        let depth = 1; i += 2;
        while (i < text.length && depth > 0) {
          if (text[i] === '{') depth++;
          else if (text[i] === '}') depth--;
          else if (text[i] === '`') i = skipTemplate(text, i + 1);
          i++;
        }
        continue;
      }
      i++;
    }
    return i;
  }
  function bodyEnd(text, start) {
    let i = text.indexOf('{', start);
    let depth = 1;
    i++;
    for (; i < text.length; i++) {
      const c = text[i];
      if (c === '{') depth++;
      else if (c === '}') { depth--; if (depth === 0) return i; }
      else if (c === '`') i = skipTemplate(text, i + 1);
      else if (c === '/' && text[i+1] === '/') { i = text.indexOf('\n', i); if (i < 0) i = text.length; }
      else if (c === '/' && text[i+1] === '*') { i = text.indexOf('*/', i + 2); if (i < 0) i = text.length; else i++; }
      else if (c === '"' || c === "'") { i++; while (i < text.length && text[i] !== c) { if (text[i] === '\\') i++; i++; } }
    }
    return -1;
  }

  // Cut every duplicate except the last, in reverse offset order.
  let out = text;
  for (let k = starts.length - 2; k >= 0; k--) {
    const s = starts[k];
    const e = bodyEnd(out, s);
    let cutStart = s;
    while (cutStart > 0 && out[cutStart - 1] !== '\n') cutStart--;
    let cutEnd = e + 1;
    if (out[cutEnd] === '\n') cutEnd++;
    out = out.slice(0, cutStart) + out.slice(cutEnd);
  }
  return out;
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
