import { mkdirSync, writeFileSync } from "fs";
import { page, heroTextOnly, quoteCallout } from "./lib/layout.mjs";
import { SITE } from "./lib/constants.mjs";
import { writeProjectPage } from "./lib/project-template.mjs";
import { CATEGORIES, projects } from "./data/projects.mjs";

const PRIORITY_CATEGORIES = ["orangeries", "conservatory-transformations", "garden-rooms", "garage-conversions", "outdoor-kitchens"];
const OTHER_CATEGORIES = Object.keys(CATEGORIES).filter((c) => !PRIORITY_CATEGORIES.includes(c));

// Distinct, genuine copy per priority category for while its project library
// is still empty — explains what will be published and why, rather than a
// generic "coming soon" notice repeated five times with the name swapped.
const EMPTY_CATEGORY_COPY = {
  "orangeries": {
    intro: "We haven't finished an orangery yet that we can publish photos and details of &mdash; when we do, this page will show the brickwork, roof lantern and glazing choices for that specific project, not a stock photo.",
    whatToExpect: [
      "Real before, during and after photos, including the roof lantern and glazing once fitted",
      "The brick and roof specification actually used, and why",
      "Genuine timescale and any planning/building regulations position confirmed for that property",
    ],
    guides: [
      { label: "How much does an orangery cost?", href: "/guides/how-much-does-an-orangery-cost/" },
      { label: "Orangery ideas: what to use the extra space for", href: "/guides/orangery-ideas/" },
    ],
  },
  "conservatory-transformations": {
    intro: "We haven't published a full conservatory transformation case study yet. Once one's finished, this page will show the actual roof, wall and floor work carried out, and what the room's used for afterwards.",
    whatToExpect: [
      "Before photos of the conservatory as it was, not a generic stock image",
      "What was upgraded &mdash; roof, insulation, heating, flooring &mdash; and why",
      "How the finished room is actually used day to day",
    ],
    guides: [
      { label: "Conservatory transformation cost", href: "/guides/conservatory-transformation-cost/" },
      { label: "Insulated conservatory roof", href: "/guides/insulated-conservatory-roof/" },
    ],
  },
  "garden-rooms": {
    intro: "We haven't finished a garden room project we can publish photos of yet. When we have, this page will show the real foundations, insulation and finish for that build &mdash; office, gym, bar or studio.",
    whatToExpect: [
      "Real photos from foundation stage through to the finished interior",
      "The insulation, heating and electrics specification used",
      "What the room's actually being used for once handed over",
    ],
    guides: [
      { label: "How much does a garden room cost?", href: "/guides/garden-room-cost/" },
      { label: "Garden office design ideas", href: "/guides/garden-office-ideas/" },
    ],
  },
  "garage-conversions": {
    intro: "We haven't published a garage conversion case study yet. Once one's complete, this page will show the real before-and-after &mdash; including the insulation and damp-proofing work that doesn't show in a finished photo.",
    whatToExpect: [
      "Before photos of the garage as it was used previously",
      "The insulation, damp-proofing and flooring work carried out",
      "The finished room, and what it's used for",
    ],
    guides: [
      { label: "Garage conversion cost", href: "/guides/garage-conversion-cost/" },
      { label: "Garage to bedroom conversions", href: "/garage-conversions/garage-to-bedroom/" },
    ],
  },
  "outdoor-kitchens": {
    intro: "We haven't finished an outdoor kitchen build we can publish yet. When we have, this page will show the real worktop, storage and cover choices for that garden, not a supplier's stock photo.",
    whatToExpect: [
      "Real photos of the finished build in its garden setting",
      "The worktop, storage and BBQ/appliance choices used",
      "Whether it's covered, and how it's held up through a UK winter",
    ],
    guides: [
      { label: "Outdoor kitchen ideas for UK gardens", href: "/guides/outdoor-kitchen-ideas/" },
      { label: "Covered outdoor kitchens", href: "/outdoor-kitchens/covered-outdoor-kitchens/" },
    ],
  },
};

function projectCard(p) {
  const img = p.images.after[0] || p.images.during[0] || p.images.before[0];
  const picture = img
    ? `<picture><source srcset="${img.src}.webp" type="image/webp"><img src="${img.src}.jpg" width="600" height="400" alt="${img.alt}" loading="lazy"></picture>`
    : "";
  return `          <article class="card case-study">
            ${picture}
            <h3><a href="/projects/${p.category}/${p.slug}/">${p.title}</a></h3>
            <p><strong>Location:</strong> ${p.location}</p>
            <p><strong>Scope:</strong> ${p.workCompleted}</p>
          </article>`;
}

