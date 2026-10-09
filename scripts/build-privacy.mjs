// Builds /privacy.html. Run: node scripts/build-privacy.mjs
//
// DRAFT: written from what the site actually does (its forms, api/*.js,
// assets/js/consent.js, hosting) but not reviewed by the owner or a
// solicitor. Set DRAFT = false once reviewed to remove the notice.
import { writeFileSync } from "fs";
import { page } from "./lib/layout.mjs";
import { SITE, EMAIL, ADDRESS_LINE } from "./lib/constants.mjs";
import { COMPANY } from "./data/business.mjs";

const DRAFT = false;
const UPDATED = "9 October 2026";

const controller = COMPANY.legalName
  ? `${COMPANY.legalName}${COMPANY.companyNumber ? ` (company number ${COMPANY.companyNumber})` : ""}, trading as East Yorkshire Renovations`
  : `East Yorkshire Renovations<!-- TODO(owner): add the legal business name (and company number if a limited company) in scripts/data/business.mjs -->`;

const body = `    <section class="hero">
      <div class="container">
        <p class="kicker">Privacy</p>
        <h1>Privacy and cookies policy.</h1>
        <p>How we use the details you send us, and the cookies on this website. Last updated ${UPDATED}.</p>
      </div>
    </section>
${DRAFT ? `
    <section class="section">
      <div class="container">
        <div class="callout draft-notice">
          <h2>Draft for review</h2>
          <p>This policy is a draft and has not yet been checked by the business owner. It will be finalised before it is relied on.</p>
        </div>
      </div>
    </section>
` : ""}
    <section class="section">
      <div class="container prose">
        <h2>Who we are</h2>
        <p>This website is run by ${controller}, ${ADDRESS_LINE}. We decide how the personal information described here is used, which makes us the &ldquo;controller&rdquo; under UK data protection law (the UK GDPR and the Data Protection Act 2018).</p>
        <p>For any privacy question or request, email <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>
        <!-- TODO(owner): if/when the business pays the ICO data protection fee, add the registration number here (it can't be made up). -->

        <h2>Information you send us through our forms</h2>
        <p>We have three enquiry forms. Each one asks only for what we need to reply and quote:</p>
        <ul>
          <li><strong>General quote form</strong> (contact page): name, phone number, email address, postcode and your message.</li>
          <li><strong>Damp enquiry form</strong> (book a damp survey): the service you want a quote for, name, phone number, email address, the property&rsquo;s postcode, whether you are a homeowner, buyer, landlord or other, and your description of the problem.</li>
          <li><strong>Water assessment form</strong> (water treatment page): name, phone number, email address, postcode, property type, household size, number of bathrooms, what you are interested in, how you prefer to be contacted and any message. If you arrived from an online advert, the form also records the advert&rsquo;s campaign details and the page you landed on, so we know which adverts bring enquiries.</li>
        </ul>
        <p>We use this information to reply to your enquiry, arrange a visit or survey, and prepare a quote. The lawful basis is taking steps at your request before entering into a contract, and our legitimate interest in responding to people who contact us. If you become a customer, we keep the information needed to carry out the work, invoice it and honour any guarantee.</p>
        <p>We do not sell your information or use it for unrelated marketing.</p>

        <h2>Who handles it for us</h2>
        <ul>
          <li><strong>Twilio SendGrid</strong> delivers each form submission to our email inbox.</li>
          <li><strong>Vercel</strong> hosts this website and processes the form submission on its way to SendGrid. Like any web host, it keeps short-lived technical logs, which include IP addresses.</li>
          <li><strong>Google Fonts</strong> supplies the website&rsquo;s fonts, so your browser contacts Google&rsquo;s servers, sharing your IP address, when a page loads.</li>
        </ul>
        <p>Some of these companies are based in, or use servers in, the United States. They are required to protect the information under UK data protection law, for example through the UK&ndash;US data bridge or approved contract clauses.</p>

        <h2 id="cookies">Cookies and similar technology</h2>
        <p>When you first visit, we ask whether you accept analytics and advertising cookies. <strong>Nothing below is loaded unless you press &ldquo;Accept&rdquo;.</strong></p>
        <ul>
          <li><strong>Google Analytics 4</strong> (Google) counts visits and shows us which pages people use, so we can improve the site. It sets cookies whose names begin with <code>_ga</code>.</li>
          <li><strong>Meta Pixel</strong> (Meta, which runs Facebook and Instagram) tells us when someone who saw one of our Facebook or Instagram adverts goes on to visit the site, call us or send an enquiry. Meta may link this to your Facebook or Instagram account under its own privacy policy. It sets cookies whose names begin with <code>_fbp</code> or <code>_fbc</code>.</li>
        </ul>
        <p>If you accept, we also record when an enquiry form has been sent, or a phone or WhatsApp link tapped, as an anonymous event in those two tools. The event says which form was used, not what you wrote.</p>
        <p>Your choice is saved in your browser&rsquo;s local storage under the name <code>eyr-consent</code>, so we don&rsquo;t ask on every page. This is necessary to remember your choice and is not used for anything else.</p>
        <p><a href="#cookies" data-cookie-settings>Change your cookie settings</a>. If you withdraw consent, we stop loading both tools and remove their cookies from this site.</p>

        <h2>How long we keep it</h2>
        <ul>
          <li><strong>Enquiries that don&rsquo;t go ahead:</strong> deleted 12 months after our last contact with you.</li>
          <li><strong>Customer records</strong> (quotes, invoices, survey reports, photos of the work): kept for 6 years after the job finishes, for accounts and tax, or for the length of any guarantee on the work if that is longer.</li>
          <li><strong>Analytics and advertising data</strong> is held by Google and Meta under their own retention settings.</li>
        </ul>

        <h2>Your rights</h2>
        <p>You can ask to see the information we hold about you, have it corrected or deleted, restrict or object to how we use it, or receive a copy to pass on to someone else. Email <a href="mailto:${EMAIL}">${EMAIL}</a> and we will reply within one month.</p>
        <p>If you are unhappy with how we have handled your information, you can complain to the Information Commissioner&rsquo;s Office: <a href="https://ico.org.uk/make-a-complaint/">ico.org.uk</a> or 0303 123 1113.</p>
      </div>
    </section>
`;

writeFileSync(
  "privacy.html",
  page({
    title: "Privacy & Cookies Policy | East Yorkshire Renovations",
    description: "How East Yorkshire Renovations uses the details you send through our forms, and the analytics and advertising cookies on this website.",
    canonical: `${SITE}/privacy.html`,
    body,
    breadcrumbs: [{ name: "Home", item: `${SITE}/` }, { name: "Privacy and cookies policy" }],
  })
);
console.log("wrote privacy.html");
