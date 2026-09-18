import { mkdirSync, writeFileSync } from "fs";
import { page, heroTextOnly, stepsList, faqList, quoteCallout, conceptVideoSection } from "./lib/layout.mjs";
import { SITE } from "./lib/constants.mjs";

const OUT_MAIN = "garage-conversions";
const OUT_HULL = "garage-conversions/hull";
const OUT_EY = "garage-conversions/east-yorkshire";

/* ---------------- MAIN PAGE ---------------- */

const mainBody = `${heroTextOnly({
  kicker: "Garage conversions",
  h1: "Garage conversions in Hull &amp; East Yorkshire.",
  intro: "If your garage is used for storage rather than a car, converting it is usually the most cost-effective way to add a genuine extra room without extending your home's footprint.",
  secondaryCta: { label: "View Our Recent Projects", href: "/projects/garage-conversions/" },
  image: { src: "/assets/img/services/garage-conversion-ai.jpg", width: 1600, height: 900, alt: "Concept image - garage conversion design style" },
})}
${conceptVideoSection({
  h1: "See garage conversions in motion.",
  videos: [
    { src: "/assets/video/garage-conversion-concept-1.mp4" },
    { src: "/assets/video/garage-conversion-concept-2.mp4" },
  ],
})}
    <section class="section">
      <div class="container">
        <p class="kicker">Integral or detached</p>
        <h2 class="section-title">Two types of garage conversion.</h2>
        <div class="cards">
          <article class="card">
            <h3>Integral garage conversions</h3>
            <p>Where the garage is built into the main structure of the house, an integral conversion usually connects straight into the existing floor plan, making it a natural fit for extending a kitchen, adding a bedroom, or creating a home office off the hallway.</p>
          </article>
          <article class="card">
            <h3>Detached garage conversions</h3>
            <p>A separate garage building gives more flexibility as standalone space &mdash; a gym, playroom, home office or annexe &mdash; but needs its own services run out to it, similar to a garden room.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Popular conversions</p>
        <h2 class="section-title">What people convert their garage into.</h2>
        <div class="cards">
          <article class="card">
            <h3><a href="/garage-conversions/garage-to-bedroom/">Garage to bedroom</a></h3>
            <p>An extra bedroom or guest room, with insulation, heating and often an en-suite where plumbing allows.</p>
            <p><a href="/garage-conversions/garage-to-bedroom/">More about garage to bedroom conversions</a></p>
          </article>
          <article class="card">
            <h3><a href="/garage-conversions/garage-to-office/">Garage to home office</a></h3>
            <p>A quiet, separate workspace with good insulation, lighting and enough sockets and data points for a proper home working setup.</p>
            <p><a href="/garage-conversions/garage-to-office/">More about garage to office conversions</a></p>
          </article>
          <article class="card">
            <h3><a href="/garage-conversions/garage-to-gym/">Garage to gym</a></h3>
            <p>Reinforced flooring where needed, good ventilation, and mirrors and flooring finishes suited to equipment use.</p>
            <p><a href="/garage-conversions/garage-to-gym/">More about garage to gym conversions</a></p>
          </article>
          <article class="card">
            <h3><a href="/garage-conversions/garage-to-playroom/">Garage to playroom</a></h3>
            <p>A durable, easy-to-clean family space separate from the main living areas of the house.</p>
            <p><a href="/garage-conversions/garage-to-playroom/">More about garage to playroom conversions</a></p>
          </article>
        </div>
        <p>We also convert garages into additional living rooms or snugs where an integral garage sits next to the main reception rooms.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Design &amp; build</p>
        <h2 class="section-title">What goes into a proper garage conversion.</h2>
        <p><strong>Insulation &amp; damp proofing.</strong> Garages are rarely built to the same insulation standard as the rest of the house, and older garage floors often sit below the damp-proof course of the main building. Both need addressing properly before the room is usable, rather than papering over them.</p>
        <p><strong>Flooring.</strong> The existing garage floor is usually lower than the house floor level, so raising and insulating it is a standard part of most conversions, along with removing any historic oil or fuel staining.</p>
        <p><strong>Windows &amp; doors.</strong> The garage door opening is typically bricked up or replaced with a window and matching brickwork, and additional windows may be added depending on the room's new use and available natural light.</p>
        <p><strong>Heating &amp; electrics.</strong> First and second fix electrics and heating are extended from the main house, with sockets, lighting and data points planned around the room's intended use.</p>
        <p><strong>Plumbing.</strong> Where a conversion includes an en-suite, kitchenette or utility space, we run water and drainage from the nearest existing point, which is more straightforward on an integral garage than a detached one.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Planning &amp; regulations</p>
        <h2 class="section-title">Planning permission and building regulations for garage conversions.</h2>
        <p>Converting an integral or attached garage into living space usually doesn't need planning permission, since it's an internal change of use within the existing footprint that doesn't normally alter the external appearance significantly &mdash; though this can differ if you're also changing the garage door opening to a full window or altering the roofline. Building regulations approval is required regardless, covering structural work, insulation, damp-proofing, fire safety (particularly where there's a room above the garage), ventilation and electrics. Detached garage conversions follow similar building regulations requirements, and may be more likely to need planning permission if the intended use, height or appearance is changing significantly.</p>
        <p>This is general guidance rather than an assessment of your specific garage. We'll confirm what applies during the consultation and manage any application to Hull City Council or East Riding of Yorkshire Council.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Cost</p>
        <h2 class="section-title">Typical garage conversion cost considerations.</h2>
        <p>Cost depends on the garage's condition, whether plumbing is needed, and the finish specified, so treat the figures below as general UK guidance rather than a quote &mdash; the only way to get an accurate number is a site visit.</p>
        <div class="cards">
          <article class="card">
            <h3>Basic conversion</h3>
            <p>Roughly &pound;6,000&ndash;&pound;12,000 for insulation, flooring, plastering and electrics only &mdash; a typical spec for a simple storage-to-office or playroom conversion.</p>
          </article>
          <article class="card">
            <h3>Mid-spec conversion</h3>
            <p>Roughly &pound;12,000&ndash;&pound;20,000 for a conversion including heating, new windows and a higher-quality finish, such as a bedroom or living room.</p>
          </article>
          <article class="card">
            <h3>Higher-spec conversion</h3>
            <p>Roughly &pound;20,000&ndash;&pound;35,000+ where plumbing for an en-suite or kitchenette is included, along with bespoke finishes.</p>
          </article>
        </div>
        <p>These figures are indicative of the wider UK market and aren't East Yorkshire Renovations' confirmed pricing &mdash; <a href="/contact.html#quote-form">get in touch for a free, tailored quote</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Process</p>
        <h2 class="section-title">How we run a garage conversion.</h2>
        ${stepsList([
          { title: "Survey & design", body: "We assess the existing garage, check for damp and structural issues, and design the new room around how you'll use it." },
          { title: "Regulations check", body: "We confirm the building regulations and any planning requirements for your specific conversion." },
          { title: "Construction", body: "Insulation, damp-proofing, flooring, windows, electrics and (where needed) plumbing, coordinated under one schedule." },
          { title: "Finishing & handover", body: "Plastering, decorating and a final clean, with a walk-through of the finished room." },
        ])}
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Timescale</p>
          <h2 class="section-title">How long does a garage conversion take?</h2>
          <p>A straightforward integral garage conversion typically takes around 3&ndash;5 weeks on site once damp-proofing, insulation and any structural work are accounted for. Conversions including plumbing for an en-suite or kitchenette, or detached garages needing new services run out to them, usually take longer. We'll confirm a realistic programme once the survey is complete.</p>
        </div>
        ${quoteCallout({
          heading: "Garage doing nothing but storing boxes?",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> to arrange a site visit.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Why choose us</p>
        <h2 class="section-title">Why East Yorkshire Renovations.</h2>
        <ul>
          <li>One point of contact for the whole project, from damp-proofing to decorating.</li>
          <li>A local team based in Hessle, working across Hull and East Yorkshire.</li>
          <li>Transparent pricing and a clear, realistic build programme.</li>
          <li>We coordinate every trade involved, including electrics, plumbing and plastering.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Areas covered</p>
        <h2 class="section-title">Garage conversions across Hull &amp; East Yorkshire.</h2>
        <div class="cards">
          <article class="card">
            <h3><a href="/garage-conversions/hull/">Garage conversions in Hull</a></h3>
            <p>Integral garage conversions on Hull's terraced and semi-detached streets.</p>
          </article>
          <article class="card">
            <h3><a href="/garage-conversions/east-yorkshire/">Garage conversions in East Yorkshire</a></h3>
            <p>Integral and detached garage conversions for larger properties across the East Riding.</p>
          </article>
        </div>
        <p>We also work in Anlaby, Kirk Ella, Swanland, North Ferriby, Brough and South Cave &mdash; see our <a href="/areas.html">full list of areas we cover</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Project examples</p>
        <h2 class="section-title">Garage conversion projects.</h2>
        <p>We're building our library of completed garage conversion projects and will publish real photos and case studies here as they're finished &mdash; see our <a href="/projects/garage-conversions/">garage conversion projects page</a> for what to expect. In the meantime, you can see genuine completed kitchen, bathroom and refurbishment work on our <a href="/work.html">recent work page</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Garage conversion FAQs.</h2>
        ${faqList([
          { q: "Do I need planning permission for a garage conversion?", a: "Usually not for an integral or attached garage, since it's typically an internal change of use within the existing footprint. This can differ if you're changing the garage door opening to a full window or altering the roofline, or converting a detached garage in a way that changes its appearance significantly." },
          { q: "Do garage conversions need building regulations approval?", a: "Yes, building regulations apply regardless of planning permission, covering structural work, insulation, damp-proofing, fire safety, ventilation and electrics." },
          { q: "Is my garage floor a problem for conversion?", a: "Often the floor level and damp-proofing need addressing as standard, since garage floors are usually lower than the house floor and not always built above the damp-proof course. We assess this during the survey." },
          { q: "Can you add an en-suite to a garage conversion?", a: "Yes, where plumbing can be run from a nearby existing point, which is usually simpler on an integral garage than a detached one." },
          { q: "How long does a garage conversion take?", a: "A straightforward integral conversion typically takes around 3-5 weeks on site, with more complex conversions including plumbing taking longer." },
        ])}
      </div>
    </section>
`;

