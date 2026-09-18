import { mkdirSync, writeFileSync } from "fs";
import { page, heroTextOnly, stepsList, faqList, quoteCallout } from "./lib/layout.mjs";
import { SITE } from "./lib/constants.mjs";

const OUT_MAIN = "outdoor-kitchens";
const OUT_HULL = "outdoor-kitchens/hull";
const OUT_EY = "outdoor-kitchens/east-yorkshire";

/* ---------------- MAIN PAGE ---------------- */

const mainBody = `${heroTextOnly({
  kicker: "Outdoor kitchens",
  h1: "Outdoor kitchens in Hull &amp; East Yorkshire.",
  intro: "A built-in outdoor kitchen turns the garden into proper entertaining space &mdash; a permanent BBQ, worktop and storage setup that's a step up from a gazebo and a portable grill.",
  secondaryCta: { label: "View Our Recent Projects", href: "/projects/outdoor-kitchens/" },
  image: { src: "/assets/img/services/outdoor-kitchen-ai.jpg", width: 1600, height: 900, alt: "Concept image - outdoor kitchen design style" },
})}
    <section class="section">
      <div class="container">
        <p class="kicker">What's included</p>
        <h2 class="section-title">Designing an outdoor kitchen around how you entertain.</h2>
        <p><strong>BBQs &amp; cooking.</strong> Built-in gas, charcoal or hybrid BBQ units, with the option of a pizza oven or side burner depending on how you like to cook.</p>
        <p><strong>Worktops.</strong> Weatherproof worktops &mdash; porcelain, granite or a similar hard-wearing material &mdash; give you proper prep space that can be left outside all year without deteriorating.</p>
        <p><strong>Storage.</strong> Built-in cabinetry for utensils, crockery and gas bottles keeps the space tidy and everything you need close to hand.</p>
        <p><strong>Sinks &amp; refrigeration.</strong> A sink and cold water supply save constant trips back to the kitchen, and an outdoor fridge keeps drinks and food properly chilled during entertaining.</p>
        <p><strong>Electrics &amp; lighting.</strong> Outdoor-rated sockets and lighting extend the space into the evening and power fridges, blenders or additional appliances.</p>
        <p><strong>Cover &amp; seating.</strong> A pergola or covered structure protects the kitchen from the weather and extends the usable season, paired with a seating and dining area designed as part of the same space.</p>
        <p>See our <a href="/outdoor-kitchens/design/">outdoor kitchen design page</a> for more on layout and zoning.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Covered vs open</p>
        <h2 class="section-title">Choosing between an open-air or covered outdoor kitchen.</h2>
        <div class="cards">
          <article class="card">
            <h3>Open-air outdoor kitchen</h3>
            <p>Lower cost and a simpler build, well suited to a sheltered spot in the garden. Best for households who mainly use it in summer.</p>
          </article>
          <article class="card">
            <h3><a href="/outdoor-kitchens/covered-outdoor-kitchens/">Covered outdoor kitchen</a></h3>
            <p>A pergola, roof or louvred canopy protects the units and worktops from the weather and lets you use the space in light rain or stronger sun, extending the outdoor kitchen's usable season considerably. See our <a href="/outdoor-kitchens/covered-outdoor-kitchens/">covered outdoor kitchens page</a> for the options in more detail.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Planning &amp; regulations</p>
        <h2 class="section-title">Planning permission and building regulations for outdoor kitchens.</h2>
        <p>A simple built-in BBQ and worktop area doesn't usually need planning permission. The position can change once you add a permanent roofed structure over a certain size, or if the outdoor kitchen sits close to a boundary or within a conservation area &mdash; these are worth checking before work starts. Electrical work should be carried out to Part P requirements, and any gas supply to a BBQ or pizza oven needs to be installed by a Gas Safe registered engineer.</p>
        <p>This is general guidance rather than an assessment of your specific garden and design. We'll confirm what applies during the design consultation.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Cost</p>
        <h2 class="section-title">Typical outdoor kitchen cost considerations.</h2>
        <p>Cost depends heavily on the units, worktop material and whether cover, plumbing and electrics are included, so treat the figures below as general UK guidance rather than a quote &mdash; the only way to get an accurate number is a site visit.</p>
        <div class="cards">
          <article class="card">
            <h3>Basic outdoor kitchen</h3>
            <p>Roughly &pound;3,000&ndash;&pound;8,000 for a built-in BBQ, worktop and storage area, without plumbing or a permanent roof.</p>
          </article>
          <article class="card">
            <h3>Mid-spec outdoor kitchen</h3>
            <p>Roughly &pound;8,000&ndash;&pound;18,000 for a built-in BBQ, sink, worktops and some weather cover such as a pergola.</p>
          </article>
          <article class="card">
            <h3>Premium / covered outdoor kitchen</h3>
            <p>Roughly &pound;18,000&ndash;&pound;35,000+ for a fully covered outdoor kitchen with plumbing, electrics, refrigeration and premium materials throughout.</p>
          </article>
        </div>
        <p>These figures are indicative of the wider UK market and aren't East Yorkshire Renovations' confirmed pricing &mdash; see our <a href="/outdoor-kitchens/cost/">full cost breakdown</a> by component, or <a href="/contact.html#quote-form">get in touch for a free, tailored quote</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Process</p>
        <h2 class="section-title">How we design and build an outdoor kitchen.</h2>
        ${stepsList([
          { title: "Consultation & design", body: "We visit, assess the garden and access, and design a layout around how you cook and entertain." },
          { title: "Planning check", body: "We confirm whether cover, size or boundary position brings your project under planning permission." },
          { title: "Construction", body: "Groundworks, base, units, worktops, plumbing, electrics and gas (where applicable) carried out by qualified trades." },
          { title: "Finishing & handover", body: "Final fit-out, a full clean, and a walk-through of how everything works." },
        ])}
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Maintenance &amp; winter use</p>
          <h2 class="section-title">Looking after an outdoor kitchen.</h2>
          <p>Weatherproof materials mean an outdoor kitchen needs relatively little upkeep &mdash; mainly cleaning worktops and units, covering exposed appliances over winter, and checking gas connections annually. A covered outdoor kitchen can generally be used year-round; an open-air setup is more of a spring-to-autumn space unless you're happy cooking in the rain.</p>
        </div>
        ${quoteCallout({
          heading: "Thinking about an outdoor kitchen?",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> to arrange a site visit.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Why choose us</p>
        <h2 class="section-title">Why East Yorkshire Renovations.</h2>
        <ul>
          <li>One point of contact for the whole project, from groundworks to gas and electrics.</li>
          <li>A local team based in Hessle, working across Hull and East Yorkshire.</li>
          <li>Transparent pricing and a clear, realistic build programme.</li>
          <li>We coordinate every trade involved, including Gas Safe registered engineers for any gas work.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Areas covered</p>
        <h2 class="section-title">Outdoor kitchens across Hull &amp; East Yorkshire.</h2>
        <div class="cards">
          <article class="card">
            <h3><a href="/outdoor-kitchens/hull/">Outdoor kitchens in Hull</a></h3>
            <p>Built-in BBQ and entertaining spaces for gardens across the city.</p>
          </article>
          <article class="card">
            <h3><a href="/outdoor-kitchens/east-yorkshire/">Outdoor kitchens in East Yorkshire</a></h3>
            <p>Larger, covered outdoor kitchens for bigger gardens across Beverley, Cottingham and the wider East Riding.</p>
          </article>
        </div>
        <p>We also work in Anlaby, Kirk Ella, Swanland, North Ferriby, Brough and South Cave &mdash; see our <a href="/areas.html">full list of areas we cover</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Project examples</p>
        <h2 class="section-title">Outdoor kitchen projects.</h2>
        <p>We're building our library of completed outdoor kitchen projects and will publish real photos and case studies here as they're finished &mdash; see our <a href="/projects/outdoor-kitchens/">outdoor kitchen projects page</a> for what to expect. In the meantime, you can see genuine completed kitchen, bathroom and refurbishment work on our <a href="/work.html">recent work page</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Outdoor kitchen FAQs.</h2>
        ${faqList([
          { q: "Do I need planning permission for an outdoor kitchen?", a: "A simple built-in BBQ and worktop area usually doesn't. This can change once you add a permanent roofed structure over a certain size, or if it sits close to a boundary or within a conservation area." },
          { q: "Can an outdoor kitchen be used in winter?", a: "A covered outdoor kitchen can generally be used year-round. An open-air setup is more of a spring-to-autumn space." },
          { q: "Do you install gas BBQs and pizza ovens?", a: "Yes, any gas supply is installed and certified by a Gas Safe registered engineer as part of the project." },
          { q: "What worktop material do you recommend for outdoor use?", a: "Porcelain and granite are both popular choices because they're weatherproof and hard-wearing, standing up well to being left outside all year." },
          { q: "Can you add a pergola or roof over the kitchen?", a: "Yes, a pergola or covered structure is a common addition that protects the units and extends the outdoor kitchen's usable season." },
        ])}
      </div>
    </section>
`;

