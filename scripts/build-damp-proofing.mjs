// Builds the damp proofing hub (/damp-proofing/) and its eight service pages.
//
// Copy the business still needs to supply is wrapped in ph("...") so it
// renders as a highlighted [PLACEHOLDER] on the page - search this file for
// "ph(" to find them all.
import { mkdirSync, writeFileSync, existsSync } from "fs";
import { headBlock, header, footer, ldBusiness, ldBreadcrumb, ldFAQ, stepsList, faqList } from "./lib/layout.mjs";
import { SITE, BUSINESS_NAME, BUSINESS_ID } from "./lib/constants.mjs";

const HUB = "/damp-proofing/";
const BOOK = "/damp-proofing/book-a-survey/";
const bookHref = (slug) => (slug ? `${BOOK}?service=${slug}` : BOOK);
const SURVEY_PRICE = "&pound;119";
const SURVEY_DEDUCTION = "deducted from the cost of any treatment if you accept our quote";
const REPORT_DAYS = "3 days";
const RESPONSE_TIME = "5 days";
const GUARANTEE_LINE = "Backed by guarantees of up to 30 years.";

// Damp-specific coverage. Hull, Beverley, Hessle and Cottingham have their
// own area pages, so they're linked where listed.
const AREAS = [
  { name: "Hull", href: "/hull.html" },
  { name: "Beverley", href: "/beverley.html" },
  { name: "Bridlington" },
  { name: "Driffield" },
  { name: "Goole" },
  { name: "Hessle", href: "/hessle.html" },
  { name: "Cottingham", href: "/cottingham.html" },
  { name: "Scunthorpe" },
  { name: "Grimsby" },
  { name: "Brigg" },
  { name: "Barton-upon-Humber" },
];
const AREA_SERVED = [...AREAS.map((a) => a.name), "East Riding of Yorkshire", "North Lincolnshire"];

// Guarantee periods. The hub's guarantee section sets out the full terms;
// each service page's booking callout repeats the line relevant to it.
const GUARANTEES = [
  { work: "Rising damp treatment (chemical damp-proof course injection)", period: "30 years" },
  { work: "Salt-resistant replastering carried out with rising damp treatment", period: "10 years" },
  { work: "Cellar tanking and cavity drain membrane systems", period: "10 years" },
  { work: "Masonry water-repellent treatments", period: "10 years" },
  { work: "Penetrating damp repairs (repointing, render repairs, gutter and downpipe work)", period: "2 years" },
  { work: "Condensation control installations (PIV units, extractor fans, trickle vents)", period: "2 years on our installation, plus the manufacturer&rsquo;s warranty on the unit" },
  { work: "Mould treatment, plastering, making good and decorating", period: "2 years" },
];
const TERMS = `${HUB}#guarantee`;
const PAGE_GUARANTEE = {
  "damp-surveys": "Any treatment we carry out after the survey comes with a written guarantee.",
  "pre-purchase-damp-survey": "Any treatment we carry out once you own the property comes with a written guarantee.",
  "landlord-damp-mould-reports": "Remedial work we carry out comes with a written guarantee, which stays with the property.",
  "rising-damp-treatment": "Damp-proof course injection: 30-year guarantee. Replastering: 10 years.",
  "penetrating-damp": "Water-repellent treatments: 10-year guarantee. Repairs: 2 years.",
  "condensation-control": "Installation: 2-year guarantee, plus the manufacturer&rsquo;s warranty on the unit.",
  "mould-treatment": "Treatment, plastering and decorating: 2-year guarantee.",
  "cellar-tanking": "Tanking and membrane systems: 10-year guarantee.",
};

const ph = (text) => `<span class="placeholder">[${text}]</span>`;

// FAQ answers can hold links and entities for the page; JSON-LD wants plain text.
function plain(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&rsquo;/g, "’")
    .replace(/&pound;/g, "£")
    .replace(/&amp;/g, "&");
}

// ---------------------------------------------------------------------------
// Page list - drives the nav order, hub cards and related links.
// ---------------------------------------------------------------------------
const PAGES = {
  "damp-surveys": {
    group: "investigation",
    label: "Damp surveys",
    card: "A proper look at the damp in your home: moisture readings, the likely cause and a written report explaining what, if anything, needs doing.",
  },
  "pre-purchase-damp-survey": {
    group: "investigation",
    label: "Pre-purchase damp surveys",
    card: "For buyers whose mortgage survey says “damp noted”. We find out what’s actually going on before you commit.",
  },
  "landlord-damp-mould-reports": {
    group: "investigation",
    label: "Landlord damp &amp; mould reports",
    card: "Fast inspections for landlords and letting agents, with written evidence of what we found and the work carried out.",
  },
  "rising-damp-treatment": {
    group: "treatment",
    label: "Rising damp treatment",
    card: "Chemical damp-proof course injection and salt-resistant replastering, only once we’ve confirmed rising damp is really the cause.",
  },
  "penetrating-damp": {
    group: "treatment",
    label: "Penetrating damp repairs",
    card: "Stopping rain getting in: repointing, gutters and downpipes, render repairs, ground levels and masonry water-repellent treatments.",
  },
  "condensation-control": {
    group: "treatment",
    label: "Condensation control",
    card: "PIV units, extractor fans and trickle vents, sized to your home rather than a one-size-fits-all package.",
  },
  "mould-treatment": {
    group: "treatment",
    label: "Mould treatment",
    card: "Removing and treating mould, fixing whatever is feeding it, then redecorating so it looks right again.",
  },
  "cellar-tanking": {
    group: "treatment",
    label: "Cellar tanking",
    card: "Cellar and basement waterproofing using tanking or membrane systems, finished and made good by us.",
  },
};
const url = (slug) => `${HUB}${slug}/`;
const link = (slug, text) => `<a href="${url(slug)}">${text || PAGES[slug].label}</a>`;

// ---------------------------------------------------------------------------
// Shared blocks
// ---------------------------------------------------------------------------
function hero({ kicker, h1, intro, service, secondary = { label: "All damp proofing services", href: HUB } }) {
  return `    <section class="hero">
      <div class="container hero-grid">
        <div>
          <p class="kicker">${kicker}</p>
          <h1>${h1}</h1>
          <p>${intro}</p>
          <p class="guarantee-line">${GUARANTEE_LINE}</p>
          <div class="button-group">
            <a class="btn primary" href="${bookHref(service)}">Book a damp survey</a>
            <a class="btn secondary" href="${secondary.href}">${secondary.label}</a>
          </div>
        </div>
      </div>
    </section>
`;
}

function section({ kicker, h2, paras = [], list, after = [] }) {
  return `    <section class="section">
      <div class="container">
        ${kicker ? `<p class="kicker">${kicker}</p>\n        ` : ""}<h2 class="section-title">${h2}</h2>
        ${paras.map((p) => `<p>${p}</p>`).join("\n        ")}${list ? `\n        <ul>\n${list.map((li) => `          <li>${li}</li>`).join("\n")}\n        </ul>` : ""}${after.length ? "\n        " + after.map((p) => `<p>${p}</p>`).join("\n        ") : ""}
      </div>
    </section>
`;
}

function bookingCallout({ heading = "Book a damp survey", body, service }) {
  return `        <div class="callout">
          <h3>${heading}</h3>
          <p>${body}</p>
          <p class="guarantee-line">${GUARANTEE_LINE}</p>
          ${service ? `<p>${PAGE_GUARANTEE[service]} <a href="${TERMS}">Guarantee terms</a>.</p>\n          ` : ""}<p><a class="btn" href="${bookHref(service)}">Book a damp survey</a></p>
        </div>
`;
}

