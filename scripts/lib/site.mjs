// Single source for everything that is shared by every page: the tracking
// snippet in <head>, the header, the footer (with the mobile call bar) and
// the business JSON-LD.
//
// Generated pages get these through scripts/lib/layout.mjs. Hand-edited
// pages get them from scripts/sync-layout.mjs, which rewrites the block
// between each pair of <!-- site:NAME --> ... <!-- /site:NAME --> markers.
// To change the header, footer or tracking site-wide: edit this file, then
// run `node scripts/sync-layout.mjs`.
import { SITE, BUSINESS_NAME, BUSINESS_ID, EMAIL, ADDRESS_LINE, LOGO_PATH, AREA_SERVED } from "./constants.mjs";
import { PHONE, WHATSAPP, REPLY_TIME, GOOGLE_PROFILE, PUBLIC_LIABILITY, CREDENTIALS, COMPANY, REVIEWS, sameAs } from "../data/business.mjs";

export const BLOCKS = ["tracking", "header", "footer", "business"];
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
  if (ctx.dampBooking) return { href: "#damp-enquiry-form", label: "Book a damp survey" };
  if (ctx.damp) return { href: "/damp-proofing/book-a-survey/", label: "Book a damp survey" };
  if (ctx.contact) return { href: "#quote-form", label: "Get a quote" };
  if (ctx.water) return { href: "#water-assessment-form", label: "Book assessment" };
  return { href: "/contact.html#quote-form", label: "Get a quote" };
}

export const phoneLink = (cls = "", label = PHONE.display) =>
  `<a${cls ? ` class="${cls}"` : ""} href="tel:${PHONE.tel}" data-contact="phone">${label}</a>`;

// ---------------------------------------------------------------------------
// <head> tracking
// ---------------------------------------------------------------------------
// GA4 and the Meta Pixel are only loaded by consent.js, after the visitor
// accepts cookies. Nothing else in the page may load them.
export function tracking() {
  return `  <script src="/assets/js/consent.js" defer></script>`;
}

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
      <div class="navbar-actions">
        ${phoneLink("nav-phone", `<span class="nav-phone-label">Call</span>${PHONE.display}`)}
        <a href="${cta.href}" class="nav-cta">${cta.label}</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="primary-navigation"><span class="nav-toggle-icon"></span>Menu</button>
      </div>
      <nav id="primary-navigation" class="nav-links" aria-label="Primary">
        <a href="/">Home</a>
        <div class="nav-dropdown">
          <a href="/services.html" class="nav-dropdown-toggle">Services</a>
          <div class="nav-dropdown-menu">
            <a href="/kitchen-installs.html">Kitchen Installs</a>
            <a href="/bathroom-installs.html">Bathroom Installs</a>
            <a href="/full-house-renovations.html">Full House Renovations</a>
            <a href="/orangeries/">Orangeries</a>
            <a href="/conservatory-transformations/">Conservatory Transformations</a>
            <a href="/garden-rooms/">Garden Rooms</a>
            <a href="/garage-conversions/">Garage Conversions</a>
            <a href="/outdoor-kitchens/">Outdoor Kitchens</a>
            <a href="/water-treatment.html">Water Treatment</a>
            <a href="/services.html">View all services</a>
          </div>
        </div>
        <div class="nav-dropdown">
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
            <a href="/damp-proofing/book-a-survey/">Book a damp survey</a>
            <a href="/damp-proofing/">All damp proofing services</a>
          </div>
        </div>
        <a href="/work.html">Recent Work</a>
        <a href="/areas.html">Areas We Cover</a>
        <a href="/projects/">Projects</a>
        <a href="/guides/">Guides</a>
        <a href="/about.html">About</a>
        <a href="/blog/">Blog</a>
      </nav>
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
    `<a class="mobile-bar-cta" href="${cta.href}">${cta.label}</a>`,
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
  if (COMPANY.legalName) lines.push(`${COMPANY.legalName}${COMPANY.companyNumber ? `, company no. ${COMPANY.companyNumber}` : ""}`);
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

export function footer(ctx) {
  return `${mobileBar(ctx)}

  <footer>
    <div class="container footer-grid">
      <div>
        <img class="footer-logo" src="${LOGO_PATH}" width="148" height="102" alt="East Yorkshire Renovations logo">
        <h3>${BUSINESS_NAME}</h3>
        <!-- TODO: street address is missing a building/house number (currently just "Station Road"). This will cause Google Business Profile verification problems - add the number here and in the JSON-LD below. -->
        <p>${ADDRESS_LINE}</p>
        <p>Phone: ${phoneLink()}</p>
        <p>Email: <a href="mailto:${EMAIL}">${EMAIL}</a></p>
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
  <!-- TODO: geo coordinates removed - the previous placeholder (0,0) pointed to "Null Island" in the Gulf of Guinea, worse for local SEO than omitting geo. Add real latitude/longitude once the full street address is confirmed. -->${links.length ? "" : `
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
    tracking: wrap("tracking", tracking(ctx)),
    header: wrap("header", header(ctx)),
    footer: wrap("footer", footer(ctx)),
    business: wrap("business", business(canonical)),
    "reply-time": wrap("reply-time", replyTime()),
    "form-privacy": wrap("form-privacy", formPrivacy()),
    reviews: wrap("reviews", reviews()),
  };
}
