// Single source for everything that is shared by every page: the <head>
// tags (favicons and the consent/tracking script), the header, the footer
// (with the mobile call bar) and the business JSON-LD.
//
// Generated pages get these through scripts/lib/layout.mjs. Hand-edited
// pages get them from scripts/sync-layout.mjs, which rewrites the block
// between each pair of <!-- site:NAME --> ... <!-- /site:NAME --> markers.
// To change any of these site-wide: edit this file, then
// run `node scripts/sync-layout.mjs`.
import { SITE, BUSINESS_NAME, BUSINESS_ID, EMAIL, ADDRESS_LINE, LOGO_PATH, AREA_SERVED } from "./constants.mjs";
import { PHONE, WHATSAPP, REPLY_TIME, GOOGLE_PROFILE, GOOGLE_REVIEW_LINK, SOCIAL_PROFILES, PUBLIC_LIABILITY, CREDENTIALS, COMPANY, REVIEWS, sameAs } from "../data/business.mjs";

export const BLOCKS = ["head", "header", "footer", "business"];
// Blocks that only some pages carry: replaced where their markers exist.
export const OPTIONAL_BLOCKS = ["reply-time", "form-privacy", "reviews"];
export const wrap = (name, html) => `<!-- site:${name} -->\n${html}\n<!-- /site:${name} -->`;

