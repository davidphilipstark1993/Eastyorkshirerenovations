import { mkdirSync, writeFileSync } from "fs";
import { page, heroTextOnly, faqList, quoteCallout } from "./layout.mjs";
import { SITE } from "./constants.mjs";
import { CATEGORIES } from "../data/projects.mjs";

function pictureTag({ src, alt }, { width = 600, height = 400, loading = "lazy" } = {}) {
  return `<picture><source srcset="${src}.webp" type="image/webp"><img src="${src}.jpg" width="${width}" height="${height}" alt="${alt}" loading="${loading}"></picture>`;
}


// A project page, in this order: problem, what we found, work carried
// out, result, location/duration/price band, photos, customer quote,
// related services. Any detail that hasn't been supplied is left out of the
// page and marked with a TODO in the source - nothing is invented.
export function projectPage(project) {
  const category = CATEGORIES[project.category];
  if (!category) throw new Error(`Unknown project category: ${project.category}`);

  const canonical = `${SITE}/projects/${project.category}/${project.slug}/`;
  const heroImage = project.images.after[0] || project.images.during[0] || project.images.before[0] || null;
  const todo = (what) => `<!-- TODO(owner): ${what} for this project, if known - add it in scripts/data/projects.mjs -->`;
  const block = (kicker, h2, html) => `    <section class="section">
      <div class="container">
        <p class="kicker">${kicker}</p>
        <h2 class="section-title">${h2}</h2>
        ${html}
      </div>
    </section>
`;

  const facts = [
    ["Location", project.locationLink ? `<a href="${project.locationLink.href}">${project.locationLink.label}</a>` : project.location],
    project.duration ? ["Time on site", project.duration] : null,
    project.priceBand ? ["Price band", project.priceBand] : null,
    ["Service", `<a href="${project.service.href}">${project.service.label}</a>`],
  ].filter(Boolean);

  const body = `${heroTextOnly({
    kicker: category.label,
    h1: `${project.heading}.`,
    intro: project.summary,
    secondaryCta: { label: `More ${category.label.toLowerCase()} projects`, href: `/projects/${project.category}/` },
    image: heroImage ? { src: `${heroImage.src}.jpg`, alt: heroImage.alt } : undefined,
  })}
${project.problem ? block("The problem", "What the customer needed.", `<p>${project.problem}</p>`) : `    ${todo("the problem the customer came to us with")}\n`}${project.found ? block("What we found", "What we found on the first visit.", `<p>${project.found}</p>`) : `    ${todo("what we found on the first visit")}\n`}
    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Work carried out</p>
          <h2 class="section-title">What we did.</h2>
          <p>${project.workCompleted}</p>
          ${project.materials && project.materials.length
            ? `<ul>
            ${project.materials.map((m) => `<li>${m}</li>`).join("\n            ")}
          </ul>`
            : ""}
          <h3>The result</h3>
          <p>${project.outcome}</p>
        </div>
        <div class="callout">
          <h3>Project details</h3>
          ${facts.map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`).join("\n          ")}
          ${project.duration ? "" : todo("time on site")}
          ${project.priceBand ? "" : todo("a price band")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Photos</p>
        <h2 class="section-title">${project.images.before.length ? "Before and after." : "The finished job."}</h2>
        <div class="gallery gallery-large">
${[["Before", project.images.before], ["During", project.images.during], ["After", project.images.after]]
  .flatMap(([stage, imgs]) => imgs.map((img) => `          <figure class="photo-slot">
            ${pictureTag(img)}
            <figcaption>${stage}</figcaption>
          </figure>`))
  .join("\n")}
        </div>
      </div>
    </section>
${project.quote ? `
    <section class="section">
      <div class="container">
        <figure class="review card project-quote">
          <blockquote>${project.quote.text}</blockquote>
          <figcaption>${project.quote.name}, ${project.location}</figcaption>
        </figure>
      </div>
    </section>
` : `    ${todo("a customer quote (with their permission)")}\n`}${project.faqs && project.faqs.length
  ? `
    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">FAQs.</h2>
        ${faqList(project.faqs)}
      </div>
    </section>
`
  : ""}
    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Related services</p>
          <h2 class="section-title">Considering something similar?</h2>
          <ul>
            ${project.related.map((r) => `<li><a href="${r.href}">${r.label}</a></li>`).join("\n            ")}
            <li><a href="/projects/${project.category}/">More ${category.label.toLowerCase()} projects</a></li>
          </ul>
        </div>
        ${quoteCallout({
          heading: "Talk to us about your project",
          body: `Call <a href="tel:+447498951487" data-contact="phone">07498 951487</a> or send us the details.`,
          ctaLabel: "Get a quote",
        })}
      </div>
    </section>
`;

  return page({
    title: project.seoTitle,
    description: `${project.summary} ${category.label === "Full House Renovations" ? "A renovation" : `A ${category.label.toLowerCase().replace(/s$/, "")} project`} by East Yorkshire Renovations${project.locationLink ? ` in ${project.location}` : ""}.`,
    canonical,
    ogImage: heroImage ? `${heroImage.src}.jpg` : undefined,
    body,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Projects", item: `${SITE}/projects/` },
      { name: category.label, item: `${SITE}/projects/${project.category}/` },
      { name: project.title },
    ],
  });
}

export function writeProjectPage(project) {
  const dir = `projects/${project.category}/${project.slug}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, projectPage(project));
  console.log(`wrote ${dir}/index.html`);
}