writeMain();

function writeMain() {
  mkdirSync(OUT_MAIN, { recursive: true });
  const canonical = `${SITE}/garage-conversions/`;
  const html = page({
    title: "Garage Conversions Hull & East Yorkshire | EYR",
    description: "Garage conversions across Hull and East Yorkshire, turning integral and detached garages into bedrooms, offices, gyms and playrooms.",
    canonical,
    body: mainBody,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Garage Conversions" },
    ],
    faq: [
      { q: "Do I need planning permission for a garage conversion?", a: "Usually not for an integral or attached garage, since it's typically an internal change of use within the existing footprint. This can differ if you're changing the garage door opening to a full window or altering the roofline." },
      { q: "Do garage conversions need building regulations approval?", a: "Yes, building regulations apply regardless of planning permission, covering structural work, insulation, damp-proofing, fire safety, ventilation and electrics." },
      { q: "Is my garage floor a problem for conversion?", a: "Often the floor level and damp-proofing need addressing as standard, since garage floors are usually lower than the house floor and not always built above the damp-proof course." },
      { q: "Can you add an en-suite to a garage conversion?", a: "Yes, where plumbing can be run from a nearby existing point, which is usually simpler on an integral garage than a detached one." },
      { q: "How long does a garage conversion take?", a: "A straightforward integral conversion typically takes around 3-5 weeks on site, with more complex conversions including plumbing taking longer." },
    ],
    service: {
      name: "Garage Conversions",
      description: "Integral and detached garage conversions across Hull and East Yorkshire, including insulation, damp-proofing, electrics and full project management.",
    },
  });
  writeFileSync(`${OUT_MAIN}/index.html`, html);
  console.log(`wrote ${OUT_MAIN}/index.html`);
}

