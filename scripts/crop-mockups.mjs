import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import { rename } from 'fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const featuredDir = path.join(__dirname, '..', 'assets', 'img', 'featured');
const assetsDir =
  'C:/Users/deshp/.cursor/projects/c-Users-deshp-Downloads-Portfolio-Aditi/assets';

// Visual panel aspect ratio 36:26
const OUT_W = 1080;
const OUT_H = 780;

const crops = [
  {
    src: `${assetsDir}/c__Users_deshp_AppData_Roaming_Cursor_User_workspaceStorage_01f1335ab6263fe4941bc494717d80f3_images_Free_K_Mockups_iPhone_15_Pro-2733a3fa-a65e-4221-a068-4936eed6545e.png`,
    out: 'rightwall-mockup.png',
    extract: { left: 72, top: 36, width: 880, height: 636 },
  },
  {
    src: `${assetsDir}/c__Users_deshp_AppData_Roaming_Cursor_User_workspaceStorage_01f1335ab6263fe4941bc494717d80f3_images_Free_Front_View_MacBook_16_Pro_Mockup-ee14119d-57a1-4054-b993-30a473527260.png`,
    out: 'empoweredvault-mockup.png',
    extract: { left: 88, top: 12, width: 848, height: 612 },
  },
  {
    src: path.join(featuredDir, 'water-purifier-mockup.png'),
    out: 'water-purifier-mockup.png',
    extract: { left: 96, top: 28, width: 832, height: 600 },
  },
];

for (const { src, out, extract } of crops) {
  const outPath = path.join(featuredDir, out);
  const tmp = path.join(featuredDir, `${out}.tmp`);

  await sharp(src)
    .extract(extract)
    .resize(OUT_W, OUT_H, { fit: 'fill' })
    .png({ compressionLevel: 9 })
    .toFile(tmp);

  await rename(tmp, outPath);
  const meta = await sharp(outPath).metadata();
  console.log(`${out}: ${extract.width}x${extract.height} -> ${meta.width}x${meta.height}`);
}