function makingGood(text) {
  return `    <section class="section">
      <div class="container">
        <p class="kicker">One firm for the whole job</p>
        <h2 class="section-title">We do the replastering and making good ourselves.</h2>
        <p>${text}</p>
        <p>That means one firm, one point of contact and one price, with no gap between the damp work finishing and a separate plasterer or decorator turning up. See our <a href="/plastering.html">plastering</a> and <a href="/decorating.html">decorating</a> services for more on that side of the work.</p>
      </div>
    </section>
`;
}

// Before/after slots. Drop images into assets/img/damp/ named
// <slug>-before.jpg / <slug>-after.jpg for real job photos, or with an -ai
// suffix (<slug>-before-ai.jpg) for AI-generated illustrations, which get a
// visible "AI-generated illustration" badge and a disclaimer - the same
// convention as the site's other *-ai.jpg concept images. Real photos take
// priority. Slots with no image show a placeholder. Images should be 4:3.
// docs/damp-image-prompts.md has a prompt for each slot.
const IMG_DIR = "assets/img/damp";

function photoSlot(slug, stage, caption) {
  const real = `${IMG_DIR}/${slug}-${stage}.jpg`;
  const ai = `${IMG_DIR}/${slug}-${stage}-ai.jpg`;
  if (existsSync(real)) {
    return { kind: "real", html: `          <figure class="photo-slot">
            <img src="/${real}" width="1200" height="900" alt="${plain(caption)}" loading="lazy">
            <figcaption>${caption}</figcaption>
          </figure>` };
  }
  if (existsSync(ai)) {
    return { kind: "ai", html: `          <figure class="photo-slot">
            <img src="/${ai}" width="1200" height="900" alt="AI-generated illustration - ${plain(caption)}, not a photo of an EYR job" loading="lazy">
            <span class="concept-badge">AI-generated illustration</span>
            <figcaption>${caption}</figcaption>
          </figure>` };
  }
  return { kind: "empty", html: `          <div class="photo-placeholder" role="img" aria-label="Photo to follow: ${plain(caption)}">
            <strong>${caption}</strong>
            <span class="placeholder">[PLACEHOLDER: add real photo from an EYR job]</span>
          </div>` };
}

function photoSlots(slug, captions) {
  const slots = [photoSlot(slug, "before", captions[0]), photoSlot(slug, "after", captions[1])];
  const hasAi = slots.some((s) => s.kind === "ai");
  const allReal = slots.every((s) => s.kind === "real");
  const note = hasAi
    ? "Images marked &ldquo;AI-generated illustration&rdquo; show typical damp problems and repairs. They aren&rsquo;t photos of our own work, and we&rsquo;ll replace them with photos from real jobs as they&rsquo;re completed."
    : allReal
      ? ""
      : "We&rsquo;ll add photos from real jobs here as they&rsquo;re completed. We don&rsquo;t use stock images of other people&rsquo;s work.";
  return `    <section class="section">
      <div class="container">
        <p class="kicker">Before &amp; after</p>
        <h2 class="section-title">${hasAi ? "What it looks like before and after." : "Photos from our damp work."}</h2>
        <div class="photo-placeholder-grid">
${slots.map((s) => s.html).join("\n")}
        </div>${note ? `\n        <p>${note}</p>` : ""}
      </div>
    </section>
`;
}

function relatedAndBook({ related, callout, service }) {
  const items = [`<a href="${HUB}">All damp proofing services</a>`, ...related.map((s) => link(s))];
  return `    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Related services</p>
          <h2 class="section-title">Other damp problems we deal with.</h2>
          <ul>
${items.map((i) => `            <li>${i}</li>`).join("\n")}
          </ul>
        </div>
${bookingCallout({ ...callout, service })}      </div>
    </section>
`;
}

function faqSection(h2, faqs) {
  return `    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">${h2}</h2>
${faqList(faqs)}      </div>
    </section>
`;
}

function ldService({ name, serviceType, description, canonical }) {
  return `
  <script type="application/ld+json">
  ${JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType,
      name,
      description,
      provider: { "@type": "HomeAndConstructionBusiness", "@id": BUSINESS_ID, name: BUSINESS_NAME, url: `${SITE}/` },
      areaServed: AREA_SERVED.map((n) => ({ "@type": "Place", name: n })),
      url: canonical,
    },
    null,
    2
  ).split("\n").join("\n  ")}
  </script>
`;
}

function writePage({ path, title, description, crumb, body, faqs, service }) {
  const canonical = `${SITE}${path}`;
  const breadcrumbs = [{ name: "Home", item: `${SITE}/` }];
  if (path !== HUB) breadcrumbs.push({ name: "Damp Proofing", item: `${SITE}${HUB}` });
  breadcrumbs.push({ name: crumb });

  const html = [
    headBlock({ title, description, canonical }),
    // On damp pages the header's "Get a Quote" button goes to the damp form.
    header().replace('<a href="/contact.html#quote-form" class="nav-cta">', `<a href="${BOOK}" class="nav-cta">`),
    body,
    footer(),
    ldBusiness(canonical),
    ldBreadcrumb(breadcrumbs),
    faqs ? ldFAQ(faqs.map((f) => ({ q: plain(f.q), a: plain(f.a) }))) : "",
    service ? ldService({ ...service, canonical }) : "",
    `</body>\n</html>\n`,
  ].join("\n");

  const dir = path.replace(/^\//, "").replace(/\/$/, "");
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, html);
  console.log(`wrote ${dir}/index.html`);
}

// Service page wrapper: hero, body sections, making good, photos,
// related links + booking callout, FAQs.
function servicePage({ slug, kicker, title, description, h1, intro, sections, makingGoodText, photos, related, callout, faqH2, faqs, service }) {
  const body = [
    hero({ kicker, h1, intro, service: slug }),
    ...sections.map(section),
    makingGood(makingGoodText),
    photoSlots(slug, photos),
    relatedAndBook({ related, callout, service: slug }),
    faqSection(faqH2, faqs),
  ].join("\n");
  writePage({ path: url(slug), title, description, crumb: PAGES[slug].label.replace(/&amp;/g, "&"), body, faqs, service });
}

// ---------------------------------------------------------------------------
// Hub
// ---------------------------------------------------------------------------
function hubCards(group) {
  const cards = Object.entries(PAGES)
    .filter(([, p]) => p.group === group)
    .map(
      ([slug, p]) => `          <article class="card">
            <h3>${link(slug)}</h3>
            <p>${p.card}</p>
            <p>${link(slug, `More about ${p.label.charAt(0).toLowerCase()}${p.label.slice(1)}`)}</p>
          </article>`
    )
    .join("\n");
  return `        <div class="cards">\n${cards}\n        </div>\n`;
}

const hubFaqs = [
  {
    q: "Do I need a damp survey before any work is done?",
    a: "Yes. We won&rsquo;t quote for damp treatment without looking at the cause first. Rising damp, penetrating damp and condensation can look similar on the wall but need completely different fixes, and treating the wrong one wastes money.",
  },
  {
    q: "Will you always recommend a treatment?",
    a: "No. If the answer is a blocked gutter, a leaking pipe or better ventilation, that&rsquo;s what the report will say. Sometimes the honest answer is that no specialist treatment is needed at all.",
  },
  {
    q: "What does the guarantee cover?",
    a: "If work we carried out fails within the guarantee period, we inspect it free of charge and put it right at no cost. Guarantees run from 2 years for repairs and ventilation up to 30 years for a damp-proof course. They don&rsquo;t cover damp from a different cause, or later work that bridges the damp-proof course. The full terms are in our guarantee section above.",
  },
  {
    q: "Do you do the plastering afterwards?",
    a: "Yes. We carry out the replastering and making good ourselves, so you&rsquo;re not left to find a separate plasterer once the damp work is finished.",
  },
];

