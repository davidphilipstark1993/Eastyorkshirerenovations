import { mkdirSync, writeFileSync } from "fs";
import { page, heroTextOnly, stepsList, faqList, quoteCallout, testimonialsSection } from "./lib/layout.mjs";
import { SITE } from "./lib/constants.mjs";

const OUT_MAIN = "orangeries";
const OUT_HULL = "orangeries/hull";
const OUT_EY = "orangeries/east-yorkshire";

/* ---------------- MAIN PAGE ---------------- */

const mainBody = `${heroTextOnly({
  kicker: "Orangeries",
  h1: "Orangeries in Hull &amp; East Yorkshire.",
  intro: "A bespoke orangery adds a bright, usable room to your home without the commitment of moving house &mdash; more glass and ceiling height than a standard extension, more structure and year-round comfort than a conservatory.",
  secondaryCta: { label: "View Our Recent Projects", href: "/projects/orangeries/" },
  image: { src: "/assets/img/services/orangery-ai.jpg", width: 1600, height: 900, alt: "Concept image - orangery design style" },
})}
    <section class="section">
      <div class="container">
        <p class="kicker">What is an orangery?</p>
        <h2 class="section-title">A room that sits between an extension and a conservatory.</h2>
        <p>An orangery is a brick-built garden room with a substantial glazed roof lantern, usually finished with a flat or shallow-pitched perimeter roof and full-height glazing on one or more sides. Structurally it has more in common with a traditional extension than a conservatory &mdash; solid brick or block walls, proper foundations, and a roof that's designed to be lived under all year &mdash; while the glazed roof lantern keeps the light and sense of space that make garden rooms worth building in the first place.</p>
        <p>Most of our orangery enquiries come from homeowners who want more room for a kitchen-diner, a family living space or a garden room that actually gets used in January, not just in June. The brick piers and pelmet around the roof lantern also give you somewhere to run spotlights and blinds, which a fully glazed conservatory roof doesn't.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Orangery, conservatory or extension?</p>
        <h2 class="section-title">Choosing the right structure for your home.</h2>
        <div class="cards">
          <article class="card">
            <h3>Orangery</h3>
            <p>Brick-built with a glazed roof lantern and full-height glazing. Warmer and quieter than a conservatory, with more design flexibility than a standard extension. Sits in a similar price bracket to a good-quality extension.</p>
          </article>
          <article class="card">
            <h3>Conservatory</h3>
            <p>Predominantly glass, on a low dwarf wall, with a fully glazed pitched roof. Lower cost to build, but more prone to summer heat and winter cold unless the roof and glazing are upgraded. See our <a href="/conservatory-transformations/">conservatory transformation service</a> if you already have one that's underused.</p>
          </article>
          <article class="card">
            <h3>Traditional extension</h3>
            <p>Solid roof, smaller windows, the most thermally efficient option and the most flexible for room layout, but the least naturally lit. A good fit if the priority is a fully enclosed kitchen or bedroom rather than a bright garden-facing room.</p>
          </article>
        </div>
        <p>We also build <a href="/garden-rooms/">detached garden rooms</a> where a homeowner wants extra space away from the main house, such as a garden office or gym, rather than an attached room.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Design &amp; build</p>
        <h2 class="section-title">What goes into a well-built orangery.</h2>
        <p><strong>Brickwork.</strong> Piers and dwarf walls are usually built to match your existing brick where possible, or in a complementary tone where an exact match isn't available. This is what gives an orangery its solid, "always been there" look rather than a bolted-on box.</p>
        <p><strong>Roof &amp; lantern.</strong> Most orangeries use an insulated flat or shallow-pitch perimeter roof with a central glazed lantern, which brings light in from above without the heat loss and glare of a fully glazed conservatory roof. Lantern size and pitch are usually the biggest factor in how bright the finished room feels.</p>
        <p><strong>Glazing &amp; doors.</strong> Full-height windows and doors typically use thermally broken aluminium or uPVC frames with double or triple glazing. Bi-fold doors work well where you want the room to open fully onto the garden in summer; French doors or slimline sliding doors suit a more traditional look or a narrower opening.</p>
        <p><strong>Insulation.</strong> Because an orangery has a genuine roof structure rather than a glass one, it can be insulated to a similar standard as the rest of your house, which is the main reason it stays usable through a Yorkshire winter.</p>
        <p><strong>Heating &amp; electrics.</strong> Underfloor heating is popular in orangeries since it frees up wall space for glazing, though radiators and electric heating are also options. First and second fix electrics &mdash; sockets, spotlights around the lantern pelmet, and separate lighting circuits &mdash; are planned in at design stage so they don't get compromised later.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Planning &amp; regulations</p>
        <h2 class="section-title">Planning permission and building regulations.</h2>
        <p>Many single-storey orangery projects fall within permitted development rights, which means full planning permission isn't always required &mdash; but this depends on your property's size, how much of the garden has already been built on, and whether you're in a conservation area (parts of the Avenues in Hull, and several East Yorkshire villages, have tighter restrictions). Because it's a structural, brick-built room, building regulations approval is required regardless of the planning position, covering foundations, structural work, thermal performance of the glazing and roof, and electrical work.</p>
        <p>This is general guidance rather than a planning assessment for your specific property. We'll talk through what applies to your project during the initial consultation, and where needed help you make the relevant application to Hull City Council or East Riding of Yorkshire Council.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Cost</p>
        <h2 class="section-title">Typical orangery cost considerations.</h2>
        <p>Orangery costs vary a lot depending on size, glazing specification, roof design and finish, so the ranges below are general UK guidance rather than a quote for your project &mdash; the only way to get an accurate figure is a site visit and a proper design conversation.</p>
        <div class="cards">
          <article class="card">
            <h3>Smaller / entry-level</h3>
            <p>Roughly &pound;25,000&ndash;&pound;40,000 for a modest footprint (around 3m x 3m) with a standard lantern roof and glazing specification.</p>
          </article>
          <article class="card">
            <h3>Mid-size / mid-spec</h3>
            <p>Roughly &pound;40,000&ndash;&pound;70,000 for a larger room (around 4m x 4m to 5m x 4m) with bi-fold doors and a higher glazing specification.</p>
          </article>
          <article class="card">
            <h3>Larger / bespoke</h3>
            <p>Roughly &pound;70,000&ndash;&pound;120,000+ for a bespoke design, larger glazed spans, premium brickwork detailing and higher-spec insulation, heating and finishes.</p>
          </article>
        </div>
        <p>These figures are indicative of the wider UK market and aren't East Yorkshire Renovations' confirmed pricing &mdash; <a href="/contact.html#quote-form">get in touch for a free, tailored quote</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Process</p>
        <h2 class="section-title">How we build an orangery, from first visit to handover.</h2>
        ${stepsList([
          { title: "Consultation & design", body: "We visit, measure up, and talk through layout, glazing and roof options that suit your home and budget." },
          { title: "Planning & building regulations", body: "We confirm what applies to your project and handle the relevant applications and drawings." },
          { title: "Construction & project management", body: "Groundworks, brickwork, roof and glazing installation, then electrics, heating and finishes, coordinated under one schedule." },
          { title: "Final touches & handover", body: "Snagging, a full clean, and a walk-through so you know how everything works before we leave." },
        ])}
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Timescale</p>
          <h2 class="section-title">How long does an orangery take?</h2>
          <p>Design and any planning or building regulations approvals typically take several weeks before construction starts. Once on site, a straightforward orangery usually takes around 8&ndash;12 weeks to build, with larger or more complex designs taking longer. We'll give you a realistic programme once the design and specification are agreed.</p>
        </div>
        ${quoteCallout({
          heading: "Thinking about an orangery?",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> to arrange a site visit and talk through your options.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Why choose us</p>
        <h2 class="section-title">Why East Yorkshire Renovations.</h2>
        <ul>
          <li>One point of contact for the whole project &mdash; design, trades and project management under one roof.</li>
          <li>A local team based in Hessle, working across Hull and East Yorkshire.</li>
          <li>Transparent pricing and a clear, realistic build programme.</li>
          <li>We coordinate every trade involved &mdash; groundworks, brickwork, glazing, electrics and heating.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Areas covered</p>
        <h2 class="section-title">Orangeries across Hull &amp; East Yorkshire.</h2>
        <div class="cards">
          <article class="card">
            <h3><a href="/orangeries/hull/">Orangeries in Hull</a></h3>
            <p>Terraced extensions, Avenues conservation area considerations, and suburban rear extensions across the city.</p>
          </article>
          <article class="card">
            <h3><a href="/orangeries/east-yorkshire/">Orangeries in East Yorkshire</a></h3>
            <p>Larger plots and village settings across Beverley, Cottingham, Hessle, Willerby and the wider East Riding.</p>
          </article>
        </div>
        <p>We also work in Anlaby, Kirk Ella, Swanland, North Ferriby, Brough and South Cave &mdash; see our <a href="/areas.html">full list of areas we cover</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Project examples</p>
        <h2 class="section-title">Orangery projects.</h2>
        <p>We're building our library of completed orangery projects and will publish real photos and case studies here as they're finished &mdash; see our <a href="/projects/orangeries/">orangery projects page</a> for what to expect. In the meantime, you can see genuine completed kitchen, bathroom and refurbishment work on our <a href="/work.html">recent work page</a>.</p>
      </div>
    </section>

${testimonialsSection()}

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Orangery FAQs.</h2>
        ${faqList([
          { q: "What's the difference between an orangery and a conservatory?", a: "An orangery is brick-built with a glazed roof lantern and solid perimeter roof, giving better thermal performance and a more solid, permanent feel. A conservatory is predominantly glass on a low dwarf wall. See our full comparison above." },
          { q: "Do I need planning permission for an orangery?", a: "Often not, if the project falls within permitted development rights, but this depends on your property, how much of the garden is already built on, and whether you're in a conservation area. Building regulations approval is needed regardless, since it's a structural, brick-built room." },
          { q: "How long does an orangery take to build?", a: "Design and approvals typically take several weeks, and construction usually takes around 8-12 weeks on site for a standard-sized project, depending on complexity." },
          { q: "Can an orangery be used all year round?", a: "Yes. Because it's built with proper insulation, heating and a solid roof structure rather than a fully glazed one, a well-built orangery should be comfortable to use in winter as well as summer." },
          { q: "Do you handle planning and building regulations applications?", a: "Yes, we'll advise on what applies to your specific project and manage the relevant applications and drawings as part of the process." },
        ])}
      </div>
    </section>
`;

