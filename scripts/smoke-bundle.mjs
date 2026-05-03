// Loads bundle.js into a stubbed DOM and runs it the way a browser would,
// catching any top-level ReferenceErrors / TypeErrors that wouldn't show up
// in a static syntax check. We then drive it through every route via the
// hashchange event and verify each render produces non-empty HTML.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');
const BUNDLE = path.join(ROOT, 'bundle.js');

const src = await fs.readFile(BUNDLE, 'utf8');

// ── Minimal DOM stub ───────────────────────────────────────────────────
function makeEl(tag = 'div') {
  return {
    tagName: tag.toUpperCase(),
    style: {},
    classList: { add(){}, remove(){}, toggle(){}, contains(){ return false; } },
    addEventListener() {},
    removeEventListener() {},
    set innerHTML(v) { this._html = v; },
    get innerHTML() { return this._html || ''; },
    set textContent(v) { this._text = v; },
    get textContent() { return this._text || ''; },
    querySelectorAll() { return []; },
    closest() { return null; },
    scrollIntoView() {},
    appendChild() {},
  };
}

const elements = {
  cdot: makeEl('div'),
  cring: makeEl('div'),
  nav: makeEl('div'),
  app: makeEl('div'),
  toast: makeEl('div'),
};

const doc = {
  documentElement: { classList: { add(){}, remove(){}, contains(){ return false; }, toggle(){} } },
  body: {
    classList: { add(){}, remove(){}, toggle(){}, contains(){ return false; } },
    scrollTop: 0,
  },
  getElementById(id) { return elements[id] || makeEl('div'); },
  querySelectorAll() { return []; },
  addEventListener() {},
};

const _listeners = new Map();
const win = {
  document: doc,
  location: { hash: '' },
  scrollY: 0,
  scrollTo() {},
  open() {},
  addEventListener(name, fn) {
    if (!_listeners.has(name)) _listeners.set(name, []);
    _listeners.get(name).push(fn);
  },
  removeEventListener() {},
  matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
  requestAnimationFrame: (fn) => 0,
  setTimeout: () => 0,
  clearTimeout: () => 0,
  localStorage: { getItem: () => null, setItem: () => {} },
  getComputedStyle: () => ({ backgroundColor: '' }),
};
win.window = win;

const ctx = {
  ...win,
  document: doc,
  console,
};
vm.createContext(ctx);
vm.runInContext(src, ctx, { filename: 'bundle.js' });

const ROUTES = ['home','work','about','contact','rightwall','pur','pathway','calmnest','hydration','genai','empowered','barriers','aidesign'];

let failed = 0;
for (const route of ROUTES) {
  ctx.location.hash = route === 'home' ? '' : `#${route}`;
  try {
    ctx.render(route);
    const html = elements.app.innerHTML;
    if (typeof html !== 'string' || html.length < 50) throw new Error(`short output (${html.length})`);
    console.log(`  OK   ${route.padEnd(10)} ${html.length.toLocaleString()} chars`);
  } catch (err) {
    console.error(`  FAIL ${route.padEnd(10)} ${err.message}`);
    failed++;
  }
}

if (failed) {
  console.error(`\n${failed} route(s) failed`);
  process.exit(1);
}
console.log('\nbundle.js boots cleanly and renders every route.');