const hubBody = [
  hero({
    kicker: "Damp proofing",
    h1: "Damp proofing and damp surveys in Hull &amp; East Yorkshire.",
    intro: "We find out what&rsquo;s actually causing the damp before recommending anything. Then, if work is needed, we carry it out, replaster and make good ourselves, across Hull, the East Riding and North Lincolnshire.",
    secondary: { label: "How it works", href: "#how-it-works" },
  }),
  section({
    kicker: "Cause first",
    h2: "Diagnose the real cause, then fix only what needs fixing.",
    paras: [
      "Damp is one of the most commonly misdiagnosed problems in a house. A damp patch low on a wall is often blamed on rising damp when the real cause is a leaking downpipe, soil banked up against the brickwork or condensation from everyday living. Injecting a new damp-proof course won&rsquo;t fix any of those.",
      "So every job starts with a survey. We take moisture readings, look at the pattern of the damp inside and the condition of the building outside, and work out the cause. You get a written report in plain English. If the fix is simple, or no specialist treatment is needed at all, we&rsquo;ll tell you.",
    ],
  }),
  `    <section class="section">
      <div class="container">
        <p class="kicker">Investigations &amp; reports</p>
        <h2 class="section-title">Damp surveys and reports.</h2>
${hubCards("investigation")}      </div>
    </section>
`,
  `    <section class="section">
      <div class="container">
        <p class="kicker">Treatments</p>
        <h2 class="section-title">Damp treatments and repairs.</h2>
${hubCards("treatment")}      </div>
    </section>
`,
  `    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">One firm for the whole job</p>
          <h2 class="section-title">We do the plastering and making good ourselves.</h2>
          <p>A lot of damp work involves stripping out plaster, and that&rsquo;s where jobs often stall: the damp specialist leaves, and you&rsquo;re left with bare walls, waiting for a plasterer and a decorator.</p>
          <p>We&rsquo;re a renovation firm, so we do the <a href="/plastering.html">plastering</a>, making good and <a href="/decorating.html">decorating</a> ourselves. One firm diagnoses the problem, carries out the treatment and puts the room back together, with one point of contact and one price.</p>
        </div>
${bookingCallout({ body: `Tell us where the damp is and what you&rsquo;ve noticed, and we&rsquo;ll arrange a visit. Surveys cost ${SURVEY_PRICE}, ${SURVEY_DEDUCTION}.` })}      </div>
    </section>
`,
  `    <section class="section" id="how-it-works">
      <div class="container">
        <p class="kicker">How it works</p>
        <h2 class="section-title">From survey to guarantee.</h2>
${stepsList([
  { title: "Survey", body: "We inspect the affected areas inside and out, take moisture readings and work out the cause." },
  { title: "Written report", body: "You get a plain-English report of what we found, what&rsquo;s causing it and what we recommend." },
  { title: "Quote", body: `If work is needed, we give you a clear written quote covering the treatment, replastering and making good. Accept it and your ${SURVEY_PRICE} survey fee is deducted.` },
  { title: "The work", body: "We carry out the repair or treatment, then replaster, make good and decorate where needed." },
  { title: "Guarantee", body: "Completed work is backed by a written guarantee of up to 30 years, depending on the treatment." },
])}      </div>
    </section>
`,
  `    <section class="section" id="guarantee">
      <div class="container">
        <p class="kicker">Guarantee</p>
        <h2 class="section-title">Guarantees of up to 30 years.</h2>
        <p>Our damp proofing work is backed by written guarantees of up to 30 years. The length depends on the work. A damp-proof course is designed to last for decades, while repairs and ventilation depend more on how the house is used and looked after:</p>
        <ul>
${GUARANTEES.map((g) => `          <li><strong>${g.work}:</strong> ${g.period}</li>`).join("\n")}
        </ul>
        <h3>What the guarantee covers</h3>
        <p>If the work we carried out fails within the guarantee period, we&rsquo;ll inspect it free of charge and put it right, including re-treating and making good the affected area, at no cost to you.</p>
        <h3>What it doesn&rsquo;t cover</h3>
        <ul>
          <li>Damp from a different cause than the one we treated. For example, a rising damp guarantee doesn&rsquo;t cover condensation or a leaking gutter.</li>
          <li>Areas of the property we didn&rsquo;t treat.</li>
          <li>The damp-proof course being bridged after our work, for example by raising soil, path or patio levels, or rendering over it.</li>
          <li>Structural movement, flooding, burst or leaking pipes, and alterations or damage by others.</li>
          <li>Problems caused by a lack of reasonable maintenance, such as blocked gutters or, on membrane systems, a sump pump that hasn&rsquo;t had its annual service.</li>
        </ul>
        <h3>Conditions</h3>
        <ul>
          <li>We issue your guarantee certificate in writing once the work has been paid for in full.</li>
          <li>The guarantee stays with the property. If you sell, it passes to the new owner at no charge. Just give them the certificate.</li>
          <li>Follow the drying-out and decorating advice we give you for newly plastered walls.</li>
        </ul>
        <p>The guarantee is provided by ${BUSINESS_NAME}. We&rsquo;ll give you the full terms in writing with your quote, so you know exactly what&rsquo;s covered before you agree to anything.</p>
      </div>
    </section>
`,
  photoSlots("damp-proofing", ["Before: damp or mould damage", "After: treated, replastered and redecorated"]),
  `    <section class="section">
      <div class="container">
        <p class="kicker">Areas covered</p>
        <h2 class="section-title">Damp proofing across Hull, East Yorkshire and North Lincolnshire.</h2>
        <p>Based in Hessle, we carry out damp surveys and treatments across:</p>
        <ul class="area-list">
${AREAS.map((a) => `          <li>${a.href ? `<a href="${a.href}">${a.name}</a>` : a.name}</li>`).join("\n")}
        </ul>
        <p>We also cover the villages in between. If you&rsquo;re not sure whether we reach you, <a href="${BOOK}">get in touch</a> with your postcode or see <a href="/areas.html">all the areas we cover</a>.</p>
      </div>
    </section>
`,
  faqSection("Damp proofing FAQs.", hubFaqs),
].join("\n");

writePage({
  path: HUB,
  title: "Damp Proofing & Damp Surveys Hull & East Yorkshire | EYR",
  description: "Damp surveys and damp proofing in Hull, East Yorkshire and North Lincolnshire. We find the real cause first, then treat, replaster and make good ourselves.",
  crumb: "Damp Proofing",
  body: hubBody,
  faqs: hubFaqs,
  service: {
    name: "Damp Proofing & Damp Surveys in Hull & East Yorkshire",
    serviceType: "Damp proofing",
    description: "Damp surveys, damp proofing, condensation control, mould treatment and cellar tanking across Hull, the East Riding and North Lincolnshire, including replastering and making good.",
  },
});

