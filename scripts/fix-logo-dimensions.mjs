import { readFileSync, writeFileSync, readdirSync } from "fs";

const OLD = 'src="/assets/img/logo-eyr.jpg" width="88" height="88"';
const NEW = 'src="/assets/img/logo-eyr.jpg" width="148" height="102"';

const rootHtml = readdirSync(".").filter((f) => f.endsWith(".html"));
const blogHtml = readdirSync("blog").filter((f) => f.endsWith(".html")).map((f) => `blog/${f}`);
const files = [...rootHtml, ...blogHtml];

let changed = 0;
const unchanged = [];
for (const f of files) {
  const html = readFileSync(f, "utf8");
  if (!html.includes(OLD)) {
    if (!html.includes(NEW)) unchanged.push(f);
    continue;
  }
  writeFileSync(f, html.split(OLD).join(NEW));
  changed++;
}

console.log(`Updated ${changed}/${files.length} files.`);
if (unchanged.length) {
  console.log("Files where the old logo attrs were NOT found (skipped, needs manual check):");
  unchanged.forEach((f) => console.log(" -", f));
}
