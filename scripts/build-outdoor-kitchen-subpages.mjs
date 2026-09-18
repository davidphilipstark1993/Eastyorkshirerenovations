import { mkdirSync, writeFileSync } from "fs";
import { page, heroTextOnly, faqList, quoteCallout, stepsList } from "./lib/layout.mjs";
import { SITE } from "./lib/constants.mjs";

function subpage({ slug, name, h1, intro, sections, faqs, title, description, serviceDesc }) {
  const dir = `outdoor-kitchens/${slug}`;
  const canonical = `${SITE}/${dir}/`;
  const body = `${heroTextOnly({ kicker: "Outdoor kitchens", h1, intro })}
${sections}
    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Planning &amp; process</p>
          <h2 class="section-title">Planning permission and our process.</h2>
          <p>General planning permission, building regulations and our step-by-step process for outdoor kitchens are covered in full on our main <a href="/outdoor-kitchens/">outdoor kitchens page</a>.</p>
        </div>
        ${quoteCallout({
          heading: "Ready to talk through your outdoor kitchen?",
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> to arrange a site visit.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Areas covered</p>
        <h2 class="section-title">Outdoor kitchens across Hull &amp; East Yorkshire.</h2>
        <p>We build outdoor kitchens across <a href="/outdoor-kitchens/hull/">Hull</a> and <a href="/outdoor-kitchens/east-yorkshire/">East Yorkshire</a>, alongside our full range of <a href="/outdoor-kitchens/">outdoor kitchen services</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">${name} FAQs.</h2>
        ${faqList(faqs)}
      </div>
    </section>
`;

  mkdirSync(dir, { recursive: true });
  const html = page({
    title,
    description,
    canonical,
    body,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Outdoor Kitchens", item: `${SITE}/outdoor-kitchens/` },
      { name },
    ],
    faq: faqs,
    service: {
      name: `Outdoor Kitchen ${name}`,
      description: serviceDesc,
    },
  });
  writeFileSync(`${dir}/index.html`, html);
  console.log(`wrote ${dir}/index.html`);
}

/* ---------------- COST ---------------- */