// ---------------------------------------------------------------------------
// 1. Damp surveys
// ---------------------------------------------------------------------------
servicePage({
  slug: "damp-surveys",
  kicker: "Damp surveys",
  title: "Damp Surveys Hull & East Yorkshire | EYR",
  description: "Damp surveys in Hull and East Yorkshire. Moisture readings, a clear diagnosis of rising damp, penetrating damp or condensation, and a written report.",
  h1: "Damp surveys in Hull &amp; East Yorkshire.",
  intro: "A proper damp survey tells you what&rsquo;s causing the damp, not just that it&rsquo;s there. We take readings, look at the building inside and out, and put our findings in a written report.",
  sections: [
    {
      kicker: "What the survey involves",
      h2: "What happens during a damp survey.",
      paras: ["We look at the whole picture rather than pointing a meter at one wall. A typical survey covers:"],
      list: [
        "<strong>Moisture readings</strong> across the affected walls and nearby unaffected areas, so we can see how far the damp goes and how it changes with height.",
        "<strong>The pattern of the damp</strong>: where it sits, its shape, any tide marks or salt staining, and whether it follows a pipe, a window or a corner.",
        "<strong>An outside inspection</strong> of gutters, downpipes, pointing, render, window sills, the damp-proof course line and the ground level against the walls.",
        "<strong>Ventilation and humidity</strong>: extractor fans, trickle vents, heating and how the rooms are used, since condensation is one of the most common causes of damp and mould.",
        "<strong>A talk with you</strong> about when the damp appears, whether it&rsquo;s worse in wet weather or in winter, and any work done on the house before.",
      ],
      after: ["Moisture meters are a useful guide but can give misleading readings on their own, for example on walls with salts or foil-backed wallpaper. That&rsquo;s why we don&rsquo;t diagnose from readings alone."],
    },
    {
      kicker: "Telling damp apart",
      h2: "Rising damp, penetrating damp or condensation?",
      paras: [
        `<strong>Rising damp</strong> is ground moisture drawn up through the wall where the damp-proof course has failed, been bridged or was never there. It usually sits low on ground-floor walls, often with a tide mark and salt staining, and doesn&rsquo;t change much with the weather. Read more about ${link("rising-damp-treatment", "rising damp treatment")}.`,
        `<strong>Penetrating damp</strong> is water getting in from outside through defects in the building: failed pointing, leaking gutters, cracked render or high ground levels. It can appear at any height, is often patchy and usually gets worse after rain. Read more about ${link("penetrating-damp", "penetrating damp repairs")}.`,
        `<strong>Condensation</strong> is moisture from inside the house (cooking, washing, drying clothes, breathing) settling on cold surfaces. It shows up as streaming windows and black mould in corners, behind furniture and on outside walls, and is usually worst in winter. Read more about ${link("condensation-control", "condensation control")}.`,
        "Some homes have more than one of these at once. The report will say so, and deal with each one separately.",
      ],
    },
    {
      kicker: "The written report",
      h2: "What&rsquo;s in your written report.",
      paras: ["After the survey you get a written report that covers:"],
      list: [
        "Where we found damp and the readings we took",
        "What we believe is causing it, and why",
        "Photos of the affected areas and any defects outside",
        "What we recommend, in order of priority, including simple fixes you can do yourself",
        "A quote for any work you&rsquo;d like us to carry out, including replastering and making good",
      ],
      after: [`A damp survey costs ${SURVEY_PRICE}. If you go ahead with treatment, the ${SURVEY_PRICE} is deducted from the cost of the work when you accept our quote.`],
    },
  ],
  makingGoodText: "If the survey shows work is needed, we can carry it out from start to finish: the damp treatment itself, then hacking off and replastering, making good around sockets and fittings, and decorating if you want us to.",
  photos: ["Before: damp patch on internal wall", "After: cause fixed, wall replastered"],
  related: ["rising-damp-treatment", "condensation-control"],
  callout: { body: `Surveys cost ${SURVEY_PRICE}, ${SURVEY_DEDUCTION}. Tell us where the damp is and we&rsquo;ll arrange a visit.` },
  faqH2: "Damp survey FAQs.",
  faqs: [
    { q: "How much does a damp survey cost?", a: `A damp survey costs ${SURVEY_PRICE}. If you accept our quote for treatment, the ${SURVEY_PRICE} is deducted from the cost of the work.` },
    { q: "How long does a damp survey take?", a: "It depends on the size of the house and how many areas are affected. We&rsquo;ll give you an idea of timing when you book." },
    { q: "Will you just try to sell me a damp-proof course?", a: "No. A lot of damp isn&rsquo;t rising damp at all, and a new damp-proof course won&rsquo;t fix condensation or a leaking gutter. We recommend what the evidence points to, and if no treatment is needed we&rsquo;ll say so." },
    { q: "Do I need to do anything before the survey?", a: "Where possible, clear furniture away from the affected walls and let us know about any past damp work, leaks or building work. Don&rsquo;t redecorate over the damp beforehand, as it hides the evidence we need to see." },
  ],
  service: {
    name: "Damp Surveys in Hull & East Yorkshire",
    serviceType: "Damp survey",
    description: "Damp surveys with moisture readings, cause diagnosis (rising damp, penetrating damp or condensation) and a written report, across Hull, East Yorkshire and North Lincolnshire.",
  },
});

// ---------------------------------------------------------------------------
// 2. Pre-purchase damp survey
// ---------------------------------------------------------------------------
servicePage({
  slug: "pre-purchase-damp-survey",
  kicker: "Pre-purchase damp surveys",
  title: "Pre-Purchase Damp Survey Hull & East Yorkshire | EYR",
  description: "Buying a house and the survey says “damp noted”? Our pre-purchase damp surveys in Hull and East Yorkshire find the cause and what it will cost to fix.",
  h1: "Pre-purchase damp surveys for home buyers.",
  intro: "If your mortgage valuation or home survey says “damp noted” or “further investigation recommended”, we&rsquo;ll find out what&rsquo;s really going on before you commit to buying.",
  sections: [
    {
      kicker: "Why “damp noted” isn&rsquo;t enough",
      h2: "Why mortgage surveys often just say “damp noted”.",
      paras: [
        "Mortgage valuations and general home surveys cover the whole property, and the surveyor usually has limited time in each room. If a meter reading is high, the standard response is to note damp and recommend a specialist looks at it. They&rsquo;re not being unhelpful. It&rsquo;s simply outside the scope of that survey.",
        "That leaves you with a vague warning and no idea whether it means a quick gutter repair or a major job. Some lenders also ask for a specialist damp report before they&rsquo;ll go ahead.",
      ],
    },
    {
      kicker: "What we do",
      h2: "What a pre-purchase damp survey covers.",
      paras: [
        `It&rsquo;s the same thorough inspection as our standard ${link("damp-surveys", "damp survey")}: moisture readings, the pattern of the damp, an outside inspection and a check on ventilation. We focus on the areas flagged in your survey and look at the rest of the house for any other signs.`,
        "Your report explains what&rsquo;s causing the damp, whether it&rsquo;s rising damp, penetrating damp, condensation or a combination, and what it will take to put right. We include a quote for any work, so you have a real figure to take into negotiations rather than a guess.",
      ],
    },
    {
      kicker: "How it differs",
      h2: "How it differs from a standard damp survey.",
      paras: ["The inspection itself is the same. What changes is that you don&rsquo;t own the property yet, and you&rsquo;re working to a deadline:"],
      list: [
        "<strong>Access through the seller.</strong> We arrange the visit through the estate agent, and we can&rsquo;t move heavy furniture, lift floor coverings or remove plaster in someone else&rsquo;s home. The report is clear about anything we couldn&rsquo;t see.",
        `<strong>Faster turnaround.</strong> Your report is with you within ${REPORT_DAYS}, so it fits around your mortgage offer and exchange dates.`,
        "<strong>Written for a buying decision.</strong> The report sets out what the damp means for the purchase, with a quote for putting it right that you can share with the seller, your lender or your solicitor.",
      ],
    },
    {
      kicker: "Timing &amp; access",
      h2: "Turnaround and arranging access.",
      paras: [
        `Property purchases run to tight timescales, so we aim to get your written report to you within ${REPORT_DAYS} of the survey.`,
        "As the property isn&rsquo;t yours yet, we&rsquo;ll need the seller&rsquo;s permission to visit. Usually the easiest way is for you to ask the estate agent to arrange access, and we&rsquo;ll work around the time they give us.",
        `A pre-purchase damp survey costs ${SURVEY_PRICE}. If you buy the property and go ahead with our quote for treatment, the ${SURVEY_PRICE} is deducted from the cost of the work.`,
      ],
    },
  ],
  makingGoodText: "If you go ahead with the purchase, we can carry out the work in the report once you own the property, including the replastering and making good. That often fits well alongside other renovation work you&rsquo;re planning before you move in.",
  photos: ["Before: damp flagged on a buyer&rsquo;s survey", "After: cause fixed and wall made good"],
  related: ["damp-surveys", "rising-damp-treatment"],
  callout: { heading: "Buying a property with damp?", body: `Send us the address, the relevant part of your survey and your timescales, and we&rsquo;ll arrange a visit. Reports within ${REPORT_DAYS}.` },
  faqH2: "Pre-purchase damp survey FAQs.",
  faqs: [
    { q: "My survey says “damp noted”. Should I pull out of the purchase?", a: "Not necessarily. Many damp problems have simple causes and straightforward fixes. A specialist survey tells you what you&rsquo;re dealing with, so you can decide with the facts in front of you." },
    { q: "How quickly will I get the report?", a: `We aim to send the written report within ${REPORT_DAYS} of the survey. Let us know your deadlines when you book.` },
    { q: "Can I use your report to negotiate on price?", a: "The report includes our findings and a quote for any work needed, which many buyers share with the seller or agent. How you use it is up to you." },
    { q: "Do I need to be at the survey?", a: "No, though you&rsquo;re welcome to come. We need access arranged through the seller or estate agent, and we&rsquo;ll talk you through the findings afterwards." },
  ],
  service: {
    name: "Pre-Purchase Damp Surveys in Hull & East Yorkshire",
    serviceType: "Pre-purchase damp survey",
    description: "Specialist damp surveys for home buyers whose mortgage or home survey has flagged damp, with a written report and quote for any remedial work.",
  },
});

