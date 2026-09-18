import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";

const EMAIL = "info@eastyorkshirerenovation.com";

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
let changedFiles = 0;
let totalHits = 0;

for (const f of files) {
  let html = readFileSync(f, "utf8");
  const before = html;

  // Footer / contact-card lines: "Phone: X" and "WhatsApp: X" (plain or tel:-linked), whole <p> line removed.
  html = html.replace(/[ \t]*<p>(?:<strong>)?Phone:(?:<\/strong>)?\s*(?:<a href="tel:[^"]*">)?\+44 7356 045498(?:<\/a>)?<\/p>\n/g, "");
  html = html.replace(/[ \t]*<p>(?:<strong>)?WhatsApp:(?:<\/strong>)?\s*\+44 7356 045498<\/p>\n/g, "");

  // JSON-LD telephone field.
  html = html.replace(/[ \t]*"telephone":\s*"\+44 7356 045498",\n/g, "");

  // CTA sentences: "Call <strong>PHONE</strong> or WhatsApp (the same number|<strong>PHONE</strong>)" -> "Email <strong>EMAIL</strong>"
  html = html.replace(
    /Call <strong>\+44 7356 045498<\/strong> or WhatsApp (?:the same number|<strong>\+44 7356 045498<\/strong>)/g,
    `Email <strong>${EMAIL}</strong>`
  );

  // "Call or WhatsApp for a quick response" (contact.html hero)
  html = html.replace(/Call or WhatsApp for a quick response/g, "Email us for a quick response");

  // tel: buttons
  html = html.replace(
    /href="tel:\+447356045498">Call Us<\/a>/g,
    `href="mailto:${EMAIL}">Email Us</a>`
  );
  html = html.replace(
    /href="tel:\+447356045498">Call Now<\/a>/g,
    `href="mailto:${EMAIL}">Email Us</a>`
  );

  // "Prefer to talk first? Call <a href="tel:...">+44 7356 045498</a>."
  html = html.replace(
    /Prefer to talk first\? Call <a href="tel:\+447356045498">\+44 7356 045498<\/a>\./g,
    `Prefer to talk first? Email us at <a href="mailto:${EMAIL}">${EMAIL}</a>.`
  );

  // "...you're welcome to call us directly on <a href="tel:...">+44 7356 045498</a>."
  html = html.replace(
    /you're welcome to call us directly on <a href="tel:\+447356045498">\+44 7356 045498<\/a>\./g,
    `you're welcome to email us directly at <a href="mailto:${EMAIL}">${EMAIL}</a>.`
  );

  // Any remaining bare tel: link with the phone number as its own text.
  html = html.replace(
    /<a href="tel:\+447356045498">\+44 7356 045498<\/a>/g,
    `<a href="mailto:${EMAIL}">${EMAIL}</a>`
  );

  if (html !== before) {
    changedFiles++;
    totalHits++;
    writeFileSync(f, html);
  }
}

console.log(`Modified ${changedFiles}/${files.length} files.`);

// Report anything still mentioning the phone number or "WhatsApp" or bare "Call " CTAs, for manual review.
const leftovers = [];
for (const f of files) {
  const html = readFileSync(f, "utf8");
  if (/045498|WhatsApp|tel:/.test(html)) leftovers.push(f);
}
if (leftovers.length) {
  console.log("\nFiles that still mention the phone number, WhatsApp, or a tel: link (needs manual review):");
  leftovers.forEach((f) => console.log(" -", f));
} else {
  console.log("\nNo remaining phone/WhatsApp/tel: references found.");
}
