// Builds the four regional landing pages:
//
//   /hull.html                        Hull (existing URL, rewritten in place)
//   /east-riding.html                 East Yorkshire / East Riding (existing URL)
//   /areas/north-lincolnshire/        North Lincolnshire (new)
//   /areas/lincolnshire/              Lincolnshire: the northern part we cover (new)
//
//   node scripts/build-regional-pages.mjs   (build-all.mjs runs it)
//
// Rules for this content:
// - The business has one base: Station Road, Hessle. Never imply an office or
//   premises anywhere else.
// - Only real work goes in the "examples" sections: the case studies in
//   scripts/data/projects.mjs and photos of real jobs. No invented projects,
//   reviews, prices, accreditations or years of experience.
// - Each page's copy is written for that region; don't copy a paragraph from
//   one page to another with the place name swapped.
// - The FAQPage JSON-LD is generated from the visible FAQs by
//   scripts/sync-faq-schema.mjs, so it always matches the page.
import { writeFileSync, mkdirSync } from "fs";
import { dirname } from "path";
import { execFileSync } from "child_process";
import { page } from "./lib/layout.mjs";
import { phoneLink } from "./lib/site.mjs";
import { SITE, BUSINESS_ID, BUSINESS_NAME } from "./lib/constants.mjs";
import { WHATSAPP, REPLY_TIME } from "./data/business.mjs";

const QUOTE = "/contact.html#quote-form";
const SURVEY = "/damp-proofing/book-a-survey/";
const whatsapp = (label = "message us on WhatsApp") => `<a href="${WHATSAPP}" data-contact="whatsapp">${label}</a>`;

// ---------------------------------------------------------------------------
// Building blocks (existing site components only)
// ---------------------------------------------------------------------------
function picture({ src, alt, width, height, sizes = "(max-width: 899px) 100vw, 50vw", eager = false, variants = true }) {
  const base = src.replace(/\.jpg$/, "");
  const srcset = variants ? ` srcset="${base}-800.jpg 800w, ${src} ${width}w" sizes="${sizes}"` : "";
  const loading = eager ? `loading="eager" fetchpriority="high"` : `loading="lazy"`;
  return `<picture>
            <source media="(min-width: 900px)" srcset="${base}.webp" type="image/webp">
            <img src="${src}"${srcset} width="${width}" height="${height}" alt="${alt}" ${loading}>
          </picture>`;
}

function hero({ kicker, h1, intro, image, secondary }) {
  return `    <section class="hero">
      <div class="container hero-grid">
        <div>
          <p class="kicker">${kicker}</p>
          <h1>${h1}</h1>
${intro.map((p) => `          <p>${p}</p>`).join("\n")}
          <p class="contact-phone">Call ${phoneLink()} or ${whatsapp()}</p>
          <div class="button-group">
            <a class="btn primary" href="${QUOTE}">Get a free quote</a>
            <a class="btn secondary" href="${secondary.href}">${secondary.label}</a>
          </div>
        </div>
        <div>
          ${picture({ ...image, eager: true })}
        </div>
      </div>
    </section>
`;
}

function textSection({ id, kicker, h2, paras, after = "" }) {
  return `    <section class="section"${id ? ` id="${id}"` : ""}>
      <div class="container">
        <p class="kicker">${kicker}</p>
        <h2 class="section-title">${h2}</h2>
${paras.map((p) => `        <p>${p}</p>`).join("\n")}${after}
      </div>
    </section>
`;
}

function cardsSection({ id, kicker, h2, intro = [], cards, outro = [] }) {
  return `    <section class="section"${id ? ` id="${id}"` : ""}>
      <div class="container">
        <p class="kicker">${kicker}</p>
        <h2 class="section-title">${h2}</h2>
${intro.map((p) => `        <p>${p}</p>`).join("\n")}
        <div class="cards">
${cards
  .map(
    ({ h, href, p }) => `          <article class="card">
            <h3>${href ? `<a href="${href}">${h}</a>` : h}</h3>
            <p>${p}</p>
          </article>`
  )
  .join("\n")}
        </div>
${outro.map((p) => `        <p>${p}</p>`).join("\n")}
      </div>
    </section>
`;
}

function photoSection({ kicker, h2, paras, photo, caption, buttons = true }) {
  return `    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">${kicker}</p>
          <h2 class="section-title">${h2}</h2>
${paras.map((p) => `          <p>${p}</p>`).join("\n")}${
    buttons
      ? `
          <div class="button-group">
            <a class="btn primary" href="${QUOTE}">Get a free quote</a>
            <a class="btn secondary" href="/projects/">See all our projects</a>
          </div>`
      : ""
  }
        </div>
        <div>
          <figure class="side-photo">
            ${picture(photo)}
            <figcaption>${caption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
`;
}

function stepsSection({ kicker, h2, intro, steps }) {
  return `    <section class="section" id="quotes">
      <div class="container">
        <p class="kicker">${kicker}</p>
        <h2 class="section-title">${h2}</h2>
        <p>${intro}</p>
        <ol class="steps">
${steps.map(([t, p]) => `          <li><strong>${t}</strong><p>${p}</p></li>`).join("\n")}
        </ol>
      </div>
    </section>
`;
}

function faqSection({ h2, faqs }) {
  return `    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">${h2}</h2>
        <div class="faq-list">
${faqs
  .map(
    ([q, a]) => `          <details>
            <summary>${q}</summary>
            <p>${a}</p>
          </details>`
  )
  .join("\n")}
        </div>
      </div>
    </section>
`;
}

