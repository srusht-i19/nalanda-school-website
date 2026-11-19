import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "photos-original";
const OUT = "public/images/gallery";
// Photo numbers from the contact sheets
const keep = [1, 2, 3, 4, 5, 6, 8, 24, 25, 26, 27, 33, 35, 48];

async function listJpegs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  entries.sort((x, y) => (x.name < y.name ? -1 : x.name > y.name ? 1 : 0));
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await listJpegs(full)));
    else if (/\.jpe?g$/i.test(e.name)) files.push(full);
  }
  return files;
}

await mkdir(OUT, { recursive: true });
const files = await listJpegs(SRC);
console.log(`Found ${files.length} photos (expected 52)`);

for (const n of keep) {
  const file = files[n - 1];
  if (!file) {
    console.log(`Photo ${n} not found`);
    continue;
  }
  const name = `photo-${String(n).padStart(2, "0")}.webp`;
  await sharp(file)
    .rotate()
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(path.join(OUT, name));
  console.log("Saved", name);
}
