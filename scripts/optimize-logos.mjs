import { rename, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const workspaceRoot = new URL("../", import.meta.url);
const publicDir = new URL("./public/", workspaceRoot);

const targets = [
  {
    in: new URL("./softwared_logo.png", publicDir),
    maxWidth: 1600,
  },
  {
    in: new URL("./softwared_logo_darkmode.png", publicDir),
    maxWidth: 1600,
  },
];

async function optimizePng(fileUrl, maxWidth) {
  const inPath = fileURLToPath(fileUrl);
  const outPath = `${inPath}.tmp`;

  if (!existsSync(inPath)) {
    throw new Error(`Missing file: ${inPath}`);
  }

  const before = await stat(inPath);

  const pipeline = sharp(inPath, { failOn: "none" }).resize({
    width: maxWidth,
    withoutEnlargement: true,
  });

  // Use palette-based PNG when possible (huge for logos), keep alpha.
  const buffer = await pipeline.png({
    compressionLevel: 9,
    adaptiveFiltering: true,
    palette: true,
    quality: 80,
  }).toBuffer();

  await writeFile(outPath, buffer);
  await rename(outPath, inPath);

  const after = await stat(inPath);
  return {
    file: path.basename(inPath),
    beforeBytes: before.size,
    afterBytes: after.size,
  };
}

const results = [];
for (const t of targets) {
  // eslint-disable-next-line no-await-in-loop
  results.push(await optimizePng(t.in, t.maxWidth));
}

for (const r of results) {
  const pct = r.beforeBytes ? Math.round((1 - r.afterBytes / r.beforeBytes) * 100) : 0;
  console.log(`${r.file}: ${r.beforeBytes} -> ${r.afterBytes} bytes (${pct}% smaller)`);
}
