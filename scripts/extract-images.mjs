// Extracts every base64-embedded image in hero.html, optimizes it via sharp,
// writes files to assets/img/<bucket>/, and emits scripts/image-map.json.
//
// Usage:  node scripts/extract-images.mjs
//
// The script reads hero.html, finds every <img src="data:image/...;base64,...">
// tag, decodes the bytes, infers a "bucket" (subfolder + slug) from the
// surrounding markup, deduplicates by content hash, and produces:
//
//   assets/img/<bucket>/<slug>-<hash>-<width>.webp     (1600 + 800 widths)
//   assets/img/<bucket>/<slug>-<hash>.jpg              (fallback)
//   scripts/image-map.json                             (for the rewriter)
//
// scripts/image-map.json is an array of records, one per <img> occurrence:
//   {
//     "occurrence": 0,
//     "matchStart": 12345,
//     "matchEnd": 67890,
//     "originalTag": "<img src=\"data:image/jpeg;base64,...\">",
//     "hash": "ab12cd34",
//     "bucket": "case/empowered",
//     "basename": "empowered-ab12cd34",
//     "width": 1600,
//     "height": 900,
//     "src": "/assets/img/case/empowered/empowered-ab12cd34-1600.webp",
//     "srcset": "/assets/img/case/empowered/empowered-ab12cd34-800.webp 800w, /assets/img/case/empowered/empowered-ab12cd34-1600.webp 1600w",
//     "fallback": "/assets/img/case/empowered/empowered-ab12cd34.jpg"
//   }

import { promises as fs } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const HERO = path.join(ROOT, 'hero.html');
const ASSETS = path.join(ROOT, 'assets', 'img');
const MAP_OUT = path.join(__dirname, 'image-map.json');

// ── Route function ranges ───────────────────────────────────────────────
// Each entry: [bucket, slug]. bucket is the subfolder under assets/img/.
// The script finds the byte offset of every "function <name>HTML()" line and
// uses these ranges to decide which bucket a given <img> falls into.
const ROUTE_BUCKETS = [
  // [function name, bucket subfolder, slug]
  ['homeHTML',      'work',           'home'],
  ['workHTML',      'work',           'work'],
  ['aboutHTML',     'about',          'about'],
  ['rightwallHTML', 'case/rightwall', 'rightwall'],
  ['purHTML',       'case/pur',       'pur'],
  ['pathwayHTML',   'case/pathway',   'pathway'],
  ['calmnestHTML',  'case/calmnest',  'calmnest'],
  ['hydrationHTML', 'case/hydration', 'hydration'],
  ['genaiHTML',     'case/genai',     'genai'],
  ['empoweredHTML', 'case/empowered', 'empowered'],
  ['barriersHTML',  'case/barriers',  'barriers'],
  ['aidesignHTML',  'case/aidesign',  'aidesign'],
  ['contactHTML',   'about',          'contact'],
];

const TAG_RE = /<img\b[^>]*\bsrc="data:image\/(jpe?g|png|webp|gif);base64,([^"]+)"[^>]*>/g;

function buildRouteRanges(html) {
  const ranges = [];
  for (const [fn, bucket, slug] of ROUTE_BUCKETS) {
    const re = new RegExp(`function\\s+${fn}\\s*\\(`, 'g');
    let m;
    while ((m = re.exec(html))) {
      ranges.push({ start: m.index, fn, bucket, slug });
    }
  }
  ranges.sort((a, b) => a.start - b.start);
  // Each range ends where the next one begins (or end-of-file).
  for (let i = 0; i < ranges.length; i++) {
    ranges[i].end = (i + 1 < ranges.length) ? ranges[i + 1].start : html.length;
  }
  return ranges;
}

