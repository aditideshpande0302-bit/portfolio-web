// Splits app.js into per-route ES modules under pages/ and pages/case/,
// extracts shared helpers into pages/shared.js, and rewrites app.js so the
// `pages` map uses dynamic import().
//
// Usage:  node scripts/split-pages.mjs

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');
const APP = path.join(ROOT, 'app.js');

// (function name, output file relative to root, import path back to shared.js)
const ROUTES = [
  { fn: 'homeHTML',      file: 'pages/home.js',           shared: './shared.js' },
  { fn: 'workHTML',      file: 'pages/work.js',           shared: './shared.js' },
  { fn: 'aboutHTML',     file: 'pages/about.js',          shared: './shared.js' },
  { fn: 'contactHTML',   file: 'pages/contact.js',        shared: './shared.js' },
  { fn: 'rightwallHTML', file: 'pages/case/rightwall.js', shared: '../shared.js' },
  { fn: 'purHTML',       file: 'pages/case/pur.js',       shared: '../shared.js' },
  { fn: 'pathwayHTML',   file: 'pages/case/pathway.js',   shared: '../shared.js' },
  { fn: 'calmnestHTML',  file: 'pages/case/calmnest.js',  shared: '../shared.js' },
  { fn: 'hydrationHTML', file: 'pages/case/hydration.js', shared: '../shared.js' },
  { fn: 'genaiHTML',     file: 'pages/case/genai.js',     shared: '../shared.js' },
  { fn: 'empoweredHTML', file: 'pages/case/empowered.js', shared: '../shared.js' },
  { fn: 'barriersHTML',  file: 'pages/case/barriers.js',  shared: '../shared.js' },
  { fn: 'aidesignHTML',  file: 'pages/case/aidesign.js',  shared: '../shared.js' },
];

const SHARED_FNS = ['csProjectNavHTML', 'csNextHTML', 'footerHTML', 'navHTML'];
const SHARED_CONSTS = ['CS_PAGES', 'ALL_CATS'];

// ── helpers ────────────────────────────────────────────────────────────

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

