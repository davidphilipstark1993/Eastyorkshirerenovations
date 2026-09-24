// One-off update for the damp proofing launch, applied to every existing
// HTML page:
//   1. adds the "Damp Proofing" dropdown to the main nav, after "Services"
//   2. extends the business JSON-LD areaServed list with the wider coverage
//      area (Bridlington, Goole and North Lincolnshire towns)
//   3. gives the business JSON-LD a stable "@id" so Service schema can
//      reference it as the provider
//   4. adds the damp proofing URLs to sitemap.xml
// Safe to re-run: each step checks whether it has already been applied.
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { SITE, BUSINESS_ID, AREA_SERVED } from "./lib/constants.mjs";

const NAV_ANCHOR = `            <a href="/services.html">View all services</a>
          </div>
        </div>
`;

const DAMP_NAV = `        <div class="nav-dropdown">
          <a href="/damp-proofing/" class="nav-dropdown-toggle">Damp Proofing</a>
          <div class="nav-dropdown-menu">
            <a href="/damp-proofing/damp-surveys/">Damp Surveys</a>
            <a href="/damp-proofing/pre-purchase-damp-survey/">Pre-Purchase Damp Surveys</a>
            <a href="/damp-proofing/landlord-damp-mould-reports/">Landlord Damp &amp; Mould Reports</a>
            <a href="/damp-proofing/rising-damp-treatment/">Rising Damp Treatment</a>
            <a href="/damp-proofing/penetrating-damp/">Penetrating Damp</a>
            <a href="/damp-proofing/condensation-control/">Condensation Control</a>
            <a href="/damp-proofing/mould-treatment/">Mould Treatment</a>
            <a href="/damp-proofing/cellar-tanking/">Cellar Tanking</a>
            <a href="/damp-proofing/">All damp proofing services</a>
          </div>
        </div>
`;

// The two spellings of the full business areaServed list already on the site.
const OLD_AREAS = [
  `"areaServed": ["Hull","Beverley","Hessle","Cottingham","Anlaby","East Riding of Yorkshire","Willerby","Kirk Ella","Swanland","Brough","North Ferriby","Walkington","Hornsea","Driffield"],`,
  `"areaServed": ["Hull", "Beverley", "Hessle", "Cottingham", "Anlaby", "East Riding of Yorkshire", "Willerby", "Kirk Ella", "Swanland", "Brough", "North Ferriby", "Walkington", "Hornsea", "Driffield"],`,
];
const NEW_AREAS = `"areaServed": ${JSON.stringify(AREA_SERVED)},`;

const BUSINESS_TYPE = `    "@type": "HomeAndConstructionBusiness",
    "name": "East Yorkshire Renovations",`;
const BUSINESS_TYPE_WITH_ID = `    "@type": "HomeAndConstructionBusiness",
    "@id": "${BUSINESS_ID}",
    "name": "East Yorkshire Renovations",`;

function htmlFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name.startsWith(".") || name === "node_modules" || name === "scripts") continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) out.push(...htmlFiles(path));
    else if (name.endsWith(".html")) out.push(path);
  }
  return out;
}

const counts = { nav: 0, areas: 0, id: 0 };
const problems = [];
for (const f of htmlFiles(".")) {
  let html = readFileSync(f, "utf8");
  const before = html;

  if (!html.includes('href="/damp-proofing/" class="nav-dropdown-toggle"')) {
    if (html.includes(NAV_ANCHOR)) {
      html = html.replace(NAV_ANCHOR, NAV_ANCHOR + DAMP_NAV);
      counts.nav++;
    } else problems.push(`${f}: nav anchor not found`);
  }

  for (const old of OLD_AREAS) {
    if (html.includes(old)) {
      html = html.replace(old, NEW_AREAS);
      counts.areas++;
    }
  }

  if (html.includes(BUSINESS_TYPE)) {
    html = html.replace(BUSINESS_TYPE, BUSINESS_TYPE_WITH_ID);
    counts.id++;
  } else if (!html.includes(`"@id": "${BUSINESS_ID}"`)) {
    problems.push(`${f}: business JSON-LD not found`);
  }

  if (html !== before) writeFileSync(f, html);
}

console.log(`nav added: ${counts.nav}, areaServed extended: ${counts.areas}, @id added: ${counts.id}`);
if (problems.length) {
  console.log("Needs a manual check:");
  problems.forEach((p) => console.log(" -", p));
}

const DAMP_URLS = [
  "/damp-proofing/",
  "/damp-proofing/damp-surveys/",
  "/damp-proofing/pre-purchase-damp-survey/",
  "/damp-proofing/landlord-damp-mould-reports/",
  "/damp-proofing/rising-damp-treatment/",
  "/damp-proofing/penetrating-damp/",
  "/damp-proofing/condensation-control/",
  "/damp-proofing/mould-treatment/",
  "/damp-proofing/cellar-tanking/",
].map((p) => `${SITE}${p}`);

let sitemap = readFileSync("sitemap.xml", "utf8");
const missing = DAMP_URLS.filter((u) => !sitemap.includes(`<loc>${u}</loc>`));
if (missing.length) {
  const block = missing.map((u) => `  <url>\n    <loc>${u}</loc>\n  </url>\n`).join("");
  sitemap = sitemap.replace("</urlset>", `${block}</urlset>`);
  writeFileSync("sitemap.xml", sitemap);
}
console.log(`sitemap: added ${missing.length} damp proofing URLs`);
