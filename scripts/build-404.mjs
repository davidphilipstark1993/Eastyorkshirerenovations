// Builds /404.html, which Vercel serves (with a 404 status) for any address
// that doesn't exist. Run: node scripts/build-404.mjs
import { writeFileSync } from "fs";
import { page } from "./lib/layout.mjs";
import { phoneLink } from "./lib/site.mjs";
import { SITE } from "./lib/constants.mjs";

const links = [
  ["Damp proofing and damp surveys", "/damp-proofing/", "Surveys, rising damp, penetrating damp, condensation, mould and cellar tanking."],
  ["Book a £119 damp survey", "/damp-proofing/book-a-survey/", "Find out what is really causing your damp."],
  ["Renovation services", "/services.html", "Kitchens, bathrooms, full renovations, garage conversions and more."],
  ["Our work", "/work.html", "Photos and case studies from recent jobs."],
  ["Guides and advice", "/guides/", "Answers on damp, renovations and home improvements."],
  ["Contact us", "/contact.html", "Get a quote or ask a question."],
];

const body = `    <section class="hero">
      <div class="container">
        <p class="kicker">Page not found</p>
        <h1>Sorry, we can&rsquo;t find that page.</h1>
        <p>It may have moved, or the link may be out of date. Try one of these, or call ${phoneLink()}.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="cards">
${links.map(([label, href, text]) => `          <article class="card">
            <h2 class="card-title"><a href="${href}">${label}</a></h2>
            <p>${text}</p>
          </article>`).join("\n")}
        </div>
      </div>
    </section>
`;

const html = page({
  title: "Page Not Found | East Yorkshire Renovations",
  description: "The page you were looking for could not be found.",
  canonical: `${SITE}/404.html`,
  body,
})
  // Not a real page: keep it out of search results.
  .replace('<link rel="canonical" href="https://www.eastyorkshirerenovation.com/404.html">', '<meta name="robots" content="noindex">\n  <link rel="canonical" href="https://www.eastyorkshirerenovation.com/404.html">');

writeFileSync("404.html", html);
console.log("wrote 404.html");