writeMain();

function writeMain() {
  mkdirSync(OUT_MAIN, { recursive: true });
  const canonical = `${SITE}/orangeries/`;
  const html = page({
    title: "Orangeries Hull & East Yorkshire | Bespoke Orangery Design",
    description: "Bespoke orangery design and building across Hull and East Yorkshire. Brickwork, roofs, glazing and building regulations explained, plus a free tailored quote.",
    canonical,
    body: mainBody,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Orangeries" },
    ],
    faq: [
      { q: "What's the difference between an orangery and a conservatory?", a: "An orangery is brick-built with a glazed roof lantern and solid perimeter roof, giving better thermal performance and a more solid, permanent feel. A conservatory is predominantly glass on a low dwarf wall." },
      { q: "Do I need planning permission for an orangery?", a: "Often not, if the project falls within permitted development rights, but this depends on your property, how much of the garden is already built on, and whether you're in a conservation area. Building regulations approval is needed regardless." },
      { q: "How long does an orangery take to build?", a: "Design and approvals typically take several weeks, and construction usually takes around 8-12 weeks on site for a standard-sized project, depending on complexity." },
      { q: "Can an orangery be used all year round?", a: "Yes. Because it's built with proper insulation, heating and a solid roof structure rather than a fully glazed one, a well-built orangery should be comfortable to use in winter as well as summer." },
      { q: "Do you handle planning and building regulations applications?", a: "Yes, we'll advise on what applies to your specific project and manage the relevant applications and drawings as part of the process." },
    ],
    service: {
      name: "Orangery Design & Building",
      description: "Bespoke orangery design and building across Hull and East Yorkshire, including brickwork, glazed roof lanterns, bi-fold doors and full project management.",
    },
  });
  writeFileSync(`${OUT_MAIN}/index.html`, html);
  console.log(`wrote ${OUT_MAIN}/index.html`);
}