// What kind of page this is, from its path relative to the site root
// (e.g. "contact.html", "damp-proofing/book-a-survey/index.html").
export function pageContext(path) {
  const p = path.replace(/^\.?\//, "");
  return {
    path: p,
    damp: p.startsWith("damp-proofing/"),
    dampBooking: p === "damp-proofing/book-a-survey/index.html",
    contact: p === "contact.html",
    water: p === "water-treatment.html",
  };
}

// The main call to action for a page: damp pages lead to the damp form.
function primaryCta(ctx) {
  if (ctx.dampBooking) return { href: "#damp-enquiry-form", label: "Book a damp survey", short: "Book survey" };
  if (ctx.damp) return { href: "/damp-proofing/book-a-survey/", label: "Book a damp survey", short: "Book survey" };
  if (ctx.contact) return { href: "#quote-form", label: "Get a quote", short: "Quote" };
  if (ctx.water) return { href: "#water-assessment-form", label: "Book assessment", short: "Book" };
  return { href: "/contact.html#quote-form", label: "Get a quote", short: "Get a quote" };
}

export const phoneLink = (cls = "", label = PHONE.display) =>
  `<a${cls ? ` class="${cls}"` : ""} href="tel:${PHONE.tel}" data-contact="phone">${label}</a>`;

// ---------------------------------------------------------------------------
// <head>
// ---------------------------------------------------------------------------
// Shared <head> tags: favicons, and the consent script. GA4 and the Meta
// Pixel are only ever loaded by consent.js, after the visitor accepts.
export function head() {
  return `  <link rel="icon" href="/favicon.ico" sizes="32x32">
  <link rel="icon" href="/assets/img/icons/icon-32.png" type="image/png" sizes="32x32">
  <link rel="apple-touch-icon" href="/assets/img/icons/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#ffffff">
  <script src="/assets/js/consent.js" defer></script>`;
}

// ---------------------------------------------------------------------------
// Header. On desktop (1180px+) the five top-level items sit across the top
// with hover/focus dropdowns; below that they live in the Menu panel.
// ---------------------------------------------------------------------------
const NAV = [
  { label: "Services", href: "/services.html", items: [
    ["Kitchens", "/kitchen-installs.html"],
    ["Bathrooms", "/bathroom-installs.html"],
    ["Full house renovations", "/full-house-renovations.html"],
    ["Garage conversions", "/garage-conversions/"],
    ["Conservatory transformations", "/conservatory-transformations/"],
    ["Garden rooms", "/garden-rooms/"],
    ["Orangeries", "/orangeries/"],
    ["Outdoor kitchens", "/outdoor-kitchens/"],
    ["Plastering", "/plastering.html"],
    ["Water treatment", "/water-treatment.html"],
    ["All services", "/services.html"],
  ] },
  { label: "Damp Proofing", href: "/damp-proofing/", items: [
    ["Book a damp survey", "/damp-proofing/book-a-survey/"],
    ["Damp surveys", "/damp-proofing/damp-surveys/"],
    ["Pre-purchase damp surveys", "/damp-proofing/pre-purchase-damp-survey/"],
    ["Landlord damp &amp; mould reports", "/damp-proofing/landlord-damp-mould-reports/"],
    ["Rising damp treatment", "/damp-proofing/rising-damp-treatment/"],
    ["Penetrating damp", "/damp-proofing/penetrating-damp/"],
    ["Condensation control", "/damp-proofing/condensation-control/"],
    ["Mould treatment", "/damp-proofing/mould-treatment/"],
    ["Cellar tanking", "/damp-proofing/cellar-tanking/"],
    ["All damp proofing", "/damp-proofing/"],
  ] },
  { label: "Our Work", href: "/work.html", items: [
    ["Recent work", "/work.html"],
    ["Project case studies", "/projects/"],
  ] },
  { label: "About", href: "/about.html", items: [
    ["About us", "/about.html"],
    ["Areas we cover", "/areas.html"],
    ["Guides and advice", "/guides/"],
  ] },
  { label: "Contact", href: "/contact.html" },
];

const navItem = (n) =>
  n.items
    ? `        <div class="nav-dropdown">
          <a href="${n.href}" class="nav-dropdown-toggle">${n.label}</a>
          <div class="nav-dropdown-menu">
${n.items.map(([label, href]) => `            <a href="${href}">${label}</a>`).join("\n")}
          </div>
        </div>`
    : `        <a href="${n.href}">${n.label}</a>`;

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------
export function header(ctx) {
  const cta = ctx.damp
    ? { href: "/damp-proofing/book-a-survey/", label: "Book a damp survey" }
    : { href: "/contact.html#quote-form", label: "Get a Quote" };
  return `  <header>
    <div class="container navbar">
      <a class="brand" href="/"><img src="${LOGO_PATH}" width="148" height="102" alt="East Yorkshire Renovations logo"><span>East Yorkshire Renovations</span></a>
      <nav id="primary-navigation" class="nav-links" aria-label="Primary">
${NAV.map(navItem).join("\n")}
      </nav>
      <div class="navbar-actions">
        ${phoneLink("nav-phone", `<span class="nav-phone-label">Call</span>${PHONE.display}`)}
        <a href="${cta.href}" class="nav-cta">${cta.label}</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="primary-navigation"><span class="nav-toggle-icon"></span>Menu</button>
      </div>
    </div>
  </header>`;
}

// ---------------------------------------------------------------------------
// Footer, preceded by the mobile call bar
// ---------------------------------------------------------------------------
function mobileBar(ctx) {
  const cta = primaryCta(ctx);
  const items = [
    phoneLink("mobile-bar-call", "Call"),
    WHATSAPP
      ? `<a class="mobile-bar-whatsapp" href="${WHATSAPP}" data-contact="whatsapp">WhatsApp</a>`
      : `<!-- TODO(owner): WhatsApp button appears here once WHATSAPP is set in scripts/data/business.mjs -->`,
    `<a class="mobile-bar-cta" href="${cta.href}">${WHATSAPP ? cta.short || cta.label : cta.label}</a>`,
  ];
  return `  <nav class="mobile-bar" aria-label="Quick contact">
    ${items.join("\n    ")}
  </nav>`;
}

// Only facts the owner has supplied (scripts/data/business.mjs). Until there
// are some, the column shows the damp guarantee, which is a published term.
export function credentialLines() {
  const lines = [];
  if (PUBLIC_LIABILITY) lines.push(`Public liability insurance: ${PUBLIC_LIABILITY} cover.`);
  for (const c of CREDENTIALS) lines.push(c.detail ? `${c.name} (${c.detail})` : c.name);
  if (COMPANY.companyNumber) lines.push(`${COMPANY.legalName}, company no. ${COMPANY.companyNumber}`);
  if (COMPANY.established) lines.push(`Trading since ${COMPANY.established}.`);
  return lines;
}

function credentialsColumn() {
  const lines = credentialLines();
  if (lines.length) {
    return `      <div>
        <h4>Credentials</h4>
${lines.map((l) => `        <p>${l}</p>`).join("\n")}
      </div>`;
  }
  return `      <div>
        <h4>Guarantees</h4>
        <p>Damp proofing work backed by written guarantees of up to 30 years. <a href="/damp-proofing/#guarantee">Guarantee terms</a></p>
        <!-- TODO(owner): insurance cover, qualifications, memberships and company details appear here once set in scripts/data/business.mjs. -->
      </div>`;
}

// Facebook, Instagram and Google profile links for the footer.
function followLinks() {
  const links = [
    ...SOCIAL_PROFILES.map((u) => [u.includes("facebook") ? "Facebook" : u.includes("instagram") ? "Instagram" : "Social", u]),
    GOOGLE_PROFILE ? ["Google reviews", GOOGLE_PROFILE] : null,
  ].filter(Boolean);
  if (!links.length) return "";
  return `        <p class="follow-links">${links.map(([label, href]) => `<a href="${href}" rel="noopener">${label}</a>`).join(" &middot; ")}</p>${GOOGLE_REVIEW_LINK ? `
        <p><a href="${GOOGLE_REVIEW_LINK}" rel="noopener">Leave us a Google review</a></p>` : ""}`;
}

export function footer(ctx) {
  return `${mobileBar(ctx)}

  <footer>
    <div class="container footer-grid">
      <div>
        <img class="footer-logo" src="${LOGO_PATH}" width="148" height="102" alt="East Yorkshire Renovations logo">
        <h3>${BUSINESS_NAME}</h3>
        <p>${ADDRESS_LINE}</p>
        <p>Phone: ${phoneLink()}</p>
        <p>Email: <a href="mailto:${EMAIL}">${EMAIL}</a></p>
${followLinks()}
      </div>
      <div>
        <h4>Opening hours</h4>
        <p>Mon&ndash;Fri: 08:00&ndash;16:30</p>
        <p>Closed weekends</p>
      </div>
${credentialsColumn()}
      <div>
        <h4>Explore</h4>
        <p><a href="/services.html">Renovation services</a></p>
        <p><a href="/damp-proofing/">Damp proofing</a></p>
        <p><a href="/areas.html">Areas we cover</a></p>
        <p><a href="/work.html">Recent work</a></p>
        <p><a href="/contact.html#quote-form">Request a quote</a></p>
        <p><a href="/privacy.html">Privacy policy</a></p>
        <p><a href="/privacy.html#cookies" data-cookie-settings>Cookie settings</a></p>
      </div>
    </div>
  </footer>`;
}

// ---------------------------------------------------------------------------
// Business JSON-LD (one per page, url = that page)
// ---------------------------------------------------------------------------
export function business(canonical) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": BUSINESS_ID,
    name: BUSINESS_NAME,
    image: `${SITE}${LOGO_PATH}`,
    logo: `${SITE}${LOGO_PATH}`,
    email: EMAIL,
    telephone: PHONE.schema,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Station Road",
      addressLocality: "Hessle",
      postalCode: "HU13 0BG",
      addressCountry: "GB",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:30",
      },
    ],
    areaServed: AREA_SERVED,
    url: canonical,
  };
  const links = sameAs();
  if (links.length) data.sameAs = links;
  return `  <script type="application/ld+json">
  ${JSON.stringify(data, null, 2).split("\n").join("\n  ")}
  </script>
  <!-- No geo coordinates or house number: the owner prefers not to publish the exact address. -->${links.length ? "" : `
  <!-- TODO(owner): sameAs links appear here once GOOGLE_PROFILE / SOCIAL_PROFILES are set in scripts/data/business.mjs. -->`}`;
}

