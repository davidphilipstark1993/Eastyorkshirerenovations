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
};

// Qualifications and memberships: deliberately left off the site.
export const CREDENTIALS = [];

export const PUBLIC_LIABILITY = "£2,000,000";

export const COMPANY = {
  legalName: "East Yorkshire Renovation",
  companyNumber: null, // not a limited company
  established: "2025",
};

// Real customer reviews only: { text, name, town, service }. The reviews
// block renders nowhere until this list has at least one entry.
// TODO(owner): add genuine reviews (ideally ones also visible on Google).
export const REVIEWS = [];

export const sameAs = () => [GOOGLE_PROFILE, ...SOCIAL_PROFILES].filter(Boolean);
