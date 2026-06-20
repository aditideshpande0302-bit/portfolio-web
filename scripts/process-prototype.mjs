import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'assets', 'img', 'case', 'rightwall');
const FFMPEG = process.env.FFMPEG || 'C:\\Users\\deshp\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-8.1.1-full_build\\bin\\ffmpeg.exe';

const items = [
  { id: '1Sbf5MzdgxXQ3gc2vdjzRH0NHaKizmIx7', num: '02' },
  { id: '1yFiRQe6pHcjUI2SI5xhs8-r086Sq1z7P', num: '03' },
];

function getConfirmToken(setCookie, body) {
  for (const line of setCookie) {
    if (line.startsWith('download_warning')) {
      const parts = line.split(';')[0].split('=');
      return parts.slice(1).join('=') || 't';
    }
  }
  const match = body.match(/confirm=([0-9A-Za-z_-]+)/);
  return match ? match[1] : null;
}

function isVideoBuffer(buf) {
  if (buf.length < 10000) return false;
  const head = buf.slice(0, 64).toString('utf8');
  if (head.includes('<!DOCTYPE') || head.includes('<html')) return false;
  return buf.slice(4, 8).toString() === 'ftyp' || buf.slice(0, 3).toString() === 'ID3';
}

async function downloadDriveFile(fileId, dest) {
  const base = 'https://drive.google.com/uc?export=download';
  let res = await fetch(`${base}&id=${fileId}`, { redirect: 'follow' });
  let setCookie = res.headers.getSetCookie ? res.headers.getSetCookie() : [];
  let buf = Buffer.from(await res.arrayBuffer());

  const token = getConfirmToken(setCookie, buf.toString('utf8'));
  if (token) {
    res = await fetch(`${base}&id=${fileId}&confirm=${token}`, { redirect: 'follow' });
    buf = Buffer.from(await res.arrayBuffer());
  }

  if (!isVideoBuffer(buf)) {
    res = await fetch(`https://drive.usercontent.google.com/download?id=${fileId}&export=download&confirm=t`, { redirect: 'follow' });
    buf = Buffer.from(await res.arrayBuffer());
  }

  if (!isVideoBuffer(buf)) {
    throw new Error(`Download failed for ${fileId} — file may require public link sharing`);
  }

  await fs.writeFile(dest, buf);
  return buf.length;
}

await fs.mkdir(OUT_DIR, { recursive: true });

for (const { id, num } of items) {
  const src = path.join(OUT_DIR, `rightwall-prototype-${num}-src.mp4`);
  const out = path.join(OUT_DIR, `rightwall-prototype-${num}.mp4`);
  const png = path.join(OUT_DIR, `rightwall-prototype-${num}-screen.png`);
  const webp = path.join(OUT_DIR, `rightwall-prototype-${num}-screen-800.webp`);

  console.log(`Downloading prototype ${num}...`);
  const bytes = await downloadDriveFile(id, src);
  console.log(`  downloaded ${Math.round(bytes / 1024)} KB`);

  console.log(`Compressing prototype ${num}...`);
  execFileSync(FFMPEG, [
    '-y', '-i', src,
    '-an', '-vf', 'scale=720:-2',
    '-c:v', 'libx264', '-crf', '26', '-preset', 'medium',
    '-movflags', '+faststart',
    out,
  ], { stdio: 'inherit' });

  console.log(`Extracting poster ${num}...`);
  execFileSync(FFMPEG, [
    '-y', '-ss', '00:00:02.5', '-i', out,
    '-frames:v', '1', '-update', '1',
    png,
  ], { stdio: 'inherit' });

  await sharp(png).resize(800).webp({ quality: 82 }).toFile(webp);
  await fs.unlink(src).catch(() => {});
  await fs.unlink(png).catch(() => {});

  const stat = await fs.stat(out);
  console.log(`Done ${num}: ${Math.round(stat.size / 1024)} KB\n`);
}
