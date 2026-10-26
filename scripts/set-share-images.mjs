// Share (og:image / twitter:image) tags for pages that aren't rebuilt by a
// generator that sets them itself. Real job photos only: sections with no
// real photos yet (orangeries, conservatories, garden rooms, outdoor
// kitchens, water treatment) fall back to the homepage card, so every page
// has an og:image (Ahrefs flags Open Graph tags as incomplete without one).
//
//   node scripts/set-share-images.mjs
import { readFileSync, writeFileSync, existsSync } from "fs";
import { htmlFiles } from "./sync-layout.mjs";
import { SITE } from "./lib/constants.mjs";

const DEFAULT = "/assets/img/og/index.jpg";

// [pattern, image, onlyIfMissing]
const RULES = [
  [/^garage-conversions\//, "/assets/img/og/garage-conversions.jpg"],
  [/^(brough|east-riding|kirk-ella|north-ferriby|south-cave|swanland|willerby)\.html$/, "/assets/img/og/areas.jpg"],
  // Pages with no real photos of their own: homepage card, only where the
  // page has no share image already.
  [/^(orangeries|conservatory-transformations|garden-rooms|outdoor-kitchens)\//, DEFAULT, true],
  [/^projects\/(orangeries|conservatory-transformations|garden-rooms|outdoor-kitchens)\//, DEFAULT, true],
  [/^(guides\/|privacy\.html$|water-treatment\.html$|404\.html$)/, DEFAULT, true],
];

const TAGS = /\n  <meta property="og:image"[^>]*>(?:\n  <meta property="og:image:(?:width|height)"[^>]*>)*|\n  <meta name="twitter:image"[^>]*>/g;

let changed = 0;
for (const f of htmlFiles(".")) {
  const rule = RULES.find(([re]) => re.test(f));
  if (!rule) continue;
  const [, image, onlyIfMissing] = rule;
  if (image && !existsSync(image.slice(1))) throw new Error(`missing ${image}`);
  let html = readFileSync(f, "utf8");
  if (onlyIfMissing && html.includes('property="og:image"')) continue;
  const before = html;
  html = html.replace(TAGS, "");
  if (image) {
    html = html
      .replace(/<meta name="twitter:card" content="[^"]*">/, `<meta name="twitter:card" content="summary_large_image">`)
      .replace(
        /(\n  <meta property="og:url"[^>]*>)/,
        `$1\n  <meta property="og:image" content="${SITE}${image}">\n  <meta property="og:image:width" content="1200">\n  <meta property="og:image:height" content="630">\n  <meta name="twitter:image" content="${SITE}${image}">`
      );
  } else {
    html = html.replace(/<meta name="twitter:card" content="[^"]*">/, `<meta name="twitter:card" content="summary">`);
  }
  if (html !== before) {
    writeFileSync(f, html);
    changed++;
  }
}
console.log(`share images set on ${changed} pages`);