writeMain();

function writeMain() {
  mkdirSync(OUT_MAIN, { recursive: true });
  const canonical = `${SITE}/outdoor-kitchens/`;
  const html = page({
    title: "Outdoor Kitchens Hull & East Yorkshire | EYR",
    description: "Bespoke outdoor kitchens across Hull and East Yorkshire, from built-in BBQ areas to fully covered outdoor kitchens with plumbing and electrics.",
    canonical,
    body: mainBody,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Outdoor Kitchens" },
    ],
    faq: [
      { q: "Do I need planning permission for an outdoor kitchen?", a: "A simple built-in BBQ and worktop area usually doesn't. This can change once you add a permanent roofed structure over a certain size, or if it sits close to a boundary or within a conservation area." },
      { q: "Can an outdoor kitchen be used in winter?", a: "A covered outdoor kitchen can generally be used year-round. An open-air setup is more of a spring-to-autumn space." },
      { q: "Do you install gas BBQs and pizza ovens?", a: "Yes, any gas supply is installed and certified by a Gas Safe registered engineer as part of the project." },
      { q: "What worktop material do you recommend for outdoor use?", a: "Porcelain and granite are both popular choices because they're weatherproof and hard-wearing, standing up well to being left outside all year." },
      { q: "Can you add a pergola or roof over the kitchen?", a: "Yes, a pergola or covered structure is a common addition that protects the units and extends the outdoor kitchen's usable season." },
    ],
    service: {
      name: "Outdoor Kitchen Design & Installation",
      description: "Bespoke outdoor kitchens across Hull and East Yorkshire, including built-in BBQs, worktops, plumbing, electrics and covered structures.",
    },
  });
  writeFileSync(`${OUT_MAIN}/index.html`, html);
  console.log(`wrote ${OUT_MAIN}/index.html`);
}

