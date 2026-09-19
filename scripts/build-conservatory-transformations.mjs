import { mkdirSync, writeFileSync } from "fs";
import { page, heroTextOnly, stepsList, faqList, quoteCallout, conceptVideoSection, testimonialsSection } from "./lib/layout.mjs";
import { SITE } from "./lib/constants.mjs";

const OUT_MAIN = "conservatory-transformations";
const OUT_HULL = "conservatory-transformations/hull";
const OUT_EY = "conservatory-transformations/east-yorkshire";

/* ---------------- MAIN PAGE ---------------- */

const mainBody = `${heroTextOnly({
  kicker: "Conservatory transformations",
  h1: "Conservatory transformations in Hull &amp; East Yorkshire.",
  intro: "Turn a conservatory that's too hot in summer, too cold in winter, or just gathering clutter into a room you actually use all year &mdash; without the cost of a full extension.",
  secondaryCta: { label: "View Our Recent Projects", href: "/projects/conservatory-transformations/" },
  image: { src: "/assets/img/services/conservatory-transformation-ai.jpg", width: 1600, height: 900, alt: "Concept image - conservatory transformation style" },
})}
${conceptVideoSection({
  h1: "See a conservatory transformation in motion.",
  videos: [{ src: "/assets/video/conservatory-concept.mp4" }],
})}
    <section class="section">
      <div class="container">
        <p class="kicker">The problem with most conservatories</p>
        <h2 class="section-title">Why conservatories end up unused.</h2>
        <p>Most older conservatories were built with a fully glazed polycarbonate or thin double-glazed roof, which is the main reason they become uncomfortable: unbearably hot when the sun's on it, and cold as soon as the temperature drops. Once that happens, a conservatory tends to turn into storage space rather than the extra living room it was meant to be.</p>
        <p>A conservatory transformation deals with that root cause &mdash; usually starting with the roof &mdash; rather than just redecorating around the problem. Depending on the conservatory and what you want from the finished room, we can go from a straightforward insulated roof replacement through to a complete rebuild with new walls, flooring, electrics and doors.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">What a transformation can include</p>
        <h2 class="section-title">From a roof replacement to a full rebuild.</h2>
        <div class="cards">
          <article class="card">
            <h3>Roof replacement</h3>
            <p>Swapping a glass or polycarbonate roof for a solid insulated roof (tiled or insulated panel system), or an upgraded high-performance glazed roof. This is usually the single biggest factor in fixing summer heat and winter cold.</p>
          </article>
          <article class="card">
            <h3>Walls, windows &amp; doors</h3>
            <p>Replacing thin dwarf walls or ageing window units, and swapping old sliding patio doors for bi-fold or French doors, improves both insulation and how the room feels.</p>
          </article>
          <article class="card">
            <h3>Full interior fit-out</h3>
            <p>New flooring, plastering, electrics, lighting and decorating to bring the room up to the same standard as the rest of your house, so it stops feeling like a separate, bolted-on space.</p>
          </article>
        </div>
        <p>We plan first fix and second fix electrics, lighting and heating as part of the same project, so sockets and switches end up where you'd actually use them rather than wherever the old conservatory happened to have them.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Planning &amp; regulations</p>
        <h2 class="section-title">Planning permission and building regulations for conservatory transformations.</h2>
        <p>Because a transformation usually reuses the existing footprint and dwarf walls, planning permission generally isn't needed &mdash; the exception is where you're also changing the size or footprint of the structure, or working on a listed building. Building regulations are the part worth understanding properly: conservatories are normally exempt from building regulations if they meet specific criteria (broadly: independently heated with its own controls, thermally separated from the main house by external-quality doors, and under a certain floor area). A transformation that removes that thermal separation &mdash; for example, opening the conservatory fully into the kitchen, or making its heating part of the main house system &mdash; can mean the exemption no longer applies, which brings the new roof, glazing and electrics under building regulations.</p>
        <p>This is general guidance rather than an assessment of your specific conservatory. We'll advise on what applies once we've seen the existing structure and discussed what you want the finished room to do.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Cost</p>
        <h2 class="section-title">Typical conservatory transformation cost considerations.</h2>
        <p>Cost depends heavily on how much of the structure is being replaced, so treat the figures below as general UK guidance rather than a quote &mdash; the only way to get an accurate number is a site visit.</p>
        <div class="cards">
          <article class="card">
            <h3>Roof replacement only</h3>
            <p>Roughly &pound;5,000&ndash;&pound;12,000 for a tiled or insulated panel roof replacement on an existing conservatory, keeping the walls, windows and doors as they are.</p>
          </article>
          <article class="card">
            <h3>Fuller transformation</h3>
            <p>Roughly &pound;12,000&ndash;&pound;25,000 for a new roof plus flooring, insulation, electrics and decorating to bring the whole room up to a usable standard.</p>
          </article>
          <article class="card">
            <h3>Complete rebuild</h3>
            <p>Roughly &pound;25,000&ndash;&pound;40,000+ for a full transformation including new bi-fold doors, walls, underfloor heating and a premium interior finish.</p>
          </article>
        </div>
        <p>These figures are indicative of the wider UK market and aren't East Yorkshire Renovations' confirmed pricing &mdash; <a href="/contact.html#quote-form">get in touch for a free, tailored quote</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Process</p>
        <h2 class="section-title">How we run a conservatory transformation.</h2>
        ${stepsList([
          { title: "Survey & design", body: "We assess the existing structure, discuss what's not working and agree the scope, from a roof swap to a full rebuild." },
          { title: "Regulations check", body: "We confirm whether building regulations apply based on the finished specification and heating arrangement." },
          { title: "Construction", body: "Roof, walls, glazing, electrics and flooring are carried out in sequence, keeping the space as weathertight as possible throughout." },
          { title: "Finishing & handover", body: "Plastering, decorating and a final clean, with a walk-through of the finished room." },
        ])}
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Timescale</p>
          <h2 class="section-title">How long does a conservatory transformation take?</h2>
          <p>A roof-only replacement can often be completed in 1&ndash;2 weeks. A fuller transformation with new flooring, electrics and decorating typically takes 3&ndash;6 weeks, and a complete rebuild with new doors and walls can take longer depending on scope. We'll confirm a realistic programme once we've agreed the specification.</p>
        </div>
        ${quoteCallout({
          heading: "Got a conservatory you don't use?",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> to arrange a site visit.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Why choose us</p>
        <h2 class="section-title">Why East Yorkshire Renovations.</h2>
        <ul>
          <li>One point of contact for the whole project, from the roof down to the decorating.</li>
          <li>A local team based in Hessle, working across Hull and East Yorkshire.</li>
          <li>Transparent pricing and a clear, realistic build programme.</li>
          <li>We coordinate every trade involved, including electrics, plastering and glazing.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Areas covered</p>
        <h2 class="section-title">Conservatory transformations across Hull &amp; East Yorkshire.</h2>
        <div class="cards">
          <article class="card">
            <h3><a href="/conservatory-transformations/hull/">Conservatory transformations in Hull</a></h3>
            <p>Upgrading conservatories on Hull's terraces and suburban semis into rooms that get used all year.</p>
          </article>
          <article class="card">
            <h3><a href="/conservatory-transformations/east-yorkshire/">Conservatory transformations in East Yorkshire</a></h3>
            <p>Roof replacements and full rebuilds for village and rural properties across the East Riding.</p>
          </article>
        </div>
        <p>We also work in Anlaby, Kirk Ella, Swanland, North Ferriby, Brough and South Cave &mdash; see our <a href="/areas.html">full list of areas we cover</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Project examples</p>
        <h2 class="section-title">Conservatory transformation projects.</h2>
        <p>We're building our library of completed conservatory transformation projects and will publish real photos and case studies here as they're finished &mdash; see our <a href="/projects/conservatory-transformations/">conservatory transformation projects page</a> for what to expect. In the meantime, you can see genuine completed kitchen, bathroom and refurbishment work on our <a href="/work.html">recent work page</a>.</p>
      </div>
    </section>

${testimonialsSection()}

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Conservatory transformation FAQs.</h2>
        ${faqList([
          { q: "My conservatory is too hot in summer and too cold in winter — what's the fix?", a: "In most cases it's the roof. Replacing a glass or polycarbonate roof with an insulated tiled or panel roof, or a high-performance glazed roof, is usually the single biggest improvement to summer heat and winter cold." },
          { q: "Do I need planning permission for a conservatory transformation?", a: "Usually not, if you're keeping the existing footprint. It's more likely to be needed if you're changing the size of the structure or working on a listed building." },
          { q: "Will my conservatory need building regulations approval?", a: "It depends on the finished specification. Conservatories can be exempt from building regulations if they're independently heated and thermally separated from the house. A transformation that removes that separation can bring the new roof, glazing and electrics under building regulations." },
          { q: "Can you replace just the roof and leave the rest as it is?", a: "Yes, a roof-only replacement is one of our most common conservatory transformation projects, and is usually the quickest and most cost-effective option." },
          { q: "How long does a full conservatory transformation take?", a: "A roof-only replacement can often be done in 1-2 weeks. A fuller transformation with flooring, electrics and decorating typically takes 3-6 weeks." },
        ])}
      </div>
    </section>
`;