subpage({
  slug: "cost",
  name: "Cost",
  h1: "How much does an outdoor kitchen cost?",
  intro: "A component-by-component look at what drives outdoor kitchen costs, to help you budget before getting a tailored quote.",
  sections: `    <section class="section">
      <div class="container">
        <p class="kicker">What drives the cost</p>
        <h2 class="section-title">Outdoor kitchen costs, broken down by component.</h2>
        <p>Rather than a single headline figure, it's more useful to think about outdoor kitchen cost component by component &mdash; the figures below are general UK guidance, not East Yorkshire Renovations' confirmed pricing, and the only way to get an accurate total is a site visit and design conversation.</p>
        <p><strong>BBQ unit.</strong> A built-in gas or charcoal BBQ typically costs more than a freestanding one because of the housing, ventilation and (for gas) the supply pipework, but it lasts longer and looks integrated into the design. Adding a pizza oven or side burner increases this further.</p>
        <p><strong>Worktops.</strong> Porcelain and granite are the most common weatherproof choices. Porcelain is generally the more budget-friendly of the two hard-wearing options, with granite and other natural stone sitting at the premium end.</p>
        <p><strong>Cabinetry &amp; storage.</strong> Weatherproof cabinetry for utensils, crockery and gas bottle storage adds cost proportional to how much storage you want built in, versus a simpler open-shelf approach.</p>
        <p><strong>Sink &amp; plumbing.</strong> Adding a sink means running a water supply and drainage to the outdoor kitchen, which is one of the bigger cost variables between a basic and mid-spec build.</p>
        <p><strong>Electrics &amp; refrigeration.</strong> Outdoor-rated sockets, lighting and an outdoor fridge all add to the electrical scope, particularly if the outdoor kitchen is some distance from the house's existing supply.</p>
        <p><strong>Cover.</strong> A simple pergola costs less than a fully enclosed roofed structure, but both add meaningfully to the overall budget compared with an open-air setup. See our <a href="/outdoor-kitchens/covered-outdoor-kitchens/">covered outdoor kitchens page</a> for more detail.</p>
        <div class="cards">
          <article class="card">
            <h3>Basic</h3>
            <p>Roughly &pound;3,000&ndash;&pound;8,000 for a built-in BBQ, worktop and storage, no plumbing or permanent roof.</p>
          </article>
          <article class="card">
            <h3>Mid-spec</h3>
            <p>Roughly &pound;8,000&ndash;&pound;18,000 for a built-in BBQ, sink, worktops and some weather cover.</p>
          </article>
          <article class="card">
            <h3>Premium / covered</h3>
            <p>Roughly &pound;18,000&ndash;&pound;35,000+ for a fully covered kitchen with plumbing, electrics and premium materials.</p>
          </article>
        </div>
      </div>
    </section>
`,
  faqs: [
    { q: "What's the single biggest cost driver for an outdoor kitchen?", a: "Whether plumbing (a sink and water supply) and a permanent cover are included tends to move the budget more than the choice of BBQ or worktop material alone." },
    { q: "Is porcelain or granite worktop cheaper for an outdoor kitchen?", a: "Porcelain is generally the more budget-friendly of the two hard-wearing, weatherproof options, with granite and other natural stone sitting at the premium end." },
    { q: "Does adding a pizza oven cost much more than a BBQ alone?", a: "It adds to the build, mainly through the additional housing and any gas or electrical supply needed, but many people add one at the same time as the main BBQ unit to avoid remobilising later." },
  ],
  title: "Outdoor Kitchen Cost | East Yorkshire Renovations",
  description: "A component-by-component breakdown of what drives outdoor kitchen costs in the UK, from BBQ units and worktops to plumbing and cover.",
  serviceDesc: "Outdoor kitchen cost guidance and budgeting for projects across Hull and East Yorkshire.",
});

/* ---------------- DESIGN ---------------- */

subpage({
  slug: "design",
  name: "Design",
  h1: "Outdoor kitchen design.",
  intro: "Getting the layout and zoning right matters more than any single appliance choice &mdash; here's how we approach designing an outdoor kitchen that actually works for how you cook and entertain.",
  sections: `    <section class="section">
      <div class="container">
        <p class="kicker">Layout</p>
        <h2 class="section-title">Choosing a layout that suits your garden.</h2>
        <div class="cards">
          <article class="card">
            <h3>Single-run (galley)</h3>
            <p>Units run along one wall or fence line &mdash; the simplest layout, well suited to smaller gardens or a straightforward BBQ-and-worktop setup.</p>
          </article>
          <article class="card">
            <h3>L-shaped</h3>
            <p>Wraps around a corner, giving more worktop and storage without needing as much depth as a single run, and naturally separates cooking from prep.</p>
          </article>
          <article class="card">
            <h3>Island</h3>
            <p>A freestanding unit accessible from all sides, suited to larger gardens where the kitchen becomes a central entertaining feature rather than sitting against a boundary.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Zoning &amp; positioning</p>
        <h2 class="section-title">Planning cooking, prep and dining as separate zones.</h2>
        <p>A well-designed outdoor kitchen usually separates three things: the cooking zone (BBQ, pizza oven, side burner), the prep and storage zone (worktop, sink, cabinetry), and the dining or seating zone. Keeping these distinct, even in a small garden, makes the space easier to use when you're actually cooking for guests rather than everyone crowding round the BBQ.</p>
        <p>Position relative to the house also matters &mdash; close enough for practical access back to the kitchen, but positioned to avoid smoke blowing towards seating areas or into open windows, which depends on your garden's typical wind direction and the position of nearby boundaries and buildings.</p>
      </div>
    </section>
`,
  faqs: [
    { q: "What's the best layout for a small garden outdoor kitchen?", a: "A single-run (galley) layout along a wall or fence line is usually the most space-efficient option for a smaller garden." },
    { q: "Should the outdoor kitchen be close to the house?", a: "Generally yes, for practical access back to the indoor kitchen, but positioned to avoid smoke blowing towards seating areas or windows based on your garden's typical wind direction." },
    { q: "Do you help with 3D visuals or design before building?", a: "We talk through layout and material options as part of the design consultation so you have a clear picture of the finished space before construction starts." },
  ],
  title: "Outdoor Kitchen Design | East Yorkshire Renovations",
  description: "Outdoor kitchen design guidance covering layout options, zoning and positioning, for gardens across Hull and East Yorkshire.",
  serviceDesc: "Outdoor kitchen design consultation and layout planning for gardens across Hull and East Yorkshire.",
});

