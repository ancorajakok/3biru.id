import fs from "fs";
import path from "path";
import sharp from "sharp";

const files = [
  { svg: "public/profile-3biru-navy.svg", png: "public/profile-3biru-navy.png" },
  { svg: "public/profile-3biru-icon.svg", png: "public/profile-3biru-icon.png" },
  { svg: "public/profile-3biru-white.svg", png: "public/profile-3biru-white.png" },
];

async function run() {
  for (const item of files) {
    const svgPath = path.resolve(item.svg);
    const pngPath = path.resolve(item.png);
    const svgBuffer = fs.readFileSync(svgPath);

    await sharp(svgBuffer, { density: 300 })
      .resize(1080, 1080)
      .png({ quality: 100 })
      .toFile(pngPath);

    console.log(`Generated: ${item.png} (1080x1080 HD)`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
