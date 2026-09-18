import { writeFileSync } from "fs";
import { page, heroTextOnly, faqList, quoteCallout } from "./lib/layout.mjs";
import { SITE } from "./lib/constants.mjs";

function servicesList(prefix = "east-yorkshire") {
  return `        <ul>
          <li><a href="/orangeries/${prefix}/">Orangeries</a></li>
          <li><a href="/conservatory-transformations/${prefix}/">Conservatory transformations</a></li>
          <li><a href="/garden-rooms/${prefix}/">Garden rooms</a></li>
          <li><a href="/garage-conversions/${prefix}/">Garage conversions</a></li>
          <li><a href="/outdoor-kitchens/${prefix}/">Outdoor kitchens</a></li>
          <li><a href="/kitchen-installs.html">Kitchen installs</a></li>
          <li><a href="/bathroom-installs.html">Bathroom installs</a></li>
          <li><a href="/full-house-renovations.html">Full house renovations</a></li>
          <li><a href="/water-treatment.html">Water treatment &amp; water softeners</a></li>
        </ul>
        <p><a href="/services.html">View all renovation services</a></p>
`;
}

function areaPage({ slug, name, kicker, h1, intro, contextTitle, contextParas, faqs, title, description }) {
  const canonical = `${SITE}/${slug}.html`;
  const body = `${heroTextOnly({ kicker, h1, intro })}
    <section class="section">
      <div class="container">
        <p class="kicker">${name} property types</p>
        <h2 class="section-title">${contextTitle}</h2>
        ${contextParas.map((p) => `<p>${p}</p>`).join("\n        ")}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Popular services in this area</p>
        <h2 class="section-title">Renovation services we're regularly asked for locally.</h2>
${servicesList()}      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Get in touch</p>
          <h2 class="section-title">Renovating a home in ${name}?</h2>
          <p>Send us a few details about your project and we'll arrange a site visit to talk through scope, timelines and pricing.</p>
        </div>
        ${quoteCallout({
          heading: "Local renovation specialists",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> for a fast response.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Renovation FAQs for ${name}.</h2>
        ${faqList(faqs)}
      </div>
    </section>
`;

  const html = page({
    title,
    description,
    canonical,
    body,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Areas We Cover", item: `${SITE}/areas.html` },
      { name },
    ],
    faq: faqs,
  });
  writeFileSync(`${slug}.html`, html);
  console.log(`wrote ${slug}.html`);
}

/* ---------------- WILLERBY ---------------- */

areaPage({
  slug: "willerby",
  name: "Willerby",
  kicker: "Willerby",
  h1: "Renovations in Willerby.",
  intro: "Kitchen, bathroom and full renovations for Willerby's family homes, plus orangeries, garden rooms and garage conversions for the larger plots typical of the village.",
  contextTitle: "Renovating in Willerby's suburban streets.",
  contextParas: [
    "Willerby sits just west of Hull and is one of the larger East Riding villages, with a mix of 1930s and post-war semis, larger 1960s-80s detached houses, and more recent estate developments near Willerby Shopping Park. Plot sizes here tend to be generous compared with city terraces, which often gives more scope for an orangery, garden room or garage conversion without needing to extend the house's footprint.",
    "Many Willerby homes still have their original single garage, which is regularly underused for parking and a strong candidate for conversion into an office, playroom or extra bedroom. We also see a steady mix of kitchen and bathroom refurbishments on the village's older 1930s and 1960s housing stock.",
  ],
  faqs: [
    { q: "Do you cover both older and newer parts of Willerby?", a: "Yes, from the older 1930s and post-war housing to newer developments near Willerby Shopping Park." },
    { q: "Are Willerby's larger gardens good for a garden room or orangery?", a: "Often, yes. Larger plots typical of Willerby give more flexibility on footprint and design, though permitted development limits still apply and we'll confirm what's achievable for your specific garden." },
  ],
  title: "Renovations in Willerby | East Yorkshire Renovations",
  description: "Kitchen, bathroom, orangery and garden room renovations for Willerby's family homes, from 1930s semis to newer developments near Willerby Shopping Park.",
});

/* ---------------- KIRK ELLA ---------------- */