writeMain();

function writeMain() {
  mkdirSync(OUT_MAIN, { recursive: true });
  const canonical = `${SITE}/conservatory-transformations/`;
  const html = page({
    title: "Conservatory Transformations Hull & East Yorkshire | EYR",
    description: "Turn a too-hot, too-cold or underused conservatory into a comfortable year-round room. Roof replacements and full transformations across Hull and East Yorkshire.",
    canonical,
    body: mainBody,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Conservatory Transformations" },
    ],
    faq: [
      { q: "My conservatory is too hot in summer and too cold in winter — what's the fix?", a: "In most cases it's the roof. Replacing a glass or polycarbonate roof with an insulated tiled or panel roof, or a high-performance glazed roof, is usually the single biggest improvement to summer heat and winter cold." },
      { q: "Do I need planning permission for a conservatory transformation?", a: "Usually not, if you're keeping the existing footprint. It's more likely to be needed if you're changing the size of the structure or working on a listed building." },
      { q: "Will my conservatory need building regulations approval?", a: "It depends on the finished specification. Conservatories can be exempt from building regulations if they're independently heated and thermally separated from the house. A transformation that removes that separation can bring the new roof, glazing and electrics under building regulations." },
      { q: "Can you replace just the roof and leave the rest as it is?", a: "Yes, a roof-only replacement is one of our most common conservatory transformation projects, and is usually the quickest and most cost-effective option." },
      { q: "How long does a full conservatory transformation take?", a: "A roof-only replacement can often be done in 1-2 weeks. A fuller transformation with flooring, electrics and decorating typically takes 3-6 weeks." },
    ],
    service: {
      name: "Conservatory Transformations",
      description: "Conservatory roof replacements and full conservatory transformations across Hull and East Yorkshire, turning underused conservatories into year-round rooms.",
    },
  });
  writeFileSync(`${OUT_MAIN}/index.html`, html);
  console.log(`wrote ${OUT_MAIN}/index.html`);
}

