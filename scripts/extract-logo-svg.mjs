import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import https from 'node:https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

async function download(url, dest) {
  if (fs.existsSync(dest)) return dest;
  await fs.promises.mkdir(path.dirname(dest), { recursive: true });
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        fs.writeFileSync(dest, Buffer.concat(chunks));
        resolve(dest);
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function loadOpentype() {
  const require = createRequire(import.meta.url);
  try {
    return require('opentype.js');
  } catch {
    const lib = path.join(ROOT, 'scripts', '.cache', 'opentype.min.js');
    await download(
      'https://cdn.jsdelivr.net/npm/opentype.js@1.3.4/dist/opentype.min.js',
      lib
    );
    return require(lib);
  }
}

function pathToD(p) {
  if (!p) return '';
  return p.toPathData(2);
}

async function main() {
  const mod = await loadOpentype();
  const opentype = mod.default || mod;
  const fontPath = path.join(ROOT, 'assets', 'fonts', 'moderline.otf');
  const font = opentype.loadSync(fontPath);
  const size = 80;
  const x = 0;
  const y = 80;
  const pathA = font.getPath('A', x, y, size);
  const advA = font.getAdvanceWidth('A', size);
  const pathD = font.getPath('d', x + advA * 0.85, y, size);
  const bboxA = pathA.getBoundingBox();
  const bboxD = pathD.getBoundingBox();
  const pad = 6;
  const minX = Math.min(bboxA.x1, bboxD.x1) - pad;
  const minY = Math.min(bboxA.y1, bboxD.y1) - pad;
  const maxX = Math.max(bboxA.x2, bboxD.x2) + pad;
  const maxY = Math.max(bboxA.y2, bboxD.y2) + pad;

  const out = {
    viewBox: `${minX} ${minY} ${maxX - minX} ${maxY - minY}`,
    fillA: pathToD(pathA),
    fillD: pathToD(pathD),
    commandsA: pathA.commands,
    commandsD: pathD.commands,
  };

  fs.writeFileSync(path.join(ROOT, 'scripts', '.cache', 'logo-paths.json'), JSON.stringify(out, null, 2));
  console.log('Wrote logo-paths.json');
  console.log('viewBox:', out.viewBox);
  console.log('fillA length:', out.fillA.length);
  console.log('fillD length:', out.fillD.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