areaPage({
  slug: "kirk-ella",
  name: "Kirk Ella",
  kicker: "Kirk Ella",
  h1: "Renovations in Kirk Ella.",
  intro: "Kitchen, bathroom and full renovations for Kirk Ella's period and detached homes, plus orangeries, garden rooms and garage conversions designed to match the character of the village.",
  contextTitle: "Renovating in Kirk Ella's period and detached homes.",
  contextParas: [
    "Kirk Ella, bordering Willerby, has a higher proportion of larger detached and period properties than much of the surrounding area, with parts of the village retaining an older, more rural character. Extensions and orangeries here often need brickwork and roofline detailing matched carefully to an existing period property, which is something we plan for at design stage rather than treating as an afterthought.",
    "Larger gardens and outbuildings are also more common in Kirk Ella than on typical suburban streets, which makes garden rooms and garage conversions a popular way to add space without altering the main house.",
  ],
  faqs: [
    { q: "Can you match new brickwork to an older Kirk Ella property?", a: "Yes, matching brick, render and roofline detailing to period properties is something we plan for at design stage, particularly for orangeries and extensions." },
    { q: "Do larger Kirk Ella gardens allow bigger garden rooms?", a: "Often, yes, though the final size still depends on permitted development limits and how much of the garden is already built on." },
  ],
  title: "Renovations in Kirk Ella | East Yorkshire Renovations",
  description: "Kitchen, bathroom, orangery and garden room renovations for Kirk Ella's period and detached homes, with brickwork and detailing matched to the property.",
});

/* ---------------- SWANLAND ---------------- */

areaPage({
  slug: "swanland",
  name: "Swanland",
  kicker: "Swanland",
  h1: "Renovations in Swanland.",
  intro: "Kitchen, bathroom and full renovations for Swanland's village homes, plus orangeries, garden rooms and garage conversions suited to the village's older properties and larger plots.",
  contextTitle: "Renovating in Swanland village.",
  contextParas: [
    "Swanland is a well-established East Riding village with a mix of older village properties, several larger detached homes and some more recent infill development. A number of properties in and around the village centre sit within or close to a conservation area, which can affect what's achievable under permitted development for extensions, orangeries and garden rooms &mdash; we'll check this for your specific property before recommending a scope of work.",
    "Outside the conservation area, larger plots on the edges of the village generally give more flexibility for orangeries, garden rooms and garage conversions.",
  ],
  faqs: [
    { q: "Is my property in Swanland affected by conservation area rules?", a: "Possibly &mdash; parts of Swanland sit within or close to a conservation area, which can affect permitted development rights. We'll check this for your specific address before recommending a design." },
    { q: "Do you carry out kitchen and bathroom renovations in Swanland as well as extensions?", a: "Yes, kitchen and bathroom renovations are among our most common projects in the village, alongside orangeries and garden rooms." },
  ],
  title: "Renovations in Swanland | East Yorkshire Renovations",
  description: "Kitchen, bathroom, orangery and garden room renovations for Swanland's village homes, with planning guidance for the village's conservation area.",
});

/* ---------------- NORTH FERRIBY ---------------- */

areaPage({
  slug: "north-ferriby",
  name: "North Ferriby",
  kicker: "North Ferriby",
  h1: "Renovations in North Ferriby.",
  intro: "Kitchen, bathroom and full renovations for North Ferriby's riverside village homes, plus orangeries, garden rooms and garage conversions designed around larger village plots.",
  contextTitle: "Renovating in North Ferriby.",
  contextParas: [
    "North Ferriby sits on the Humber estuary between Hessle and Brough, with a mix of older village properties, larger detached homes and some newer development further from the river. Properties closer to the estuary can have specific ground conditions and drainage considerations worth checking early &mdash; something we assess as part of any groundworks-heavy project such as an orangery or garden room foundation.",
    "As in several East Riding villages, some North Ferriby properties sit within a conservation area, which we'll check against your specific address before finalising a design.",
  ],
  faqs: [
    { q: "Do ground conditions near the Humber affect building work in North Ferriby?", a: "They can, particularly for groundworks and foundations. We assess ground conditions and drainage as part of the design process for any extension, orangery or garden room." },
    { q: "Is North Ferriby affected by conservation area rules?", a: "Some parts of the village are. We'll check this for your specific property before recommending a scope of work." },
  ],
  title: "Renovations in North Ferriby | East Yorkshire Renovations",
  description: "Kitchen, bathroom, orangery and garden room renovations for North Ferriby's riverside village homes, with ground conditions and planning checked upfront.",
});