// ---------------------------------------------------------------------------
// 3. Landlord damp & mould reports
// ---------------------------------------------------------------------------
servicePage({
  slug: "landlord-damp-mould-reports",
  kicker: "Landlords &amp; letting agents",
  title: "Landlord Damp & Mould Reports Hull & East Riding | EYR",
  description: "Damp and mould inspections for landlords and letting agents in Hull and East Yorkshire. Fast response, written findings and evidence of work completed.",
  h1: "Damp and mould reports for landlords and letting agents.",
  intro: "When a tenant reports damp or mould, you need someone to look at it quickly, find the cause, fix it properly and give you a written record of the whole thing.",
  sections: [
    {
      kicker: "Fast response",
      h2: "Quick inspections when a tenant reports damp or mould.",
      paras: [
        `Damp and mould complaints shouldn&rsquo;t be left to sit. We aim to inspect within ${RESPONSE_TIME} of your request, and we can arrange access directly with the tenant or through your letting agent.`,
        `Our inspection is the same thorough process as our standard ${link("damp-surveys", "damp survey")}. We take moisture readings, inspect the property inside and out, and check ventilation and extraction, so the report deals with the cause and not just the mould on the surface.`,
      ],
    },
    {
      kicker: "Written evidence",
      h2: "A written record of findings and work done.",
      paras: ["You get documents you can keep on file:"],
      list: [
        "<strong>An inspection report</strong> with dated photos, moisture readings, the likely cause and our recommendations",
        "<strong>A quote</strong> for the recommended work, including replastering and redecorating",
        "<strong>A completion record</strong> once work is done, with photos and a description of what was carried out",
        "<strong>Guarantee paperwork</strong> for treatments that carry one",
      ],
      after: [
        "We&rsquo;re honest about causes. Condensation is often made worse by things that are the landlord&rsquo;s to fix, such as weak or missing extractor fans, no background ventilation or cold walls, and we&rsquo;ll say so rather than defaulting to blaming the tenant. Where the tenant&rsquo;s habits are part of the picture, we&rsquo;ll say that too, fairly.",
        `A landlord damp and mould report costs &pound;99.`,
      ],
    },
    {
      kicker: "Letting agents",
      h2: "Working with letting agents.",
      paras: [
        "We&rsquo;re happy to take instructions from letting agents on the landlord&rsquo;s behalf. We can collect keys, contact tenants to arrange access, and send reports and quotes to the agent, the landlord or both. If you manage several properties, we can work to your usual process for approvals and invoicing.",
      ],
    },
    {
      kicker: "Your responsibilities",
      h2: "Landlords&rsquo; legal duty on damp and mould.",
      paras: [
        "Landlords already have a legal duty to keep rented homes free from serious hazards, and damp and mould are among the most common. The rules for both social and private landlords have been tightening, so it matters more than ever to act on reports promptly and to keep a record of what was found and done.",
        "We&rsquo;re not legal advisers. For the specific requirements and timescales that apply to your properties, check with your letting agent, your local council or a legal adviser. What we can give you is a clear diagnosis, a proper fix and the paperwork to show it.",
      ],
    },
  ],
  makingGoodText: "Once the cause is dealt with, we treat and remove the mould, replaster any damaged areas and redecorate, so the property is ready for the tenant to use normally again, without you having to arrange separate trades.",
  photos: ["Before: mould reported by tenant", "After: cause fixed, treated and redecorated"],
  related: ["mould-treatment", "condensation-control"],
  callout: { heading: "Landlord or letting agent?", body: `Send us the property address, tenant contact details and a description or photos of the problem. We aim to inspect within ${RESPONSE_TIME}.` },
  faqH2: "Landlord damp and mould FAQs.",
  faqs: [
    { q: "How quickly can you inspect?", a: `We aim to inspect within ${RESPONSE_TIME} of your request, depending on when the tenant can give us access.` },
    { q: "Can you deal with the tenant directly?", a: "Yes. With your permission, we&rsquo;ll contact the tenant to arrange access and keep you or your agent updated." },
    { q: "Will the report blame the tenant for condensation?", a: "Only if the evidence shows it. Condensation usually has several causes, including extraction, ventilation, heating and insulation, and the report sets out each one fairly." },
    { q: "Do you provide evidence that the work has been done?", a: "Yes. After the work we provide a completion record with photos and a description of what was carried out, along with any guarantee paperwork." },
  ],
  service: {
    name: "Landlord Damp & Mould Reports in Hull & East Yorkshire",
    serviceType: "Damp and mould inspection for landlords",
    description: "Damp and mould inspections, written reports and completion records for landlords and letting agents across Hull, East Yorkshire and North Lincolnshire.",
  },
});

