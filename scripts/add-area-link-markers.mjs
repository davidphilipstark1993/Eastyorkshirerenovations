// One-off: adds the <!-- site:area-links --> and <!-- site:town-services -->
// markers (filled by sync-layout.mjs from scripts/lib/site.mjs).
//   - .html service pages: their "Covering Hull and the wider East Riding."
//     section becomes the shared area-links block.
//   - services.html: block inserted before
//     the last section of <main>.
//   - Town pages: the list in "Popular services in this area" becomes the
//     shared town-services list.
// Safe to re-run: pages that already have the markers are skipped.
import { readFileSync, writeFileSync } from "fs";

const empty = (name) => `<!-- site:${name} -->\n<!-- /site:${name} -->`;
let n = 0;
const edit = (f, fn) => {
  const before = readFileSync(f, "utf8");
  const after = fn(before);
  if (after === before) throw new Error(`${f}: no change made`);
  writeFileSync(f, after);
  n++;
};

const SERVICE_PAGES = ["kitchen-installs.html", "bathroom-installs.html", "plastering.html", "joinery.html", "electrical.html", "decorating.html", "full-house-renovations.html"];
// The homepage and the service hubs carry the bare list (site:area-list)
// inside their own "Areas covered" sections instead, so only services.html
// gets a whole section.
const INSERT_PAGES = ["services.html"];
const TOWN_PAGES = ["hull", "beverley", "cottingham", "hessle", "willerby", "swanland", "brough", "kirk-ella", "north-ferriby", "east-riding", "anlaby", "south-cave"].map((t) => `${t}.html`);

for (const f of SERVICE_PAGES) {
  if (readFileSync(f, "utf8").includes("site:area-links")) continue;
  edit(f, (h) => h.replace(/    <section class="section">\s*<div class="container">\s*(?:<p class="kicker">[^<]*<\/p>\s*)?<h2 class="section-title">Covering Hull and the wider East Riding\.<\/h2>[\s\S]*?<\/section>/, empty("area-links")));
}
for (const f of INSERT_PAGES) {
  if (readFileSync(f, "utf8").includes("site:area-links")) continue;
  edit(f, (h) => {
    const end = h.indexOf("</main>");
    const last = h.lastIndexOf("    <section", end);
    return h.slice(0, last) + empty("area-links") + "\n\n" + h.slice(last);
  });
}
for (const f of TOWN_PAGES) {
  if (readFileSync(f, "utf8").includes("site:town-services")) continue;
  edit(f, (h) => h.replace(/(Popular services (?:in this area|across the region)<\/p>[\s\S]*?)<ul>[\s\S]*?<\/ul>/, (_, pre) => pre + empty("town-services")));
}
console.log(`markers added to ${n} pages`);
