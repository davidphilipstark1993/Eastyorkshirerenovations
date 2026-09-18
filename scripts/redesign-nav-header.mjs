import { readFileSync, writeFileSync, readdirSync } from "fs";

const OLD = `      <div class="brand"><img src="/assets/img/logo-eyr.jpg" width="88" height="88" alt="East Yorkshire Renovations logo"><span>East Yorkshire Renovations</span></div>
      <button class="nav-toggle" aria-expanded="false" aria-controls="primary-navigation">Menu</button>
      <nav id="primary-navigation" class="nav-links" aria-label="Primary">
        <a href="/">Home</a>
        <div class="nav-dropdown">
          <a href="/services.html" class="nav-dropdown-toggle">Services</a>
          <div class="nav-dropdown-menu">
            <a href="/kitchen-installs.html">Kitchen Installs</a>
            <a href="/bathroom-installs.html">Bathroom Installs</a>
            <a href="/full-house-renovations.html">Full House Renovations</a>
            <a href="/orangeries/">Orangeries</a>
            <a href="/conservatory-transformations/">Conservatory Transformations</a>
            <a href="/garden-rooms/">Garden Rooms</a>
            <a href="/garage-conversions/">Garage Conversions</a>
            <a href="/outdoor-kitchens/">Outdoor Kitchens</a>
            <a href="/water-treatment.html">Water Treatment</a>
            <a href="/services.html">View all services</a>
          </div>
        </div>
        <a href="/work.html">Recent Work</a>
        <a href="/areas.html">Areas We Cover</a>
        <a href="/projects/">Projects</a>
        <a href="/guides/">Guides</a>
        <a href="/about.html">About</a>
        <a href="/blog/">Blog</a>
        <a href="/contact.html#quote-form" class="nav-cta">Get a Quote</a>
      </nav>`;

const NEW = `      <div class="brand"><img src="/assets/img/logo-eyr.jpg" width="88" height="88" alt="East Yorkshire Renovations logo"><span>East Yorkshire Renovations</span></div>
      <div class="navbar-actions">
        <a href="/contact.html#quote-form" class="nav-cta">Get a Quote</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="primary-navigation"><span class="nav-toggle-icon"></span>Menu</button>
      </div>
      <nav id="primary-navigation" class="nav-links" aria-label="Primary">
        <a href="/">Home</a>
        <div class="nav-dropdown">
          <a href="/services.html" class="nav-dropdown-toggle">Services</a>
          <div class="nav-dropdown-menu">
            <a href="/kitchen-installs.html">Kitchen Installs</a>
            <a href="/bathroom-installs.html">Bathroom Installs</a>
            <a href="/full-house-renovations.html">Full House Renovations</a>
            <a href="/orangeries/">Orangeries</a>
            <a href="/conservatory-transformations/">Conservatory Transformations</a>
            <a href="/garden-rooms/">Garden Rooms</a>
            <a href="/garage-conversions/">Garage Conversions</a>
            <a href="/outdoor-kitchens/">Outdoor Kitchens</a>
            <a href="/water-treatment.html">Water Treatment</a>
            <a href="/services.html">View all services</a>
          </div>
        </div>
        <a href="/work.html">Recent Work</a>
        <a href="/areas.html">Areas We Cover</a>
        <a href="/projects/">Projects</a>
        <a href="/guides/">Guides</a>
        <a href="/about.html">About</a>
        <a href="/blog/">Blog</a>
      </nav>`;

const rootHtml = readdirSync(".").filter((f) => f.endsWith(".html"));
const blogHtml = readdirSync("blog").filter((f) => f.endsWith(".html")).map((f) => `blog/${f}`);
const files = [...rootHtml, ...blogHtml];

let changed = 0;
const unchanged = [];
for (const f of files) {
  const html = readFileSync(f, "utf8");
  if (!html.includes(OLD)) {
    if (!html.includes("navbar-actions")) unchanged.push(f);
    continue;
  }
  writeFileSync(f, html.replace(OLD, NEW));
  changed++;
}

console.log(`Updated ${changed}/${files.length} files.`);
if (unchanged.length) {
  console.log("Files where the expected old header block was NOT found (skipped, needs manual check):");
  unchanged.forEach((f) => console.log(" -", f));
}