/* ---------------- HULL PAGE ---------------- */

const hullBody = `${heroTextOnly({
  kicker: "Conservatory transformations in Hull",
  h1: "Conservatory transformations in Hull.",
  intro: "Roof replacements and full conservatory transformations for Hull's terraces and suburban semis, turning an unused conservatory into a room you actually live in.",
  secondaryCta: { label: "View Our Recent Projects", href: "/projects/conservatory-transformations/" },
})}
    <section class="section">
      <div class="container">
        <p class="kicker">Conservatories in Hull</p>
        <h2 class="section-title">Common conservatory problems on Hull homes.</h2>
        <p>Many Hull terraces and 1930s semis picked up a rear conservatory extension in the 1990s or 2000s, often with a thin polycarbonate or single-glazed roof that was never really designed for year-round use. On older terraces close to the Humber estuary, damp and cold rear additions are a recurring issue, which makes a proper insulated roof and floor upgrade worth prioritising alongside any cosmetic changes.</p>
        <p>Because most transformations keep the existing footprint, planning permission generally isn't needed in Hull &mdash; the main thing to check is whether the finished specification (heating and thermal separation from the house) affects the building regulations exemption, which we'll assess for your specific conservatory.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">What we cover</p>
        <h2 class="section-title">Conservatory transformations in Hull.</h2>
        <ul>
          <li>Insulated roof replacements for polycarbonate and glass conservatory roofs.</li>
          <li>New flooring, plastering, electrics and decorating.</li>
          <li>Bi-fold and French door upgrades.</li>
          <li>Building regulations guidance where the transformation affects the conservatory exemption.</li>
        </ul>
        <p>See the full breakdown of options, costs and our process on our main <a href="/conservatory-transformations/">conservatory transformations page</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Get in touch</p>
          <h2 class="section-title">Got a conservatory in Hull that needs sorting?</h2>
          <p>Send us a few details about your conservatory and what's not working, and we'll arrange a site visit to talk through the best fix for your budget.</p>
        </div>
        ${quoteCallout({
          heading: "Local conservatory specialists",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> for a fast response.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Conservatory transformation FAQs for Hull homeowners.</h2>
        ${faqList([
          { q: "Can you fix a conservatory that's too hot in summer on a Hull terrace?", a: "Yes, this is one of our most common requests. In most cases it comes down to replacing the roof with an insulated tiled or panel system, or a high-performance glazed roof." },
          { q: "Do I need planning permission to transform my conservatory in Hull?", a: "Usually not, since most transformations keep the existing footprint. It's a different situation if you're extending the structure or the property is listed." },
          { q: "Do you work on both older and newer conservatories?", a: "Yes, from 1990s polycarbonate-roofed conservatories on Hull terraces to newer glazed conservatories on more recent developments." },
        ])}
        <p>See more general questions on our <a href="/conservatory-transformations/">main conservatory transformations page</a>, or <a href="/hull.html">read more about our renovation work in Hull</a>.</p>
      </div>
    </section>
`;

writeHull();