function writeCategoryPage(categorySlug) {
  const category = CATEGORIES[categorySlug];
  const categoryProjects = projects.filter((p) => p.category === categorySlug);
  const canonical = `${SITE}/projects/${categorySlug}/`;

  let mainSection;
  if (categoryProjects.length > 0) {
    mainSection = `    <section class="section">
      <div class="container">
        <p class="kicker">Completed projects</p>
        <h2 class="section-title">${category.label} we've completed.</h2>
        <div class="cards">
${categoryProjects.map(projectCard).join("\n")}
        </div>
      </div>
    </section>
`;
  } else {
    const copy = EMPTY_CATEGORY_COPY[categorySlug];
    mainSection = `    <section class="section">
      <div class="container">
        <p class="kicker">Project library</p>
        <h2 class="section-title">${category.label} case studies.</h2>
        <p>${copy.intro}</p>
        <h3>What a published case study here will include</h3>
        <ul>
          ${copy.whatToExpect.map((i) => `<li>${i}</li>`).join("\n          ")}
        </ul>
        <p>In the meantime, see genuine completed kitchen, bathroom and refurbishment work on our <a href="/work.html">recent work page</a>, or read: ${copy.guides.map((g) => `<a href="${g.href}">${g.label}</a>`).join(", ")}.</p>
      </div>
    </section>
`;
  }

  const body = `${heroTextOnly({
    kicker: "Projects",
    h1: `${category.label} projects.`,
    intro: categoryProjects.length > 0
      ? `Real ${category.label.toLowerCase()} projects we've completed in Hull and East Yorkshire.`
      : `We only publish real completed projects here &mdash; no stock photos or invented case studies.`,
    secondaryCta: { label: `About our ${category.label.toLowerCase()} service`, href: category.serviceHref },
  })}
${mainSection}
    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Get in touch</p>
          <h2 class="section-title">Thinking about a similar project?</h2>
          <p>Send us a few details about your property and what you're looking for, and we'll arrange a site visit.</p>
        </div>
        ${quoteCallout({
          heading: "Local renovation specialists",
          body: "Email <strong>info@eastyorkshirerenovation.com</strong> for a fast response.",
        })}
      </div>
    </section>
`;

  mkdirSync(`projects/${categorySlug}`, { recursive: true });
  writeFileSync(
    `projects/${categorySlug}/index.html`,
    page({
      title: `${category.label} Projects | East Yorkshire Renovations`,
      description: `${category.label} projects completed by East Yorkshire Renovations in Hull and East Yorkshire.`,
      canonical,
      body,
      breadcrumbs: [
        { name: "Home", item: `${SITE}/` },
        { name: "Projects", item: `${SITE}/projects/` },
        { name: category.label },
      ],
    })
  );
  console.log(`wrote projects/${categorySlug}/index.html`);
}

function writeHub() {
  const priorityCards = PRIORITY_CATEGORIES.map((slug) => {
    const c = CATEGORIES[slug];
    const count = projects.filter((p) => p.category === slug).length;
    return `          <article class="card">
            <h3><a href="/projects/${slug}/">${c.label}</a></h3>
            <p>${count > 0 ? `${count} completed project${count > 1 ? "s" : ""} published so far.` : "Library being built &mdash; real projects published as they're completed."}</p>
          </article>`;
  }).join("\n");

  const recentCards = projects.slice(0, 4).map(projectCard).join("\n");

  const body = `${heroTextOnly({
    kicker: "Projects",
    h1: "Project case studies from Hull &amp; East Yorkshire.",
    intro: "Real completed projects, with real photos &mdash; orangeries, conservatory transformations, garden rooms, garage conversions and outdoor kitchens, plus kitchen, bathroom and full renovation work.",
    secondaryCta: { label: "View Our Recent Work", href: "/work.html" },
  })}
    <section class="section">
      <div class="container">
        <p class="kicker">Specialist projects</p>
        <h2 class="section-title">Browse by project type.</h2>
        <div class="cards">
${priorityCards}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Recently completed</p>
        <h2 class="section-title">Kitchen, bathroom &amp; renovation projects.</h2>
        <div class="cards">
${recentCards}
        </div>
        <p>See all our <a href="/work.html">recent work</a>, or browse by service: <a href="/projects/kitchens/">kitchens</a>, <a href="/projects/bathrooms/">bathrooms</a>, <a href="/projects/full-house-renovations/">full house renovations</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Get in touch</p>
          <h2 class="section-title">Ready to start your own project?</h2>
          <p>Send us a few details about your property and what you're looking for, and we'll arrange a site visit to talk through scope, timelines and pricing.</p>
        </div>
        ${quoteCallout({
          heading: "Local renovation specialists",
          body: "Email <strong>info@eastyorkshirerenovation.com</strong> for a fast response.",
        })}
      </div>
    </section>
`;

  mkdirSync("projects", { recursive: true });
  writeFileSync(
    "projects/index.html",
    page({
      title: "Renovation Projects & Case Studies | East Yorkshire Renovations",
      description: "Real completed renovation projects in Hull and East Yorkshire, including orangeries, conservatory transformations, garden rooms, garage conversions, outdoor kitchens, kitchens and bathrooms.",
      canonical: `${SITE}/projects/`,
      body,
      breadcrumbs: [
        { name: "Home", item: `${SITE}/` },
        { name: "Projects" },
      ],
    })
  );
  console.log("wrote projects/index.html");
}

for (const p of projects) writeProjectPage(p);
for (const slug of [...PRIORITY_CATEGORIES, ...OTHER_CATEGORIES]) writeCategoryPage(slug);
writeHub();