// ---------------------------------------------------------------------------
// 4. Rising damp treatment
// ---------------------------------------------------------------------------
servicePage({
  slug: "rising-damp-treatment",
  kicker: "Rising damp",
  title: "Rising Damp Treatment Hull & East Yorkshire | EYR",
  description: "Rising damp treatment in Hull and East Yorkshire: diagnosis first, then chemical DPC injection and salt-resistant replastering, finished by us.",
  h1: "Rising damp treatment in Hull &amp; East Yorkshire.",
  intro: "Rising damp is real, but it&rsquo;s also blamed for a lot of damp that comes from somewhere else. We confirm it&rsquo;s rising damp before we treat it, then install a new damp-proof course and replaster the wall properly.",
  sections: [
    {
      kicker: "Diagnosis first",
      h2: "Making sure it really is rising damp.",
      paras: [
        "Before quoting for a damp-proof course, we check for the things that often get mistaken for rising damp: soil or paving built up above the damp-proof course, a rendered plinth bridging it, a leaking pipe or gutter, or condensation low down on a cold wall. Fixing those is usually cheaper, and injecting a new damp-proof course won&rsquo;t cure any of them.",
        `If you haven&rsquo;t had a survey yet, start with a ${link("damp-surveys", "damp survey")}.`,
      ],
    },
    {
      kicker: "The treatment",
      h2: "Chemical damp-proof course injection.",
      paras: [
        "Where rising damp is confirmed, we install a new chemical damp-proof course. Holes are drilled into the mortar joint along the base of the wall at regular spacings, and a damp-proofing cream is injected. It spreads through the mortar and forms a water-repellent barrier that stops ground moisture rising further up the wall.",
        "Before drilling we move furniture and remove fixtures from the base of the wall, and we protect floors and belongings while we work.",
      ],
    },
    {
      kicker: "Replastering",
      h2: "Hacking off and salt-resistant replastering.",
      paras: [
        "Injecting a new damp-proof course is only half the job. Years of rising damp leave salts in the old plaster, and those salts keep drawing moisture from the air. Left in place, the wall will stay damp and stained even after the damp-proof course is working.",
        "So we hack off the contaminated plaster, typically to around a metre high or further where the damp or salts go higher, and replaster using a salt-resistant plaster system designed for walls recovering from damp. We then finish with a smooth skim coat ready for decorating.",
      ],
    },
    {
      kicker: "Drying out &amp; decorating",
      h2: "Drying and decorating times.",
      paras: [
        "A solid wall that&rsquo;s been damp for years takes time to dry out fully, often several months, depending on its thickness, the time of year and how well the room is heated and ventilated. You don&rsquo;t need to wait that long to use the room.",
        "Once the new plaster has dried, you can decorate with a breathable, water-based emulsion. We recommend holding off on vinyl wallpaper, oil-based paints and heavy furniture tight against the wall until it has fully dried, so any remaining moisture can escape. We&rsquo;ll give you specific advice for your job.",
      ],
    },
    {
      kicker: "Guarantee",
      h2: "Guaranteed work.",
      paras: [`The chemical damp-proof course is guaranteed for 30 years, and the salt-resistant replastering we carry out with it for 10 years. The guarantee stays with the property if you sell. See our <a href="${TERMS}">full guarantee terms</a>.`],
    },
  ],
  makingGoodText: "We do the hacking off, replastering, making good around sockets, radiators and fittings, and decorating ourselves, so you&rsquo;re not left with a half-finished room waiting for a separate plasterer.",
  photos: ["Before: rising damp tide mark and salts", "After: new damp-proof course and replastered wall"],
  related: ["damp-surveys", "penetrating-damp"],
  callout: { body: "We&rsquo;ll confirm whether it&rsquo;s rising damp before recommending any treatment." },
  faqH2: "Rising damp FAQs.",
  faqs: [
    { q: "How do I know if I have rising damp?", a: "Typical signs are damp and a tide mark low on ground-floor walls, salt staining and blown plaster or paint near the floor. But several other problems look similar, so a survey is the only way to be sure." },
    { q: "Why do you need to remove the plaster?", a: "Old plaster affected by rising damp is contaminated with salts that keep drawing in moisture. Unless it&rsquo;s removed and replaced with a salt-resistant plaster, the wall can stay damp and stained after treatment." },
    { q: "How long before I can decorate?", a: "Once the new plaster has dried you can use a breathable, water-based emulsion. Hold off on vinyl wallpaper and oil-based paints until the wall behind has fully dried out, which can take several months." },
    { q: "Is the treatment guaranteed?", a: "Yes. The damp-proof course injection is guaranteed for 30 years and the replastering for 10 years. The guarantee passes to the new owner if you sell." },
  ],
  service: {
    name: "Rising Damp Treatment in Hull & East Yorkshire",
    serviceType: "Rising damp treatment",
    description: "Rising damp diagnosis and treatment with chemical damp-proof course injection, hacking off and salt-resistant replastering across Hull, East Yorkshire and North Lincolnshire.",
  },
});

// ---------------------------------------------------------------------------
// 5. Penetrating damp
// ---------------------------------------------------------------------------
servicePage({
  slug: "penetrating-damp",
  kicker: "Penetrating damp",
  title: "Penetrating Damp Repairs Hull & East Yorkshire | EYR",
  description: "Penetrating damp repairs in Hull and East Yorkshire: repointing, gutters and downpipes, render repairs, ground levels and masonry water-repellent treatments.",
  h1: "Penetrating damp repairs in Hull &amp; East Yorkshire.",
  intro: "Penetrating damp is rainwater getting into the building through a defect somewhere outside. The fix is to find where it&rsquo;s getting in and repair it, then put the inside right.",
  sections: [
    {
      kicker: "The cause",
      h2: "Finding where the water gets in.",
      paras: [
        "Penetrating damp can show up at any height on a wall. It&rsquo;s often patchy, and usually gets worse after heavy or wind-driven rain. Older solid-walled houses, which are common across Hull and East Yorkshire, are particularly exposed, as there&rsquo;s no cavity to stop water tracking through.",
        `The survey matters here, because the defect outside isn&rsquo;t always directly opposite the damp patch inside. If you haven&rsquo;t had one yet, start with a ${link("damp-surveys", "damp survey")}.`,
      ],
    },
    {
      kicker: "Repairs",
      h2: "Common penetrating damp repairs.",
      paras: [],
      list: [
        "<strong>Repointing.</strong> Eroded or cracked mortar joints let rain soak into the wall. We rake out and repoint the affected brickwork, using a mortar suited to the wall. On older solid walls that&rsquo;s often a lime mortar, so the wall can still breathe.",
        "<strong>Gutters and downpipes.</strong> Blocked, cracked or leaking rainwater goods can soak one area of wall every time it rains. Clearing, resealing or replacing them is often the cheapest damp repair there is.",
        "<strong>Render repairs.</strong> Cracked or hollow render traps water behind it instead of keeping it out. We cut out and repair damaged sections, and seal around sills and openings.",
        "<strong>Bridged ground levels.</strong> Soil, flower beds, paths or patios built up against the wall can sit above the damp-proof course and let moisture straight past it. Lowering the ground or adding a drainage channel fixes the cause.",
        "<strong>Masonry water-repellent treatments.</strong> Once the repairs are done, a breathable water-repellent cream can be applied to exposed brickwork to reduce how much rain it absorbs. It&rsquo;s a finishing measure on sound brickwork, not a substitute for repairing it.",
      ],
    },
  ],
  makingGoodText: "Once the outside is fixed and the wall has had a chance to dry, we replaster any damaged or salt-stained areas inside, make good and redecorate, so the room is finished as well as dry.",
  photos: ["Before: damp patch from failed pointing", "After: repointed and made good inside"],
  related: ["damp-surveys", "rising-damp-treatment"],
  callout: { body: "We&rsquo;ll trace where the water is getting in and fix that first." },
  faqH2: "Penetrating damp FAQs.",
  faqs: [
    { q: "How can I tell penetrating damp from rising damp?", a: "Penetrating damp is often higher up the wall, patchy and worse after rain. Rising damp sits low on ground-floor walls and changes little with the weather. Some houses have both, which is why we survey before recommending anything." },
    { q: "Will a water-repellent cream fix my damp on its own?", a: "Usually not. It helps reduce rain absorption on sound brickwork, but if the pointing, render or gutters are defective, those need repairing first." },
    { q: "How long does the wall take to dry after the repair?", a: "It depends on how wet the wall got and how thick it is. It can take weeks or months. We&rsquo;ll advise on when it&rsquo;s ready to replaster and decorate." },
    { q: "Do you do the inside repairs as well?", a: "Yes. We replaster, make good and redecorate the inside once the cause outside is fixed." },
  ],
  service: {
    name: "Penetrating Damp Repairs in Hull & East Yorkshire",
    serviceType: "Penetrating damp repair",
    description: "Penetrating damp diagnosis and repair including repointing, gutter and downpipe repairs, render repairs, correcting bridged ground levels and masonry water-repellent treatments.",
  },
});

