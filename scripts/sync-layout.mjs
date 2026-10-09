// Stamps the shared blocks from scripts/lib/site.mjs (head, header,
// footer, business JSON-LD) into every HTML page.
//
//   node scripts/sync-layout.mjs          update all pages
//   node scripts/sync-layout.mjs --check  report pages that are out of date
//
// Each block lives between <!-- site:NAME --> and <!-- /site:NAME -->. On a
// page that predates the markers, the legacy block is found by pattern and
// wrapped, so the first run converts the page and later runs just replace.
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { BLOCKS, OPTIONAL_BLOCKS, blocksFor } from "./lib/site.mjs";

const LEGACY = {
  // Older pages: the inline GA4 + Pixel snippet, or the earlier "tracking" block.
  head: /  <!-- Google tag \(gtag\.js\) -->[\s\S]*?<!-- End Meta Pixel Code -->|<!-- site:tracking -->[\s\S]*?<!-- \/site:tracking -->/,
  header: /  <header>[\s\S]*?<\/header>/,
  // The water treatment page had its own mobile bar just before the footer;
  // the shared footer block now includes one, so it is absorbed here.
  footer: /(?:  <div class="mobile-sticky-cta">[\s\S]*?<\/div>\s*)?  <footer>[\s\S]*?<\/footer>/,
  business: /  <script type="application\/ld\+json">\s*\{\s*"@context": "https:\/\/schema\.org",\s*"@type": "HomeAndConstructionBusiness"[\s\S]*?<\/script>(?:\s*<!-- TODO: geo coordinates removed[^\n]*-->)?(?:\s*<!-- TODO: add a "sameAs"[^\n]*-->)?/,
};

const markerRe = (name) => new RegExp(`<!-- site:${name} -->[\\s\\S]*?<!-- /site:${name} -->`);

export function htmlFiles(dir = ".") {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name.startsWith(".") || name === "node_modules" || name === "scripts") continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) out.push(...htmlFiles(path));
    else if (name.endsWith(".html")) out.push(path);
  }
  return out.sort();
}

export function syncPage(path, html) {
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (!canonical) throw new Error(`${path}: no canonical link`);
  const blocks = blocksFor(path, canonical);
  const missing = [];
  for (const name of BLOCKS) {
    const re = markerRe(name);
    if (re.test(html)) html = html.replace(re, () => blocks[name]);
    else if (LEGACY[name].test(html)) html = html.replace(LEGACY[name], () => blocks[name]);
    else missing.push(name);
  }
  for (const name of OPTIONAL_BLOCKS) {
    const re = markerRe(name);
    if (re.test(html)) html = html.replace(re, () => blocks[name]);
  }
  return { html, missing };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const check = process.argv.includes("--check");
  let changed = 0;
  const problems = [];
  const files = htmlFiles(".").filter((f) => !f.startsWith("_"));
  for (const f of files) {
    const before = readFileSync(f, "utf8");
    const { html, missing } = syncPage(f, before);
    if (missing.length) problems.push(`${f}: no ${missing.join(", ")} block found`);
    if (html !== before) {
      changed++;
      if (!check) writeFileSync(f, html);
    }
  }
  console.log(`${check ? "out of date" : "updated"}: ${changed}/${files.length} pages`);
  problems.forEach((p) => console.log(" -", p));
  if (problems.length || (check && changed)) process.exitCode = 1;
}