function contactSection({ h2, body }) {
  return `    <section class="section" id="contact">
      <div class="container split">
        <div>
          <p class="kicker">Get in touch</p>
          <h2 class="section-title">${h2}</h2>
          <p>${body}</p>
          <p>${REPLY_TIME}</p>
          <div class="button-group">
            <a class="btn primary" href="${QUOTE}">Request a free quote</a>
            <a class="btn secondary" href="${SURVEY}">Book a &pound;119 damp survey</a>
          </div>
        </div>
        <div class="callout">
          <h3>East Yorkshire Renovations</h3>
          <p>Station Road, Hessle, HU13 0BG</p>
          <p>Phone: ${phoneLink()}</p>
          <p>WhatsApp: ${whatsapp("send us a message or photos")}</p>
          <p>Email: <a href="mailto:info@eastyorkshirerenovation.com">info@eastyorkshirerenovation.com</a></p>
          <p>Monday to Friday, 8am to 4:30pm</p>
        </div>
      </div>
    </section>
`;
}

// WebPage + Service JSON-LD. The business node itself (address, phone,
// hours) comes from the shared site:business block; these point at it.
function regionLd({ canonical, title, description, region, serviceName, areaServed }) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      inLanguage: "en-GB",
      about: { "@id": BUSINESS_ID },
      isPartOf: { "@type": "WebSite", url: `${SITE}/`, name: BUSINESS_NAME },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceName,
      serviceType: "Home renovation and damp proofing",
      description,
      provider: { "@id": BUSINESS_ID, "@type": "HomeAndConstructionBusiness", name: BUSINESS_NAME },
      areaServed: areaServed.map(([type, name]) => ({ "@type": type, name })),
      url: canonical,
      mainEntityOfPage: { "@id": `${canonical}#webpage` },
    },
  ];
}

// Real photos of completed work (see scripts/data/projects.mjs).
const PHOTOS = {
  hullBathroom: { src: "/assets/img/project/bathroom-finished-hull.jpg", width: 1600, height: 2133, alt: "Bathroom we renovated in Hull, retiled with a dark vanity unit and glass shower screen" },
  hullPlaster: { src: "/assets/img/project/plastering-finished-hull.jpg", width: 1600, height: 2133, alt: "Freshly plastered room in Hull, ready for decorating" },
  howdenBathroom: { src: "/assets/img/project/bathroom-finished-howden.jpg", width: 1368, height: 1824, alt: "Bathroom we renovated in Howden, East Yorkshire" },
  cherryBurton: { src: "/assets/img/project/ensuite-cherry-burton.jpg", width: 1170, height: 1458, alt: "Ensuite we renovated in Cherry Burton, near Beverley" },
  hessleBathroom: { src: "/assets/img/project/bathroom-finished-hessle.jpg", width: 1170, height: 1447, alt: "Bathroom with a walk-in shower we renovated in Hessle" },
  tiling: { src: "/assets/img/project/tiling-detail.jpg", width: 1368, height: 1824, alt: "Wall tiling detail from one of our bathroom renovations" },
};

// ---------------------------------------------------------------------------
// The four pages
// ---------------------------------------------------------------------------
const PAGES = [];

