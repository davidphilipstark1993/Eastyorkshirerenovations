// Sets the width/height attributes of every local <img> to the image
// file's real pixel size. Many pages declared portrait phone photos as
// 600x400 or 1200x800, which squashed them and caused layout shift.
//
//   node scripts/fix-image-sizes.mjs
//
// Safe to re-run (e.g. after a page generator runs).
import { readFileSync, writeFileSync, existsSync } from "fs";
import { htmlFiles } from "./sync-layout.mjs";

function jpegSize(buf) {
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) return null;
    const marker = buf[i + 1];
    const len = buf.readUInt16BE(i + 2);
    // SOF0-SOF15, excluding DHT (C4), JPG (C8) and DAC (CC)
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
    }
    i += 2 + len;
  }
  return null;
}

function pngSize(buf) {
  return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
}

const cache = new Map();
function sizeOf(src) {
  if (cache.has(src)) return cache.get(src);
  const path = src.replace(/^\//, "");
  let size = null;
  if (existsSync(path)) {
    const buf = readFileSync(path);
    if (buf.length > 24) size = /\.png$/i.test(path) ? pngSize(buf) : /\.jpe?g$/i.test(path) ? jpegSize(buf) : null;
  }
  cache.set(src, size);
  return size;
}

let changed = 0;
for (const f of htmlFiles(".")) {
  const html = readFileSync(f, "utf8");
  const out = html.replace(/<img\b[^>]*>/g, (tag) => {
    const src = (tag.match(/\ssrc="(\/assets\/img\/[^"]+)"/) || [])[1];
    // The shared logo is declared at its display size (same aspect ratio);
    // it is owned by scripts/lib/site.mjs, so leave it alone.
    if (src === "/assets/img/logo-eyr.jpg") return tag;
    const size = src && sizeOf(src);
    if (!size || !/\swidth="\d+"/.test(tag) || !/\sheight="\d+"/.test(tag)) return tag;
    return tag.replace(/\swidth="\d+"/, ` width="${size.w}"`).replace(/\sheight="\d+"/, ` height="${size.h}"`);
  });
  if (out !== html) {
    writeFileSync(f, out);
    changed++;
  }
}
console.log(`image sizes corrected on ${changed} pages`);
