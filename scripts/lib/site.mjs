// Single source for everything that is shared by every page: the tracking
// snippet in <head>, the header, the footer (with the mobile call bar) and
// the business JSON-LD.
//
// Generated pages get these through scripts/lib/layout.mjs. Hand-edited
// pages get them from scripts/sync-layout.mjs, which rewrites the block
// between each pair of <!-- site:NAME --> ... <!-- /site:NAME --> markers.
// To change the header, footer or tracking site-wide: edit this file, then
// run `node scripts/sync-layout.mjs`.
import { SITE, BUSINESS_NAME, BUSINESS_ID, EMAIL, ADDRESS_LINE, GA4_ID, LOGO_PATH, AREA_SERVED } from "./constants.mjs";
import { PHONE, WHATSAPP, REPLY_TIME, sameAs } from "../data/business.mjs";

export const BLOCKS = ["tracking", "header", "footer", "business"];
// Blocks that only some pages carry: replaced where their markers exist.
export const OPTIONAL_BLOCKS = ["reply-time"];
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
export function tracking() {
  return `  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${GA4_ID}');
  </script>
  <!-- Meta Pixel Code -->
  <script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '931428319606975');
  fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=931428319606975&ev=PageView&noscript=1"
  /></noscript>
  <!-- End Meta Pixel Code -->`;
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
      <div>
        <h4>Credentials</h4>
        <p>Fully insured local tradespeople.</p>
        <!-- TODO: add accreditation badges/numbers once confirmed - e.g. TrustMark registration number, FMB (Federation of Master Builders) membership number, NICEIC registration number, Part P registration number. -->
        <!-- TODO: add public liability insurance details (insurer + cover level) once confirmed. -->
        <!-- TODO: add Companies House company registration number once confirmed. -->
        <!-- TODO: add "Established [year]" once confirmed. -->
      </div>
      <div>
        <h4>Explore</h4>
        <p><a href="/services.html">Renovation services</a></p>
        <p><a href="/damp-proofing/">Damp proofing</a></p>
        <p><a href="/areas.html">Areas we cover</a></p>
        <p><a href="/work.html">Recent work</a></p>
        <p><a href="/contact.html#quote-form">Request a quote</a></p>
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

// All blocks for a page, already wrapped in their markers.
export function blocksFor(path, canonical) {
  const ctx = pageContext(path);
  return {
    tracking: wrap("tracking", tracking(ctx)),
    header: wrap("header", header(ctx)),
    footer: wrap("footer", footer(ctx)),
    business: wrap("business", business(canonical)),
    "reply-time": wrap("reply-time", replyTime()),
  };
}