// ----------------------------- HULL ----------------------------------------
PAGES.push({
  path: "hull.html",
  canonical: `${SITE}/hull.html`,
  ogImage: "/assets/img/og/hull.jpg",
  crumb: "Hull",
  title: "House Renovations & Home Improvements in Hull | EYR",
  description: "House renovations, kitchens, bathrooms, damp proofing and plastering across Hull, from a team based in Hessle. Typical bathroom around £6,000. Free quote.",
  serviceName: "House renovations and home improvements in Hull",
  areaServed: [["City", "Kingston upon Hull"]],
  body: [
    hero({
      kicker: "Renovations in Hull",
      h1: "House renovations and home improvements in Hull.",
      intro: [
        "We&rsquo;re a renovation and damp proofing firm based in Hessle, on the western edge of Hull. We renovate Hull homes room by room or top to bottom: kitchens, bathrooms, damp, plastering, electrics and decorating, all run by one team with one point of contact.",
      ],
      image: { ...PHOTOS.hullBathroom },
      secondary: { label: "See a Hull bathroom we renovated", href: "/projects/bathrooms/hull-bathroom-renovation/" },
    }),
    textSection({
      kicker: "Hull homes",
      h2: "What renovating a house in Hull usually involves.",
      paras: [
        "Most of the city&rsquo;s older housing is Victorian and Edwardian terraces: the streets off Newland Avenue and Princes Avenue, the bay-fronted villas of the Avenues, and the long terraces off Hessle Road, Anlaby Road, Beverley Road and Holderness Road. These houses tend to need the same things: a kitchen in a narrow back addition, a bathroom squeezed into a box room, lath-and-plaster ceilings that have started to sag, and solid brick walls with no cavity, which makes damp and condensation more likely.",
        "Further out, the 1930s semis around Bricknell and Anlaby Park are usually about opening up: knocking the kitchen and dining room into one, or turning a box room into an ensuite. Post-war estates such as Bransholme and Orchard Park, and newer estates such as Kingswood and Victoria Dock, more often need a tired kitchen or bathroom replaced, or an integral garage turned into a room.",
        "Whichever it is, we work in the right order: damp and structural repairs first, then <a href=\"/electrical.html\">rewiring</a> and plumbing while the walls are open, then <a href=\"/plastering.html\">plastering</a>, and only then the new <a href=\"/kitchen-installs.html\">kitchen</a>, <a href=\"/bathroom-installs.html\">bathroom</a> and <a href=\"/decorating.html\">decorating</a>.",
      ],
    }),
    textSection({
      id: "damp",
      kicker: "Damp in Hull",
      h2: "Why so many Hull houses have damp, and how we deal with it.",
      paras: [
        "Hull is a low-lying city on the Humber with a high water table, and many homes were flooded in 2007. Add solid walls, suspended timber floors and rooms that have been sealed up with uPVC windows, and you get a lot of rising damp, penetrating damp and condensation, often all being blamed on one another.",
        "So we start with a survey rather than a sales pitch. A <a href=\"/damp-proofing/hull/\">damp survey in Hull</a> costs &pound;119, which is deducted if you go ahead with the work. You get a written report of the cause, and a quote that includes the replastering and making good, because we do that ourselves. Not sure what you&rsquo;re looking at? Read <a href=\"/guides/damp-or-condensation/\">is it damp or condensation?</a>",
      ],
      after: `
        <div class="button-group">
          <a class="btn primary" href="${SURVEY}">Book a damp survey</a>
        </div>`,
    }),
    cardsSection({
      kicker: "Services in Hull",
      h2: "Renovation services we offer across Hull.",
      cards: [
        { h: "Bathroom renovations", href: "/bathroom-installs.html", p: "Full bathrooms, walk-in showers and wet rooms, properly tanked. A typical full bathroom comes to around &pound;6,000." },
        { h: "Kitchen fitting", href: "/kitchen-installs.html", p: "Units, worktops, plumbing, electrics and tiling, including galley kitchens in terrace back additions." },
        { h: "House refurbishments", href: "/full-house-renovations.html", p: "Whole-house renovations, newly bought houses and rentals between tenancies." },
        { h: "Damp proofing in Hull", href: "/damp-proofing/hull/", p: "&pound;119 survey, then rising damp, penetrating damp, condensation and mould treatment." },
        { h: "Plastering", href: "/plastering.html", p: "Skimming, ceiling repairs, replastering after damp and boarding over lath and plaster." },
        { h: "Electrical work and rewiring", href: "/electrical.html", p: "Rewires, consumer unit upgrades and the electrics for kitchens and bathrooms." },
        { h: "Joinery and decorating", href: "/joinery.html", p: "Doors, skirting, alcove storage and stud walls, then <a href=\"/decorating.html\">decorating</a> to finish." },
        { h: "Adding space", href: "/garage-conversions/hull/", p: "<a href=\"/garage-conversions/hull/\">Garage conversions</a>, <a href=\"/garden-rooms/hull/\">garden rooms</a>, <a href=\"/conservatory-transformations/hull/\">conservatory roof replacements</a> and <a href=\"/orangeries/hull/\">orangeries</a> in Hull." },
      ],
    }),
    photoSection({
      kicker: "Our work in Hull",
      h2: "A Hull bathroom, stripped back and rebuilt.",
      paras: [
        "On this <a href=\"/projects/bathrooms/hull-bathroom-renovation/\">Hull bathroom renovation</a> we stripped a dated bathroom back to the bare floorboards, then fully retiled and refitted it with a dark vanity unit and a glass shower screen.",
        "Close by, we fitted a <a href=\"/projects/bathrooms/hessle-bathroom-renovation/\">walk-in shower in Hessle</a> and a <a href=\"/projects/kitchens/cottingham-kitchen-renovation/\">shaker-style kitchen in Cottingham</a>. You can see all of our <a href=\"/projects/\">project case studies</a>.",
      ],
      photo: PHOTOS.hullBathroom,
      caption: "A bathroom we renovated in Hull.",
    }),
    textSection({
      kicker: "Planning in Hull",
      h2: "Planning permission and building regulations in Hull.",
      paras: [
        "Planning and building control in the city are handled by Hull City Council. Most internal work, such as a new kitchen or bathroom, doesn&rsquo;t need planning permission, but some does need building regulations sign-off: removing a wall, new electrical circuits, and changes to drainage or ventilation.",
        "If you live in one of the city&rsquo;s conservation areas, such as the Avenues, changes to the outside of the house can need permission too. We&rsquo;ll tell you what applies at the site visit, before you commit to anything.",
      ],
    }),
    stepsSection({
      kicker: "How quotes work",
      h2: "From first message to a written quote.",
      intro: "Our base in Hessle is a short drive from anywhere in the city, so a site visit is usually easy to arrange.",
      steps: [
        ["Tell us what you need", `Use the <a href="${QUOTE}">quote form</a>, call ${phoneLink()} or send photos on WhatsApp.`],
        ["We reply", "Within 3 hours during opening hours, to arrange a time to come and look."],
        ["Site visit", "We look at the rooms, check what&rsquo;s behind the problem where we can (damp, wiring, pipework) and talk through what you want."],
        ["Written quote", "An itemised written quote, so you can see what each part of the job costs."],
        ["The work", "One point of contact from start to finish, and we clean up as we go."],
      ],
    }),
    faqSection({
      h2: "Renovating in Hull: FAQs.",
      faqs: [
        ["Do you have an office in Hull?", "No. We&rsquo;re based on Station Road in Hessle, just west of the city boundary, and we come to you for site visits and the work itself."],
        ["Which parts of Hull do you cover?", "All of it: the city centre and the Avenues, west Hull and Hessle Road, north Hull and Bransholme, east Hull and Holderness Road, Sutton, Orchard Park and Kingswood, plus the villages around the city."],
        ["How much does a bathroom renovation cost in Hull?", "A typical full bathroom renovation we carry out comes to around &pound;6,000. Room size, the suite and tiles, a wet room and what we find behind the old tiles all change that, so we confirm the price in a written quote. See <a href=\"/bathroom-installs.html\">bathroom renovations</a>."],
        ["Do you work on rental properties in Hull?", "Yes. We work for landlords and letting agents on refurbishments between tenancies, and on damp and mould. See <a href=\"/damp-proofing/landlord-damp-mould-reports/\">damp and mould reports for landlords</a>."],
        ["Should I sort the damp before renovating?", "Yes. New plaster and decorating over an unsolved damp problem will fail. We survey first, treat the cause, then replaster and carry on with the renovation."],
      ],
    }),
    contactSection({
      h2: "Renovating a house in Hull?",
      body: "Tell us about the house and what you want to change. Photos on WhatsApp help us give you a useful answer before we visit.",
    }),
  ],
});

