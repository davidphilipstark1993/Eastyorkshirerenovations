// Adds/refreshes <lastmod> on every URL already listed in sitemap.xml,
// derived from real content history rather than the build date:
//  1. the file's last git commit date, if it's tracked in git;
//  2. otherwise its filesystem mtime (new/untracked files).
// Run this last, after any other build-*.mjs / add-*-to-sitemap.mjs
// script, so every URL in the file gets an accurate date.
import { readFileSync, writeFileSync, statSync, existsSync } from "fs";
import { execSync } from "child_process";
import { SITE } from "./lib/constants.mjs";

function urlToFilePath(loc) {
  let p = loc.replace(SITE, "");
  if (p === "") p = "/";
  p = p.replace(/^\//, "");
  if (p === "" || p.endsWith("/")) p += "index.html";
  return p;
}

function lastModDate(filePath) {
  if (!existsSync(filePath)) {
    console.warn(`  warning: no local file for ${filePath}, skipping date`);
    return null;
  }
  try {
    const gitDate = execSync(`git log -1 --format=%cs -- "${filePath}"`, { encoding: "utf8" }).trim();
    if (gitDate) return gitDate;
  } catch {
    // not a git repo / git not available - fall through to mtime
  }
  return statSync(filePath).mtime.toISOString().slice(0, 10);
}

const sitemap = readFileSync("sitemap.xml", "utf8");

const updated = sitemap.replace(
  /<url>\s*<loc>([^<]+)<\/loc>\s*(?:<lastmod>[^<]*<\/lastmod>\s*)?<\/url>/g,
  (match, loc) => {
    const filePath = urlToFilePath(loc);
    const date = lastModDate(filePath);
    if (!date) return `<url>\n    <loc>${loc}</loc>\n  </url>`;
    return `<url>\n    <loc>${loc}</loc>\n    <lastmod>${date}</lastmod>\n  </url>`;
  }
);

writeFileSync("sitemap.xml", updated);
const count = (updated.match(/<lastmod>/g) || []).length;
console.log(`Added/refreshed <lastmod> on ${count} sitemap URLs`);
