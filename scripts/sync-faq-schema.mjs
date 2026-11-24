// Rebuilds the FAQPage JSON-LD on hand-edited pages from the questions that
// are actually visible on the page (<details> inside <div class="faq-list">),
// so the schema can never drift from the copy.
//
//   node scripts/sync-faq-schema.mjs kitchen-installs.html garden-rooms/hull/index.html
//   node scripts/sync-faq-schema.mjs --check <files...>   (exit 1 if any are out of date)
//
// Pages with no faq-list are left alone. Generated pages (damp, guides,
// projects) build their own FAQ schema and should not be passed here.
import { readFileSync, writeFileSync } from "fs";

const args = process.argv.slice(2);
const check = args.includes("--check");
const files = args.filter((a) => a !== "--check");

const ENTITIES = {
  "&amp;": "&", "&pound;": "£", "&rsquo;": "’", "&lsquo;": "‘", "&ldquo;": "“", "&rdquo;": "”",
  "&mdash;": "—", "&ndash;": "–", "&nbsp;": " ", "&quot;": '"', "&#39;": "'", "&hellip;": "…", "&times;": "×",
};
const text = (html) =>
  html
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z#0-9]+;/gi, (e) => ENTITIES[e] ?? e)
    .replace(/\s+/g, " ")
    .trim();

function faqsFrom(html) {
  const out = [];
  for (const list of html.matchAll(/<div class="faq-list">([\s\S]*?)<\/div>/g)) {
    for (const d of list[1].matchAll(/<details>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)) {
      out.push({ q: text(d[1]), a: text(d[2]) });
    }
  }
  return out;
}

function block(faqs) {
  const json = JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
    null,
    2,
  );
  return `  <script type="application/ld+json">\n${json.replace(/^/gm, "  ")}\n  </script>`;
}

const EXISTING = /  <script type="application\/ld\+json">\s*\{\s*"@context": "https:\/\/schema.org",\s*"@type": "FAQPage"[\s\S]*?<\/script>/;

let stale = 0;
for (const f of files) {
  const html = readFileSync(f, "utf8");
  const faqs = faqsFrom(html);
  if (!faqs.length) {
    console.log(`${f}: no faq-list, skipped`);
    continue;
  }
  const next = EXISTING.test(html) ? html.replace(EXISTING, block(faqs)) : html.replace("</body>", `${block(faqs)}\n</body>`);
  if (next === html) continue;
  if (check) {
    stale++;
    console.log(`${f}: FAQ schema out of date`);
  } else {
    writeFileSync(f, next);
    console.log(`${f}: ${faqs.length} questions`);
  }
}
if (check && stale) process.exit(1);
