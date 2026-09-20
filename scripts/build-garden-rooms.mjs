import { mkdirSync, writeFileSync } from "fs";
import { page, heroTextOnly, stepsList, faqList, quoteCallout, testimonialsSection } from "./lib/layout.mjs";
import { SITE } from "./lib/constants.mjs";

const OUT_MAIN = "garden-rooms";
const OUT_HULL = "garden-rooms/hull";
const OUT_EY = "garden-rooms/east-yorkshire";

/* ---------------- MAIN PAGE ---------------- */

const mainBody = `${heroTextOnly({
  kicker: "Garden rooms",
  h1: "Garden rooms in Hull &amp; East Yorkshire.",
  intro: "A bespoke garden room gives you proper usable space &mdash; an office, gym, bar or studio &mdash; without the disruption or cost of extending the house itself.",
  secondaryCta: { label: "View Our Recent Projects", href: "/projects/garden-rooms/" },
  image: { src: "/assets/img/services/garden-room-ai.jpg", width: 1600, height: 900, alt: "Concept image - garden room design style" },
})}
    <section class="section">
      <div class="container">
        <p class="kicker">What we build</p>
        <h2 class="section-title">A garden room for however you want to use it.</h2>
        <div class="cards">
          <article class="card">
            <h3>Garden offices</h3>
            <p>A proper separate workspace away from household distractions, with enough insulation and heating to work in comfortably all year, not just in summer.</p>
          </article>
          <article class="card">
            <h3>Garden gyms</h3>
            <p>Reinforced flooring where needed for equipment, good ventilation, and enough power for the kit you actually want to run.</p>
          </article>
          <article class="card">
            <h3>Garden bars &amp; entertainment rooms</h3>
            <p>Built for entertaining &mdash; power for a fridge or drinks unit, lighting that sets the mood, and finishes that hold up to regular use.</p>
          </article>
          <article class="card">
            <h3>Studios &amp; hobby rooms</h3>
            <p>Whether it's a music room, a studio or a dedicated hobby space, we design around the equipment, storage and natural light you need.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Design &amp; build</p>
        <h2 class="section-title">What goes into a garden room built for year-round use.</h2>
        <p><strong>Foundations.</strong> Most garden rooms sit on a concrete base or screw-pile foundation system depending on ground conditions, which we'll assess on-site before finalising the design.</p>
        <p><strong>Insulation.</strong> This is what separates a proper garden room from a garden shed &mdash; insulated floor, walls and roof to a standard that keeps the room usable through a Yorkshire winter, not just a warm summer evening.</p>
        <p><strong>Roof.</strong> Flat roofs with a single-ply or felt membrane are the most common choice for a clean, modern look, though pitched and green roof options are available depending on your garden and how the room needs to look from the house.</p>
        <p><strong>Doors &amp; windows.</strong> Bi-fold or sliding doors work well where you want the room to open onto the garden; fixed glazing and a single door suit a quieter, more enclosed space such as an office.</p>
        <p><strong>Electrics &amp; heating.</strong> Sockets, lighting circuits and heating (electric panel heaters or a small radiator system) are run from the main house's supply and planned in early, along with data/network cabling if the room is being used as an office.</p>
        <p><strong>Plumbing.</strong> Where a garden room includes a kitchenette, bar or WC, we can run water and drainage from the house, though this adds cost and complexity compared with an electrics-only build.</p>
        <p><strong>Interior finish.</strong> Plastering, flooring and decorating are finished to the same standard you'd expect inside the house, so the room feels like proper living space rather than an outbuilding.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Planning &amp; regulations</p>
        <h2 class="section-title">Planning permission and building regulations for garden rooms.</h2>
        <p>Most garden rooms fall under permitted development as an outbuilding, provided they're single storey, stay within height limits, sit behind the principal elevation of the house, and don't take the total area of outbuildings and extensions over 50% of the garden. Using a garden room as separate, self-contained living accommodation (with its own bathroom and kitchen, or as a place someone sleeps) changes that position and is more likely to need planning permission. Building regulations generally don't apply to a straightforward garden room under a certain floor area, but requirements change if the room includes sleeping accommodation, exceeds size thresholds, or sits very close to a boundary.</p>
        <p>This is general guidance rather than an assessment of your specific garden and proposed use. We'll confirm what applies during the design consultation, and handle any application to Hull City Council or East Riding of Yorkshire Council if one's needed.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Cost</p>
        <h2 class="section-title">Typical garden room cost considerations.</h2>
        <p>Cost depends on size, glazing, and whether plumbing is included, so treat the figures below as general UK guidance rather than a quote &mdash; the only way to get an accurate number is a site visit.</p>
        <div class="cards">
          <article class="card">
            <h3>Basic garden room</h3>
            <p>Roughly &pound;10,000&ndash;&pound;18,000 for a small, well-insulated room with electrics only &mdash; a typical spec for a straightforward home office.</p>
          </article>
          <article class="card">
            <h3>Mid-spec garden room</h3>
            <p>Roughly &pound;18,000&ndash;&pound;30,000 for a larger room with higher-spec glazing, bi-fold doors and a more considered interior finish, such as a gym or studio.</p>
          </article>
          <article class="card">
            <h3>Larger / bespoke garden room</h3>
            <p>Roughly &pound;30,000&ndash;&pound;50,000+ for a bespoke design with plumbing for a bar or kitchenette, premium finishes and a larger footprint.</p>
          </article>
        </div>
        <p>These figures are indicative of the wider UK market and aren't East Yorkshire Renovations' confirmed pricing &mdash; <a href="/contact.html#quote-form">get in touch for a free, tailored quote</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Process</p>
        <h2 class="section-title">How we design and build a garden room.</h2>
        ${stepsList([
          { title: "Consultation & design", body: "We visit, assess your garden and ground conditions, and design a room around how you plan to use it." },
          { title: "Planning & regulations check", body: "We confirm whether your project falls under permitted development or needs an application." },
          { title: "Construction & project management", body: "Foundations, structure, roof, glazing, electrics and (where needed) plumbing, coordinated under one schedule." },
          { title: "Final touches & handover", body: "Interior finishing, a full clean, and a walk-through of the finished room." },
        ])}
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Timescale</p>
          <h2 class="section-title">How long does a garden room take?</h2>
          <p>Design typically takes a couple of weeks, and where planning permission is needed, that process adds several weeks on top. Once on site, a standard garden room usually takes around 4&ndash;8 weeks to build, depending on size and specification. We'll give you a realistic programme once the design is agreed.</p>
        </div>
        ${quoteCallout({
          heading: "Thinking about a garden room?",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> to arrange a site visit.`,
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
          <li>We design the room around how you'll actually use it, from an office to a bar.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Areas covered</p>
        <h2 class="section-title">Garden rooms across Hull &amp; East Yorkshire.</h2>
        <div class="cards">
          <article class="card">
            <h3><a href="/garden-rooms/hull/">Garden rooms in Hull</a></h3>
            <p>Garden offices, gyms and studios for terraced, semi-detached and suburban gardens across the city.</p>
          </article>
          <article class="card">
            <h3><a href="/garden-rooms/east-yorkshire/">Garden rooms in East Yorkshire</a></h3>
            <p>Larger, bespoke garden rooms for bigger plots across Beverley, Cottingham, Hessle and the wider East Riding.</p>
          </article>
        </div>
        <p>We also work in Anlaby, Kirk Ella, Swanland, North Ferriby, Brough and South Cave &mdash; see our <a href="/areas.html">full list of areas we cover</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Project examples</p>
        <h2 class="section-title">Garden room projects.</h2>
        <p>We're building our library of completed garden room projects and will publish real photos and case studies here as they're finished &mdash; see our <a href="/projects/garden-rooms/">garden room projects page</a> for what to expect. In the meantime, you can see genuine completed kitchen, bathroom and refurbishment work on our <a href="/work.html">recent work page</a>.</p>
      </div>
    </section>