/* ---------------- HULL PAGE ---------------- */

const hullBody = `${heroTextOnly({
  kicker: "Garage conversions in Hull",
  h1: "Garage conversions in Hull.",
  intro: "Integral garage conversions for Hull's terraced and semi-detached streets, turning unused garage space into a proper extra room.",
  secondaryCta: { label: "View Our Recent Projects", href: "/projects/garage-conversions/" },
})}
    <section class="section">
      <div class="container">
        <p class="kicker">Garages in Hull</p>
        <h2 class="section-title">Converting garages on Hull's terraces and semis.</h2>
        <p>Integral garages are common on Hull's 1930s semis in Kingswood and Bricknell, and on some post-war estate housing further out, where the garage is built into the side of the house rather than standing alone. Many of these garages end up used purely for storage, which makes them a strong candidate for conversion into a bedroom, office or extra living space without touching the garden.</p>
        <p>Because it's typically an internal change of use within the existing footprint, planning permission usually isn't required in Hull, though building regulations still apply for the structural, insulation, damp-proofing and fire safety work involved.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">What we cover</p>
        <h2 class="section-title">Garage conversions in Hull.</h2>
        <ul>
          <li>Integral garage conversions to bedrooms, offices, gyms and playrooms.</li>
          <li>Insulation, damp-proofing and floor levelling.</li>
          <li>Electrics, heating and plumbing where needed.</li>
          <li>Building regulations applications and structural work.</li>
        </ul>
        <p>See the full breakdown of design options, costs and our process on our main <a href="/garage-conversions/">garage conversions page</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Get in touch</p>
          <h2 class="section-title">Garage full of boxes in Hull?</h2>
          <p>Send us a few details about your garage and what you'd like it to become, and we'll arrange a site visit to talk through design and pricing.</p>
        </div>
        ${quoteCallout({
          heading: "Local garage conversion specialists",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> for a fast response.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Garage conversion FAQs for Hull homeowners.</h2>
        ${faqList([
          { q: "Do I need planning permission to convert my garage in Hull?", a: "Usually not, since converting an integral garage is typically an internal change of use. Building regulations still apply for the structural and safety work involved." },
          { q: "Can you convert a garage on a 1930s semi in Kingswood or Bricknell?", a: "Yes, this is one of our most common garage conversion projects in Hull." },
          { q: "Will damp be a problem in an older Hull garage?", a: "It can be, particularly where the garage floor sits below the house's damp-proof course. We assess this during the survey and price in the necessary damp-proofing." },
        ])}
        <p>See more general questions on our <a href="/garage-conversions/">main garage conversions page</a>, or <a href="/hull.html">read more about our renovation work in Hull</a>.</p>
      </div>
    </section>
`;