function writeHull() {
  mkdirSync(OUT_HULL, { recursive: true });
  const canonical = `${SITE}/conservatory-transformations/hull/`;
  const html = page({
    title: "Conservatory Transformations Hull | Roof & Full Rebuilds",
    description: "Conservatory roof replacements and full transformations in Hull, turning too-hot or too-cold conservatories into rooms you can use all year.",
    canonical,
    body: hullBody,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Conservatory Transformations", item: `${SITE}/conservatory-transformations/` },
      { name: "Hull" },
    ],
    service: {
      name: "Conservatory Transformations in Hull",
      description: "Conservatory roof replacements and full conservatory transformations for homes across Hull.",
      areaServed: ["Hull"],
    },
  });
  writeFileSync(`${OUT_HULL}/index.html`, html);
  console.log(`wrote ${OUT_HULL}/index.html`);
}

/* ---------------- EAST YORKSHIRE PAGE ---------------- */

const eyBody = `${heroTextOnly({
  kicker: "Conservatory transformations in East Yorkshire",
  h1: "Conservatory transformations across East Yorkshire.",
  intro: "Roof replacements and full conservatory transformations for homes across the East Riding, from village properties in Beverley and Cottingham to family homes in Willerby and Swanland.",
  secondaryCta: { label: "View Our Recent Projects", href: "/projects/conservatory-transformations/" },
})}
    <section class="section">
      <div class="container">
        <p class="kicker">Conservatories across East Yorkshire</p>
        <h2 class="section-title">Common conservatory problems in East Yorkshire villages.</h2>
        <p>Conservatories on larger East Yorkshire properties &mdash; particularly older builds from the 1990s and 2000s in Beverley, Cottingham and the surrounding villages &mdash; often share the same core problem regardless of size: a fully glazed or polycarbonate roof that makes the room unusable for large parts of the year. On period and listed properties, matching the transformation to the existing house is also a bigger consideration than it is on newer estate housing.</p>
        <p>Most transformations keep the existing footprint, so planning permission generally isn't required, though listed buildings and conservation areas across East Yorkshire's villages can bring extra considerations we'll check for your specific property.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">What we cover</p>
        <h2 class="section-title">Conservatory transformations across East Yorkshire.</h2>
        <ul>
          <li>Insulated roof replacements for polycarbonate and glass conservatory roofs.</li>
          <li>New flooring, plastering, electrics and decorating.</li>
          <li>Bi-fold and French door upgrades.</li>
          <li>Building regulations guidance where the transformation affects the conservatory exemption.</li>
        </ul>
        <p>See the full breakdown of options, costs and our process on our main <a href="/conservatory-transformations/">conservatory transformations page</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Get in touch</p>
          <h2 class="section-title">Got a conservatory in East Yorkshire that needs sorting?</h2>
          <p>Send us a few details about your conservatory and what's not working, and we'll arrange a site visit to talk through the best fix for your budget.</p>
        </div>
        ${quoteCallout({
          heading: "Local conservatory specialists",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> for a fast response.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Conservatory transformation FAQs for East Yorkshire homeowners.</h2>
        ${faqList([
          { q: "Do you cover villages like South Cave and North Ferriby?", a: "Yes, we cover the wider East Riding including Willerby, Kirk Ella, Swanland, North Ferriby, Brough and South Cave." },
          { q: "Are there extra planning considerations for period or listed properties?", a: "Yes. Listed buildings and conservation areas across East Yorkshire's villages can have tighter planning controls. We'll check this for your specific property before recommending a scope of work." },
          { q: "Can you match new brickwork or render to an older property?", a: "Yes, matching materials and detailing to period properties is something we plan for at design stage, particularly on older village homes." },
        ])}
        <p>See more general questions on our <a href="/conservatory-transformations/">main conservatory transformations page</a>, or explore our <a href="/areas.html">areas we cover</a>.</p>
      </div>
    </section>
`;

writeEY();

function writeEY() {
  mkdirSync(OUT_EY, { recursive: true });
  const canonical = `${SITE}/conservatory-transformations/east-yorkshire/`;
  const html = page({
    title: "Conservatory Transformations East Yorkshire | EYR",
    description: "Conservatory roof replacements and full transformations across East Yorkshire's villages and the East Riding, from roof-only fixes to complete rebuilds.",
    canonical,
    body: eyBody,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Conservatory Transformations", item: `${SITE}/conservatory-transformations/` },
      { name: "East Yorkshire" },
    ],
    service: {
      name: "Conservatory Transformations in East Yorkshire",
      description: "Conservatory roof replacements and full conservatory transformations for homes across East Yorkshire and the East Riding.",
    },
  });
  writeFileSync(`${OUT_EY}/index.html`, html);
  console.log(`wrote ${OUT_EY}/index.html`);
}
