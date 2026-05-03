// Loads each page module via dynamic import, calls its default export, and
// verifies the result looks like sensible HTML (non-empty, has expected
// landmarks). This catches runtime ReferenceErrors that node --check misses.

import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');

// Stub out the few browser globals these modules touch when they execute.
// shared.js's csNextHTML reads window._lastWorkCat; nothing else does at
// generate-time.
globalThis.window = { _lastWorkCat: 'featured' };
globalThis.document = {};
globalThis.localStorage = { getItem: () => null, setItem: () => {} };

const ROUTES = ['home','work','about','contact','rightwall','pur','pathway','calmnest','hydration','genai','empowered','barriers','aidesign'];

let failed = 0;
for (const route of ROUTES) {
  const sub = ['home','work','about','contact'].includes(route) ? '' : 'case/';
  const file = path.join(ROOT, 'pages', sub, `${route}.js`);
  try {
    const mod = await import(pathToFileURL(file).href);
    if (typeof mod.default !== 'function') throw new Error('no default export');
    const html = mod.default();
    if (typeof html !== 'string' || html.length < 50) throw new Error(`short output (${html.length})`);
    // For case studies, csNextHTML may be referenced inside; ensure the
    // generated HTML contains <div or <section landmarks.
    const hasMarkup = /<(div|section|footer|button)/.test(html);
    if (!hasMarkup) throw new Error('no markup');
    console.log(`  OK   ${route.padEnd(10)} ${html.length.toLocaleString()} chars`);
  } catch (err) {
    console.error(`  FAIL ${route.padEnd(10)} ${err.message}`);
    failed++;
  }
}

if (failed) {
  console.error(`\n${failed} module(s) failed`);
  process.exit(1);
}
console.log('\nAll route modules executed successfully.');
