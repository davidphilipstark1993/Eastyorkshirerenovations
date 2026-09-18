import { readFileSync, writeFileSync, readdirSync } from "fs";
import { SITE } from "./lib/constants.mjs";

const slugs = readdirSync("guides", { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

const urls = [`${SITE}/guides/`, ...slugs.map((s) => `${SITE}/guides/${s}/`)];

const sitemap = readFileSync("sitemap.xml", "utf8");
const block = urls.map((u) => `  <url>\n    <loc>${u}</loc>\n  </url>\n`).join("");
const updated = sitemap.replace("</urlset>", `${block}</urlset>\n`);
writeFileSync("sitemap.xml", updated);
console.log(`Added ${urls.length} guide URLs to sitemap.xml`);