// ---------------------------------------------------------------------------
// 6. Condensation control
// ---------------------------------------------------------------------------
servicePage({
  slug: "condensation-control",
  kicker: "Condensation control",
  title: "Condensation Control Hull & East Yorkshire | EYR",
  description: "Condensation control in Hull and East Yorkshire: PIV units, extractor fans and trickle vents, sized to your home to stop streaming windows and mould.",
  h1: "Condensation control in Hull &amp; East Yorkshire.",
  intro: "Streaming windows, damp corners and black mould on outside walls are usually signs of condensation. The fix is getting moist air out of the house, and it should be sized to your home, not sold as a standard package.",
  sections: [
    {
      kicker: "The cause",
      h2: "Why condensation happens.",
      paras: [
        "Everyday living puts a lot of moisture into the air: cooking, showering, drying clothes indoors, even breathing. When that warm, moist air meets a cold surface such as a window, an outside wall or a corner behind a wardrobe, it condenses. Over time that leads to mould.",
        "Modern draught-proofing and double glazing make homes warmer, but they also trap that moisture inside. The answer is usually better ventilation, not a damp-proof course.",
      ],
    },
    {
      kicker: "Solutions",
      h2: "Ways we control condensation.",
      paras: [],
      list: [
        "<strong>Positive input ventilation (PIV).</strong> A PIV unit, usually fitted in the loft, gently pushes filtered air into the house. That dilutes moist air and pushes it out through natural gaps. It can work well in houses with whole-house condensation problems.",
        "<strong>Extractor fans.</strong> A properly sized kitchen or bathroom fan removes moisture where it&rsquo;s produced. Many existing fans are too weak, badly positioned or never switched on. Fans with a humidity sensor or overrun timer keep running until the room has cleared.",
        "<strong>Trickle vents.</strong> Small vents in window frames give steady background ventilation without opening windows. Many replacement windows were fitted without them, or have them permanently shut.",
      ],
    },
    {
      kicker: "Sizing the fix",
      h2: "Sized to your home, not a package.",
      paras: [
        "Not every house needs a PIV unit, and not every bathroom fan needs replacing. A flat with one mouldy bathroom might only need a better extractor fan. A family house with condensation in every bedroom might benefit from PIV. We look at the size and layout of your home, how many people live there, where the problem is worst and what ventilation is already in place, then recommend the least you need to solve it.",
        `If there&rsquo;s already mould, see our ${link("mould-treatment", "mould treatment")} page for how we deal with it alongside the ventilation work.`,
      ],
    },
  ],
  makingGoodText: "Fitting fans, vents and PIV units means cutting into walls, ceilings and window frames. We make good around every new unit, repair any plaster damaged by mould or condensation, and redecorate where needed.",
  photos: ["Before: condensation and mould on outside wall", "After: ventilation fitted, wall redecorated"],
  related: ["mould-treatment", "damp-surveys"],
  callout: { body: "We&rsquo;ll look at where the moisture is coming from and recommend only what your home needs." },
  faqH2: "Condensation FAQs.",
  faqs: [
    { q: "Is my damp condensation or something else?", a: "Condensation typically shows up as streaming windows and black mould in corners, behind furniture and on outside walls, and is worst in winter. Other types of damp can look similar, so a survey is the best way to be sure." },
    { q: "Do I need a PIV unit?", a: "Not necessarily. PIV suits some homes very well, but a smaller problem may only need a better extractor fan or trickle vents. We recommend what your home actually needs." },
    { q: "Will a dehumidifier solve condensation?", a: "A dehumidifier can help in the short term, but it treats the symptom. Improving extraction and ventilation deals with the cause." },
    { q: "Can you treat the mould at the same time?", a: "Yes. We can treat and remove existing mould, repair damaged plaster and redecorate once the ventilation is sorted." },
  ],
  service: {
    name: "Condensation Control in Hull & East Yorkshire",
    serviceType: "Condensation control",
    description: "Condensation control including positive input ventilation (PIV) units, extractor fans and trickle vents, sized to the home, across Hull, East Yorkshire and North Lincolnshire.",
  },
});

// ---------------------------------------------------------------------------
// 7. Mould treatment
// ---------------------------------------------------------------------------
servicePage({
  slug: "mould-treatment",
  kicker: "Mould treatment",
  title: "Mould Treatment & Removal Hull & East Yorkshire | EYR",
  description: "Mould treatment and removal in Hull and East Yorkshire. We treat the mould, fix the damp or condensation causing it, then replaster and redecorate.",
  h1: "Mould treatment and removal in Hull &amp; East Yorkshire.",
  intro: "Cleaning mould off a wall only works until it grows back. We remove and treat it, deal with the moisture that&rsquo;s feeding it, then put the room back together.",
  sections: [
    {
      kicker: "Removal &amp; treatment",
      h2: "Removing and treating mould.",
      paras: [
        "We clean off visible mould and treat the affected surfaces with a fungicidal solution to kill spores left behind. Where mould has got into plaster, sealant or wallpaper, cleaning isn&rsquo;t enough, so we remove the damaged material and replace it.",
        "Mould can affect health, particularly for people with asthma, allergies or other breathing problems, so we contain the work area and clean up thoroughly afterwards.",
      ],
    },
    {
      kicker: "Fixing the cause",
      h2: "Fixing the cause so it doesn&rsquo;t come back.",
      paras: [
        `Mould needs moisture to grow. Most household mould comes from condensation, but it can also come from penetrating damp, rising damp or a leak. If the moisture isn&rsquo;t dealt with, the mould will return, however well it&rsquo;s cleaned.`,
        `That&rsquo;s why mould treatment starts with finding the cause. Where it&rsquo;s condensation, we&rsquo;ll recommend the right ventilation, whether that&rsquo;s extractor fans, trickle vents or a PIV unit. See our ${link("condensation-control", "condensation control")} page. Where it&rsquo;s another type of damp, we&rsquo;ll fix that first.`,
      ],
    },
    {
      kicker: "Redecorating",
      h2: "Redecorating after mould.",
      paras: [
        "Once the surfaces are treated and any damaged plaster is replaced, we redecorate using a mould-resistant paint where it suits the room, such as in bathrooms, kitchens and on cold outside walls. The aim is a room that looks right and stays that way.",
      ],
    },
  ],
  makingGoodText: "We replace mould-damaged plaster, make good around any new fans or vents, reseal where needed and redecorate, all as part of the same job.",
  photos: ["Before: black mould on bedroom wall", "After: treated, cause fixed and redecorated"],
  related: ["condensation-control", "landlord-damp-mould-reports"],
  callout: { body: "We&rsquo;ll find out what&rsquo;s feeding the mould before we treat it." },
  faqH2: "Mould treatment FAQs.",
  faqs: [
    { q: "Can I just clean the mould off myself?", a: "You can clean small patches of surface mould, but if the cause isn&rsquo;t fixed it will come back. If it keeps returning or covers a large area, it&rsquo;s worth finding out why." },
    { q: "Why does mould keep coming back?", a: "Because the moisture feeding it is still there. That&rsquo;s usually condensation, but it can be another type of damp. Fixing the cause is what stops it returning." },
    { q: "Will painting over mould get rid of it?", a: "No. Paint over untreated mould usually lets it grow back through. The surface needs treating, and damaged material replacing, before redecorating." },
    { q: "Do you redecorate afterwards?", a: "Yes. We replaster where needed and redecorate, using a mould-resistant paint where it suits the room." },
  ],
  service: {
    name: "Mould Treatment & Removal in Hull & East Yorkshire",
    serviceType: "Mould treatment",
    description: "Mould removal and treatment, fixing the underlying damp or condensation, and replastering and redecorating across Hull, East Yorkshire and North Lincolnshire.",
  },
});