/* ---------------- COVERED OUTDOOR KITCHENS ---------------- */

subpage({
  slug: "covered-outdoor-kitchens",
  name: "Covered Outdoor Kitchens",
  h1: "Covered outdoor kitchens.",
  intro: "A pergola or roof over your outdoor kitchen protects the units and worktops from the weather and stretches the usable season well beyond a typical British summer.",
  sections: `    <section class="section">
      <div class="container">
        <p class="kicker">Cover options</p>
        <h2 class="section-title">Choosing a cover for your outdoor kitchen.</h2>
        <div class="cards">
          <article class="card">
            <h3>Open pergola</h3>
            <p>Provides partial shade and a defined structure without fully enclosing the space. A lower-cost option that still improves the look and feel of the kitchen area.</p>
          </article>
          <article class="card">
            <h3>Louvred roof</h3>
            <p>Adjustable slats let you control shade and rain protection on demand, giving more flexibility than a fixed roof at a higher cost than an open pergola.</p>
          </article>
          <article class="card">
            <h3>Solid roof</h3>
            <p>Full weather protection, allowing the space to be used in light rain or stronger sun. The most effective option for extending usable months, and the highest cost of the three.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">What changes with a cover</p>
        <h2 class="section-title">What a permanent cover adds to the project.</h2>
        <p><strong>Weatherproofing.</strong> A cover protects cabinetry, electrics and worktops from constant exposure to rain, which extends their lifespan compared with a fully open-air setup.</p>
        <p><strong>Lighting &amp; extras.</strong> A roof structure gives you somewhere to run pendant lighting, heaters or a ceiling fan, which is harder to do well in a fully open design.</p>
        <p><strong>Planning permission.</strong> A permanent roofed structure over a certain size is more likely to affect your permitted development position than an open-air BBQ area, particularly if it's close to a boundary. We check this against your specific garden and design before proceeding &mdash; see our main <a href="/outdoor-kitchens/">outdoor kitchens page</a> for general planning guidance.</p>
      </div>
    </section>
`,
  faqs: [
    { q: "Is a pergola or a solid roof better for an outdoor kitchen?", a: "A solid roof gives the most weather protection and the longest usable season, while an open pergola is a lower-cost option that still improves the space. A louvred roof sits in between, giving adjustable control." },
    { q: "Does a covered outdoor kitchen need planning permission?", a: "It's more likely to need consideration than an open-air setup, particularly for a larger permanent roofed structure or one close to a boundary. We check this for your specific garden and design." },
    { q: "Can a covered outdoor kitchen be used in winter?", a: "Generally, yes, a solid-roofed outdoor kitchen can be used year-round, while an open-air setup is more of a spring-to-autumn space." },
  ],
  title: "Covered Outdoor Kitchens | East Yorkshire Renovations",
  description: "Covered outdoor kitchens with pergolas, louvred roofs or solid roof structures, extending the usable season across Hull and East Yorkshire.",
  serviceDesc: "Covered outdoor kitchen design and installation, including pergolas, louvred roofs and solid roof structures, across Hull and East Yorkshire.",
});