// ----------------------------- EAST YORKSHIRE -------------------------------
PAGES.push({
  path: "east-riding.html",
  canonical: `${SITE}/east-riding.html`,
  ogImage: "/assets/img/og/areas.jpg",
  crumb: "East Yorkshire",
  title: "Renovations East Yorkshire & the East Riding | EYR",
  description: "Home and property renovations across East Yorkshire, from Beverley and Cottingham to the Humber villages, Goole and the coast. Based in Hessle. Free quote.",
  serviceName: "Home and property renovations across East Yorkshire",
  areaServed: [["AdministrativeArea", "East Riding of Yorkshire"], ["City", "Beverley"], ["City", "Goole"], ["City", "Bridlington"], ["City", "Driffield"]],
  body: [
    hero({
      kicker: "Renovations in East Yorkshire",
      h1: "Home renovations across East Yorkshire and the East Riding.",
      intro: [
        "From our base in Hessle we renovate homes across the East Riding: the villages west of Hull, Beverley and its surrounding villages, the Humber villages out to Brough and Howden, and further afield to Goole, Driffield and the coast. Kitchens, bathrooms, full refurbishments, damp proofing and bigger projects such as garage conversions and garden rooms.",
      ],
      image: { ...PHOTOS.howdenBathroom },
      secondary: { label: "See our recent projects", href: "/projects/" },
    }),
    cardsSection({
      kicker: "Where we work",
      h2: "Our coverage across the East Riding.",
      intro: [
        "We cover homes within about 30 miles of Hessle. In practice that splits into three bands, and the closer you are, the easier it is to fit a visit in quickly.",
      ],
      cards: [
        { h: "Close to our base", p: "<a href=\"/hessle.html\">Hessle</a>, <a href=\"/anlaby.html\">Anlaby</a>, <a href=\"/willerby.html\">Willerby</a>, <a href=\"/kirk-ella.html\">Kirk Ella</a>, <a href=\"/swanland.html\">Swanland</a>, <a href=\"/north-ferriby.html\">North Ferriby</a>, <a href=\"/cottingham.html\">Cottingham</a>, <a href=\"/brough.html\">Brough</a> and <a href=\"/south-cave.html\">South Cave</a>." },
        { h: "Beverley and the market towns", p: "<a href=\"/beverley.html\">Beverley</a>, Walkington, Cherry Burton, Howden and <a href=\"/garage-conversions/goole/\">Goole</a>, with Driffield further north." },
        { h: "Further afield", p: "Hornsea and Bridlington on the coast, and the villages in between. Send us your postcode and we&rsquo;ll tell you straight away whether we can take the job on." },
      ],
      outro: ["Hull itself has its own page: <a href=\"/hull.html\">house renovations in Hull</a>."],
    }),
    textSection({
      kicker: "East Riding homes",
      h2: "Renovating East Riding homes, from Georgian townhouses to farmhouses.",
      paras: [
        "The East Riding has a much wider mix of houses than the city. Beverley has Georgian and Victorian townhouses around the Minster and Saturday Market, many in conservation areas. Cottingham, Kirk Ella and Swanland have older village centres surrounded by 1930s to 1970s family homes. Further out there are farmhouses and converted barns, and on the coast at Bridlington and Hornsea, houses exposed to wind-driven rain off the North Sea.",
        "That changes the work. Older solid-walled houses need materials that let the walls breathe, and careful replastering to match what&rsquo;s there. Family homes on bigger plots often have room for a <a href=\"/garage-conversions/east-yorkshire/\">garage conversion</a>, a <a href=\"/garden-rooms/east-yorkshire/\">garden room</a> or an <a href=\"/orangeries/east-yorkshire/\">orangery</a> as well as a new kitchen or bathroom. Exposed coastal houses are where we most expect to find <a href=\"/damp-proofing/penetrating-damp/\">penetrating damp</a> rather than rising damp.",
      ],
    }),
    cardsSection({
      kicker: "Services across East Yorkshire",
      h2: "Everything from a single room to a whole-house renovation.",
      cards: [
        { h: "Kitchens and bathrooms", href: "/kitchen-installs.html", p: "<a href=\"/kitchen-installs.html\">Kitchen fitting</a> and <a href=\"/bathroom-installs.html\">bathroom renovations</a>, including ensuites, walk-in showers and wet rooms." },
        { h: "Full renovations and refurbishments", href: "/full-house-renovations.html", p: "Whole-house projects managed by one team, in the right order, from strip-out to decorating." },
        { h: "Damp proofing", href: "/damp-proofing/", p: "&pound;119 surveys across the East Riding, then treatment, replastering and making good. In Beverley: <a href=\"/damp-proofing/beverley/\">damp proofing in Beverley</a>." },
        { h: "Plastering, electrics, joinery and decorating", href: "/plastering.html", p: "<a href=\"/plastering.html\">Plastering</a>, <a href=\"/electrical.html\">electrical work and rewiring</a>, <a href=\"/joinery.html\">joinery</a> and <a href=\"/decorating.html\">decorating</a>, on their own or as part of a bigger job." },
        { h: "More space", href: "/garage-conversions/east-yorkshire/", p: "<a href=\"/garage-conversions/east-yorkshire/\">Garage conversions</a>, <a href=\"/garden-rooms/east-yorkshire/\">garden rooms</a>, <a href=\"/orangeries/east-yorkshire/\">orangeries</a> and <a href=\"/conservatory-transformations/east-yorkshire/\">conservatory transformations</a>." },
        { h: "Outdoor kitchens", href: "/outdoor-kitchens/east-yorkshire/", p: "Built-in BBQ areas and covered outdoor kitchens, wired and plumbed." },
      ],
    }),
    photoSection({
      kicker: "Our work in the East Riding",
      h2: "Bathrooms in Howden, Cherry Burton and Hessle.",
      paras: [
        "We renovated a bathroom in Howden, shown at the top of this page. Near Beverley, we renovated the ensuite in Cherry Burton shown here, and in Hessle we fitted a <a href=\"/projects/bathrooms/hessle-bathroom-renovation/\">bathroom with a walk-in shower</a>.",
        "We also fitted a <a href=\"/projects/kitchens/cottingham-kitchen-renovation/\">shaker-style kitchen in Cottingham</a> and turned a bare loft into a usable room on a <a href=\"/projects/full-house-renovations/loft-room-renovation/\">loft renovation</a>.",
      ],
      photo: PHOTOS.cherryBurton,
      caption: "An ensuite we renovated in Cherry Burton, near Beverley.",
    }),
    textSection({
      kicker: "Planning in the East Riding",
      h2: "Planning, conservation areas and listed buildings.",
      paras: [
        "Planning and building control across the region are handled by East Riding of Yorkshire Council. Conservation areas and listed buildings are far more common in the East Riding&rsquo;s market towns and village centres than in newer suburbs, so we check the position for each house rather than assuming the standard permitted development rules apply.",
        "If your house is listed, most alterations inside and out need listed building consent. We&rsquo;ll flag which parts of the job are likely to need it before work is planned.",
      ],
    }),
    stepsSection({
      kicker: "How quotes work",
      h2: "How we quote for work in the East Riding.",
      intro: "Because the East Riding is spread out, a few photos first help us plan the visit and bring the right person.",
      steps: [
        ["Send us the details", `Use the <a href="${QUOTE}">quote form</a>, call ${phoneLink()}, or send photos and your postcode on WhatsApp.`],
        ["We confirm we can cover it", "We reply within 3 hours during opening hours and tell you straight away if your postcode is outside our area."],
        ["Site visit", "We look at the house, including what&rsquo;s behind the problem where we can, and check any planning or listed-building points."],
        ["Itemised written quote", "You see what each part of the job costs before you decide."],
        ["One team on site", "One point of contact for every trade, from first fix to the final clean."],
      ],
    }),
    faqSection({
      h2: "Renovating in East Yorkshire: FAQs.",
      faqs: [
        ["Do you cover the whole of the East Riding?", "We cover homes within about 30 miles of Hessle. That takes in the villages west of Hull, Beverley, Cottingham, Brough, Howden, Goole and Driffield, and out to Hornsea and Bridlington. Send us your postcode if you&rsquo;re not sure."],
        ["Is Hull part of East Yorkshire?", "Hull is in East Yorkshire, but it has its own council, separate from East Riding of Yorkshire Council. That matters for planning and building control. See <a href=\"/hull.html\">renovations in Hull</a>."],
        ["Where are you based?", "On Station Road in Hessle, near the Humber Bridge. We don&rsquo;t have other branches; we travel to you."],
        ["Do rural and older properties need a different approach?", "Often, yes. Older solid-walled houses, farmhouses and listed buildings need materials and repairs that suit how they were built, and more of them are in conservation areas. We check this at the site visit."],
        ["Do you do damp surveys across the East Riding?", "Yes. A damp survey costs &pound;119, deducted from the cost of any treatment if you accept our quote. <a href=\"/damp-proofing/book-a-survey/\">Book a damp survey</a>."],
      ],
    }),
    contactSection({
      h2: "Renovating a home in East Yorkshire?",
      body: "Tell us where you are and what you&rsquo;d like done. If you&rsquo;re near the edge of our area, include your postcode and we&rsquo;ll confirm we can help before arranging a visit.",
    }),
  ],
});

