import { SITE, BUSINESS_NAME, BUSINESS_ID, EMAIL, ADDRESS_LINE, GA4_ID, LOGO_PATH, AREA_SERVED } from "./constants.mjs";

export function headBlock({ title, description, canonical, ogImage }) {
  const ogImageTags = ogImage
    ? `
  <meta property="og:image" content="${SITE}${ogImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="${SITE}${ogImage}">`
    : `
  <meta name="twitter:card" content="summary">`;

  return `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonical}">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">${ogImageTags}
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${GA4_ID}');
  </script>
</head>`;
}

export function header() {
  return `<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header>
    <div class="container navbar">
      <a class="brand" href="/"><img src="${LOGO_PATH}" width="148" height="102" alt="East Yorkshire Renovations logo"><span>East Yorkshire Renovations</span></a>
      <div class="navbar-actions">
        <a href="/contact.html#quote-form" class="nav-cta">Get a Quote</a>
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
  </header>

  <main id="main">`;
}

export function footer() {
  return `  </main>

  <footer>
    <div class="container footer-grid">
      <div>
        <img class="footer-logo" src="${LOGO_PATH}" width="148" height="102" alt="East Yorkshire Renovations logo">
        <h3>${BUSINESS_NAME}</h3>
        <!-- TODO: street address is missing a building/house number (currently just "Station Road"). This will cause Google Business Profile verification problems - add the number here and in the JSON-LD below. -->
        <p>${ADDRESS_LINE}</p>
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
        <p><a href="/areas.html">Areas we cover</a></p>
        <p><a href="/work.html">Recent work</a></p>
        <p><a href="/contact.html#quote-form">Request a quote</a></p>
      </div>
    </div>
  </footer>

  <script src="/assets/js/main.js" defer></script>
`;
}

export function ldBusiness(canonical) {
  return `  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "${BUSINESS_ID}",
    "name": "${BUSINESS_NAME}",
    "image": "${SITE}${LOGO_PATH}",
    "logo": "${SITE}${LOGO_PATH}",
    "email": "${EMAIL}",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Station Road",
      "addressLocality": "Hessle",
      "postalCode": "HU13 0BG",
      "addressCountry": "GB"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "16:30"
      }
    ],
    "areaServed": ${JSON.stringify(AREA_SERVED)},
    "url": "${canonical}"
  }
  </script>
  <!-- TODO: geo coordinates removed - the previous placeholder (0,0) pointed to "Null Island" in the Gulf of Guinea, worse for local SEO than omitting geo. Add real latitude/longitude once the full street address is confirmed. -->
  <!-- TODO: add a "sameAs" array with verified social profile URLs (Facebook, Instagram, etc.) once confirmed. -->
`;
}

export function ldBreadcrumb(items) {
  const itemListElement = items.map((item, index) => {
    const base = {
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
    };
    if (item.item) base.item = item.item;
    return base;
  });
  return `
  <script type="application/ld+json">
  ${JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement,
    },
    null,
    2
  ).split("\n").join("\n  ")}
  </script>
`;
}

export function ldFAQ(qas) {
  return `
  <script type="application/ld+json">
  ${JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: qas.map((qa) => ({
        "@type": "Question",
        name: qa.q,
        acceptedAnswer: { "@type": "Answer", text: qa.a },
      })),
    },
    null,
    2
  ).split("\n").join("\n  ")}
  </script>
`;
}

export function ldService({ name, description, canonical, areaServed }) {
  return `
  <script type="application/ld+json">
  ${JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: name,
      name: `${name} | ${BUSINESS_NAME}`,
      description,
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: BUSINESS_NAME,
        url: SITE,
      },
      areaServed: areaServed || AREA_SERVED,
      url: canonical,
    },
    null,
    2
  ).split("\n").join("\n  ")}
  </script>
`;
}

export function page({ title, description, canonical, ogImage, body, breadcrumbs, faq, service }) {
  const parts = [
    headBlock({ title, description, canonical, ogImage }),
    header(),
    body,
    footer(),
    ldBusiness(canonical),
  ];
  if (breadcrumbs) parts.push(ldBreadcrumb(breadcrumbs));
  if (faq) parts.push(ldFAQ(faq));
  if (service) parts.push(ldService({ ...service, canonical }));
  parts.push(`</body>\n</html>\n`);
  return parts.join("\n");
}

