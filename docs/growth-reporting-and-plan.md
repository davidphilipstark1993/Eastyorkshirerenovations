# Growth reporting spec and 30-day plan (written 2026-10-17)

## What the site now records
Every enquiry email (general, damp, water) ends with: Source, Medium, Campaign,
Landing page, Referrer. Taken from utm_* parameters (or fbclid/gclid), kept for
the visit only. Water enquiries have their own subject line and GA4/Meta label
(`form_type`: general / damp / water). Phone, WhatsApp and email clicks are
tracked after cookie consent. Reply-to is the customer, so replying works.

Use UTM links on every ad: `?utm_source=facebook&utm_medium=paid&utm_campaign=damp-survey-oct`.

## Lead log (one spreadsheet row per enquiry, filled by hand from the email)
Date | Service line (damp / general / water) | Source | Campaign | Landing page |
Qualified? (Y/N + reason) | Survey booked (date) | Quote sent (£) | Accepted (£) |
Job completed (date) | Revenue invoiced | Direct costs | Gross margin.

## Metrics, with formulas
- Qualified lead rate = qualified / all enquiries
- Survey booking rate = surveys booked / qualified
- Quote acceptance rate = accepted / quotes sent
- Cost per qualified lead = ad spend / qualified leads (per campaign)
- Revenue per £1 ad spend = invoiced revenue from that campaign / spend
- Gross margin % by service line = (revenue - direct costs) / revenue

## Five monthly KPIs
1. Qualified enquiries by service line (damp / general / water)
2. Cost per qualified lead by channel (Meta, organic, Google profile)
3. Survey booking rate and quote acceptance rate
4. Revenue and gross margin per service line
5. Phone/WhatsApp/email contacts vs. form enquiries (shows which route customers prefer; calls are not in the forms)

Phone calls from ads cannot be attributed to a campaign by the site. Ask every
caller "how did you hear about us?" and record it in the lead log.

## 30-day plan
Week 1: Add real reviews to REVIEWS in scripts/data/business.mjs (ask last 10 customers to use the Google review link). Add owner photo. Add 3-5 real damp job photos to replace AI illustrations. Confirm SENDGRID_API_KEY, TO_EMAIL, FROM_EMAIL are set in Vercel and send one test enquiry of each type.
Week 2: Verify the site in Google Search Console, submit the sitemap, check index coverage and queries. Check GA4 events (generate_lead, contact) in DebugView.
Week 3: Run one small Meta campaign to /damp-proofing/book-a-survey/ with UTM links; judge by cost per qualified lead, not clicks.
Week 4: Review lead log against the KPIs; keep spending only on what produced booked surveys. Decide whether to continue the water-treatment test (target: agreed number of qualified enquiries before ordering stock or committing to a supplier).
