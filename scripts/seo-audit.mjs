// Static SEO audit of every HTML page in the repo. No dependencies.
//
//   node scripts/seo-audit.mjs            # human-readable report
//   node scripts/seo-audit.mjs --json     # machine-readable
//   node scripts/seo-audit.mjs --strict   # exit 1 if any CRITICAL issue (for CI)
//
// Checks: titles, descriptions, H1s, heading order, canonicals, robots meta,
// internal links (against files + vercel.json redirects), image alt/size,
// JSON-LD validity and duplicate business entities, Open Graph, sitemap vs
// indexable pages, orphan pages, crawl depth, thin pages, near-duplicate pages.
import fs from "fs";
import path from "path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const ORIGIN = "https://www.eastyorkshirerenovation.com";
const SKIP_DIRS = new Set(["node_modules", "docs", "scripts", ".git", ".vercel", "api"]);
const args = new Set(process.argv.slice(2));

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".")) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) walk(p, out); }
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}
const fileToUrl = (f) => {
  let r = "/" + path.relative(ROOT, f).split(path.sep).join("/");
  return r.endsWith("/index.html") ? r.slice(0, -"index.html".length) : r;
};
const strip = (s) => s.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();
const attr = (tag, name) => { const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, "i")); return m ? (m[2] ?? m[3]) : null; };
const meta = (html, key, val) => { for (const t of html.match(/<meta\b[^>]*>/gi) || []) if ((attr(t, key) || "").toLowerCase() === val) return attr(t, "content"); return null; };

// Known URLs: files + redirects
const files = walk(ROOT);
const pages = new Map(); // url -> data
const vercel = JSON.parse(fs.readFileSync(path.join(ROOT, "vercel.json"), "utf8"));
const redirects = new Map((vercel.redirects || []).map((r) => [r.source, r.destination]));
const existsUrl = (u) => {
  if (pages.has(u) || redirects.has(u)) return true;
  const p = path.join(ROOT, decodeURIComponent(u));
  if (fs.existsSync(p) && fs.statSync(p).isFile()) return true;
  if (fs.existsSync(path.join(p, "index.html"))) return true; // /dir (Vercel adds slash)
  return false;
};

for (const f of files) {
  const html = fs.readFileSync(f, "utf8").replace(/<!--[\s\S]*?-->/g, "");
  const url = fileToUrl(f);
  const head = (html.match(/<head[\s\S]*?<\/head>/i) || [""])[0];
  const body = (html.match(/<body[\s\S]*<\/body>/i) || [html])[0];
  const main = (body.match(/<main[\s\S]*<\/main>/i) || [body])[0];
  const titles = [...head.matchAll(/<title>([\s\S]*?)<\/title>/gi)].map((m) => m[1].trim());
  const canon = [...head.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/gi)].map((m) => attr(m[0], "href"));
  const h = [...body.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({ lvl: +m[1], text: strip(m[2]) }));
  const links = [...body.matchAll(/<a\b[^>]*>/gi)].map((m) => attr(m[0], "href")).filter(Boolean);
  const imgs = [...body.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const ld = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  const robots = (meta(head, "name", "robots") || "").toLowerCase();
  const text = strip(main);
  pages.set(url, {
    url, file: path.relative(ROOT, f), titles, desc: meta(head, "name", "description"), canon, h, links, imgs, ld, robots,
    og: { title: meta(head, "property", "og:title"), desc: meta(head, "property", "og:description"), image: meta(head, "property", "og:image"), url: meta(head, "property", "og:url") },
    words: text.split(" ").filter(Boolean).length, text, viewport: !!meta(head, "name", "viewport"), lang: /<html[^>]*\slang="en-GB"/i.test(html),
  });
}

const issues = []; // {sev, check, url, msg}
const add = (sev, check, url, msg) => issues.push({ sev, check, url, msg });
const passed = new Set();
const indexable = (p) => !p.robots.includes("noindex") && p.url !== "/404.html";