export function heroTextOnly({ kicker, h1, intro, primaryCta = { label: "Request a Free Quote", href: "/contact.html#quote-form" }, secondaryCta = { label: "View Our Recent Projects", href: "/work.html" }, image }) {
  return `    <section class="hero">
      <div class="container hero-grid">
        <div>
          <p class="kicker">${kicker}</p>
          <h1>${h1}</h1>
          <p>${intro}</p>
          <div class="button-group">
            <a class="btn primary" href="${primaryCta.href}">${primaryCta.label}</a>
            <a class="btn secondary" href="${secondaryCta.href}">${secondaryCta.label}</a>
          </div>
        </div>
        ${image
          ? `<div>
          <picture>
            <img src="${image.src}" width="${image.width || 1200}" height="${image.height || 800}" alt="${image.alt}" loading="eager" fetchpriority="high">
          </picture>
        </div>`
          : ""}
      </div>
    </section>
`;
}

export function stepsList(steps) {
  const items = steps.map((s) => `          <li><strong>${s.title}</strong><p>${s.body}</p></li>`).join("\n");
  return `        <ol class="steps">\n${items}\n        </ol>\n`;
}

export function faqList(qas) {
  const items = qas.map((qa) => `          <details>\n            <summary>${qa.q}</summary>\n            <p>${qa.a}</p>\n          </details>`).join("\n");
  return `        <div class="faq-list">\n${items}\n        </div>\n`;
}

export function relatedLinks(items) {
  const lis = items.map((i) => `          <li><a href="${i.href}">${i.label}</a></li>`).join("\n");
  return `        <ul>\n${lis}\n        </ul>\n`;
}

export function guidePage({ slug, categoryLabel, categoryPath, h1, title, description, intro, sections, faqs, related }) {
  const canonical = `${SITE}/guides/${slug}/`;
  const sectionsHtml = sections
    .map(
      (s) => `    <section class="section">
      <div class="container">
        <h2 class="section-title">${s.h2}</h2>
        ${s.paras.map((p) => `<p>${p}</p>`).join("\n        ")}
      </div>
    </section>
`
    )
    .join("\n");

  const body = `${heroTextOnly({
    kicker: categoryLabel,
    h1,
    intro,
    secondaryCta: { label: `More about ${categoryLabel.toLowerCase()}`, href: categoryPath },
  })}
${sectionsHtml}
    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Related reading</p>
          <h2 class="section-title">Continue exploring.</h2>
          ${relatedLinks(related)}
        </div>
        ${quoteCallout({
          heading: "Ready to talk through your project?",
          body: `Email <strong>${EMAIL}</strong> to arrange a site visit.`,
        })}
      </div>
    </section>
${faqs && faqs.length
  ? `
    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">FAQs.</h2>
        ${faqList(faqs)}
      </div>
    </section>
`
  : ""}`;

  return page({
    title,
    description,
    canonical,
    body,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Guides", item: `${SITE}/guides/` },
      { name: h1.replace(/\.$/, "") },
    ],
    faq: faqs,
  });
}

export function quoteCallout({ heading, body: bodyText, ctaLabel = "Request a quote", ctaHref = "/contact.html#quote-form" }) {
  return `        <div class="callout">
          <h3>${heading}</h3>
          <p>${bodyText}</p>
          <p><a class="btn" href="${ctaHref}">${ctaLabel}</a></p>
        </div>
`;
}

// AI-generated style-reference clips, not footage of completed EYR jobs -
// kept clearly labelled, both visibly (badge) and in the caption below.
export function conceptVideo({ src, poster }) {
  return `          <div class="video-wrap">
            <video controls muted loop playsinline preload="metadata"${poster ? ` poster="${poster}"` : ""}>
              <source src="${src}" type="video/mp4">
            </video>
            <span class="concept-badge">Concept video</span>
          </div>
`;
}

export function conceptVideoSection({ kicker = "Concept video", h1 = "See the style in motion.", videos }) {
  const items = Array.isArray(videos) ? videos : [videos];
  return `    <section class="section">
      <div class="container">
        <p class="kicker">${kicker}</p>
        <h2 class="section-title">${h1}</h2>
        <div class="video-grid">
${items.map((v) => conceptVideo(v)).join("")}        </div>
        <p class="video-disclaimer">AI-generated style reference${items.length > 1 ? "s" : ""} &mdash; not footage of a completed EYR project.</p>
      </div>
    </section>
`;
}
