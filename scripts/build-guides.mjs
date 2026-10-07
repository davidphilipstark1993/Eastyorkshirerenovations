// Builds every guide under /guides/ and the /guides/ index:
//  - the ten damp guides (scripts/data/damp-guides.mjs)
//  - twelve longer guides that merge the 46 earlier short guides and the
//    three blog posts, whose original text is kept in
//    scripts/data/legacy-guides.json
// and writes vercel.json redirects from every old guide and blog address.
//
//   node scripts/build-guides.mjs
//
// Each guide answers its question in two sentences at the top, shows an
// author and published/updated dates, has visible FAQs, and carries
// Article, FAQPage and BreadcrumbList JSON-LD.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync } from "fs";
import { page, faqList } from "./lib/layout.mjs";
import { SITE, BUSINESS_NAME, BUSINESS_ID, LOGO_PATH } from "./lib/constants.mjs";
import { phoneLink } from "./lib/site.mjs";
import { OWNER } from "./data/business.mjs";
import { DAMP_GUIDES } from "./data/damp-guides.mjs";

const TODAY = "2026-10-07";
const legacy = JSON.parse(readFileSync("scripts/data/legacy-guides.json", "utf8"));

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------
const CATEGORIES = {
  damp: { label: "Damp guides", service: { href: "/damp-proofing/", label: "Damp proofing" }, cta: { href: "/damp-proofing/book-a-survey/", label: "Book a £119 damp survey" }, og: "/assets/img/og/plastering.jpg" },
  renovations: { label: "Renovation guides", service: { href: "/full-house-renovations.html", label: "Renovations" }, og: "/assets/img/og/kitchen-installs.jpg" },
  conservatory: { label: "Conservatory guides", service: { href: "/conservatory-transformations/", label: "Conservatory transformations" } },
  garage: { label: "Garage conversion guides", service: { href: "/garage-conversions/", label: "Garage conversions" }, og: "/assets/img/og/garage-conversions.jpg" },
  "garden-room": { label: "Garden room guides", service: { href: "/garden-rooms/", label: "Garden rooms" } },
  orangery: { label: "Orangery guides", service: { href: "/orangeries/", label: "Orangeries" } },
  "outdoor-kitchen": { label: "Outdoor kitchen guides", service: { href: "/outdoor-kitchens/", label: "Outdoor kitchens" } },
};
const DEFAULT_CTA = { href: "/contact.html#quote-form", label: "Get a quote" };