// ----------------------------- NORTH LINCOLNSHIRE ---------------------------
PAGES.push({
  path: "areas/north-lincolnshire/index.html",
  canonical: `${SITE}/areas/north-lincolnshire/`,
  ogImage: "/assets/img/og/areas.jpg",
  crumb: "North Lincolnshire",
  title: "Renovations North Lincolnshire | Barton, Brigg, Scunthorpe",
  description: "Damp proofing, renovations and property improvements in North Lincolnshire: Barton-upon-Humber, Brigg, Scunthorpe, Winterton, Epworth and Crowle. Free quote.",
  serviceName: "Renovations and damp proofing in North Lincolnshire",
  areaServed: [["AdministrativeArea", "North Lincolnshire"], ["City", "Barton-upon-Humber"], ["City", "Brigg"], ["City", "Scunthorpe"], ["City", "Winterton"], ["City", "Epworth"], ["City", "Crowle"]],
  body: [
    hero({
      kicker: "Renovations in North Lincolnshire",
      h1: "Renovations and damp proofing in North Lincolnshire.",
      intro: [
        "Our base is in Hessle, at the Yorkshire end of the Humber Bridge, so North Lincolnshire is just across the river. We carry out damp surveys and damp proofing, kitchens, bathrooms, plastering and property refurbishments in Barton-upon-Humber, Brigg, Scunthorpe, Winterton and the Isle of Axholme towns of Epworth and Crowle.",
      ],
      image: { ...PHOTOS.hessleBathroom },
      secondary: { label: "Book a &pound;119 damp survey", href: SURVEY },
    }),
    textSection({
      kicker: "Our area south of the Humber",
      h2: "How far into North Lincolnshire we go.",
      paras: [
        "We cover homes within about 30 miles of Hessle. Over the bridge, that takes in Barton-upon-Humber and Barrow upon Humber, Brigg and the villages around it, Scunthorpe and Winterton, and Epworth and Crowle on the Isle of Axholme. We don&rsquo;t have an office or yard in North Lincolnshire; we travel from Hessle for every visit.",
        "Damp surveys and damp proofing cover the whole of this area at the same &pound;119 survey price as in Hull. For kitchens, bathrooms and refurbishment work, send us your postcode with your enquiry and we&rsquo;ll confirm we can take it on before we book a visit.",
      ],
    }),
    cardsSection({
      kicker: "Towns we cover",
      h2: "North Lincolnshire towns and what their houses need.",
      cards: [
        { h: "Barton-upon-Humber", href: "/damp-proofing/barton-upon-humber/", p: "The closest town to us, a few minutes over the bridge. Its Georgian and Victorian centre is a conservation area, with solid walls and older plaster that need the right repairs. <a href=\"/damp-proofing/barton-upon-humber/\">Damp proofing in Barton</a>." },
        { h: "Brigg", href: "/damp-proofing/brigg/", p: "A market town on the River Ancholme with older solid-walled houses in the centre and newer homes on the edges, where condensation is the usual problem. <a href=\"/damp-proofing/brigg/\">Damp proofing in Brigg</a>." },
        { h: "Scunthorpe", href: "/damp-proofing/scunthorpe/", p: "Terraced streets in Crosby and Frodingham built for the steelworks, and large inter-war and post-war estates where kitchens, bathrooms and condensation are the common jobs. <a href=\"/damp-proofing/scunthorpe/\">Damp proofing in Scunthorpe</a>." },
        { h: "Winterton", p: "A village north of Scunthorpe with older houses in its centre and newer estates around it." },
        { h: "Epworth and Crowle", p: "Towns on the Isle of Axholme, flat, low-lying land that was drained for farming. Older houses here can have damp ground floors, so we check floors and walls carefully before any renovation." },
      ],
    }),
    cardsSection({
      kicker: "Services in North Lincolnshire",
      h2: "What we can do for you over the bridge.",
      cards: [
        { h: "Damp surveys and damp proofing", href: "/damp-proofing/", p: "&pound;119 survey and written report, then <a href=\"/damp-proofing/rising-damp-treatment/\">rising damp treatment</a>, <a href=\"/damp-proofing/penetrating-damp/\">penetrating damp repairs</a>, <a href=\"/damp-proofing/condensation-control/\">condensation control</a> and <a href=\"/damp-proofing/mould-treatment/\">mould treatment</a>, with the replastering included." },
        { h: "Kitchens and bathrooms", href: "/bathroom-installs.html", p: "<a href=\"/bathroom-installs.html\">Bathroom renovations</a>, showers and wet rooms, and <a href=\"/kitchen-installs.html\">kitchen fitting</a>, with the plumbing, electrics and tiling done by one team." },
        { h: "Property refurbishment", href: "/full-house-renovations.html", p: "<a href=\"/full-house-renovations.html\">Full house renovations</a>, newly bought houses and rentals between tenants, plus <a href=\"/plastering.html\">plastering</a>, <a href=\"/electrical.html\">rewiring</a> and <a href=\"/decorating.html\">decorating</a>." },
        { h: "For landlords and buyers", href: "/damp-proofing/landlord-damp-mould-reports/", p: "<a href=\"/damp-proofing/landlord-damp-mould-reports/\">Damp and mould reports for landlords</a> and <a href=\"/damp-proofing/pre-purchase-damp-survey/\">pre-purchase damp surveys</a> for buyers." },
      ],
    }),
    photoSection({
      kicker: "Examples of our work",
      h2: "Work from just across the bridge.",
      paras: [
        "We don&rsquo;t have a North Lincolnshire case study on the site yet, so we won&rsquo;t pretend otherwise. The bathroom in the photo is one we renovated in Hessle, at the other end of the Humber Bridge: a full refit with a <a href=\"/projects/bathrooms/hessle-bathroom-renovation/\">walk-in shower</a>.",
        "You can also see a <a href=\"/projects/bathrooms/hull-bathroom-renovation/\">Hull bathroom stripped back to the floorboards</a> and a <a href=\"/projects/kitchens/cottingham-kitchen-renovation/\">Cottingham kitchen</a>. Ask us for photos of work similar to yours.",
      ],
      photo: PHOTOS.hessleBathroom,
      caption: "A bathroom we renovated in Hessle.",
    }),
    textSection({
      kicker: "Planning in North Lincolnshire",
      h2: "Planning and building control south of the Humber.",
      paras: [
        "North Lincolnshire is a different council area from East Yorkshire. Planning and building control are handled by North Lincolnshire Council, not East Riding of Yorkshire Council or Hull City Council. Towns such as Barton-upon-Humber and Brigg have conservation areas where changes to the outside of a house can need consent, and listed buildings need listed building consent for most alterations.",
        "We point out anything that is likely to need consent at the site visit, and mention it in a damp survey report, before you commit to the work.",
      ],
    }),
    stepsSection({
      kicker: "How quotes work",
      h2: "Getting a quote or a damp survey in North Lincolnshire.",
      intro: "There are two ways in, depending on what you need.",
      steps: [
        ["Damp problem?", `Book a <a href="${SURVEY}">&pound;119 damp survey</a>. We inspect inside and out, find the cause and send a written report with a quote. The &pound;119 comes off the cost of any work you go ahead with.`],
        ["Renovation work?", `Send the details and your postcode through the <a href="${QUOTE}">quote form</a>, call ${phoneLink()}, or send photos on WhatsApp.`],
        ["We reply", "Within 3 hours during opening hours, and confirm we can cover your postcode before booking a visit."],
        ["Site visit and written quote", "We look at the job and give you an itemised written quote."],
        ["The work", "One point of contact, travelling from Hessle each day."],
      ],
    }),
    faqSection({
      h2: "Renovations in North Lincolnshire: FAQs.",
      faqs: [
        ["Do you have an office in Scunthorpe or Barton?", "No. Our only base is Station Road in Hessle, at the north end of the Humber Bridge. We travel over for every visit and every job."],
        ["Which North Lincolnshire towns do you cover?", "Barton-upon-Humber, Barrow upon Humber, Brigg, Scunthorpe, Winterton, Epworth and Crowle, and the villages around them. Send us your postcode if you&rsquo;re not sure."],
        ["Is the damp survey price the same as in Hull?", "Yes. A damp survey is &pound;119 wherever we cover, deducted from the cost of any treatment if you accept our quote."],
        ["Do you do kitchens and bathrooms in North Lincolnshire, or just damp?", "Both. As well as damp proofing we fit kitchens and bathrooms and carry out plastering and refurbishment work. Include your postcode when you get in touch and we&rsquo;ll confirm before arranging a visit."],
        ["Who handles planning permission in North Lincolnshire?", "North Lincolnshire Council. If your house is in a conservation area or is listed, we&rsquo;ll point out what may need consent before work is planned."],
      ],
    }),
    contactSection({
      h2: "Renovating or dealing with damp in North Lincolnshire?",
      body: "Tell us what&rsquo;s going on and where you are. A few photos on WhatsApp let us give you a useful first answer before anyone drives over the bridge.",
    }),
  ],
});