// ---------------------------------------------------------------------------
// 8. Cellar tanking
// ---------------------------------------------------------------------------
servicePage({
  slug: "cellar-tanking",
  kicker: "Cellar tanking",
  title: "Cellar Tanking & Basement Waterproofing Hull | EYR",
  description: "Cellar tanking and basement waterproofing in Hull and East Yorkshire, using tanking and membrane systems, with plastering and making good by us.",
  h1: "Cellar tanking and basement waterproofing in Hull &amp; East Yorkshire.",
  intro: "Cellars sit below ground, so water pressing in through the walls and floor is normal. Tanking or a membrane system keeps it out, whether you want dry storage or a usable room.",
  sections: [
    {
      kicker: "Assessment",
      h2: "Starting with the cellar you&rsquo;ve got.",
      paras: [
        "We start by looking at how wet the cellar is, where the water is coming in, and what you want to use the space for. A dry storage area and a habitable room need different levels of protection. We also check for things that make the problem worse, such as defective drains, gutters discharging next to the wall or high ground levels outside, and fix those where possible.",
        "If you&rsquo;re planning to turn the cellar into a living space, building regulations will apply, and we&rsquo;ll talk you through what that means for your project.",
      ],
    },
    {
      kicker: "Systems",
      h2: "Tanking and membrane systems.",
      paras: ["There are two main ways to waterproof a cellar, and sometimes a combination is best:"],
      list: [
        "<strong>Cementitious tanking.</strong> A waterproof render or slurry applied directly to the prepared walls and floor to form a continuous barrier that holds water back. It suits cellars with sound walls and lower water levels.",
        "<strong>Cavity drain membrane systems.</strong> A studded plastic membrane fixed to the walls and floor lets any water behind it drain away to a channel and, where needed, a sump and pump. Rather than holding water back, it manages it. It suits wetter cellars and older masonry.",
      ],
      after: ["We&rsquo;ll recommend the system that suits your cellar and explain why, including any ongoing maintenance, such as servicing a sump pump."],
    },
  ],
  makingGoodText: "After the waterproofing is in, we plaster or line the walls, make good around stairs, services and openings, and decorate if you want a finished room. Because we&rsquo;re a renovation firm, we can also help with the rest of a cellar conversion, such as lighting, electrics and flooring.",
  photos: ["Before: damp cellar walls", "After: tanked and finished cellar"],
  related: ["penetrating-damp", "damp-surveys"],
  callout: { body: "Tell us what you&rsquo;d like to use the cellar for and we&rsquo;ll arrange a visit." },
  faqH2: "Cellar tanking FAQs.",
  faqs: [
    { q: "What&rsquo;s the difference between tanking and a membrane system?", a: "Tanking forms a barrier that holds water back. A cavity drain membrane lets water in behind it and drains it away. Which one suits depends on how wet the cellar is and the condition of the walls." },
    { q: "Can my cellar be turned into a living space?", a: "Often, yes, with the right waterproofing, ventilation and finishes. Building regulations apply to a conversion to habitable space, and we&rsquo;ll talk you through that." },
    { q: "Will I need a sump pump?", a: "Some membrane systems need a sump and pump to remove collected water, particularly in wetter cellars. We&rsquo;ll tell you if yours does and what maintenance it needs." },
    { q: "Do you finish the cellar after waterproofing?", a: "Yes. We plaster or line the walls, make good and decorate, and can help with electrics and flooring for a full conversion." },
  ],
  service: {
    name: "Cellar Tanking & Basement Waterproofing in Hull & East Yorkshire",
    serviceType: "Cellar tanking and basement waterproofing",
    description: "Cellar and basement waterproofing using cementitious tanking and cavity drain membrane systems, with plastering and making good, across Hull, East Yorkshire and North Lincolnshire.",
  },
});

// ---------------------------------------------------------------------------
// Damp enquiry form - posts to api/damp-enquiry.js. Every "Book a damp
// survey" button links here with ?service=<slug>, which main.js uses to
// preselect the dropdown.
// ---------------------------------------------------------------------------
const SERVICE_OPTIONS = [
  ...Object.entries(PAGES).map(([slug, p]) => ({ value: slug, label: p.label })),
  { value: "not-sure", label: "Not sure &ndash; I need advice" },
];

const bookBody = `    <section class="hero">
      <div class="container hero-grid">
        <div>
          <p class="kicker">Damp proofing</p>
          <h1>Book a damp survey or get a damp quote.</h1>
          <p>Tell us what you need and where the damp is. We&rsquo;ll get back to you to arrange a visit.</p>
          <p class="guarantee-line">${GUARANTEE_LINE}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Damp enquiry form</p>
          <h2 class="section-title">Tell us about the damp.</h2>
          <form id="damp-enquiry-form" action="/api/damp-enquiry" method="post">
            <div id="form-success" class="card" style="display:none; margin-bottom: 1rem;">Thank you. Your damp enquiry has been sent and we will be in touch shortly.</div>
            <label>
              What would you like a quote for?
              <select name="service" required>
                <option value="">Please select</option>
${SERVICE_OPTIONS.map((o) => `                <option value="${o.value}">${o.label}</option>`).join("\n")}
              </select>
            </label>
            <div class="form-grid">
              <label>
                Name
                <input type="text" name="name" autocomplete="name" required>
              </label>
              <label>
                Phone
                <input type="tel" name="phone" autocomplete="tel" required>
              </label>
              <label>
                Email
                <input type="email" name="email" autocomplete="email" required>
              </label>
              <label>
                Postcode of the property
                <input type="text" name="postcode" autocomplete="postal-code" required>
              </label>
            </div>
            <label>
              I am a
              <select name="customerType">
                <option value="">Please select</option>
                <option value="Homeowner">Homeowner</option>
                <option value="Buyer">Buying the property</option>
                <option value="Landlord or letting agent">Landlord or letting agent</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label>
              Where is the damp, and what have you noticed?
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Send damp enquiry</button>
          </form>
        </div>
        <div class="card">
          <h3>What happens next</h3>
          <p>We&rsquo;ll contact you to arrange a survey. A damp survey costs ${SURVEY_PRICE}, ${SURVEY_DEDUCTION}.</p>
          <p>Landlord damp and mould reports cost &pound;99, and we aim to inspect within ${RESPONSE_TIME}. Pre-purchase survey reports are with you within ${REPORT_DAYS}.</p>
          <p>Not a damp enquiry? Use our <a href="/contact.html#quote-form">general quote form</a>.</p>
          <p><a href="${HUB}">All damp proofing services</a></p>
        </div>
      </div>
    </section>
`;

writePage({
  path: BOOK,
  title: "Book a Damp Survey Hull & East Yorkshire | EYR",
  description: "Book a damp survey or get a quote for damp proofing, condensation, mould or cellar tanking in Hull, East Yorkshire and North Lincolnshire.",
  crumb: "Book a Damp Survey",
  body: bookBody,
});
