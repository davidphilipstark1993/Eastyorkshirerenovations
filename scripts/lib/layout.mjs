import { SITE, BUSINESS_NAME, BUSINESS_ID, EMAIL, ADDRESS_LINE, GA4_ID, LOGO_PATH, AREA_SERVED } from "./constants.mjs";
import { wrap, pageContext, head as siteHead, header as siteHeader, footer as siteFooter, business as siteBusiness } from "./site.mjs";

// "https://.../damp-proofing/x/" -> "damp-proofing/x/index.html"
export function pathFromCanonical(canonical) {
  const p = canonical.replace(SITE, "").replace(/^\//, "");
  return !p || p.endsWith("/") ? `${p}index.html` : p;
}

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
${wrap("head", siteHead())}
</head>`;
}

export function header(canonical) {
  return `<body>
  <a class="skip-link" href="#main">Skip to content</a>
${wrap("header", siteHeader(pageContext(pathFromCanonical(canonical))))}

  <main id="main">`;
}

export function footer(canonical) {
  return `  </main>

${wrap("footer", siteFooter(pageContext(pathFromCanonical(canonical))))}

  <script src="/assets/js/main.js" defer></script>
`;
}

export function ldBusiness(canonical) {
  return `${wrap("business", siteBusiness(canonical))}\n`;
}

// Any extra JSON-LD object, rendered like the others.
export function ldScript(data) {
  return `
  <script type="application/ld+json">
  ${JSON.stringify(data, null, 2).split("\n").join("\n  ")}
  </script>
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

export function page({ title, description, canonical, ogImage, body, breadcrumbs, faq, service, extraLd = [] }) {
  const parts = [
    headBlock({ title, description, canonical, ogImage }),
    header(canonical),
    body,
    footer(canonical),
    ldBusiness(canonical),
  ];
  if (breadcrumbs) parts.push(ldBreadcrumb(breadcrumbs));
  if (faq) parts.push(ldFAQ(faq));
  if (service) parts.push(ldService({ ...service, canonical }));
  for (const data of extraLd) parts.push(ldScript(data));
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