/* ---------------- HULL PAGE ---------------- */

const hullBody = `${heroTextOnly({
  kicker: "Outdoor kitchens in Hull",
  h1: "Outdoor kitchens in Hull.",
  intro: "Built-in BBQ and outdoor kitchen installations for gardens across Hull, designed around how you entertain and cook outdoors.",
  secondaryCta: { label: "View Our Recent Projects", href: "/projects/outdoor-kitchens/" },
})}
    <section class="section">
      <div class="container">
        <p class="kicker">Outdoor kitchens in Hull</p>
        <h2 class="section-title">Outdoor kitchens for Hull's gardens.</h2>
        <p>Garden sizes vary across Hull, from compact rear yards on terraces near the city centre to larger gardens on suburban semis further out in Kingswood and Bricknell. A smaller garden usually suits a compact open-air outdoor kitchen against a fence or wall, while larger suburban gardens have more room for a covered structure and a full entertaining area.</p>
        <p>A simple built-in BBQ and worktop setup usually doesn't need planning permission in Hull. This can change if you're adding a larger permanent roofed structure or the outdoor kitchen sits close to a boundary &mdash; we'll check this for your specific garden.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">What we cover</p>
        <h2 class="section-title">Outdoor kitchen design and installation in Hull.</h2>
        <ul>
          <li>Built-in BBQ, worktop and storage installations.</li>
          <li>Sinks, refrigeration, electrics and lighting.</li>
          <li>Pergolas and covered structures for weather protection.</li>
          <li>Gas Safe registered installation for any gas appliances.</li>
        </ul>
        <p>See the full breakdown of design options, costs and our process on our main <a href="/outdoor-kitchens/">outdoor kitchens page</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Get in touch</p>
          <h2 class="section-title">Planning an outdoor kitchen in Hull?</h2>
          <p>Send us a few details about your garden and how you like to entertain, and we'll arrange a site visit to talk through design and pricing.</p>
        </div>
        ${quoteCallout({
          heading: "Local outdoor kitchen specialists",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> for a fast response.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Outdoor kitchen FAQs for Hull homeowners.</h2>
        ${faqList([
          { q: "Can you fit an outdoor kitchen in a small Hull garden?", a: "Yes, a compact open-air setup against a fence or wall works well on smaller plots. We'll design around the space available." },
          { q: "Do I need planning permission for an outdoor kitchen in Hull?", a: "A simple built-in BBQ and worktop area usually doesn't need planning permission. We'll check this for your specific garden and design." },
          { q: "Can you install a covered outdoor kitchen?", a: "Yes, a pergola or covered structure is a popular addition that extends the usable season into cooler or wetter weather." },
        ])}
        <p>See more general questions on our <a href="/outdoor-kitchens/">main outdoor kitchens page</a>, or <a href="/hull.html">read more about our renovation work in Hull</a>.</p>
      </div>
    </section>
`;

writeHull();

