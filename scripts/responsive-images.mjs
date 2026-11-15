// Serves phones a resized photo instead of the full 1600px original.
//
//   node scripts/responsive-images.mjs
//
// For every local .jpg <img> wider than 900px it:
//  - creates name-800.jpg and name-1200.jpg next to the original (macOS
//    `sips`, only when missing, and only kept when at least 30% smaller;
//    elsewhere, images without variants are skipped);
//  - adds srcset/sizes to the <img>, so screens under 900px wide pick a
//    resized JPEG;
//  - limits any WebP <source> in the same <picture> to screens 900px and
//    wider, so desktops keep the WebP as before.
// Safe to re-run. Runs in build-all.mjs after fix-image-sizes.mjs.
import { readFileSync, writeFileSync, existsSync, statSync, rmSync } from "fs";
import { execFileSync } from "child_process";
import { htmlFiles } from "./sync-layout.mjs";

const WIDTHS = [800, 1200];
const MIN_WIDTH = 900;
const SIZES = "(max-width: 899px) 100vw, 50vw";
const SKIP = /\/assets\/img\/(og|icons)\/|logo/;

let hasSips = true;
try {
  execFileSync("which", ["sips"], { stdio: "ignore" });
} catch {
  hasSips = false;
}

const variant = (src, w) => src.replace(/\.jpe?g$/i, `-${w}.jpg`);

// A variant is only kept if it is at least 30% smaller than the original
// (some originals are already well compressed, and resizing gains nothing).
const MAX_RATIO = 0.7;
const QUALITY = "60";

function ensureVariants(src, width) {
  const out = [];
  const original = statSync(`.${src}`).size;
  for (const w of WIDTHS) {
    if (w >= width) continue;
    const v = variant(src, w);
    const file = `.${v}`;
    if (!existsSync(file)) {
      if (!hasSips) continue;
      execFileSync("sips", ["--resampleWidth", String(w), "-s", "format", "jpeg", "-s", "formatOptions", QUALITY, `.${src}`, "--out", file], { stdio: "ignore" });
      if (statSync(file).size > original * MAX_RATIO) {
        rmSync(file);
        continue;
      }
    }
    out.push(`${v} ${w}w`);
  }
  return out.length ? out : null;
}

let pages = 0;
let images = 0;
for (const f of htmlFiles(".")) {
  const before = readFileSync(f, "utf8");
  let html = before.replace(/<img\b[^>]*>/g, (tag) => {
    if (/\bsrcset=/.test(tag)) return tag;
    const src = (tag.match(/\bsrc="([^"]+)"/) || [])[1];
    const width = Number((tag.match(/\bwidth="(\d+)"/) || [])[1]);
    if (!src || !src.startsWith("/assets/img/") || !/\.jpe?g$/i.test(src) || SKIP.test(src)) return tag;
    if (!width || width <= MIN_WIDTH || !existsSync(`.${src}`)) return tag;
    const set = ensureVariants(src, width);
    if (!set) return tag;
    images++;
    return tag.replace(/\bsrc="[^"]+"/, (m) => `${m} srcset="${[...set, `${src} ${width}w`].join(", ")}" sizes="${SIZES}"`);
  });
  // Keep WebP sources for desktop only, where an <img> now has a srcset.
  html = html.replace(/<picture>[\s\S]*?<\/picture>/g, (pic) =>
    /<img\b[^>]*\bsrcset=/.test(pic)
      ? pic.replace(/<source (?![^>]*\bmedia=)([^>]*type="image\/webp"[^>]*)>/g, `<source media="(min-width: ${MIN_WIDTH}px)" $1>`)
      : pic
  );
  if (html !== before) {
    writeFileSync(f, html);
    pages++;
  }
}
console.log(`responsive images: ${images} images on ${pages} pages`);