${testimonialsSection()}

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Garden room FAQs.</h2>
        ${faqList([
          { q: "Do I need planning permission for a garden room?", a: "Often not, if it falls under permitted development as a single-storey outbuilding within height and coverage limits. Using it as separate self-contained living accommodation, or building it forward of the house, is more likely to need planning permission." },
          { q: "Can a garden room be used as a home office all year round?", a: "Yes, provided it's properly insulated and heated. This is one of the most common uses we build for, and it's central to how we specify insulation and heating." },
          { q: "Do garden rooms need building regulations approval?", a: "Usually not for a straightforward garden room under typical size thresholds, but this changes if the room includes sleeping accommodation or exceeds certain size and proximity limits. We'll confirm this for your specific project." },
          { q: "Can you add plumbing for a bar or kitchenette?", a: "Yes, we can run water and drainage from the house where needed, though this adds cost and complexity compared with an electrics-only build." },
          { q: "How long does a garden room take to build?", a: "A standard garden room usually takes around 4-8 weeks on site once design and any necessary approvals are in place." },
        ])}
      </div>
    </section>
`;

writeMain();

function writeMain() {
  mkdirSync(OUT_MAIN, { recursive: true });
  const canonical = `${SITE}/garden-rooms/`;
  const html = page({
    title: "Garden Rooms Hull & East Yorkshire | Bespoke Garden Rooms",
    description: "Bespoke garden rooms, garden offices and studios across Hull and East Yorkshire. Design, insulation, planning permission and typical costs explained.",
    canonical,
    body: mainBody,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Garden Rooms" },
    ],
    faq: [
      { q: "Do I need planning permission for a garden room?", a: "Often not, if it falls under permitted development as a single-storey outbuilding within height and coverage limits. Using it as separate self-contained living accommodation, or building it forward of the house, is more likely to need planning permission." },
      { q: "Can a garden room be used as a home office all year round?", a: "Yes, provided it's properly insulated and heated. This is one of the most common uses we build for, and it's central to how we specify insulation and heating." },
      { q: "Do garden rooms need building regulations approval?", a: "Usually not for a straightforward garden room under typical size thresholds, but this changes if the room includes sleeping accommodation or exceeds certain size and proximity limits." },
      { q: "Can you add plumbing for a bar or kitchenette?", a: "Yes, we can run water and drainage from the house where needed, though this adds cost and complexity compared with an electrics-only build." },
      { q: "How long does a garden room take to build?", a: "A standard garden room usually takes around 4-8 weeks on site once design and any necessary approvals are in place." },
    ],
    service: {
      name: "Garden Room Design & Building",
      description: "Bespoke garden rooms, garden offices, gyms and studios across Hull and East Yorkshire, including insulation, electrics and full project management.",
    },
  });
  writeFileSync(`${OUT_MAIN}/index.html`, html);
  console.log(`wrote ${OUT_MAIN}/index.html`);
}

/* ---------------- HULL PAGE ---------------- */

const hullBody = `${heroTextOnly({
  kicker: "Garden rooms in Hull",
  h1: "Garden rooms in Hull.",
  intro: "Bespoke garden offices, gyms and studios for Hull's terraced, semi-detached and suburban gardens, designed and built as proper year-round space.",
  secondaryCta: { label: "View Our Recent Projects", href: "/projects/garden-rooms/" },
})}
    <section class="section">
      <div class="container">
        <p class="kicker">Building in Hull</p>
        <h2 class="section-title">Garden rooms for Hull's gardens.</h2>
        <p>Garden sizes across Hull vary enormously, from the compact rear yards typical of terraces near Newland Avenue and Princes Avenue to the larger gardens found on 1930s semis in Kingswood and Bricknell. On smaller plots, we design around what's realistic within permitted development limits and the existing garden layout; on larger suburban gardens there's usually more flexibility on footprint and glazing.</p>
        <p>Most garden rooms in Hull fall under permitted development, provided the total coverage of outbuildings and extensions in the garden stays within limits and the room isn't used as separate living accommodation. We'll check this against your specific garden during the consultation.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">What we cover</p>
        <h2 class="section-title">Garden room design and build in Hull.</h2>
        <ul>
          <li>Garden offices, gyms, bars and studios designed around your garden.</li>
          <li>Insulation and heating specified for year-round use.</li>
          <li>Electrics, and plumbing where a kitchenette or bar is wanted.</li>
          <li>Planning guidance where a project falls outside permitted development.</li>
        </ul>
        <p>See the full breakdown of design options, costs and our process on our main <a href="/garden-rooms/">garden rooms page</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Get in touch</p>
          <h2 class="section-title">Planning a garden room in Hull?</h2>
          <p>Send us a few details about your garden and how you want to use the room, and we'll arrange a site visit to talk through design and pricing.</p>
        </div>
        ${quoteCallout({
          heading: "Local garden room builders",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> for a fast response.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Garden room FAQs for Hull homeowners.</h2>
        ${faqList([
          { q: "Can you fit a garden room in a small Hull terrace garden?", a: "Often, yes, though the achievable size depends on your existing garden layout and how much of it is already built on. We'll assess this on-site." },
          { q: "Do I need planning permission for a garden office in Hull?", a: "Usually not, if it falls under permitted development as a single-storey outbuilding within height and coverage limits. We'll confirm this for your specific garden." },
          { q: "Do you build garden gyms as well as offices?", a: "Yes, we design garden rooms around whatever you're using them for, including reinforced flooring and ventilation for a home gym." },
        ])}
        <p>See more general questions on our <a href="/garden-rooms/">main garden rooms page</a>, or <a href="/hull.html">read more about our renovation work in Hull</a>.</p>
      </div>
    </section>
`;

writeHull();

function writeHull() {
  mkdirSync(OUT_HULL, { recursive: true });
  const canonical = `${SITE}/garden-rooms/hull/`;
  const html = page({
    title: "Garden Rooms Hull | Bespoke Garden Rooms & Offices",
    description: "Bespoke garden rooms and garden offices in Hull, designed for year-round use with proper insulation, heating and electrics.",
    canonical,
    body: hullBody,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Garden Rooms", item: `${SITE}/garden-rooms/` },
      { name: "Hull" },
    ],
    service: {
      name: "Garden Rooms in Hull",
      description: "Bespoke garden rooms, garden offices, gyms and studios for homes across Hull.",
      areaServed: ["Hull"],
    },
  });
  writeFileSync(`${OUT_HULL}/index.html`, html);
  console.log(`wrote ${OUT_HULL}/index.html`);
}

/* ---------------- EAST YORKSHIRE PAGE ---------------- */

const eyBody = `${heroTextOnly({
  kicker: "Garden rooms in East Yorkshire",
  h1: "Garden rooms across East Yorkshire.",
  intro: "Bespoke garden offices, gyms, bars and studios for homes across the East Riding, from village gardens in Beverley to larger plots in Willerby and Swanland.",
  secondaryCta: { label: "View Our Recent Projects", href: "/projects/garden-rooms/" },
})}
    <section class="section">
      <div class="container">
        <p class="kicker">Building across the East Riding</p>
        <h2 class="section-title">Garden rooms for East Yorkshire's larger gardens.</h2>
        <p>Properties across East Yorkshire's villages and suburbs &mdash; Beverley, Cottingham, Swanland, North Ferriby, Kirk Ella, South Cave and the wider East Riding &mdash; tend to have larger gardens than city terraces, which often means more flexibility on footprint, glazing and layout for a garden room. That said, permitted development limits still apply based on the total coverage of outbuildings and extensions in the garden, and listed buildings or conservation areas can bring extra considerations on some properties.</p>
        <p>We regularly build garden offices for people who work from home but want proper separation from the house, as well as bars, gyms and hobby rooms for gardens with the space to support them.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">What we cover</p>
        <h2 class="section-title">Garden room design and build across East Yorkshire.</h2>
        <ul>
          <li>Garden offices, gyms, bars and studios designed around larger plots.</li>
          <li>Insulation and heating specified for year-round use.</li>
          <li>Electrics, and plumbing where a kitchenette or bar is wanted.</li>
          <li>Planning guidance for listed and conservation area properties.</li>
        </ul>
        <p>See the full breakdown of design options, costs and our process on our main <a href="/garden-rooms/">garden rooms page</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Get in touch</p>
          <h2 class="section-title">Planning a garden room in East Yorkshire?</h2>
          <p>Send us a few details about your garden and how you want to use the room, and we'll arrange a site visit to talk through design and pricing.</p>
        </div>
        ${quoteCallout({
          heading: "Local garden room builders",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> for a fast response.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Garden room FAQs for East Yorkshire homeowners.</h2>
        ${faqList([
          { q: "Do you cover villages like Swanland and North Ferriby?", a: "Yes, we cover the wider East Riding including Willerby, Kirk Ella, Swanland, North Ferriby, Brough and South Cave." },
          { q: "Can a larger garden mean a bigger garden room?", a: "Often, yes, though the final design still depends on permitted development limits and how much of the garden is already built on." },
          { q: "Are there extra planning considerations for listed properties?", a: "Yes, listed buildings and conservation areas across East Yorkshire's villages can have tighter controls. We'll check this for your specific property." },
        ])}
        <p>See more general questions on our <a href="/garden-rooms/">main garden rooms page</a>, or explore our <a href="/areas.html">areas we cover</a>.</p>
      </div>
    </section>
`;

writeEY();

function writeEY() {
  mkdirSync(OUT_EY, { recursive: true });
  const canonical = `${SITE}/garden-rooms/east-yorkshire/`;
  const html = page({
    title: "Garden Rooms East Yorkshire | Bespoke Garden Rooms",
    description: "Bespoke garden rooms and garden offices across East Yorkshire's villages and the East Riding, built for year-round use.",
    canonical,
    body: eyBody,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Garden Rooms", item: `${SITE}/garden-rooms/` },
      { name: "East Yorkshire" },
    ],
    service: {
      name: "Garden Rooms in East Yorkshire",
      description: "Bespoke garden rooms, garden offices, gyms and studios for homes across East Yorkshire and the East Riding.",
    },
  });
  writeFileSync(`${OUT_EY}/index.html`, html);
  console.log(`wrote ${OUT_EY}/index.html`);
}