// ---------------------------------------------------------------------------
// The merged guides. Each old guide becomes one part of a longer guide,
// with an anchor named after its old address so redirects land on it.
// ---------------------------------------------------------------------------
const MERGED = [
  {
    slug: "conservatory-transformation-cost-and-regulations",
    category: "conservatory",
    title: "Conservatory Transformation Cost, Planning & Regulations",
    description: "What a conservatory transformation costs, when planning permission or building regulations apply, and the roof options that make the biggest difference.",
    h1: "Conservatory transformations: cost, planning permission and building regulations.",
    answer: "Most conservatory transformations reuse the existing footprint, so they rarely need planning permission, but replacing the roof can bring the room under building regulations if it loses its conservatory exemption. Cost depends mainly on how much of the structure you replace, and the roof is usually the single most effective upgrade.",
    sources: ["conservatory-transformation-cost", "conservatory-planning-permission", "conservatory-roof-building-regulations", "conservatory-roof-replacement", "insulated-conservatory-roof"],
  },
  {
    slug: "make-a-conservatory-usable-all-year",
    category: "conservatory",
    title: "How to Make a Conservatory Usable All Year Round",
    description: "Why conservatories overheat in summer and freeze in winter, what actually fixes it, and how to turn one into a living room or dining room.",
    h1: "How to make a conservatory usable all year round.",
    answer: "A conservatory that is too hot in summer and too cold in winter almost always has the same cause: a fully glazed or thin polycarbonate roof. Replacing or insulating the roof makes the biggest difference, after which glazing, flooring and heating turn it into a room you can use as a living or dining room.",
    sources: ["make-conservatory-usable-all-year", "conservatory-too-hot-in-summer", "conservatory-too-cold-in-winter", "conservatory-to-living-room", "conservatory-to-dining-room"],
  },
  {
    slug: "garage-conversion-cost-planning-and-regulations",
    category: "garage",
    title: "Garage Conversion Cost, Planning & Building Regulations",
    description: "What a garage conversion costs, whether you need planning permission, which building regulations apply, and what happens to the garage door.",
    h1: "Garage conversions: cost, planning permission and building regulations.",
    answer: "Converting an integral or attached garage usually doesn't need planning permission, but building regulations approval is always needed. Cost depends mainly on the garage's existing condition, whether plumbing is needed and how the old garage door opening is filled.",
    sources: ["garage-conversion-cost", "garage-conversion-planning-permission", "garage-conversion-building-regulations", "garage-conversion-windows"],
  },
  {
    slug: "what-goes-into-a-garage-conversion",
    category: "garage",
    title: "Garage Conversion Damp-Proofing, Insulation & Heating",
    description: "The work that turns a garage into a proper room: damp-proofing, insulation, heating and electrics, and why each matters.",
    h1: "What goes into a garage conversion: damp-proofing, insulation, heating and electrics.",
    answer: "A garage needs four things before it is a comfortable room: damp-proofing, because garage floors often sit below the house's damp-proof course; insulation to house standard; heating, usually extended from the main system; and electrics planned around how the room will be used. Getting these right is what separates a conversion from a garage with carpet.",
    sources: ["garage-conversion-damp-proofing", "garage-conversion-insulation", "garage-conversion-heating", "garage-conversion-electrics"],
  },
  {
    slug: "garden-room-cost-planning-and-regulations",
    category: "garden-room",
    title: "Garden Room Cost, Planning Permission & Regulations",
    description: "What a garden room or garden office costs, when planning permission and building regulations apply, and how a garden room compares with an extension.",
    h1: "Garden rooms: cost, planning permission and building regulations.",
    answer: "Most garden rooms fall under permitted development as outbuildings and many are exempt from building regulations, though size, height, position and use can change that. Size, glazing and whether plumbing is included drive the cost, and a garden office with electrics only is usually the simplest build.",
    sources: ["garden-room-cost", "garden-office-cost", "garden-room-planning-permission", "garden-room-building-regulations", "garden-room-vs-extension"],
  },
  {
    slug: "how-a-garden-room-is-built",
    category: "garden-room",
    title: "How a Garden Room Is Built for Year-Round Use",
    description: "Foundations, roof options, insulation, heating and electrics: what goes into a garden room that stays usable all year.",
    h1: "How a garden room is built for year-round use.",
    answer: "A year-round garden room needs foundations suited to your ground, a well-insulated floor, walls and roof, heating sized to how you'll use it and a properly planned electrical supply. Those choices are made at design stage, because retrofitting them later costs far more.",
    sources: ["garden-room-foundations", "garden-room-roof-options", "garden-room-insulation", "garden-room-heating", "garden-room-electrics"],
  },
  {
    slug: "garden-room-ideas",
    category: "garden-room",
    title: "Garden Room Ideas: Offices, Gyms and Garden Bars",
    description: "Design ideas for garden offices, garden gyms and garden bars, and what each one needs to work well.",
    h1: "Garden room ideas: offices, gyms and garden bars.",
    answer: "Each use has different priorities: a garden office needs good light, storage and connectivity; a garden gym needs tough flooring and ventilation; and a garden bar usually benefits from plumbing and lighting for evenings. Deciding the use first shapes the layout, electrics and finish.",
    sources: ["garden-office-ideas", "garden-gym-ideas", "garden-bar-ideas"],
  },
  {
    slug: "orangery-cost-build-time-and-planning",
    category: "orangery",
    title: "Orangery Cost, Build Time and Planning Permission",
    description: "What an orangery costs, how long one takes from design to finished room, and when planning permission is needed.",
    h1: "Orangeries: cost, build time and planning permission.",
    answer: "Orangery cost depends heavily on size, glazing and roof design, and total project time is split fairly evenly between design and approvals and the build itself. Many orangeries fall within permitted development, but conservation areas, listed buildings and larger designs often need a planning application.",
    sources: ["how-much-does-an-orangery-cost", "how-long-does-an-orangery-take", "orangery-planning-permission"],
  },
  {
    slug: "orangery-design-roofs-and-comparisons",
    category: "orangery",
    title: "Orangery vs Conservatory vs Extension, Roofs & Ideas",
    description: "How an orangery compares with a conservatory or extension, roof and lantern options, insulation, and what people use the space for.",
    h1: "Orangery design: how it compares, roof options, insulation and ideas.",
    answer: "An orangery sits between a conservatory and an extension: brick-built with a solid roof and a glazed lantern, so it can be insulated close to the rest of the house while staying brighter than a standard extension. The lantern size, roof design and how you'll use the room are the main design decisions.",
    sources: ["orangery-vs-conservatory", "orangery-vs-extension", "orangery-roof-options", "orangery-insulation", "orangery-ideas"],
  },
  {
    slug: "planning-an-outdoor-kitchen",
    category: "outdoor-kitchen",
    title: "Planning an Outdoor Kitchen for a UK Garden",
    description: "Outdoor kitchen ideas for UK weather: BBQ choice, worktops, storage, electrics, plumbing and how to use it through winter.",
    h1: "Planning an outdoor kitchen for a UK garden.",
    answer: "Outdoor kitchens that work in the UK prioritise weatherproofing and cover over the open-air look: a roof or canopy, weather-resistant worktops and cabinets, and outdoor-rated electrics. The BBQ type, and whether you need plumbing, then shape the layout and cost.",
    sources: ["outdoor-kitchen-ideas", "outdoor-kitchen-bbq", "outdoor-kitchen-worktops", "outdoor-kitchen-storage", "outdoor-kitchen-electrics", "outdoor-kitchen-plumbing", "outdoor-kitchen-winter"],
  },
  {
    slug: "kitchen-and-bathroom-renovation-costs",
    category: "renovations",
    title: "Kitchen & Bathroom Renovation Costs in East Yorkshire",
    description: "What affects the cost of a kitchen or bathroom renovation in Hull and East Yorkshire, and the hidden costs worth budgeting for.",
    h1: "What affects kitchen and bathroom renovation costs in East Yorkshire?",
    answer: "The size of the room, how much the layout changes, the materials and fittings you choose and the condition of the existing plumbing and electrics drive most of the cost. Hidden costs such as replastering, electrical upgrades and waste disposal are worth budgeting for, and a site visit with a written quote is the only reliable price.",
    sources: ["blog-kitchen-renovation-cost-hull", "blog-bathroom-renovation-cost-east-yorkshire"],
    og: "/assets/img/og/kitchen-installs.jpg",
  },
  {
    slug: "planning-a-full-house-renovation",
    category: "renovations",
    title: "Planning a Full House Renovation in Hull & East Yorkshire",
    description: "The usual order of work on a full house renovation, when planning permission and building regulations apply, and how to budget and plan.",
    h1: "Planning a full house renovation: what happens and in what order.",
    answer: "A full renovation follows a fixed order: strip-out and repairs, first fix plumbing and electrics, plastering, then kitchens, bathrooms, second fix and decorating. Planning that sequence, the budget and any approvals before work starts is what keeps the job on track.",
    sources: ["blog-full-house-renovation-planning-guide"],
    og: "/assets/img/og/full-house-renovations.jpg",
  },
];