/* ---------------- HULL PAGE ---------------- */

const hullBody = `${heroTextOnly({
  kicker: "Orangeries in Hull",
  h1: "Orangeries in Hull.",
  intro: "Bespoke orangery design and building for Hull's terraces, Avenues villas and suburban family homes, from initial design through to a finished, usable room.",
  secondaryCta: { label: "View Our Recent Projects", href: "/projects/orangeries/" },
})}
    <section class="section">
      <div class="container">
        <p class="kicker">Building in Hull</p>
        <h2 class="section-title">Orangeries on Hull's terraces, villas and semis.</h2>
        <p>Rear extensions and orangeries in Hull most often go onto Victorian and Edwardian terraces around Newland Avenue and Princes Avenue, bay-fronted villas in the Avenues conservation area, and 1930s semis further out in Kingswood and Bricknell. Plot sizes and existing rear additions vary a lot street by street, so the size and layout of what's achievable under permitted development can differ even between neighbouring houses.</p>
        <p>The Avenues conservation area has tighter planning controls than the rest of the city, so a project there is more likely to need a full planning application even where a similar extension elsewhere in Hull wouldn't. We'll check this for your specific property as part of the initial consultation, working with Hull City Council's planning department where an application is needed.</p>
        <p>Solid brick construction and older drainage close to the Humber estuary also mean foundations, damp-proofing and ground conditions are worth getting right at the design stage, particularly for rear extensions on older terraces.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">What we cover</p>
        <h2 class="section-title">Orangery design and build in Hull.</h2>
        <ul>
          <li>Design, brickwork and glazed roof lanterns matched to your property.</li>
          <li>Planning permission guidance, including Avenues conservation area considerations.</li>
          <li>Building regulations applications and structural work.</li>
          <li>Bi-fold and French doors, insulation, heating and electrics.</li>
        </ul>
        <p>See the full breakdown of design options, costs and our process on our main <a href="/orangeries/">orangeries page</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Get in touch</p>
          <h2 class="section-title">Planning an orangery in Hull?</h2>
          <p>Send us a few details about your property and what you're hoping to gain from the extra space, and we'll arrange a site visit to talk through design, planning and pricing.</p>
        </div>
        ${quoteCallout({
          heading: "Local orangery builders",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> for a fast response.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Orangery FAQs for Hull homeowners.</h2>
        ${faqList([
          { q: "Do I need planning permission for an orangery in Hull?", a: "It depends on your property and location. Many single-storey rear extensions fall under permitted development, but properties in the Avenues conservation area are more likely to need a full planning application to Hull City Council. We'll check this for your address during the consultation." },
          { q: "Can you build an orangery on a Hull terrace with a small rear yard?", a: "Often, yes, though the achievable size depends on your existing rear addition and garden depth. We'll assess this on-site and design around what's realistic for your plot." },
          { q: "Do you cover both the city centre and outlying areas like Kingswood?", a: "Yes, we work across Hull, from the terraces near the city centre to suburban estates further out." },
        ])}
        <p>See more general orangery questions on our <a href="/orangeries/">main orangeries page</a>, or <a href="/hull.html">read more about our renovation work in Hull</a>.</p>
      </div>
    </section>
`;

