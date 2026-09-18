import { readFileSync, writeFileSync, readdirSync } from "fs";

const OLD = `        <a href="/work.html">Recent Work</a>
        <a href="/areas.html">Areas We Cover</a>
        <a href="/guides/">Guides</a>
        <a href="/about.html">About</a>
        <a href="/blog/">Blog</a>`;

const NEW = `        <a href="/work.html">Recent Work</a>
        <a href="/areas.html">Areas We Cover</a>
        <a href="/projects/">Projects</a>
        <a href="/guides/">Guides</a>
        <a href="/about.html">About</a>
        <a href="/blog/">Blog</a>`;

const rootHtml = readdirSync(".").filter((f) => f.endsWith(".html"));
const blogHtml = readdirSync("blog").filter((f) => f.endsWith(".html")).map((f) => `blog/${f}`);
const files = [...rootHtml, ...blogHtml];

let changed = 0;
const unchanged = [];
for (const f of files) {
  const html = readFileSync(f, "utf8");
  if (!html.includes(OLD)) {
    if (!html.includes("/projects/\">Projects</a>")) unchanged.push(f);
    continue;
  }
  writeFileSync(f, html.replace(OLD, NEW));
  changed++;
}

console.log(`Updated ${changed}/${files.length} files.`);
if (unchanged.length) {
  console.log("Files where the expected old nav block was NOT found (skipped, needs manual check):");
  unchanged.forEach((f) => console.log(" -", f));
}
