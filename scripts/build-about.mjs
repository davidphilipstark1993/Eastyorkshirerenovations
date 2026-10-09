// Builds /about.html from the owner facts in scripts/data/business.mjs.
// Run: node scripts/build-about.mjs
//
// Every personal or credential statement on this page comes from that file.
// While a fact is blank, its sentence is left out and a TODO comment marks
// where it will go - nothing is filled in with a guess.
import { writeFileSync, existsSync } from "fs";
import { page } from "./lib/layout.mjs";
import { wrap, reviews, credentialLines, phoneLink } from "./lib/site.mjs";
import { SITE } from "./lib/constants.mjs";
import { OWNER, CREDENTIALS, PUBLIC_LIABILITY, COMPANY } from "./data/business.mjs";

const todo = (what) => `<!-- TODO(owner): ${what} - set it in scripts/data/business.mjs and re-run node scripts/build-about.mjs -->`;

// Who runs it: only once the owner has given a name.
const ownerIntro = OWNER.name
  ? `<p>I&rsquo;m ${OWNER.name}${OWNER.role ? `, ${OWNER.role} of East Yorkshire Renovations` : ""}.${OWNER.experience ? ` ${OWNER.experience}` : ""}</p>`
  : todo("owner name, role and experience (first person, e.g. \"I'm ..., and I've worked in ... for ... years\")");

const surveyor = OWNER.surveyor
  ? `<p>${OWNER.surveyor}</p>`
  : todo("who carries out damp surveys, and their experience");

const ownerPhoto = OWNER.photo && existsSync(OWNER.photo.replace(/^\//, ""))
  ? `<div>
          <picture><img src="${OWNER.photo}" width="900" height="1200" alt="${OWNER.name || "The owner"} of East Yorkshire Renovations" loading="lazy"></picture>
        </div>`
  : todo("a real photo of the owner or team - add the file and set OWNER.photo");

const credentials = credentialLines();
const credentialsSection = credentials.length
  ? `
    <section class="section">
      <div class="container">
        <p class="kicker">Insurance &amp; credentials</p>
        <h2 class="section-title">Insurance, qualifications and company details.</h2>
        <ul>
${credentials.map((c) => `          <li>${c}</li>`).join("\n")}
        </ul>
      </div>
    </section>
`
  : `
    ${todo("public liability cover, qualifications/memberships actually held, legal name, company number and year established - a credentials section appears here once any are set")}
`;

const body = `    <section class="hero">
      <div class="container hero-grid">
        <div>
          <p class="kicker">About us</p>
          <h1>A local renovation and damp proofing firm, based in Hessle.</h1>
          <p>We renovate homes and sort out damp problems across Hull, the East Riding and North Lincolnshire. We run each job from the first visit to the final clean, and we do the plastering, making good and decorating ourselves.</p>
          <p class="contact-phone">Call ${phoneLink()}</p>
          <div class="button-group">
            <a class="btn primary" href="/contact.html#quote-form">Get a quote</a>
            <a class="btn secondary" href="/damp-proofing/book-a-survey/">Book a damp survey</a>
          </div>
        </div>
        <div>
          <picture>
            <source srcset="/assets/img/project/bathroom-finished-howden.webp" type="image/webp">
            <img src="/assets/img/project/bathroom-finished-howden.jpg" width="1368" height="1824" alt="Bathroom we renovated in Howden, East Yorkshire" loading="eager" fetchpriority="high">
          </picture>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Who we are</p>
          <h2 class="section-title">Who runs East Yorkshire Renovations.</h2>
          ${ownerIntro}
          <p>We&rsquo;re based on Station Road in Hessle. We work across Hull, Hessle, Cottingham, Beverley and the villages west of the city, and our damp work reaches further out into the East Riding and across the Humber into North Lincolnshire.</p>
          <p>Our work falls into three parts: damp surveys and damp proofing; kitchens, bathrooms and full renovations; and bigger home improvements such as garage conversions, garden rooms and conservatory transformations.</p>
        </div>
        ${ownerPhoto}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">How we work</p>
        <h2 class="section-title">What you can expect from us.</h2>
        <div class="cards">
          <article class="card">
            <h3>We find the cause before we quote</h3>
            <p>On damp work especially, we diagnose first. A damp survey costs &pound;119, and that is deducted from the treatment if you go ahead with our quote. If the answer is a blocked gutter or better ventilation, that&rsquo;s what we&rsquo;ll tell you.</p>
          </article>
          <article class="card">
            <h3>One firm for the whole job</h3>
            <p>We do the plastering, making good and decorating ourselves, so you aren&rsquo;t left with bare walls waiting for another trade once the main work is done.</p>
          </article>
          <article class="card">
            <h3>Everything in writing</h3>
            <p>You get a written quote before work starts. Damp proofing work is backed by written guarantees of up to 30 years, depending on the treatment &mdash; <a href="/damp-proofing/#guarantee">see the guarantee terms</a>.</p>
          </article>
          <article class="card">
            <h3>One point of contact</h3>
            <p>One point of contact through the whole job, from the first visit to handover.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Damp surveys</p>
        <h2 class="section-title">Who carries out our damp surveys.</h2>
        ${surveyor}
        <p>Every survey covers moisture readings, the pattern of the damp, an outside inspection and a check on ventilation, followed by a written report. <a href="/damp-proofing/damp-surveys/">What a damp survey includes</a>.</p>
      </div>
    </section>
${credentialsSection}
${wrap("reviews", reviews())}

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Areas</p>
          <h2 class="section-title">Where we work.</h2>
          <p>Hull, Hessle, Beverley, Cottingham, Anlaby, Willerby, Kirk Ella, Swanland, North Ferriby, Brough and South Cave, with damp surveys and treatment further out to Bridlington, Driffield and Goole, and in North Lincolnshire to Barton-upon-Humber, Brigg, Scunthorpe and Grimsby.</p>
          <p><a href="/areas.html">See all the areas we cover</a></p>
        </div>
        <div class="callout">
          <h3>Talk to us</h3>
          <p>Call ${phoneLink()} or send us the details of your project.</p>
          <p><a class="btn" href="/contact.html#quote-form">Get a quote</a></p>
        </div>
      </div>
    </section>
`;

writeFileSync(
  "about.html",
  page({
    title: "About Us | East Yorkshire Renovations, Hessle",
    description: "East Yorkshire Renovations is a Hessle-based renovation and damp proofing firm covering Hull, the East Riding and North Lincolnshire.",
    canonical: `${SITE}/about.html`,
    ogImage: "/assets/img/og/about.jpg",
    body,
    breadcrumbs: [{ name: "Home", item: `${SITE}/` }, { name: "About" }],
  })
);
console.log("wrote about.html");