/* ---------------- BROUGH ---------------- */

areaPage({
  slug: "brough",
  name: "Brough",
  kicker: "Brough",
  h1: "Renovations in Brough.",
  intro: "Kitchen, bathroom and full renovations for Brough's homes, plus orangeries, garden rooms and garage conversions across the town's mix of established and newer housing.",
  contextTitle: "Renovating in Brough.",
  contextParas: [
    "Brough is a small town close to the Humber Bridge, with a long-standing aerospace industry presence and a mix of established housing alongside newer developments built over the past couple of decades. This mix means we see everything from straightforward kitchen and bathroom refurbishments on older properties to garden rooms and garage conversions on more modern estate housing with generous plots.",
    "Being close to the Humber, some properties nearer the estuary share similar ground condition and drainage considerations to North Ferriby, which we check as part of the design process for any groundworks-heavy project.",
  ],
  faqs: [
    { q: "Do you cover both older and newer housing in Brough?", a: "Yes, from established properties in the town centre to newer developments built over recent decades." },
    { q: "Are there ground condition considerations for extensions near the Humber in Brough?", a: "For properties nearer the estuary, yes &mdash; we check ground conditions and drainage as part of the design process for extensions, orangeries and garden rooms." },
  ],
  title: "Renovations in Brough | East Yorkshire Renovations",
  description: "Kitchen, bathroom, orangery and garden room renovations for homes in Brough, across the town's established and newer housing.",
});

/* ---------------- SOUTH CAVE ---------------- */

areaPage({
  slug: "south-cave",
  name: "South Cave",
  kicker: "South Cave",
  h1: "Renovations in South Cave.",
  intro: "Kitchen, bathroom and full renovations for South Cave's village and rural homes, plus orangeries, garden rooms and garage conversions suited to the area's larger plots.",
  contextTitle: "Renovating in South Cave.",
  contextParas: [
    "South Cave is one of the larger East Riding villages, with a historic market place, a mix of period properties in and around the village centre, and larger detached homes and farmhouses on its outskirts. Properties near the village centre and market place often sit within a conservation area, which can affect extensions, orangeries and garden rooms &mdash; we'll check this for your specific property.",
    "Rural and edge-of-village properties with larger gardens generally have more flexibility for garden rooms, garage conversions and orangeries, though older farmhouses and period buildings often need brickwork and detailing matched carefully to the existing structure.",
  ],
  faqs: [
    { q: "Is my property in South Cave affected by conservation area rules?", a: "Properties in and around the village centre and market place often are. We'll check this for your specific address before recommending a design." },
    { q: "Can you match brickwork on an older South Cave farmhouse?", a: "Yes, matching brick and detailing to period and rural properties is something we plan for at design stage." },
  ],
  title: "Renovations in South Cave | East Yorkshire Renovations",
  description: "Kitchen, bathroom, orangery and garden room renovations for South Cave's village and rural homes, with conservation area planning checked upfront.",
});

/* ---------------- EAST RIDING OF YORKSHIRE (HUB) ---------------- */

