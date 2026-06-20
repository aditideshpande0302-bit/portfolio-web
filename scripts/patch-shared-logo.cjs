const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const svg = fs
  .readFileSync(path.join(ROOT, 'assets', 'logo-ad.svg'), 'utf8')
  .replace(/>\s+</g, '><')
  .replace(/\s+/g, ' ')
  .trim();
const sharedPath = path.join(ROOT, 'pages', 'shared.js');
let shared = fs.readFileSync(sharedPath, 'utf8');
const re = /\? `[\s\S]*?logo-ad[\s\S]*?<\/button>`/;
const rep = `? \`<button class="logo logo-ad" onclick="goTo('home')">${svg}<span class="logo-ad-sr">Ad</span></button>\``;
if (!re.test(shared)) {
  console.error('Logo pattern not found in shared.js');
  process.exit(1);
}
shared = shared.replace(re, rep);
fs.writeFileSync(sharedPath, shared);
console.log('Updated', sharedPath);
