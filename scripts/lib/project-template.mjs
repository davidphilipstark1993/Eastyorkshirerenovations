import { mkdirSync, writeFileSync } from "fs";
import { page, heroTextOnly, faqList, quoteCallout } from "./layout.mjs";
import { SITE } from "./constants.mjs";
import { CATEGORIES } from "../data/projects.mjs";

function pictureTag({ src, alt }, { width = 600, height = 400, loading = "lazy" } = {}) {
  return `<picture><source srcset="${src}.webp" type="image/webp"><img src="${src}.jpg" width="${width}" height="${height}" alt="${alt}" loading="${loading}"></picture>`;
}

function imageStage(label, images) {
  if (!images || images.length === 0) return "";
  return `        <p class="kicker">${label}</p>
        <div class="gallery">
          ${images.map((img) => pictureTag(img)).join("\n          ")}
        </div>
`;
}

export function projectPage(project) {
  const category = CATEGORIES[project.category];
  if (!category) throw new Error(`Unknown project category: ${project.category}`);

  const canonical = `${SITE}/projects/${project.category}/${project.slug}/`;
  const heroImage = project.images.after[0] || project.images.during[0] || project.images.before[0] || null;

  const factsRows = [
    ["Location", project.locationLink ? `<a href="${project.locationLink.href}">${project.locationLink.label}</a>` : project.location],
    ["Service", `<a href="${project.service.href}">${project.service.label}</a>`],
    project.cost ? ["Cost", project.cost] : null,
    project.timescale ? ["Timescale", project.timescale] : null,
  ].filter(Boolean);

  const body = `${heroTextOnly({
    kicker: category.label,
    h1: `${project.title}.`,
    intro: project.summary,
    secondaryCta: { label: `More ${category.label} projects`, href: `/projects/${project.category}/` },
  })}
    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">The brief</p>
          <h2 class="section-title">What the customer needed.</h2>
          <p>${project.brief}</p>
        </div>
        <div class="callout">
          <h3>Project facts</h3>
          ${factsRows.map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`).join("\n          ")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Work carried out</p>
        <h2 class="section-title">What we did.</h2>
        <p>${project.workCompleted}</p>
        ${project.materials && project.materials.length
          ? `<h3>Materials &amp; approach</h3>
        <ul>
          ${project.materials.map((m) => `<li>${m}</li>`).join("\n          ")}
        </ul>`
          : ""}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">The outcome</p>
        <h2 class="section-title">The result.</h2>
        <p>${project.outcome}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Photos</p>
        <h2 class="section-title">Before, during and after.</h2>
${imageStage("Before", project.images.before)}${imageStage("During", project.images.during)}${imageStage("After", project.images.after)}      </div>
    </section>
${project.faqs && project.faqs.length
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
          <p class="kicker">Considering something similar?</p>
          <h2 class="section-title">Talk to us about your project.</h2>
          <p>See more <a href="/projects/${project.category}/">${category.label.toLowerCase()} projects</a>, read about our <a href="${category.serviceHref}">${category.label.toLowerCase()} service</a>, or get in touch to talk through your own.</p>
        </div>
        ${quoteCallout({
          heading: "Ready to talk through your project?",
          body: "Email <strong>info@eastyorkshirerenovation.com</strong> to arrange a site visit.",
        })}
      </div>
    </section>
`;

  return page({
    title: `${project.title} | ${category.label} | East Yorkshire Renovations`,
    description: `${project.summary} A ${category.label.toLowerCase()} project completed by East Yorkshire Renovations${project.locationLink ? ` in ${project.location}` : ""}.`,
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