// ---------------------------------------------------------------------------
// Reply-time promise, shown beside the forms and on the contact page
// ---------------------------------------------------------------------------
export function replyTime() {
  return REPLY_TIME
    ? `<p class="reply-time">${REPLY_TIME}</p>`
    : `<!-- TODO(owner): reply-time promise appears here once REPLY_TIME is set in scripts/data/business.mjs -->`;
}

// ---------------------------------------------------------------------------
// Reviews: real ones only, from scripts/data/business.mjs. Renders nothing
// (just a TODO comment) while the list is empty.
// ---------------------------------------------------------------------------
const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

export function reviews({ heading = "What customers say.", service } = {}) {
  const list = service ? REVIEWS.filter((r) => r.service === service).concat(REVIEWS.filter((r) => r.service !== service)) : REVIEWS;
  if (!list.length) {
    return `<!-- TODO(owner): a reviews block appears here once real reviews are added to REVIEWS in scripts/data/business.mjs. -->`;
  }
  const cards = list.slice(0, 3).map((r) => `          <figure class="review card">
            <blockquote>${esc(r.text)}</blockquote>
            <figcaption>${esc(r.name)}, ${esc(r.town)}${r.service ? ` &middot; ${esc(r.service)}` : ""}</figcaption>
          </figure>`).join("\n");
  return `    <section class="section reviews">
      <div class="container">
        <p class="kicker">Reviews</p>
        <h2 class="section-title">${heading}</h2>
        <div class="cards">
${cards}
        </div>${GOOGLE_PROFILE ? `
        <p><a href="${GOOGLE_PROFILE}" rel="noopener">Read all our reviews on Google</a></p>` : ""}
      </div>
    </section>`;
}

// One line under each form, pointing to the privacy policy.
export function formPrivacy() {
  return `<p class="form-note">We only use these details to reply to your enquiry. See our <a href="/privacy.html">privacy policy</a>.</p>`;
}

// All blocks for a page, already wrapped in their markers.
export function blocksFor(path, canonical) {
  const ctx = pageContext(path);
  return {
    head: wrap("head", head()),
    header: wrap("header", header(ctx)),
    footer: wrap("footer", footer(ctx)),
    business: wrap("business", business(canonical)),
    "reply-time": wrap("reply-time", replyTime()),
    "form-privacy": wrap("form-privacy", formPrivacy()),
    reviews: wrap("reviews", reviews()),
  };
}
