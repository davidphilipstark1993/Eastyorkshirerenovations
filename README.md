# Eastyorkshirerenovations

Static site for eastyorkshirerenovation.com, hosted on Vercel. Forms post
to the serverless functions in `api/`.

## Making changes

- **Owner facts** (phone, WhatsApp, reviews, credentials, reply time,
  Google/social links): edit `scripts/data/business.mjs`. Anything left
  `null` is not shown on the site.
- **Header, footer, cookie/tracking script, business JSON-LD**: edit
  `scripts/lib/site.mjs`. These are stamped into every page.
- **Damp pages, guides, projects, About, privacy, 404**: edit the matching
  `scripts/build-*.mjs` or `scripts/data/*` file.

Then rebuild and commit:

```
node scripts/build-all.mjs
```

Other pages are plain HTML and can be edited directly; leave the
`<!-- site:NAME -->` blocks alone, as they are overwritten on the next build.

Search the source for `TODO(owner)` to find information still needed.
