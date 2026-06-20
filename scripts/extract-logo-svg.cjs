const fs = require('node:fs');
const path = require('node:path');
const https = require('node:https');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');

function download(url, dest) {
  if (fs.existsSync(dest)) return Promise.resolve(dest);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
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

async function main() {
  const lib = path.join(ROOT, 'scripts', '.cache', 'opentype.min.js');
  await download('https://cdn.jsdelivr.net/npm/opentype.js@1.3.4/dist/opentype.min.js', lib);
  const code = fs.readFileSync(lib, 'utf8').replace(/\/\/# sourceMappingURL=[^\n]*/g, '');
  const sandbox = {};
  sandbox.self = sandbox;
  vm.runInNewContext(`(function () { ${code} }).call(sandbox);`, {
    sandbox,
    require,
    Buffer,
    Uint8Array,
    ArrayBuffer,
  });
  const opentype = sandbox.self.opentype;
  if (!opentype || !opentype.loadSync) throw new Error('Failed to load opentype.js');
  const font = opentype.loadSync(path.join(ROOT, 'assets', 'fonts', 'moderline.otf'));
  const size = 80;
  const y = 80;
  const pathA = font.getPath('A', 0, y, size);
  const advA = font.getAdvanceWidth('A', size);
  const pathD = font.getPath('d', advA * 0.82, y, size);
  const boxes = [pathA.getBoundingBox(), pathD.getBoundingBox()];
  const pad = 6;
  const minX = Math.min(...boxes.map((b) => b.x1)) - pad;
  const minY = Math.min(...boxes.map((b) => b.y1)) - pad;
  const maxX = Math.max(...boxes.map((b) => b.x2)) + pad;
  const maxY = Math.max(...boxes.map((b) => b.y2)) + pad;

  const out = {
    viewBox: [minX, minY, maxX - minX, maxY - minY],
    fillA: pathA.toPathData(2),
    fillD: pathD.toPathData(2),
    commandsA: pathA.commands,
    commandsD: pathD.commands,
  };

  const cache = path.join(ROOT, 'scripts', '.cache');
  fs.mkdirSync(cache, { recursive: true });
  fs.writeFileSync(path.join(cache, 'logo-paths.json'), JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