// ----------------------------- LINCOLNSHIRE --------------------------------
PAGES.push({
  path: "areas/lincolnshire/index.html",
  canonical: `${SITE}/areas/lincolnshire/`,
  ogImage: "/assets/img/og/areas.jpg",
  crumb: "Lincolnshire",
  title: "Renovations in Northern Lincolnshire & Grimsby | EYR",
  description: "Which parts of Lincolnshire we cover for renovations, property refurbishment and damp proofing: North Lincolnshire, Grimsby, Cleethorpes and Immingham.",
  serviceName: "Renovations, property refurbishment and damp proofing in northern Lincolnshire",
  areaServed: [["AdministrativeArea", "North Lincolnshire"], ["AdministrativeArea", "North East Lincolnshire"], ["City", "Grimsby"], ["City", "Cleethorpes"], ["City", "Immingham"]],
  body: [
    hero({
      kicker: "Renovations in Lincolnshire",
      h1: "Renovations and property refurbishment in northern Lincolnshire.",
      intro: [
        "Lincolnshire is a big county, and we&rsquo;re based on the other side of the Humber in Hessle. So rather than claim the whole county, this page sets out exactly which parts we cover: North Lincolnshire, and the Grimsby, Cleethorpes and Immingham area of North East Lincolnshire.",
      ],
      image: { ...PHOTOS.tiling },
      secondary: { label: "Renovations in North Lincolnshire", href: "/areas/north-lincolnshire/" },
    }),
    cardsSection({
      kicker: "Our coverage",
      h2: "The parts of Lincolnshire we cover, and the parts we don&rsquo;t.",
      intro: [
        "&ldquo;Lincolnshire&rdquo; covers three council areas. We work in two of them, within about 30 miles of our base in Hessle.",
      ],
      cards: [
        { h: "North Lincolnshire: covered", href: "/areas/north-lincolnshire/", p: "Barton-upon-Humber, Brigg, Scunthorpe, Winterton, Epworth and Crowle. See <a href=\"/areas/north-lincolnshire/\">renovations in North Lincolnshire</a> for the detail." },
        { h: "North East Lincolnshire: covered", p: "Grimsby, Cleethorpes and Immingham. This is the far edge of our area, so we confirm each job by postcode before booking a visit." },
        { h: "The rest of Lincolnshire: not covered", p: "We don&rsquo;t normally take on work further south, such as Lincoln, Louth, Skegness, Boston or Grantham. It&rsquo;s too far from Hessle for us to run a job properly. If you&rsquo;re near the northern edge of the county, around Caistor, Market Rasen or Gainsborough, send your postcode and we&rsquo;ll give you an honest answer." },
      ],
    }),
    textSection({
      kicker: "Grimsby, Cleethorpes and Immingham",
      h2: "Renovating homes in North East Lincolnshire.",
      paras: [
        "Grimsby has a lot of Victorian terraced housing around the East and West Marsh, built when the docks and fishing industry were at their height, and a large stock of inter-war and post-war homes across the town and out towards Cleethorpes. Cleethorpes has its own Victorian and Edwardian seaside streets, and Immingham is mostly twentieth-century housing that grew up around the port.",
        "Sitting on the Humber estuary near the open coast, older houses in this area take a lot of wind-driven rain, so <a href=\"/damp-proofing/penetrating-damp/\">penetrating damp</a> and condensation are the problems we expect to find most. Our <a href=\"/damp-proofing/grimsby/\">damp surveys in Grimsby</a> cover the whole area at &pound;119. Planning and building control here are handled by North East Lincolnshire Council.",
      ],
    }),
    cardsSection({
      kicker: "Services",
      h2: "Property refurbishment and home improvements we offer in northern Lincolnshire.",
      cards: [
        { h: "Damp proofing", href: "/damp-proofing/", p: "Surveys, rising and penetrating damp, condensation and mould, with the replastering and making good done by us." },
        { h: "Bathrooms and kitchens", href: "/bathroom-installs.html", p: "<a href=\"/bathroom-installs.html\">Bathroom renovations</a> and <a href=\"/kitchen-installs.html\">kitchen fitting</a> by one team." },
        { h: "Property refurbishment", href: "/full-house-renovations.html", p: "<a href=\"/full-house-renovations.html\">Whole-house refurbishments</a>, including rentals between tenants and houses bought to renovate." },
        { h: "Plastering and finishing", href: "/plastering.html", p: "<a href=\"/plastering.html\">Plastering</a>, <a href=\"/electrical.html\">rewiring</a>, <a href=\"/joinery.html\">joinery</a> and <a href=\"/decorating.html\">decorating</a>." },
      ],
    }),
    photoSection({
      kicker: "Examples of our work",
      h2: "Real work, honestly labelled.",
      paras: [
        "We don&rsquo;t yet have a finished project in North East Lincolnshire to show you, and we won&rsquo;t present work from elsewhere as if it were local. The tiling in the photo is from one of our bathroom renovations in East Yorkshire.",
        "Our <a href=\"/projects/\">project case studies</a> include a <a href=\"/projects/bathrooms/hull-bathroom-renovation/\">Hull bathroom</a>, a <a href=\"/projects/bathrooms/hessle-bathroom-renovation/\">Hessle walk-in shower</a> and a <a href=\"/projects/kitchens/cottingham-kitchen-renovation/\">Cottingham kitchen</a>.",
      ],
      photo: PHOTOS.tiling,
      caption: "Tiling from one of our bathroom renovations in East Yorkshire.",
    }),
    stepsSection({
      kicker: "How quotes work",
      h2: "Asking for a quote from northern Lincolnshire.",
      intro: "Because this is the edge of our area, the first step is always to check your postcode.",
      steps: [
        ["Send your postcode and the job", `Through the <a href="${QUOTE}">quote form</a>, by phone on ${phoneLink()}, or with photos on WhatsApp.`],
        ["We confirm coverage", "Within 3 hours during opening hours. If you&rsquo;re outside our area we&rsquo;ll say so, rather than leave you waiting."],
        ["Survey or site visit", `For damp, a <a href="${SURVEY}">&pound;119 damp survey</a> with a written report. For renovations, a site visit to measure up.`],
        ["Written quote", "An itemised quote, including the replastering and making good where relevant."],
      ],
    }),
    faqSection({
      h2: "Lincolnshire coverage: FAQs.",
      faqs: [
        ["Do you cover Lincoln?", "No. Lincoln is too far from our base in Hessle for us to run renovation work there properly. We cover North Lincolnshire and the Grimsby, Cleethorpes and Immingham area."],
        ["Do you cover Grimsby and Cleethorpes?", "Yes, though they&rsquo;re at the edge of our area, so we confirm each job by postcode first. Damp surveys there are &pound;119, the same as everywhere else we cover."],
        ["What&rsquo;s the difference between North Lincolnshire and Lincolnshire?", "North Lincolnshire (Scunthorpe, Brigg, Barton) and North East Lincolnshire (Grimsby, Cleethorpes, Immingham) are separate councils from Lincolnshire County Council, which covers the rest of the county, including Lincoln. We work in the first two."],
        ["Do you have premises in Lincolnshire?", "No. Our only base is Station Road in Hessle, and we travel over the Humber Bridge for every visit."],
      ],
    }),
    contactSection({
      h2: "In northern Lincolnshire and planning work?",
      body: "Send us your postcode and a few details. We&rsquo;ll tell you quickly whether you&rsquo;re in our area, and if you are, arrange a visit or a damp survey.",
    }),
  ],
});

// ---------------------------------------------------------------------------
for (const p of PAGES) {
  const html = page({
    title: p.title,
    description: p.description,
    canonical: p.canonical,
    ogImage: p.ogImage,
    body: p.body.join("\n"),
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Areas We Cover", item: `${SITE}/areas.html` },
      { name: p.crumb },
    ],
    extraLd: regionLd({ canonical: p.canonical, title: p.title, description: p.description, serviceName: p.serviceName, areaServed: p.areaServed }),
  });
  mkdirSync(dirname(p.path), { recursive: true });
  writeFileSync(p.path, html);
}
execFileSync("node", ["scripts/sync-faq-schema.mjs", ...PAGES.map((p) => p.path)], { stdio: "ignore" });
console.log(`wrote ${PAGES.map((p) => p.path).join(", ")}`);