function bucketFor(offset, ranges) {
  for (const r of ranges) {
    if (offset >= r.start && offset < r.end) return r;
  }
  return { bucket: 'misc', slug: 'misc' };
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function main() {
  console.log('Reading hero.html...');
  const html = await fs.readFile(HERO, 'utf8');
  console.log(`  ${html.length.toLocaleString()} chars`);

  const ranges = buildRouteRanges(html);
  console.log(`Detected ${ranges.length} route function ranges`);

  // ── Pass 1: find every match, decode, write files ──
  const map = [];
  const dedupe = new Map(); // hash -> first record (so we share files across <img>s)
  let occurrence = 0;
  let totalIn = 0;
  let totalOut = 0;

  TAG_RE.lastIndex = 0;
  let m;
  while ((m = TAG_RE.exec(html))) {
    const fullTag = m[0];
    const ext = m[1].toLowerCase().replace('jpg', 'jpeg');
    const b64 = m[2];
    const matchStart = m.index;
    const matchEnd = m.index + fullTag.length;

    const buf = Buffer.from(b64, 'base64');
    const hash = crypto.createHash('sha1').update(buf).digest('hex').slice(0, 8);
    const route = bucketFor(matchStart, ranges);
    const bucket = route.bucket;
    const slug = route.slug;
    const basename = `${slug}-${hash}`;

    totalIn += buf.length;

    let record = dedupe.get(hash);
    if (!record) {
      const outDir = path.join(ASSETS, ...bucket.split('/'));
      await ensureDir(outDir);

      // Probe original dimensions (works for jpeg/png/webp/gif).
      const meta = await sharp(buf).metadata();
      const origW = meta.width || 1600;
      const origH = meta.height || 900;

      // Two responsive widths. Suffix is the actual rendered width, so
      // file name and <img src> always agree.
      const largeWidth = Math.min(1600, origW);
      const smallWidth = Math.min(800, origW);
      const outLargePath = path.join(outDir, `${basename}-${largeWidth}.webp`);
      const outSmallPath = path.join(outDir, `${basename}-${smallWidth}.webp`);
      const outFallback = path.join(outDir, `${basename}.jpg`);

      const large = await sharp(buf)
        .rotate()
        .resize({ width: largeWidth, withoutEnlargement: true })
        .webp({ quality: 78, effort: 5 })
        .toBuffer();
      await fs.writeFile(outLargePath, large);
      totalOut += large.length;

      let small = large;
      if (smallWidth !== largeWidth) {
        small = await sharp(buf)
          .rotate()
          .resize({ width: smallWidth, withoutEnlargement: true })
          .webp({ quality: 75, effort: 5 })
          .toBuffer();
        await fs.writeFile(outSmallPath, small);
        totalOut += small.length;
      }

      const fallback = await sharp(buf)
        .rotate()
        .resize({ width: largeWidth, withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toBuffer();
      await fs.writeFile(outFallback, fallback);
      totalOut += fallback.length;

      const largeMeta = await sharp(large).metadata();

      const srcset = (smallWidth === largeWidth)
        ? `/assets/img/${bucket}/${basename}-${largeWidth}.webp ${largeWidth}w`
        : `/assets/img/${bucket}/${basename}-${smallWidth}.webp ${smallWidth}w, /assets/img/${bucket}/${basename}-${largeWidth}.webp ${largeWidth}w`;

      record = {
        hash,
        bucket,
        basename,
        srcExt: ext,
        width: largeMeta.width,
        height: largeMeta.height,
        src: `/assets/img/${bucket}/${basename}-${largeWidth}.webp`,
        srcset,
        fallback: `/assets/img/${bucket}/${basename}.jpg`,
      };
      dedupe.set(hash, record);
      console.log(`  [${occurrence.toString().padStart(2,'0')}] ${bucket}/${basename} ${origW}x${origH} -> ${(buf.length/1024).toFixed(0)} KB in, ${((large.length+small.length+fallback.length)/1024).toFixed(0)} KB out`);
    } else {
      console.log(`  [${occurrence.toString().padStart(2,'0')}] dedup -> ${record.bucket}/${record.basename}`);
    }

    map.push({
      occurrence,
      matchStart,
      matchEnd,
      originalTag: fullTag.length > 200 ? fullTag.slice(0, 100) + '...' + fullTag.slice(-50) : fullTag,
      hash: record.hash,
      bucket: record.bucket,
      basename: record.basename,
      width: record.width,
      height: record.height,
      src: record.src,
      srcset: record.srcset,
      fallback: record.fallback,
    });
    occurrence++;
  }

  await fs.writeFile(MAP_OUT, JSON.stringify(map, null, 2));

  console.log('\n── Summary ─────────────────────────────────────────────');
  console.log(`Occurrences:     ${map.length}`);
  console.log(`Unique images:   ${dedupe.size}`);
  console.log(`Bytes in:        ${(totalIn  / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Bytes out:       ${(totalOut / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Reduction:       ${(100 - (totalOut / totalIn) * 100).toFixed(1)}%`);
  console.log(`Map written to:  ${path.relative(ROOT, MAP_OUT)}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
