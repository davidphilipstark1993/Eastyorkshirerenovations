# Water Treatment — Lead Tracking Sheet (Definition)

This defines what to record for every lead. It's deliberately just a definition, not a built
tool - keep it in a simple spreadsheet (Google Sheets/Excel) for now. Do not build a database or
CRM for this - see "Do not overbuild" in the brief for this task.

Every lead email sent by `api/water-assessment.js` already contains everything needed to fill
most of these columns directly from the email - see the "NEW WATER TREATMENT ENQUIRY" format
described in the final report.

## Columns to record, per lead

| Column | Source | Notes |
|---|---|---|
| Date | When the lead email arrived | |
| Name | From the lead email | |
| Postcode | From the lead email | |
| Source | `Marketing source` line in the email | Blank/"Direct / organic" = not from a tracked campaign |
| Medium | `Medium` line in the email | e.g. cpc, organic, referral |
| Campaign | `Campaign` line in the email | e.g. water_softener_hull |
| Reason | `Interested in` line in the email | What they said their main interest was |
| Package interest | `Package interest` line in the email | Blank = they used a general CTA, not a specific package |
| Property type | `Property` line in the email | |
| Household size | `Household` line in the email | |
| Bathrooms | `Bathrooms` line in the email | May be blank - optional field |
| Assessment booked? | Manual - fill in after follow-up | Yes/No/Pending |
| Quote given? | Manual | Yes/No |
| Quoted amount | Manual | The actual £ figure quoted, once real |
| Outcome | Manual | Won / Lost / No decision yet / Not qualified |
| Sale? | Manual | Yes/No |
| Reason lost | Manual, only if not won | e.g. price, timing, chose another company, changed mind |
| Follow-up required | Manual | What's the next action, and when |
| Notes | Manual | Anything else useful |

## What this will eventually let you answer

Once enough rows exist:
- **Which marketing source works?** Group by Source/Medium/Campaign, compare enquiry → sale
  conversion and, once ad spend is being tracked separately, cost per qualified lead and cost per
  sale.
- **Which problem generates the most leads?** Group by Reason.
- **Which package gets the most interest?** Group by Package interest (remembering blank = came
  via a general CTA, not disinterest in a specific package).
- **What price points are accepted?** Compare Quoted amount against Outcome/Sale.
- **Which areas convert?** Group by Postcode (district level, e.g. HU1 vs HU13, is more useful
  than exact postcode for small volumes).
- **Funnel conversion**: leads → assessments booked → quotes given → sales, as simple ratios once
  there are enough rows to be meaningful (a handful of leads won't show a reliable pattern yet -
  don't over-read early results).

## Practical note

Someone still needs to manually read each lead email and add a row - there is no automated
sync between the inbox and a spreadsheet in this build, and building one now would be exactly
the kind of tooling this stage of the test doesn't need yet.
