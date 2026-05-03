// Scans every generated HTML/JS file for inline handler references
// (onclick="fnName(...)", etc.) and verifies each function name is either:
//   - assigned onto `window` somewhere in app.js, OR
//   - exported / declared in shared.js, OR
//   - a built-in like window.open
//
// This catches the common SPA bug where you move JS into modules and forget
// that inline event handlers don't see module-scope declarations.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');

async function walk(dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...await walk(p));
    else out.push(p);
  }
  return out;
}

const files = [
  path.join(ROOT, 'index.html'),
  path.join(ROOT, 'app.js'),
  ...(await walk(path.join(ROOT, 'pages'))),
];
try {
  await fs.access(path.join(ROOT, 'bundle.js'));
  files.push(path.join(ROOT, 'bundle.js'));
} catch {}

const HANDLER_RE = /\bon[a-z]+\s*=\s*"([^"]*)"/g;
const CALL_RE = /\b([a-zA-Z_$][\w$]*)\s*\(/g;

const handlerCalls = new Map(); // fn -> [files where used]
for (const f of files) {
  const text = await fs.readFile(f, 'utf8');
  let m;
  while ((m = HANDLER_RE.exec(text))) {
    const expr = m[1];
    let cm;
    CALL_RE.lastIndex = 0;
    while ((cm = CALL_RE.exec(expr))) {
      const fn = cm[1];
      if (['if','for','while','switch','return','this','true','false','null','undefined','new'].includes(fn)) continue;
      if (!handlerCalls.has(fn)) handlerCalls.set(fn, new Set());
      handlerCalls.get(fn).add(path.relative(ROOT, f));
    }
  }
}

// Discover what's available globally.
const appJs = await fs.readFile(path.join(ROOT, 'app.js'), 'utf8');
const sharedJs = await fs.readFile(path.join(ROOT, 'pages', 'shared.js'), 'utf8');

const globalNames = new Set(['window', 'document', 'console', 'localStorage', 'matchMedia', 'requestAnimationFrame', 'setTimeout', 'setInterval', 'parseInt', 'parseFloat', 'Math', 'Number', 'String', 'Array', 'Object', 'JSON', 'open', 'close', 'alert']);

// Scan for `window.X = ` and `Object.assign(window, { ... })` patterns.
for (const m of appJs.matchAll(/window\.([A-Za-z_$][\w$]*)\s*=/g)) globalNames.add(m[1]);
for (const m of appJs.matchAll(/Object\.assign\(\s*window\s*,\s*\{([^}]*)\}\s*\)/g)) {
  for (const n of m[1].split(',')) {
    const t = n.trim().split(':')[0].trim();
    if (t) globalNames.add(t);
  }
}

// Inline functions still declared in app.js are also visible globally because
// they live in the same module that runs Object.assign(window, ...) — but
// inline onclick handlers can only see them if they were attached. So we only
// count them if they're explicitly attached.

console.log(`Found ${handlerCalls.size} unique inline-handler function names:`);
const unresolved = [];
for (const [fn, files] of [...handlerCalls.entries()].sort()) {
  const ok = globalNames.has(fn);
  console.log(`  ${ok ? 'OK ' : 'MISS'}  ${fn}  (used in ${[...files].join(', ')})`);
  if (!ok) unresolved.push(fn);
}

if (unresolved.length) {
  console.log(`\n${unresolved.length} handler(s) not resolvable from window:`);
  for (const fn of unresolved) console.log(`  - ${fn}`);
  process.exit(1);
}
console.log('\nAll inline handlers resolve via window.');