function writeHull() {
  mkdirSync(OUT_HULL, { recursive: true });
  const canonical = `${SITE}/outdoor-kitchens/hull/`;
  const html = page({
    title: "Outdoor Kitchens Hull | Bespoke Outdoor Kitchen Installation",
    description: "Bespoke outdoor kitchens in Hull, including built-in BBQs, worktops, storage and covered structures for gardens across the city.",
    canonical,
    body: hullBody,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Outdoor Kitchens", item: `${SITE}/outdoor-kitchens/` },
      { name: "Hull" },
    ],
    service: {
      name: "Outdoor Kitchens in Hull",
      description: "Bespoke outdoor kitchen design and installation for gardens across Hull.",
      areaServed: ["Hull"],
    },
  });
  writeFileSync(`${OUT_HULL}/index.html`, html);
  console.log(`wrote ${OUT_HULL}/index.html`);
}

/* ---------------- EAST YORKSHIRE PAGE ---------------- */

const eyBody = `${heroTextOnly({
  kicker: "Outdoor kitchens in East Yorkshire",
  h1: "Outdoor kitchens across East Yorkshire.",
  intro: "Bespoke outdoor kitchens for homes across the East Riding, from village gardens in Beverley and Cottingham to larger plots in Willerby and Swanland.",
  secondaryCta: { label: "View Our Recent Projects", href: "/projects/outdoor-kitchens/" },
})}
    <section class="section">
      <div class="container">
        <p class="kicker">Outdoor kitchens across the East Riding</p>
        <h2 class="section-title">Outdoor kitchens for East Yorkshire's larger gardens.</h2>
        <p>Larger gardens across East Yorkshire's villages and suburbs &mdash; Beverley, Cottingham, Swanland, North Ferriby, Kirk Ella, South Cave and the wider East Riding &mdash; often give more scope for a full covered outdoor kitchen with a proper dining and entertaining area alongside it, rather than just a built-in BBQ against a wall.</p>
        <p>A simple built-in BBQ and worktop setup usually doesn't need planning permission. This can change with a larger permanent roofed structure, proximity to a boundary, or on listed properties and conservation areas found in several East Yorkshire villages &mdash; we'll check this for your specific garden.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">What we cover</p>
        <h2 class="section-title">Outdoor kitchen design and installation across East Yorkshire.</h2>
        <ul>
          <li>Built-in BBQ, worktop and storage installations.</li>
          <li>Sinks, refrigeration, electrics and lighting.</li>
          <li>Pergolas and covered structures for weather protection.</li>
          <li>Gas Safe registered installation for any gas appliances.</li>
        </ul>
        <p>See the full breakdown of design options, costs and our process on our main <a href="/outdoor-kitchens/">outdoor kitchens page</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Get in touch</p>
          <h2 class="section-title">Planning an outdoor kitchen in East Yorkshire?</h2>
          <p>Send us a few details about your garden and how you like to entertain, and we'll arrange a site visit to talk through design and pricing.</p>
        </div>
        ${quoteCallout({
          heading: "Local outdoor kitchen specialists",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> for a fast response.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">Outdoor kitchen FAQs for East Yorkshire homeowners.</h2>
        ${faqList([
          { q: "Do you cover villages like Swanland and North Ferriby?", a: "Yes, we cover the wider East Riding including Willerby, Kirk Ella, Swanland, North Ferriby, Brough and South Cave." },
          { q: "Can a larger garden support a bigger outdoor kitchen?", a: "Often, yes, larger East Yorkshire gardens tend to give more scope for a full covered outdoor kitchen with a dining area alongside it." },
          { q: "Are there extra planning considerations for listed or period properties?", a: "Yes, listed buildings and conservation areas across East Yorkshire's villages can have tighter controls. We'll check this for your specific property." },
        ])}
        <p>See more general questions on our <a href="/outdoor-kitchens/">main outdoor kitchens page</a>, or explore our <a href="/areas.html">areas we cover</a>.</p>
      </div>
    </section>
`;

writeEY();

function writeEY() {
  mkdirSync(OUT_EY, { recursive: true });
  const canonical = `${SITE}/outdoor-kitchens/east-yorkshire/`;
  const html = page({
    title: "Outdoor Kitchens East Yorkshire | EYR",
    description: "Bespoke outdoor kitchens across East Yorkshire's villages and the East Riding, from built-in BBQ areas to fully covered outdoor kitchens.",
    canonical,
    body: eyBody,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Outdoor Kitchens", item: `${SITE}/outdoor-kitchens/` },
      { name: "East Yorkshire" },
    ],
    service: {
      name: "Outdoor Kitchens in East Yorkshire",
      description: "Bespoke outdoor kitchen design and installation for homes across East Yorkshire and the East Riding.",
    },
  });
  writeFileSync(`${OUT_EY}/index.html`, html);
  console.log(`wrote ${OUT_EY}/index.html`);
}
