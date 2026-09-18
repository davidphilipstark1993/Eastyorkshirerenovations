import { readFileSync, writeFileSync } from "fs";

const OLD = `        <div class="nav-dropdown">
          <a href="/services.html" class="nav-dropdown-toggle">Services</a>
          <div class="nav-dropdown-menu">
            <a href="/services.html">Renovation Services</a>
            <a href="/water-treatment.html">Water Treatment</a>
          </div>
        </div>`;

const NEW = `        <div class="nav-dropdown">
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
        </div>`;

const files = [
  "index.html", "decorating.html", "cottingham.html", "water-treatment.html", "about.html",
  "full-house-renovations.html", "contact.html", "areas.html", "anlaby.html", "work.html",
  "electrical.html", "plastering.html", "hessle.html", "beverley.html", "bathroom-installs.html",
  "services.html", "hull.html", "joinery.html", "kitchen-installs.html", "blog/index.html",
  "blog/full-house-renovation-planning-guide.html", "blog/bathroom-renovation-cost-east-yorkshire.html",
  "blog/kitchen-renovation-cost-hull.html",
];

let changed = 0, unchanged = [];
for (const f of files) {
  const html = readFileSync(f, "utf8");
  if (!html.includes(OLD)) {
    unchanged.push(f);
    continue;
  }
  writeFileSync(f, html.replace(OLD, NEW));
  changed++;
}

console.log(`Updated ${changed}/${files.length} files.`);
if (unchanged.length) {
  console.log("Files where the expected old nav block was NOT found (skipped):");
  unchanged.forEach((f) => console.log(" -", f));
}
