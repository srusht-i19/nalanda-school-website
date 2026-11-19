import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const [src, out] = process.argv.slice(2);
if (!src || !out) {
  console.log(
    "Usage: node scripts/optimize-folder.mjs <input-folder> <output-folder>",
  );
  process.exit(1);
}

await mkdir(out, { recursive: true });
const names = (await readdir(src))
  .filter((n) => /\.(jpe?g|png)$/i.test(n))
  .sort();

for (const name of names) {
  const outName =
    path
      .parse(name)
      .name.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") + ".webp";
  await sharp(path.join(src, name))
    .rotate()
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(path.join(out, outName));
  console.log("Saved", outName);
}