// The blog posts used Title Case; the guides use sentence case.
const HEADINGS = {
  "blog-kitchen-renovation-cost-hull": "How much does a kitchen renovation cost in Hull?",
  "blog-bathroom-renovation-cost-east-yorkshire": "How much does a bathroom renovation cost in East Yorkshire?",
  "blog-full-house-renovation-planning-guide": "Planning a full house renovation in Hull and East Yorkshire",
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const plain = (html) =>
  html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&mdash;/g, "—").replace(/&ndash;/g, "–").replace(/&rsquo;/g, "’").replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”").replace(/&pound;/g, "£").replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

const longDate = (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const stripStop = (t) => t.replace(/\.$/, "");

// Earlier guides and blog posts linked to each other by their old
// addresses; point those links at the new ones.
let REDIRECTS = {};
const relink = (html) => html.replace(/href="([^"#]+)(#[^"]*)?"/g, (m, href, hash) => (REDIRECTS[href] ? `href="${REDIRECTS[href]}"` : m));

// A section of an old guide is dropped if it only held TODO comments, or
// showed "[price range to be confirmed]" placeholders on the live page.
function usable(section) {
  if (/\[price range to be confirmed\]/.test(section.html)) return false;
  return plain(section.html).length > 0;
}

function author() {
  if (OWNER.name) return { schema: { "@type": "Person", name: OWNER.name, worksFor: { "@id": BUSINESS_ID } }, label: OWNER.name };
  return { schema: { "@type": "Organization", "@id": BUSINESS_ID, name: BUSINESS_NAME }, label: BUSINESS_NAME };
}

// ---------------------------------------------------------------------------
// Page template
// ---------------------------------------------------------------------------
function guidePage({ slug, category, title, description, h1, answer, bodyHtml, toc, faqs, related, published, og }) {
  const cat = CATEGORIES[category];
  const cta = cat.cta || DEFAULT_CTA;
  const canonical = `${SITE}/guides/${slug}/`;
  const by = author();
  const ogImage = og || cat.og;

  const body = `    <section class="hero guide-hero">
      <div class="container">
        <p class="kicker"><a href="/guides/">Guides</a> &middot; ${cat.label}</p>
        <h1>${h1}</h1>
        <div class="guide-answer">
          <p><strong>In short:</strong> ${answer}</p>
        </div>
        <p class="byline">By ${by.label}${OWNER.name ? "" : `<!-- TODO(owner): once OWNER.name is set in scripts/data/business.mjs, guides are credited to the owner by name -->`} &middot; Published <time datetime="${published}">${longDate(published)}</time>${published === TODAY ? "" : ` &middot; Updated <time datetime="${TODAY}">${longDate(TODAY)}</time>`}</p>
      </div>
    </section>

    <section class="section">
      <div class="container prose">
${toc && toc.length > 1 ? `        <nav class="guide-toc" aria-label="In this guide">
          <h2>In this guide</h2>
          <ol>
${toc.map((t) => `            <li><a href="#${t.id}">${t.label}</a></li>`).join("\n")}
          </ol>
        </nav>
` : ""}${bodyHtml}
      </div>
    </section>
${faqs.length ? `
    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">${stripStop(h1).replace(/\?$/, "")}: FAQs.</h2>
${faqList(faqs)}      </div>
    </section>
` : ""}
    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Related</p>
          <h2 class="section-title">Read next.</h2>
          <ul>
${related.map((r) => `            <li><a href="${r.href}">${r.label}</a></li>`).join("\n")}
          </ul>
        </div>
        <div class="callout">
          <h3>Talk to us</h3>
          <p>Call ${phoneLink()} or get in touch online.</p>
          <p><a class="btn" href="${cta.href}">${cta.label}</a></p>
        </div>
      </div>
    </section>
`;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: plain(h1).slice(0, 110),
    description,
    datePublished: published,
    dateModified: TODAY,
    author: by.schema,
    publisher: { "@type": "Organization", "@id": BUSINESS_ID, name: BUSINESS_NAME, logo: { "@type": "ImageObject", url: `${SITE}${LOGO_PATH}` } },
    mainEntityOfPage: canonical,
    ...(ogImage ? { image: `${SITE}${ogImage}` } : {}),
  };

  const dir = `guides/${slug}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    `${dir}/index.html`,
    page({
      title,
      description,
      canonical,
      ogImage,
      body,
      breadcrumbs: [
        { name: "Home", item: `${SITE}/` },
        { name: "Guides", item: `${SITE}/guides/` },
        { name: plain(stripStop(h1)) },
      ],
      faq: faqs.length ? faqs.map((f) => ({ q: plain(f.q), a: plain(f.a) })) : undefined,
      extraLd: [article],
    })
  );
}

// Titles for links to guides and service pages.
const LINK_LABELS = {};
function labelFor(href) {
  if (LINK_LABELS[href]) return LINK_LABELS[href];
  const known = {
    "/damp-proofing/": "Damp proofing",
    "/damp-proofing/damp-surveys/": "Damp surveys",
    "/damp-proofing/book-a-survey/": "Book a £119 damp survey",
    "/damp-proofing/rising-damp-treatment/": "Rising damp treatment",
    "/damp-proofing/penetrating-damp/": "Penetrating damp repairs",
    "/damp-proofing/condensation-control/": "Condensation control",
    "/damp-proofing/mould-treatment/": "Mould treatment",
    "/damp-proofing/pre-purchase-damp-survey/": "Pre-purchase damp surveys",
    "/damp-proofing/landlord-damp-mould-reports/": "Landlord damp and mould reports",
    "/damp-proofing/#guarantee": "Our damp guarantee terms",
    "/plastering.html": "Plastering",
  };
  return known[href] || href;
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------
// Redirect map first, so links inside the merged text can be updated.
for (const g of MERGED) {
  for (const src of g.sources) REDIRECTS[legacy[src].path] = `/guides/${g.slug}/#${src.replace(/^blog-/, "")}`;
}
REDIRECTS["/blog/"] = "/guides/";
REDIRECTS["/blog/index.html"] = "/guides/";

for (const g of DAMP_GUIDES) LINK_LABELS[`/guides/${g.slug}/`] = g.h1.replace(/\?$/, "");
for (const g of MERGED) LINK_LABELS[`/guides/${g.slug}/`] = stripStop(g.h1);

// Remove the old guides and blog pages; their addresses now redirect.
for (const src of Object.keys(legacy)) {
  const path = legacy[src].path.replace(/^\//, "");
  if (legacy[src].type === "guide") rmSync(path.replace(/index\.html$/, ""), { recursive: true, force: true });
  else rmSync(path, { force: true });
}
rmSync("blog", { recursive: true, force: true });

// Damp guides
for (const g of DAMP_GUIDES) {
  const bodyHtml = g.sections
    .map((s) => `        <h2 id="${s.h2.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}">${s.h2}</h2>\n${s.html.split("\n").map((l) => `        ${l}`).join("\n")}`)
    .join("\n\n");
  guidePage({
    ...g,
    category: "damp",
    bodyHtml,
    faqs: g.faqs,
    related: g.related.map((href) => ({ href, label: labelFor(href) })),
    published: TODAY,
  });
}

// Merged guides
for (const g of MERGED) {
  const parts = [];
  const toc = [];
  const faqs = [];
  const seen = new Set();
  for (const src of g.sources) {
    const s = legacy[src];
    const id = src.replace(/^blog-/, "");
    const heading = HEADINGS[src] || stripStop(s.h1);
    toc.push({ id, label: heading });
    const sections = s.sections.filter(usable);
    const dropped = s.sections.length - sections.length;
    parts.push(`        <h2 id="${id}">${heading}</h2>
        <p>${relink(s.intro)}</p>${s.lead ? `\n        ${relink(s.lead).split("\n").join("\n        ")}` : ""}
${sections.map((sec) => `        <h3>${sec.h2}</h3>\n        ${relink(sec.html).split("\n").join("\n        ")}`).join("\n")}${dropped ? `
        <!-- TODO(owner): ${dropped} section(s) of the original "${s.h1}" were left out because they only held placeholders (price ranges / durations not supplied). Add your own figures here once confirmed. -->` : ""}`);
    for (const f of s.faqs) {
      const key = plain(f.q).toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        faqs.push({ q: f.q, a: relink(f.a) });
      }
    }
  }
  const published = g.sources.map((s) => legacy[s].published).filter(Boolean).sort()[0] || TODAY;
  const cat = CATEGORIES[g.category];
  const siblings = MERGED.filter((o) => o.category === g.category && o.slug !== g.slug).map((o) => ({ href: `/guides/${o.slug}/`, label: stripStop(o.h1) }));
  guidePage({
    ...g,
    bodyHtml: parts.join("\n\n"),
    toc,
    faqs: faqs.slice(0, 8),
    related: [{ href: cat.service.href, label: cat.service.label }, ...siblings],
    published,
  });
}

// Index
const groups = [
  { title: "Damp and mould", items: DAMP_GUIDES.map((g) => ({ href: `/guides/${g.slug}/`, title: g.h1, text: g.description })) },
  { title: "Renovations", items: MERGED.filter((g) => g.category === "renovations").map((g) => ({ href: `/guides/${g.slug}/`, title: stripStop(g.h1), text: g.description })) },
  ...["garage", "conservatory", "orangery", "garden-room", "outdoor-kitchen"].map((c) => ({
    title: CATEGORIES[c].service.label,
    items: MERGED.filter((g) => g.category === c).map((g) => ({ href: `/guides/${g.slug}/`, title: stripStop(g.h1), text: g.description })),
  })),
];
const indexBody = `    <section class="hero">
      <div class="container">
        <p class="kicker">Guides</p>
        <h1>Guides and advice.</h1>
        <p>Plain answers to the questions we&rsquo;re asked most, from damp and mould to renovations and home improvements.</p>
      </div>
    </section>
${groups
  .map(
    (grp) => `
    <section class="section">
      <div class="container">
        <h2 class="section-title">${grp.title}.</h2>
        <div class="cards">
${grp.items.map((i) => `          <article class="card">
            <h3><a href="${i.href}">${i.title}</a></h3>
            <p>${i.text}</p>
          </article>`).join("\n")}
        </div>
      </div>
    </section>`
  )
  .join("\n")}
`;
mkdirSync("guides", { recursive: true });
writeFileSync(
  "guides/index.html",
  page({
    title: "Damp, Renovation & Home Improvement Guides | EYR",
    description: "Plain answers on damp, mould, renovations, garage conversions, conservatories, orangeries, garden rooms and outdoor kitchens in Hull and East Yorkshire.",
    canonical: `${SITE}/guides/`,
    ogImage: "/assets/img/og/plastering.jpg",
    body: indexBody,
    breadcrumbs: [{ name: "Home", item: `${SITE}/` }, { name: "Guides" }],
  })
);

// Redirects: every old address, with and without a trailing slash.
const redirects = [];
for (const [from, to] of Object.entries(REDIRECTS)) {
  redirects.push({ source: from, destination: to, permanent: true });
  if (from.endsWith("/") && from !== "/blog/") redirects.push({ source: from + "index.html", destination: to, permanent: true });
  if (from.endsWith("/")) redirects.push({ source: from.slice(0, -1), destination: to, permanent: true });
}
const vercel = existsSync("vercel.json") ? JSON.parse(readFileSync("vercel.json", "utf8")) : {};
vercel.redirects = redirects;
writeFileSync("vercel.json", JSON.stringify(vercel, null, 2) + "\n");
writeFileSync("scripts/data/guide-redirects.json", JSON.stringify(REDIRECTS, null, 2) + "\n");

console.log(`guides: ${DAMP_GUIDES.length} damp + ${MERGED.length} merged; ${redirects.length} redirects`);
