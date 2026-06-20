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

function splitSubpaths(pathData) {
  return pathData
    .split(/(?=M)/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function pathBBox(d) {
  const nums = d.match(/-?\d+\.?\d*/g).map(Number);
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (let i = 0; i < nums.length; i += 2) {
    const x = nums[i];
    const y = nums[i + 1];
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }
  const w = maxX - minX;
  const h = maxY - minY;
  return {
    minX,
    minY,
    maxX,
    maxY,
    area: w * h,
    cx: (minX + maxX) / 2,
    cy: (minY + maxY) / 2,
    h,
  };
}

/** Drop inner counter contours — keep outer pen strokes only. */
function selectStrokePaths(parts) {
  const boxes = parts.map((d) => ({ d, ...pathBBox(d) }));
  return boxes
    .filter(
      (a) =>
        !boxes.some(
          (b) =>
            b !== a &&
            b.area > a.area * 1.35 &&
            a.cx >= b.minX &&
            a.cx <= b.maxX &&
            a.cy >= b.minY &&
            a.cy <= b.maxY
        )
    )
    .sort((a, b) => a.cx - b.cx)
    .map((b) => b.d);
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
  const font = opentype.loadSync(path.join(ROOT, 'assets', 'fonts', 'moderline.otf'));
  const size = 80;
  const y = 80;
  const pathAd = font.getPath('Ad', 0, y, size);
  const strokePaths = selectStrokePaths(splitSubpaths(pathAd.toPathData(2)));
  if (strokePaths.length < 2) {
    throw new Error(`Expected 2 stroke paths for Ad, got ${strokePaths.length}`);
  }

  const pathA = strokePaths[0];
  const pathD = strokePaths[1];
  const boxes = strokePaths.map(pathBBox);
  const pad = 6;
  const minX = Math.min(...boxes.map((b) => b.minX)) - pad;
  const minY = Math.min(...boxes.map((b) => b.minY)) - pad;
  const maxX = Math.max(...boxes.map((b) => b.maxX)) + pad;
  const maxY = Math.max(...boxes.map((b) => b.maxY)) + pad;
  const vb = `${minX} ${minY} ${maxX - minX} ${maxY - minY}`;

  const baseA = `    <path fill="none" d="${pathA}"/>`;
  const baseD = `    <path fill="none" d="${pathD}"/>`;
  const inkA = `    <path class="logo-ad-stroke-a logo-ad-stroke-a-1" fill="none" pathLength="1" d="${pathA}"/>`;
  const inkD = `    <path class="logo-ad-stroke-d" fill="none" pathLength="1" d="${pathD}"/>`;

  const svg = `<svg class="logo-ad-svg" xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" aria-hidden="true" focusable="false">
  <g class="logo-ad-base" fill="none" stroke="#ccc">
${baseA}
${baseD}
  </g>
  <g class="logo-ad-ink" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke">
${inkA}
${inkD}
  </g>
</svg>`;

  const out = path.join(ROOT, 'assets', 'logo-ad.svg');
  fs.writeFileSync(out, svg);
  fs.writeFileSync(
    path.join(ROOT, 'scripts', '.cache', 'logo-meta.json'),
    JSON.stringify({ vb, strokePaths: strokePaths.length }, null, 2)
  );
  console.log('Wrote', out, { vb, strokes: strokePaths.length });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
