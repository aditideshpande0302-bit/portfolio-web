// Reads hero.html + scripts/image-map.json, replaces every base64 <img> with a
// real <picture>/<img> referencing files under /assets/img/, and writes the
// result to hero.rewritten.html (intermediate file that downstream scripts
// or manual edits split into index.html / styles.css / app.js).
//
// Usage:  node scripts/rewrite-html.mjs

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const HERO = path.join(ROOT, 'hero.html');
const OUT = path.join(ROOT, 'hero.rewritten.html');
const MAP = path.join(__dirname, 'image-map.json');

const TAG_RE = /<img\b([^>]*)\bsrc="data:image\/(?:jpe?g|png|webp|gif);base64,[^"]+"([^>]*)>/g;

// Occurrences to render eagerly (above-the-fold). Index 0 is the first
// project thumbnail on the home page and is the most likely LCP candidate.
const EAGER = new Set([0]);

function parseAttrs(s) {
  // Crude attribute parser, sufficient for the well-formed inline HTML in
  // this codebase. Extracts attr="value" or attr='value' and bare attrs.
  const out = {};
  const re = /([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"|([a-zA-Z_:][\w:.-]*)\s*=\s*'([^']*)'|([a-zA-Z_:][\w:.-]*)/g;
  let m;
  while ((m = re.exec(s))) {
    if (m[1]) out[m[1].toLowerCase()] = m[2];
    else if (m[3]) out[m[3].toLowerCase()] = m[4];
    else if (m[5]) out[m[5].toLowerCase()] = '';
  }
  return out;
}

function buildTag(attrs, record, occurrence) {
  const eager = EAGER.has(occurrence);
  const out = {
    src: record.src,
    srcset: record.srcset,
    sizes: attrs.sizes || '(max-width: 768px) 100vw, 900px',
    width: String(record.width),
    height: String(record.height),
    alt: attrs.alt != null ? attrs.alt : '',
    decoding: 'async',
  };
  if (eager) {
    out.fetchpriority = 'high';
  } else {
    out.loading = 'lazy';
  }
  // Preserve any pass-through attrs that aren't about the image source.
  const passthrough = ['class', 'id', 'style', 'title', 'role', 'aria-label', 'aria-hidden', 'draggable'];
  for (const k of passthrough) {
    if (attrs[k] != null) out[k] = attrs[k];
  }

  const parts = ['<img'];
  // Stable attribute order for diffability.
  const order = ['class', 'id', 'src', 'srcset', 'sizes', 'alt', 'width', 'height', 'loading', 'fetchpriority', 'decoding', 'style', 'title', 'role', 'aria-label', 'aria-hidden', 'draggable'];
  for (const k of order) {
    if (out[k] == null) continue;
    parts.push(`${k}="${String(out[k]).replace(/"/g, '&quot;')}"`);
  }
  parts.push('/>');
  return parts.join(' ');
}

async function main() {
  console.log('Reading inputs...');
  const html = await fs.readFile(HERO, 'utf8');
  const map = JSON.parse(await fs.readFile(MAP, 'utf8'));
  console.log(`  hero.html: ${html.length.toLocaleString()} chars`);
  console.log(`  image-map: ${map.length} occurrences`);

  // Walk through the HTML in order, matching the same regex to make sure
  // occurrence indexing aligns with what extract-images.mjs produced.
  let occurrence = 0;
  TAG_RE.lastIndex = 0;
  const out = [];
  let cursor = 0;
  let m;
  while ((m = TAG_RE.exec(html))) {
    out.push(html.slice(cursor, m.index));
    const record = map[occurrence];
    if (!record) throw new Error(`No map record for occurrence ${occurrence} at offset ${m.index}`);
    const attrs = parseAttrs((m[1] || '') + ' ' + (m[2] || ''));
    delete attrs.src; // we set the new one
    out.push(buildTag(attrs, record, occurrence));
    cursor = m.index + m[0].length;
    occurrence++;
  }
  out.push(html.slice(cursor));
  const result = out.join('');

  await fs.writeFile(OUT, result, 'utf8');

  console.log(`\nWritten: ${path.relative(ROOT, OUT)}`);
  console.log(`  before: ${(html.length / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  after:  ${(result.length / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  saved:  ${((1 - result.length / html.length) * 100).toFixed(1)}%`);
  console.log(`  replacements: ${occurrence}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
