// Rebuilds the generated pages and shared blocks, in the right order.
//
//   node scripts/build-all.mjs
//
// Run this after changing scripts/data/business.mjs (owner facts, reviews),
// the damp or guide content, project data, or the shared header/footer in
// scripts/lib/site.mjs. Then commit the result.
//
// Older one-off generators (build-orangeries.mjs, build-garden-rooms.mjs and
// so on) are deliberately not run: those pages have since been edited
// directly, and sync-layout.mjs keeps their shared blocks up to date.
import { execFileSync } from "child_process";

const steps = [
  "build-damp-proofing.mjs", // damp hub, service pages, town pages, booking page
  "build-guides.mjs", // guides, guides index, vercel.json redirects
  "build-projects.mjs", // project pages and project category pages
  "build-about.mjs",
  "build-privacy.mjs",
  "build-404.mjs",
  "sync-layout.mjs", // shared head/header/footer/JSON-LD on every page
  "fix-image-sizes.mjs", // true width/height on every <img>
  "set-share-images.mjs", // og:image on pages without a generator
  "build-sitemap.mjs", // last, so lastmod reflects everything above
];

for (const s of steps) {
  process.stdout.write(`${s}: `);
  const out = execFileSync("node", [`scripts/${s}`], { encoding: "utf8" }).trim().split("\n");
  console.log(out[out.length - 1]);
}
execFileSync("node", ["scripts/sync-layout.mjs", "--check"], { stdio: "inherit" });