writeHull();

function writeHull() {
  mkdirSync(OUT_HULL, { recursive: true });
  const canonical = `${SITE}/orangeries/hull/`;
  const html = page({
    title: "Orangeries Hull | Bespoke Orangery Builders",
    description: "Bespoke orangery builders in Hull, covering design, brickwork, glazing and planning permission for terraces, Avenues villas and suburban homes.",
    canonical,
    body: hullBody,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Orangeries", item: `${SITE}/orangeries/` },
      { name: "Hull" },
    ],
    service: {
      name: "Orangery Builders in Hull",
      description: "Bespoke orangery design and building for homes across Hull, including the Avenues, terraces and suburban properties.",
      areaServed: ["Hull"],
    },
  });
  writeFileSync(`${OUT_HULL}/index.html`, html);
  console.log(`wrote ${OUT_HULL}/index.html`);
}

/* ---------------- EAST YORKSHIRE PAGE ---------------- */

const eyBody = `${heroTextOnly({
  kicker: "Orangeries in East Yorkshire",
  h1: "Orangeries across East Yorkshire.",
  intro: "Bespoke orangery design and building for homes across the East Riding, from village properties in Beverley and South Cave to family homes in Willerby, Swanland and North Ferriby.",
  secondaryCta: { label: "View Our Recent Projects", href: "/projects/orangeries/" },
})}
    <section class="section">
      <div class="container">
        <p class="kicker">Building across the East Riding</p>
        <h2 class="section-title">Orangeries for East Yorkshire's villages and larger plots.</h2>
        <p>Homes across East Yorkshire's villages &mdash; Beverley, Cottingham, Swanland, North Ferriby, Kirk Ella, South Cave and the surrounding East Riding &mdash; tend to sit on larger plots than city terraces, which often gives more design freedom for an orangery, particularly where a bigger glazed roof lantern or wider bi-fold door opening is wanted. Several of these villages include listed buildings or conservation areas, so planning considerations can be tighter on individual properties even where the wider area has more space to build.</p>
        <p>Older farmhouses and period village properties also often need more thought given to matching brickwork and roof detailing to the existing building, whereas newer estate housing around Willerby and Anlaby tends to have more standardised construction that's simpler to extend.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">What we cover</p>
        <h2 class="section-title">Orangery design and build across East Yorkshire.</h2>
        <ul>
          <li>Design and brickwork matched to period and modern properties alike.</li>
          <li>Planning permission guidance, including listed building and conservation area considerations.</li>
          <li>Building regulations applications and structural work.</li>
          <li>Bi-fold and French doors, insulation, heating and electrics.</li>
        </ul>
        <p>See the full breakdown of design options, costs and our process on our main <a href="/orangeries/">orangeries page</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Get in touch</p>
          <h2 class="section-title">Planning an orangery in East Yorkshire?</h2>
          <p>Send us a few details about your property and what you're hoping to gain from the extra space, and we'll arrange a site visit to talk through design, planning and pricing.</p>
        </div>
        ${quoteCallout({
          heading: "Local orangery builders",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> for a fast response.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Orangery FAQs for East Yorkshire homeowners.</h2>
        ${faqList([
          { q: "Do you cover villages outside Beverley and Cottingham?", a: "Yes, we cover the wider East Riding including Willerby, Kirk Ella, Swanland, North Ferriby, Brough and South Cave. See our full list of areas we cover for details." },
          { q: "Are there extra planning considerations for listed or period properties?", a: "Yes. Listed buildings and conservation areas across East Yorkshire's villages often have tighter planning controls than standard permitted development rules. We'll check this for your specific property and, where needed, guide you through an application to East Riding of Yorkshire Council." },
          { q: "Can a larger plot mean a bigger orangery?", a: "Often, yes, larger gardens give more flexibility on footprint and glazing, though the final design still depends on permitted development limits, existing rear additions and your building's character." },
        ])}
        <p>See more general orangery questions on our <a href="/orangeries/">main orangeries page</a>, or explore our <a href="/areas.html">areas we cover</a>.</p>
      </div>
    </section>
`;

writeEY();

function writeEY() {
  mkdirSync(OUT_EY, { recursive: true });
  const canonical = `${SITE}/orangeries/east-yorkshire/`;
  const html = page({
    title: "Orangeries East Yorkshire | Bespoke Orangery Builders",
    description: "Bespoke orangery design and building across East Yorkshire's villages and the East Riding, covering brickwork, glazing, planning and building regulations.",
    canonical,
    body: eyBody,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Orangeries", item: `${SITE}/orangeries/` },
      { name: "East Yorkshire" },
    ],
    service: {
      name: "Orangery Builders in East Yorkshire",
      description: "Bespoke orangery design and building for homes across East Yorkshire and the East Riding.",
    },
  });
  writeFileSync(`${OUT_EY}/index.html`, html);
  console.log(`wrote ${OUT_EY}/index.html`);
}