function findBlockEnd(text, start) {
  let i = text.indexOf('{', start);
  if (i < 0) return -1;
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

function findArrayEnd(text, start) {
  let i = text.indexOf('[', start);
  if (i < 0) return -1;
  let depth = 1;
  i++;
  for (; i < text.length; i++) {
    const c = text[i];
    if (c === '[') depth++;
    else if (c === ']') { depth--; if (depth === 0) return i; }
    else if (c === '`') i = skipTemplate(text, i + 1);
    else if (c === '"' || c === "'") { i++; while (i < text.length && text[i] !== c) { if (text[i] === '\\') i++; i++; } }
  }
  return -1;
}

function findFunctionRange(text, name) {
  const re = new RegExp(`function\\s+${name}\\s*\\(`, 'g');
  const m = re.exec(text);
  if (!m) return null;
  const end = findBlockEnd(text, m.index);
  if (end < 0) return null;
  let cutStart = m.index;
  while (cutStart > 0 && text[cutStart - 1] !== '\n') cutStart--;
  let cutEnd = end + 1;
  if (text[cutEnd] === '\n') cutEnd++;
  return { start: cutStart, end: cutEnd, body: text.slice(m.index, end + 1) };
}

function findConstRange(text, name) {
  // Match `const NAME = [` or `const NAME = {` (top-level, anywhere in the file).
  const re = new RegExp(`const\\s+${name}\\s*=\\s*[\\[{]`);
  const m = re.exec(text);
  if (!m) return null;
  const openIdx = text.indexOf(text[m.index + m[0].length - 1], m.index);
  const isArr = text[openIdx] === '[';
  const end = isArr ? findArrayEnd(text, openIdx) : findBlockEnd(text, openIdx);
  if (end < 0) return null;
  // Continue past the trailing `;` if present.
  let after = end + 1;
  while (text[after] === ' ' || text[after] === '\t') after++;
  if (text[after] === ';') after++;
  let cutStart = m.index;
  while (cutStart > 0 && text[cutStart - 1] !== '\n') cutStart--;
  let cutEnd = after;
  if (text[cutEnd] === '\n') cutEnd++;
  return { start: cutStart, end: cutEnd, body: text.slice(m.index, after) };
}

function dedent(s) {
  // Strip the leading 4-space indentation that the original script-mode block
  // had. Don't touch lines that have less indentation (e.g. blank lines).
  return s.split('\n').map(line => line.startsWith('    ') ? line.slice(4) : line).join('\n');
}

function detectImports(body) {
  const imports = [];
  for (const fn of SHARED_FNS) {
    if (new RegExp(`\\b${fn}\\s*\\(`).test(body)) imports.push(fn);
  }
  for (const c of SHARED_CONSTS) {
    if (new RegExp(`\\b${c}\\b`).test(body)) imports.push(c);
  }
  return imports;
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

// ── main ───────────────────────────────────────────────────────────────

let text = await fs.readFile(APP, 'utf8');

// Step 1: extract shared helpers' source so we can write pages/shared.js.
const sharedPieces = {};

for (const fn of SHARED_FNS) {
  const r = findFunctionRange(text, fn);
  if (!r) throw new Error(`shared fn ${fn} not found`);
  sharedPieces[fn] = { type: 'fn', range: r };
}
for (const c of SHARED_CONSTS) {
  const r = findConstRange(text, c);
  if (!r) throw new Error(`shared const ${c} not found`);
  sharedPieces[c] = { type: 'const', range: r };
}

// Step 2: extract each route function and the shared helpers all at once,
// remembering offsets so we can splice them out of app.js in reverse order.
const ranges = []; // [{start,end,kind,name,body}]
for (const r of ROUTES) {
  const fr = findFunctionRange(text, r.fn);
  if (!fr) throw new Error(`route fn ${r.fn} not found`);
  ranges.push({ ...fr, kind: 'route', name: r.fn, route: r });
}
for (const name of [...SHARED_FNS, ...SHARED_CONSTS]) {
  const piece = sharedPieces[name];
  ranges.push({ ...piece.range, kind: 'shared', name, sharedKind: piece.type });
}

// Normalize references that depend on the new module boundaries:
// - `_lastWorkCat` lives on window (set/read by app.js); extracted modules
//   must use `window._lastWorkCat` since they don't share scope anymore.
function normalizeRefs(body) {
  return body.replace(/(?<!\.)\b_lastWorkCat\b/g, 'window._lastWorkCat');
}

// Build the route modules.
for (const r of ROUTES) {
  const fr = ranges.find(x => x.name === r.fn);
  const body = normalizeRefs(fr.body);
  const imports = detectImports(body);
  const importLine = imports.length
    ? `import { ${imports.join(', ')} } from '${r.shared}';\n\n`
    : '';
  const out = `${importLine}${dedent(body)}\n\nexport default ${r.fn};\n`;
  const outPath = path.join(ROOT, ...r.file.split('/'));
  await ensureDir(path.dirname(outPath));
  await fs.writeFile(outPath, out, 'utf8');
  console.log(`  ${r.file}  (${out.length} B${imports.length ? ', imports: ' + imports.join(',') : ''})`);
}

// Build pages/shared.js.
const sharedOrder = ['CS_PAGES', 'ALL_CATS', 'navHTML', 'csProjectNavHTML', 'csNextHTML', 'footerHTML'];
let sharedBody = '';
for (const name of sharedOrder) {
  const piece = sharedPieces[name];
  if (!piece) continue;
  sharedBody += dedent(normalizeRefs(piece.range.body)) + '\n\n';
}
const sharedOut = `// Shared helpers and constants used by every route.
// csNextHTML reads window._lastWorkCat, set by openProject() in app.js.

${sharedBody}export { CS_PAGES, ALL_CATS, navHTML, csProjectNavHTML, csNextHTML, footerHTML };
`;
await fs.writeFile(path.join(ROOT, 'pages', 'shared.js'), sharedOut, 'utf8');
console.log(`  pages/shared.js  (${sharedOut.length} B)`);

// Step 3: splice all extracted ranges out of app.js (in reverse offset order).
ranges.sort((a, b) => b.start - a.start);
for (const r of ranges) {
  text = text.slice(0, r.start) + text.slice(r.end);
}

// Step 4: rewrite the synchronous `pages = {...}` map and `render()` to use
// dynamic imports with a resolved-module cache.
//
// The original block (now mid-script, indented 4 spaces) is:
//   function render(page) {
//     const pages = { home: homeHTML, work: workHTML, ... };
//     document.getElementById('nav').innerHTML = navHTML(page);
//     const app = document.getElementById('app');
//     app.innerHTML = (pages[page] || homeHTML)();
//     window.scrollTo(0, 0);
//     document.body.scrollTop = 0;
//   }

const renderBlock = `
    // ── Lazy route registry. Each value is a () => Promise<Module>; the
    // resolved module's default export is the HTML generator. Modules are
    // cached after first load so back/forward navigation is instant.
    const pages = {
      home:      () => import('./pages/home.js'),
      work:      () => import('./pages/work.js'),
      about:     () => import('./pages/about.js'),
      contact:   () => import('./pages/contact.js'),
      rightwall: () => import('./pages/case/rightwall.js'),
      pur:       () => import('./pages/case/pur.js'),
      pathway:   () => import('./pages/case/pathway.js'),
      calmnest:  () => import('./pages/case/calmnest.js'),
      hydration: () => import('./pages/case/hydration.js'),
      genai:     () => import('./pages/case/genai.js'),
      empowered: () => import('./pages/case/empowered.js'),
      barriers:  () => import('./pages/case/barriers.js'),
      aidesign:  () => import('./pages/case/aidesign.js'),
    };
    const _modCache = new Map();
    async function loadPage(page) {
      const loader = pages[page] || pages.home;
      let mod = _modCache.get(loader);
      if (!mod) { mod = await loader(); _modCache.set(loader, mod); }
      return mod.default;
    }

    const PAGE_TITLES = {
      home:      'Aditi Deshpande - Product Designer',
      work:      'Selected Work - Aditi Deshpande',
      about:     'About - Aditi Deshpande',
      contact:   'Contact - Aditi Deshpande',
      rightwall: 'RightWall - Case Study - Aditi Deshpande',
      pur:       'PUR Water Purifier - Case Study - Aditi Deshpande',
      pathway:   'Pathway - Case Study - Aditi Deshpande',
      calmnest:  'CalmNest - Case Study - Aditi Deshpande',
      hydration: 'Hydration - Case Study - Aditi Deshpande',
      genai:     'GenAI - Case Study - Aditi Deshpande',
      empowered: 'Empowered Vote - Case Study - Aditi Deshpande',
      barriers:  'Barriers - Case Study - Aditi Deshpande',
      aidesign:  'AI Design - Case Study - Aditi Deshpande',
    };

    let _renderToken = 0;
    async function render(page) {
      const token = ++_renderToken;
      const navEl = document.getElementById('nav');
      const app = document.getElementById('app');
      navEl.innerHTML = navHTML(page);
      const generate = await loadPage(page);
      if (token !== _renderToken) return; // a newer navigation superseded us
      app.innerHTML = generate();
      document.title = PAGE_TITLES[page] || PAGE_TITLES.home;
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    }
`;

text = text.replace(
  /\n\s*function render\(page\) \{[\s\S]*?\n\s*\}\n/,
  renderBlock + '\n'
);

// Step 5: at the top of app.js, import shared helpers + add `_lastWorkCat`
// onto window so csNextHTML (in shared.js) can see it without a circular
// dependency. Also expose router callbacks on window so inline onclick="..."
// handlers in generated HTML resolve them.

text = text.replace(
  /^'use strict';\n/,
  `'use strict';
import { navHTML } from './pages/shared.js';

`
);

// Replace the original `const CS_PAGES = ...` with nothing (now imported).
// Already removed above as part of shared extraction; just ensure router code
// still references CS_PAGES (it does).

// Make `_lastWorkCat` live on window so shared.js's csNextHTML can read it.
// Two-step: first rename naked `_lastWorkCat` to `window._lastWorkCat`, then
// drop the now-redundant `let` declaration. Order matters to avoid the
// double-prefix `window.window._lastWorkCat` bug.
text = text.replace(/(?<!\.)\b_lastWorkCat\b/g, 'window._lastWorkCat');
text = text.replace(
  /\n\s*let window\._lastWorkCat = 'featured';\n/,
  `\n    window._lastWorkCat = 'featured';\n`
);

// Expose inline-handler callbacks on window so HTML strings can invoke them.
// goTo, openProject, goToWork, scrollToFooter, toggleTheme are still defined
// as function declarations in module scope — append assignments after the
// definitions block. We put them right before the boot call.
text = text.replace(
  /\n\s*\/\/ ── Boot\n\s*render\(currentRoute\(\)\);\s*\n?$/m,
  `
    // Expose callbacks referenced by inline onclick="..." handlers in the
    // generated HTML. (Module-mode declarations don't auto-attach to window.)
    Object.assign(window, { goTo, openProject, goToWork, scrollToFooter, toggleTheme });

    // ── Boot
    render(currentRoute());
`
);

await fs.writeFile(APP, text, 'utf8');

console.log(`\napp.js: ${(text.length / 1024).toFixed(2)} KB`);
console.log('Done.');