// Per-page checks
for (const p of pages.values()) {
  const idx = indexable(p);
  if (p.titles.length !== 1) add("CRITICAL", "title", p.url, `${p.titles.length} <title> tags`);
  else if (p.titles[0].length > 65) add("WARN", "title-length", p.url, `title ${p.titles[0].length} chars: "${p.titles[0]}"`);
  else if (p.titles[0].length < 25) add("WARN", "title-length", p.url, `title only ${p.titles[0].length} chars`);
  if (!p.desc) add(idx ? "CRITICAL" : "WARN", "description", p.url, "missing meta description");
  else if (p.desc.length > 165 || p.desc.length < 70) add("INFO", "description-length", p.url, `description ${p.desc.length} chars`);
  const h1s = p.h.filter((x) => x.lvl === 1);
  if (h1s.length === 0) add("CRITICAL", "h1", p.url, "no H1");
  if (h1s.length > 1) add("WARN", "h1", p.url, `${h1s.length} H1s`);
  for (let i = 1; i < p.h.length; i++) if (p.h[i].lvl > p.h[i - 1].lvl + 1) { add("INFO", "heading-order", p.url, `H${p.h[i - 1].lvl} → H${p.h[i].lvl} ("${p.h[i].text.slice(0, 50)}")`); break; }
  if (p.canon.length !== 1) add("CRITICAL", "canonical", p.url, `${p.canon.length} canonical tags`);
  else if (idx && p.canon[0] !== ORIGIN + p.url) add("CRITICAL", "canonical", p.url, `canonical points elsewhere: ${p.canon[0]}`);
  if (p.robots.includes("noindex") && p.url !== "/404.html") add("INFO", "noindex", p.url, `robots="${p.robots}" (check this is intended)`);
  if (!p.viewport) add("CRITICAL", "viewport", p.url, "no viewport meta");
  if (!p.lang) add("WARN", "lang", p.url, 'html lang is not "en-GB"');
  if (idx) {
    if (!p.og.title || !p.og.image || !p.og.url) add("WARN", "open-graph", p.url, "og:title/og:image/og:url missing");
    else if (p.og.url !== ORIGIN + p.url) add("WARN", "open-graph", p.url, `og:url mismatch: ${p.og.url}`);
    if (p.og.image && !existsUrl(p.og.image.replace(ORIGIN, ""))) add("CRITICAL", "open-graph", p.url, `og:image missing file: ${p.og.image}`);
    if (p.words < 300) add("WARN", "thin", p.url, `${p.words} words in main content`);
  }
  for (const img of p.imgs) {
    const src = attr(img, "src") || "";
    const alt = attr(img, "alt");
    if (alt === null) add("WARN", "img-alt", p.url, `img without alt: ${src}`);
    if (!attr(img, "width") || !attr(img, "height")) add("WARN", "img-size", p.url, `img without width/height: ${src}`);
    if (src.startsWith("/") && !existsUrl(src.split("?")[0])) add("CRITICAL", "img-broken", p.url, `missing image: ${src}`);
  }
  let types = [];
  for (const raw of p.ld) {
    try {
      const j = JSON.parse(raw);
      const walkLd = (o) => { if (Array.isArray(o)) o.forEach(walkLd); else if (o && typeof o === "object") { if (o["@type"] && o["@id"]?.endsWith("#business")) types.push(o["@id"]); (o["@graph"] || []).forEach(walkLd); } };
      walkLd(j);
    } catch (e) { add("CRITICAL", "json-ld", p.url, `invalid JSON-LD: ${e.message}`); }
  }
  if (types.length > 1) add("WARN", "json-ld", p.url, `business entity defined ${types.length} times`);
  // links
  for (const href of p.links) {
    if (/^(mailto:|tel:|https?:|#|javascript:|sms:|whatsapp:)/i.test(href)) {
      if (href.startsWith(ORIGIN)) add("INFO", "absolute-internal-link", p.url, href);
      if (/^http:\/\//i.test(href) && !/localhost/.test(href)) add("WARN", "http-link", p.url, href);
      continue;
    }
    const abs = new URL(href, ORIGIN + p.url);
    const u = abs.pathname;
    if (!existsUrl(u)) add("CRITICAL", "broken-link", p.url, `→ ${href}`);
    else if (redirects.has(u)) add("WARN", "link-to-redirect", p.url, `→ ${href} (redirects to ${redirects.get(u)})`);
    else if (!pages.has(u) && pages.has(u + "/")) add("WARN", "trailing-slash", p.url, `→ ${href} (missing trailing slash, causes a redirect)`);
    else if (u.endsWith("/index.html")) add("WARN", "index-html-link", p.url, `→ ${href} (use the directory URL)`);
    if (u !== u.toLowerCase()) add("WARN", "uppercase-url", p.url, `→ ${href}`);
  }
}

// Site-wide: duplicates
const dupe = (key, label, sev) => {
  const m = new Map();
  for (const p of pages.values()) if (indexable(p)) { const k = key(p); if (k) m.set(k, [...(m.get(k) || []), p.url]); }
  for (const [k, us] of m) if (us.length > 1) add(sev, label, us.join(", "), `"${k.slice(0, 90)}"`);
};
dupe((p) => p.titles[0], "duplicate-title", "CRITICAL");
dupe((p) => p.desc, "duplicate-description", "WARN");
dupe((p) => p.h.find((x) => x.lvl === 1)?.text, "duplicate-h1", "WARN");

// Sitemap
const sm = fs.readFileSync(path.join(ROOT, "sitemap.xml"), "utf8");
const smUrls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(ORIGIN, ""));
const smSet = new Set(smUrls);
if (smUrls.length !== smSet.size) add("WARN", "sitemap", "/sitemap.xml", "duplicate URLs in sitemap");
for (const u of smUrls) {
  const p = pages.get(u);
  if (!p) add("CRITICAL", "sitemap", u, "in sitemap but no page");
  else if (!indexable(p)) add("CRITICAL", "sitemap", u, "in sitemap but noindex");
}
for (const p of pages.values()) if (indexable(p) && !smSet.has(p.url)) add("WARN", "sitemap", p.url, "indexable but not in sitemap");
const robotsTxt = fs.readFileSync(path.join(ROOT, "robots.txt"), "utf8");
if (!/Sitemap:\s*https:\/\/www\./i.test(robotsTxt)) add("WARN", "robots", "/robots.txt", "no www Sitemap line");
if (/Disallow:\s*\/\s*$/m.test(robotsTxt)) add("CRITICAL", "robots", "/robots.txt", "Disallow: / present");

// Link graph: orphans + depth (BFS from home)
const inbound = new Map([...pages.keys()].map((u) => [u, new Set()]));
const out = new Map();
for (const p of pages.values()) {
  const targets = new Set();
  for (const href of p.links) {
    if (/^(mailto:|tel:|#|javascript:|sms:)/i.test(href)) continue;
    if (/^https?:/i.test(href) && !href.startsWith(ORIGIN)) continue;
    let u = new URL(href, ORIGIN + p.url).pathname;
    if (redirects.has(u)) u = new URL(redirects.get(u), ORIGIN).pathname;
    if (!pages.has(u) && pages.has(u + "/")) u += "/";
    if (pages.has(u) && u !== p.url) { targets.add(u); inbound.get(u).add(p.url); }
  }
  out.set(p.url, targets);
}
const depth = new Map([["/", 0]]);
const q = ["/"];
while (q.length) { const u = q.shift(); for (const t of out.get(u) || []) if (!depth.has(t)) { depth.set(t, depth.get(u) + 1); q.push(t); } }
for (const p of pages.values()) {
  if (!indexable(p)) continue;
  if (inbound.get(p.url).size === 0 && p.url !== "/") add("CRITICAL", "orphan", p.url, "no internal links point here");
  else if (!depth.has(p.url)) add("CRITICAL", "unreachable", p.url, "not reachable from the homepage");
  else if (depth.get(p.url) > 3) add("WARN", "crawl-depth", p.url, `${depth.get(p.url)} clicks from home`);
}

// Near-duplicates (5-word shingles, Jaccard on main text), indexable pages only
const shingles = new Map();
for (const p of pages.values()) {
  if (!indexable(p)) continue;
  const w = p.text.toLowerCase().split(" ");
  const s = new Set();
  for (let i = 0; i + 5 <= w.length; i++) s.add(w.slice(i, i + 5).join(" "));
  shingles.set(p.url, s);
}
const keys = [...shingles.keys()];
for (let i = 0; i < keys.length; i++) for (let j = i + 1; j < keys.length; j++) {
  const a = shingles.get(keys[i]), b = shingles.get(keys[j]);
  if (a.size < 50 || b.size < 50) continue;
  let inter = 0; for (const x of a) if (b.has(x)) inter++;
  const jac = inter / (a.size + b.size - inter);
  if (jac > 0.5) add("WARN", "near-duplicate", `${keys[i]} ~ ${keys[j]}`, `${Math.round(jac * 100)}% shared text`);
  else if (jac > 0.35) add("INFO", "similar-pages", `${keys[i]} ~ ${keys[j]}`, `${Math.round(jac * 100)}% shared text`);
}

const ALL = ["title", "title-length", "description", "h1", "canonical", "viewport", "lang", "open-graph", "thin", "img-alt", "img-size", "img-broken", "json-ld", "broken-link", "link-to-redirect", "trailing-slash", "index-html-link", "uppercase-url", "http-link", "duplicate-title", "duplicate-description", "duplicate-h1", "sitemap", "robots", "orphan", "unreachable", "crawl-depth", "near-duplicate"];
for (const c of ALL) if (!issues.some((i) => i.check === c && i.sev !== "INFO")) passed.add(c);

const summary = {
  pages: pages.size, indexable: [...pages.values()].filter(indexable).length, sitemap: smUrls.length,
  maxDepth: Math.max(...[...depth.values()]),
  critical: issues.filter((i) => i.sev === "CRITICAL").length, warnings: issues.filter((i) => i.sev === "WARN").length, info: issues.filter((i) => i.sev === "INFO").length,
};
if (args.has("--json")) {
  console.log(JSON.stringify({ summary, passed: [...passed], issues, pages: [...pages.values()].map((p) => ({ url: p.url, title: p.titles[0], desc: p.desc, h1: p.h.find((x) => x.lvl === 1)?.text, words: p.words, indexable: indexable(p), depth: depth.get(p.url) ?? null, inbound: inbound.get(p.url).size })) }, null, 2));
} else {
  console.log(`SEO audit: ${summary.pages} pages (${summary.indexable} indexable), ${summary.sitemap} in sitemap, max crawl depth ${summary.maxDepth}`);
  console.log(`CRITICAL ${summary.critical} · WARN ${summary.warnings} · INFO ${summary.info}\n`);
  for (const sev of ["CRITICAL", "WARN", "INFO"]) {
    const list = issues.filter((i) => i.sev === sev);
    if (!list.length) continue;
    console.log(`## ${sev}`);
    for (const i of list) console.log(`  [${i.check}] ${i.url} — ${i.msg}`);
    console.log("");
  }
  console.log(`## PASSED\n  ${[...passed].join(", ")}`);
}
if (args.has("--strict") && summary.critical) process.exit(1);
