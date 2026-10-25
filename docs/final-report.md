# East Yorkshire Renovation: growth review, final report (2026-10-25)

## 1. Audit findings
**Confirmed faults (all fixed)**
- Damp and general enquiry forms captured no campaign, landing-page or source data.
- No spam protection or input limits on any of the three forms.
- Email (`mailto:`) clicks were not tracked.
- "Buying a house with damp" guide had a meta/OG/Twitter description cut off by an unescaped quote.
- Water page: "Warranty", "Priority commissioning" and "Enhanced aftercare" listed with no terms behind them; the contact-method dropdown offered only Email.
- Kitchen, bathroom, plastering, decorating and full-renovation pages had no cost answer or FAQ; joinery had a visible FAQ without schema.

**Checked and clean:** no broken internal links, duplicate titles/H1s/descriptions, invalid JSON-LD, canonical errors or sitemap mismatches across 100 pages.

**Recommendations / not changed**
- Town pages are about 260 words and templated. Expand only with real local detail and photos.
- Electrical page claims "testing and certification" and compliance with wiring regulations while the business data lists no qualifications. Confirm or soften.
- Damp pages and the water page use AI illustrations (clearly labelled). Replace with real job photos.
- No customer reviews or owner photo yet (`scripts/data/business.mjs`).
- Heavy images (56 over 250KB); recompressing saved under 4%, so not worth doing.

**Could not be verified:** indexing, rankings, traffic (no Search Console/analytics access); live email delivery; live GA4/Meta events; mobile layouts.

## 2. Highest-impact commercial opportunities
See `commercial-strategy.md`. In order: damp surveys leading to treatment; landlord/agent damp and mould reports; pre-purchase surveys; bathrooms/kitchens. Water treatment stays a small demand test. Ranking is reasoned, not profit-based; costs and margins are needed.

## 3. Files changed (PRs #4 to #7 and this one)
- `api/_lib/form.js` (new), `api/contact.js`, `api/damp-enquiry.js`, `api/water-assessment.js`: sanitising, caps, honeypot, attribution lines in emails.
- `assets/js/attribution.js` (new), `scripts/lib/site.mjs`: capture UTM, landing page, referrer; loaded on every page (hence ~100 HTML files touched).
- `assets/js/consent.js`: email-click event.
- `assets/css/styles.css`: honeypot hiding.
- `contact.html`, `scripts/build-damp-proofing.mjs` (and generated damp book-a-survey page), `water-treatment.html`: honeypot field.
- `scripts/data/damp-guides.mjs` and the generated guide: description fix.
- `water-treatment.html`, `assets/js/water-treatment-data.js`: claims qualified, contact options added.
- `kitchen-installs.html`, `bathroom-installs.html`, `plastering.html`, `decorating.html`, `full-house-renovations.html`, `joinery.html`: cost answer, FAQ and FAQ schema.
- `sitemap.xml`: lastmod only for pages with content changes.
- `.gitignore`: node_modules.
- `docs/growth-reporting-and-plan.md`, `docs/commercial-strategy.md`, `docs/final-report.md` (new).

## 4. SEO and AEO changes
Answer-first "In short" blocks, visible FAQs and matching FAQPage JSON-LD on six service pages, linked to the cost and planning guides. Fixed the broken description. No prices stated, no AI-specific files added.

## 5. Conversion changes
Phone/WhatsApp contact choices on the water form; email-click tracking; honest package wording; every enquiry email now says where the customer came from; spam trap.

## 6. Tests and results
- 16 of 16 API handler tests passed (SendGrid stubbed): valid submits, honeypot, header injection, bad email, caps, prototype-key service values, wrong method.
- Browser check on a local server: UTM from a landing page carried to the damp form's hidden fields; honeypot off-screen.
- `node scripts/build-all.mjs`: clean, 0 pages out of date.
- JSON-LD parses and internal links resolve on all changed pages.
- No lint or test suite exists in the repo. Cookie banner, live analytics events, live email and mobile layouts were not tested.

## 7. Needs the owner
- Send one test enquiry per form on the live site and confirm the emails arrive with Source/Landing page lines.
- Real reviews, owner photo, real damp-job photos.
- Confirm or soften the electrical certification claim; confirm water-treatment supplier, prices, warranty and aftercare terms.
- Search Console verification and GA4 DebugView check (Google login).
- Job costs and margins per service to turn the strategy into a profit ranking.

## 8. 30-day plan and 9. KPIs
In `growth-reporting-and-plan.md`.
