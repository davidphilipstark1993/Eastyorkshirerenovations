import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { SITE } from "./lib/constants.mjs";

function readdirDeep(dir) {
  const results = [];
  for (const name of readdirSync(dir)) {
    const full = `${dir}/${name}`;
    if (statSync(full).isDirectory()) {
      results.push(...readdirDeep(full));
    } else if (name === "index.html") {
      results.push(full.replace(/index\.html$/, ""));
    }
  }
  return results;
}

const paths = readdirDeep("projects").sort();
const urls = paths.map((p) => `${SITE}/${p}`);

const sitemap = readFileSync("sitemap.xml", "utf8");
const block = urls.map((u) => `  <url>\n    <loc>${u}</loc>\n  </url>\n`).join("");
const updated = sitemap.replace("</urlset>", `${block}</urlset>\n`);
writeFileSync("sitemap.xml", updated);
console.log(`Added ${urls.length} project URLs to sitemap.xml`);