const eastRidingBody = `${heroTextOnly({
  kicker: "East Riding of Yorkshire",
  h1: "Renovations across East Riding of Yorkshire.",
  intro: "Kitchen, bathroom and full renovations, plus orangeries, garden rooms, garage conversions and outdoor kitchens, for homes across East Riding of Yorkshire's villages, market towns and rural areas.",
})}
    <section class="section">
      <div class="container">
        <p class="kicker">A varied region</p>
        <h2 class="section-title">Renovating across East Riding of Yorkshire.</h2>
        <p>East Riding of Yorkshire covers a wide mix of property types &mdash; village centres with period and listed buildings, market towns like Beverley, riverside villages along the Humber such as North Ferriby and Brough, and larger rural and farmhouse properties further out. Plot sizes tend to be more generous than in Hull itself, which often opens up more options for orangeries, garden rooms and garage conversions alongside standard kitchen and bathroom renovation work.</p>
        <p>Planning and building regulations are handled by East Riding of Yorkshire Council, and conservation areas and listed buildings are more common across the region's villages than in newer suburban developments, so we check this for every property individually rather than assuming a standard permitted development position.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Browse by area</p>
        <h2 class="section-title">Areas we cover across the East Riding.</h2>
        <div class="cards">
          <article class="card"><h3><a href="/beverley.html">Beverley</a></h3></article>
          <article class="card"><h3><a href="/cottingham.html">Cottingham</a></h3></article>
          <article class="card"><h3><a href="/hessle.html">Hessle</a></h3></article>
          <article class="card"><h3><a href="/anlaby.html">Anlaby</a></h3></article>
          <article class="card"><h3><a href="/willerby.html">Willerby</a></h3></article>
          <article class="card"><h3><a href="/kirk-ella.html">Kirk Ella</a></h3></article>
          <article class="card"><h3><a href="/swanland.html">Swanland</a></h3></article>
          <article class="card"><h3><a href="/north-ferriby.html">North Ferriby</a></h3></article>
          <article class="card"><h3><a href="/brough.html">Brough</a></h3></article>
          <article class="card"><h3><a href="/south-cave.html">South Cave</a></h3></article>
        </div>
        <p>We also take on projects further afield across the wider East Riding, including Hornsea and Driffield &mdash; get in touch to check coverage for your postcode.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Popular services across the region</p>
        <h2 class="section-title">Renovation services we're regularly asked for across East Riding of Yorkshire.</h2>
${servicesList()}      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Get in touch</p>
          <h2 class="section-title">Renovating a home in East Riding of Yorkshire?</h2>
          <p>Send us a few details about your project and we'll arrange a site visit to talk through scope, timelines and pricing.</p>
        </div>
        ${quoteCallout({
          heading: "Local renovation specialists",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> for a fast response.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Renovation FAQs for East Riding of Yorkshire.</h2>
        ${faqList([
          { q: "Do you cover the whole of East Riding of Yorkshire?", a: "We focus on Hull and the villages and towns closest to it &mdash; Beverley, Cottingham, Hessle, Anlaby, Willerby, Kirk Ella, Swanland, North Ferriby, Brough and South Cave &mdash; and take on projects further afield where practical. Get in touch to check coverage for your postcode." },
          { q: "Are planning rules the same across all East Riding villages?", a: "No. Conservation areas, listed buildings and permitted development limits vary by property and location, so we check the specific planning position for your address rather than assuming a standard answer." },
          { q: "Do rural and farmhouse properties need a different approach?", a: "Often, yes &mdash; older rural properties and farmhouses typically need brickwork, roofing and detailing matched more carefully to the existing building than a standard suburban extension." },
        ])}
      </div>
    </section>
`;

const eastRidingCanonical = `${SITE}/east-riding.html`;
writeFileSync(
  "east-riding.html",
  page({
    title: "Renovations East Riding of Yorkshire | East Yorkshire Renovations",
    description: "Kitchen, bathroom, orangery and garden room renovations across East Riding of Yorkshire's villages, market towns and rural areas.",
    canonical: eastRidingCanonical,
    body: eastRidingBody,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Areas We Cover", item: `${SITE}/areas.html` },
      { name: "East Riding of Yorkshire" },
    ],
    faq: [
      { q: "Do you cover the whole of East Riding of Yorkshire?", a: "We focus on Hull and the villages and towns closest to it &mdash; Beverley, Cottingham, Hessle, Anlaby, Willerby, Kirk Ella, Swanland, North Ferriby, Brough and South Cave &mdash; and take on projects further afield where practical." },
      { q: "Are planning rules the same across all East Riding villages?", a: "No. Conservation areas, listed buildings and permitted development limits vary by property and location, so we check the specific planning position for your address." },
      { q: "Do rural and farmhouse properties need a different approach?", a: "Often, yes &mdash; older rural properties and farmhouses typically need brickwork, roofing and detailing matched more carefully to the existing building." },
    ],
  })
);
console.log("wrote east-riding.html");
