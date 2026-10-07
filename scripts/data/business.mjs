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

// TODO(owner): is 07498 951487 on WhatsApp? If yes, set this to
// "https://wa.me/447498951487" and the WhatsApp buttons appear site-wide.
export const WHATSAPP = null;

// TODO(owner): Google Business Profile URL (used for "Read our reviews on
// Google" links and in the JSON-LD sameAs list).
export const GOOGLE_PROFILE = null;

// TODO(owner): Facebook / Instagram profile URLs, e.g.
// ["https://www.facebook.com/...", "https://www.instagram.com/..."]
export const SOCIAL_PROFILES = [];

// TODO(owner): a reply-time promise you can always keep, e.g.
// "We reply to every enquiry within one working day." Shown beside the
// forms and on the contact page once set.
export const REPLY_TIME = null;

// TODO(owner): owner name, who carries out damp surveys and their
// experience. Used on the About page.
export const OWNER = {
  name: null,
  role: null,
  experience: null,
  surveyor: null,
  photo: null, // e.g. "/assets/img/about/owner.jpg" once a real photo exists
};

// TODO(owner): qualifications, trade memberships, training - only ones
// actually held, e.g. [{ name: "...", detail: "membership no. ..." }]
export const CREDENTIALS = [];

// TODO(owner): public liability cover amount, e.g. "£2,000,000".
export const PUBLIC_LIABILITY = null;

// TODO(owner): legal business name, company number, year trading began.
export const COMPANY = {
  legalName: null,
  companyNumber: null,
  established: null,
};

// Real customer reviews only: { text, name, town, service }. The reviews
// block renders nowhere until this list has at least one entry.
// TODO(owner): add genuine reviews (ideally ones also visible on Google).
export const REVIEWS = [];

export const sameAs = () => [GOOGLE_PROFILE, ...SOCIAL_PROFILES].filter(Boolean);
