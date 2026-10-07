// Rebuilds sitemap.xml from every page's canonical URL, with <lastmod> taken
// from git: the date of the last commit that touched the page, or today if
// it has uncommitted changes. Pages marked noindex are left out.
//
//   node scripts/build-sitemap.mjs   (run before committing page changes)
import { readFileSync, writeFileSync } from "fs";
import { execFileSync } from "child_process";
import { htmlFiles } from "./sync-layout.mjs";

const today = new Date().toISOString().slice(0, 10);
const dirty = new Set(
  execFileSync("git", ["status", "--porcelain", "--untracked-files=all"], { encoding: "utf8" })
    .split("\n")
    .filter(Boolean)
    .map((l) => l.slice(3).replace(/^"|"$/g, ""))
);

function lastmod(file) {
  if (dirty.has(file)) return today;
  const d = execFileSync("git", ["log", "-1", "--format=%cs", "--", file], { encoding: "utf8" }).trim();
  return d || today;
}

const entries = [];
for (const f of htmlFiles(".")) {
  const html = readFileSync(f, "utf8");
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) continue;
  const loc = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (!loc) continue;
  entries.push({ loc, lastmod: lastmod(f) });
}
// Home page first, then alphabetical.
const isHome = (e) => /^https:\/\/[^/]+\/$/.test(e.loc);
entries.sort((a, b) => isHome(b) - isHome(a) || a.loc.localeCompare(b.loc));

writeFileSync(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map((e) => `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n  </url>`).join("\n")}
</urlset>
`
);
console.log(`sitemap.xml: ${entries.length} URLs`);
