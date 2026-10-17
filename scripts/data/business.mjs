// Facts about the business, supplied by the owner. This is the single place
// to update them: the shared header/footer, the business JSON-LD, the mobile
// call bar, the reviews block and the About page all read from here.
//
// Rule: never fill a field with a guess. Anything left null is simply not
// shown on the site, and is marked with a TODO in the page source.

export const PHONE = {
  display: "07498 951487",
  tel: "+447498951487",
  schema: "+44 7498 951487",
};

// 07498 951487 is on WhatsApp.
export const WHATSAPP = "https://wa.me/447498951487";

// Google Business Profile. GOOGLE_PROFILE opens the profile (used for
// "reviews on Google" links and the JSON-LD sameAs list); GOOGLE_REVIEW_LINK
// opens the "write a review" box.
export const GOOGLE_PROFILE = "https://g.page/r/CaA4QBPRUpb2EBM";
export const GOOGLE_REVIEW_LINK = "https://g.page/r/CaA4QBPRUpb2EBM/review";

export const SOCIAL_PROFILES = [
  "https://www.facebook.com/profile.php?id=61594987884780",
  "https://www.instagram.com/east_yorkshire_renovation/",
];

// Shown beside the forms and on the contact page.
export const REPLY_TIME = "We reply to every enquiry within 3 hours during opening hours (Monday to Friday, 8am to 4:30pm).";

// Used on the About page and as the author of the guides.
export const OWNER = {
  name: "David",
  role: "the owner",
  experience: "I&rsquo;ve spent several years carrying out damp surveys and writing damp reports, installing damp-proof courses, and sorting out ventilation and air flow in homes.",
  surveyor: "I carry out our damp surveys and write the reports myself, so the person who diagnoses the damp is the same person who quotes for the work and answers for it afterwards.",
  photo: null, // TODO(owner): e.g. "/assets/img/about/owner.jpg" once a real photo exists
  // TODO(owner): years of experience, as a first-person sentence, e.g. "I've worked in damp proofing for 8 years."
  yearsExperience: null,
  // TODO(owner): what makes EYR different from other firms, in your own words (one short paragraph, first person).
  different: null,
};

// Qualifications and memberships: deliberately left off the site.
// TODO(owner): training and memberships actually held (e.g. PCA, CSRT, if held), as
// { name, detail }. They appear in the footer, on About and in the damp hub owner block.
export const CREDENTIALS = [];

export const PUBLIC_LIABILITY = "£2,000,000";

export const COMPANY = {
  legalName: "East Yorkshire Renovation",
  companyNumber: null, // not a limited company
  established: "2025",
};

// Real customer reviews only: { text, name, town, date, service }. While this
// list is empty the reviews block shows just the link to the Google reviews.
// TODO(owner): paste 3-6 real Google reviews (name, town, date, text), exactly as
// they appear on Google, e.g. { text: "...", name: "...", town: "...", date: "March 2026", service: "Damp survey" }.
export const REVIEWS = [];

export const sameAs = () => [GOOGLE_PROFILE, ...SOCIAL_PROFILES].filter(Boolean);
