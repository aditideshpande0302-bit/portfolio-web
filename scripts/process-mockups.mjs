import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'assets', 'img', 'work');

const items = [
  { src: path.join(outDir, 'pathway-mockup-src.png'), base: 'pathway-mockup' },
  { src: path.join(outDir, 'calmnest-mockup-src.png'), base: 'calmnest-mockup' },
];

for (const { src, base } of items) {
  const img1600 = path.join(outDir, `${base}-1600.webp`);
  const img800 = path.join(outDir, `${base}-800.webp`);
  await sharp(src)
    .resize(1600, null, { withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(img1600);
  const meta = await sharp(img1600).metadata();
  await sharp(img1600).resize(800, null).webp({ quality: 82 }).toFile(img800);
  console.log(`${base}: ${meta.width}x${meta.height}`);
}
