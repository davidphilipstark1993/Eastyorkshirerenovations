// Injects (or clears) the testimonials section on every conversion-path
// static page, between the <!-- TESTIMONIALS:START/END --> markers already
// present in each file. Re-run this any time scripts/data/testimonials.mjs
// changes. The specialty hub pages (orangeries, conservatory
// transformations, garden rooms, garage conversions, outdoor kitchens) get
// their copy from the same testimonialsSection() call inside their own
// build-*.mjs scripts - re-run those too when testimonials change.
import { readFileSync, writeFileSync } from "fs";
import { testimonialsSection } from "./lib/layout.mjs";

const TARGET_PAGES = [
  "index.html",
  "services.html",
  "kitchen-installs.html",
  "bathroom-installs.html",
  "full-house-renovations.html",
  "plastering.html",
  "decorating.html",
  "joinery.html",
  "electrical.html",
  "water-treatment.html",
  "contact.html",
];

const START = "<!-- TESTIMONIALS:START -->";
const END = "<!-- TESTIMONIALS:END -->";
const section = testimonialsSection();

for (const file of TARGET_PAGES) {
  const html = readFileSync(file, "utf8");
  const startIdx = html.indexOf(START);
  const endIdx = html.indexOf(END);
  if (startIdx === -1 || endIdx === -1) {
    console.warn(`No testimonials markers found in ${file} - skipping`);
    continue;
  }
  const before = html.slice(0, startIdx + START.length);
  const after = html.slice(endIdx);
  const middle = section ? `\n${section}    ` : "\n    ";
  const updated = `${before}${middle}${after}`;
  writeFileSync(file, updated);
  console.log(`${file}: ${section ? "rendered testimonials section" : "no reviews yet - left empty"}`);
}
