// Share (og:image / twitter:image) tags for pages that aren't rebuilt by a
// generator that sets them itself. Real job photos only: sections with no
// real photos yet (orangeries, conservatories, garden rooms, outdoor
// kitchens, water treatment) are left without a share image.
//
//   node scripts/set-share-images.mjs
import { readFileSync, writeFileSync, existsSync } from "fs";
import { htmlFiles } from "./sync-layout.mjs";
import { SITE } from "./lib/constants.mjs";

const RULES = [
  [/^garage-conversions\//, "/assets/img/og/garage-conversions.jpg"],
  [/^(brough|east-riding|kirk-ella|north-ferriby|south-cave|swanland|willerby)\.html$/, "/assets/img/og/areas.jpg"],
  // The water treatment page pointed at an og image that was never added,
  // and its only photos are AI illustrations: no share image.
  [/^water-treatment\.html$/, null],
];

const TAGS = /\n  <meta property="og:image"[^>]*>(?:\n  <meta property="og:image:(?:width|height)"[^>]*>)*|\n  <meta name="twitter:image"[^>]*>/g;

let changed = 0;
for (const f of htmlFiles(".")) {
  const rule = RULES.find(([re]) => re.test(f));
  if (!rule) continue;
  const image = rule[1];
  if (image && !existsSync(image.slice(1))) throw new Error(`missing ${image}`);
  let html = readFileSync(f, "utf8");
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
