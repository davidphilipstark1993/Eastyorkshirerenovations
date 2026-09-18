import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";

const OLD = '<div class="brand"><img src="/assets/img/logo-eyr.jpg" width="148" height="102" alt="East Yorkshire Renovations logo"><span>East Yorkshire Renovations</span></div>';
const NEW = '<a class="brand" href="/"><img src="/assets/img/logo-eyr.jpg" width="148" height="102" alt="East Yorkshire Renovations logo"><span>East Yorkshire Renovations</span></a>';

function readdirDeep(dir) {
  const results = [];
  for (const name of readdirSync(dir)) {
    const full = `${dir}/${name}`;
    if (statSync(full).isDirectory()) results.push(...readdirDeep(full));
    else if (name.endsWith(".html")) results.push(full);
  }
  return results;
}

const files = readdirDeep(".");
let changed = 0;
const unchanged = [];
for (const f of files) {
  const html = readFileSync(f, "utf8");
  if (!html.includes(OLD)) {
    if (!html.includes('<a class="brand"')) unchanged.push(f);
    continue;
  }
  writeFileSync(f, html.split(OLD).join(NEW));
  changed++;
}

console.log(`Updated ${changed}/${files.length} files.`);
if (unchanged.length) {
  console.log("Files where the old brand markup was NOT found (skipped, needs manual check):");
  unchanged.forEach((f) => console.log(" -", f));
}