writeHull();

function writeHull() {
  mkdirSync(OUT_HULL, { recursive: true });
  const canonical = `${SITE}/garage-conversions/hull/`;
  const html = page({
    title: "Garage Conversions Hull | Transform Your Garage",
    description: "Garage conversions in Hull, turning integral garages into bedrooms, offices, gyms and playrooms with insulation, damp-proofing and electrics.",
    canonical,
    body: hullBody,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Garage Conversions", item: `${SITE}/garage-conversions/` },
      { name: "Hull" },
    ],
    service: {
      name: "Garage Conversions in Hull",
      description: "Integral garage conversions for homes across Hull.",
      areaServed: ["Hull"],
    },
  });
  writeFileSync(`${OUT_HULL}/index.html`, html);
  console.log(`wrote ${OUT_HULL}/index.html`);
}

/* ---------------- EAST YORKSHIRE PAGE ---------------- */

const eyBody = `${heroTextOnly({
  kicker: "Garage conversions in East Yorkshire",
  h1: "Garage conversions across East Yorkshire.",
  intro: "Integral and detached garage conversions for homes across the East Riding, from village properties in Beverley to larger plots in Willerby and Swanland.",
  secondaryCta: { label: "View Our Recent Projects", href: "/projects/garage-conversions/" },
})}
    <section class="section">
      <div class="container">
        <p class="kicker">Garages across the East Riding</p>
        <h2 class="section-title">Converting garages on East Yorkshire properties.</h2>
        <p>East Yorkshire's villages and suburbs have a wider mix of integral and detached garages than city terraces, particularly on larger detached and older village properties. A detached garage conversion generally needs its own services run out to it, similar to a garden room project, while integral conversions on more modern estate housing around Willerby and Anlaby tend to be more straightforward.</p>
        <p>Planning and building regulations considerations depend on the type of garage and, on period or listed properties, whether the building sits in a conservation area &mdash; we'll check this for your specific property.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">What we cover</p>
        <h2 class="section-title">Garage conversions across East Yorkshire.</h2>
        <ul>
          <li>Integral and detached garage conversions to bedrooms, offices, gyms and annexes.</li>
          <li>Insulation, damp-proofing and floor levelling.</li>
          <li>Electrics, heating and plumbing where needed.</li>
          <li>Planning and building regulations guidance for listed and conservation area properties.</li>
        </ul>
        <p>See the full breakdown of design options, costs and our process on our main <a href="/garage-conversions/">garage conversions page</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Get in touch</p>
          <h2 class="section-title">Garage full of boxes in East Yorkshire?</h2>
          <p>Send us a few details about your garage and what you'd like it to become, and we'll arrange a site visit to talk through design and pricing.</p>
        </div>
        ${quoteCallout({
          heading: "Local garage conversion specialists",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> for a fast response.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Garage conversion FAQs for East Yorkshire homeowners.</h2>
        ${faqList([
          { q: "Do you convert detached garages as well as integral ones?", a: "Yes, detached garage conversions are common across East Yorkshire's larger properties, though they generally need their own services run out to them, similar to a garden room." },
          { q: "Do you cover villages like Beverley and South Cave?", a: "Yes, we cover the wider East Riding including Willerby, Kirk Ella, Swanland, North Ferriby, Brough and South Cave." },
          { q: "Are there extra planning considerations for period properties?", a: "Yes, listed buildings and conservation areas across East Yorkshire's villages can have tighter controls, particularly for detached garage conversions that change the building's appearance." },
        ])}
        <p>See more general questions on our <a href="/garage-conversions/">main garage conversions page</a>, or explore our <a href="/areas.html">areas we cover</a>.</p>
      </div>
    </section>
`;

writeEY();

function writeEY() {
  mkdirSync(OUT_EY, { recursive: true });
  const canonical = `${SITE}/garage-conversions/east-yorkshire/`;
  const html = page({
    title: "Garage Conversions East Yorkshire | EYR",
    description: "Integral and detached garage conversions across East Yorkshire's villages and the East Riding, into bedrooms, offices, gyms and annexes.",
    canonical,
    body: eyBody,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Garage Conversions", item: `${SITE}/garage-conversions/` },
      { name: "East Yorkshire" },
    ],
    service: {
      name: "Garage Conversions in East Yorkshire",
      description: "Integral and detached garage conversions for homes across East Yorkshire and the East Riding.",
    },
  });
  writeFileSync(`${OUT_EY}/index.html`, html);
  console.log(`wrote ${OUT_EY}/index.html`);
}
