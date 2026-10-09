// Cookie consent, and the only place GA4 and the Meta Pixel are loaded.
//
// Nothing that contacts Google Analytics or Meta runs until the visitor
// presses "Accept". The choice is remembered in localStorage and can be
// changed from the "Cookie settings" link in the footer.
//
// Also sends conversion events once consent is given:
//  - Lead (Meta) + generate_lead (GA4) when a form redirects back with
//    ?submitted=1, labelled general / damp / water
//  - Contact (Meta) + contact (GA4) on phone and WhatsApp link clicks
(function () {
  "use strict";

  var GA4_ID = "G-W48LSE6YBN";
  var PIXEL_ID = "931428319606975";
  var KEY = "eyr-consent";
  var VERSION = 1; // bump to ask everyone again if what we load changes

  function readChoice() {
    try {
      var saved = JSON.parse(localStorage.getItem(KEY));
      return saved && saved.version === VERSION ? saved.choice : null;
    } catch (e) {
      return null;
    }
  }

  function saveChoice(choice) {
    try {
      localStorage.setItem(KEY, JSON.stringify({ choice: choice, version: VERSION, date: new Date().toISOString() }));
    } catch (e) {
      /* private browsing: the choice lasts for this page only */
    }
  }

  // --- Loading the trackers --------------------------------------------------
  var loaded = false;

  function loadTrackers() {
    if (loaded) return;
    loaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID);
    var ga = document.createElement("script");
    ga.async = true;
    ga.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID;
    document.head.appendChild(ga);

    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq("init", PIXEL_ID);
    window.fbq("track", "PageView");

    sendPendingLead();
  }

  // Remove analytics cookies after someone withdraws consent.
  function clearTrackerCookies() {
    var host = location.hostname.replace(/^www\./, "");
    document.cookie.split(";").forEach(function (c) {
      var name = c.split("=")[0].trim();
      if (/^(_ga|_gid|_gat|_fbp|_fbc)/.test(name)) {
        ["", "; domain=" + host, "; domain=." + host].forEach(function (d) {
          document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/" + d;
        });
      }
    });
  }

  // --- Conversion events -----------------------------------------------------
  function formLabel() {
    var p = location.pathname;
    if (p.indexOf("/damp-proofing/book-a-survey") === 0) return "damp";
    if (p.indexOf("/water-treatment") === 0) return "water";
    return "general";
  }

  var pendingLead = null;
  if (/[?&]submitted=1(&|$)/.test(location.search)) {
    pendingLead = formLabel();
    // Take the flag out of the address bar so a refresh, bookmark or shared
    // link can't count the same enquiry twice. This runs after every other
    // script has had its DOMContentLoaded turn, so the success message and
    // the water page's own events still see ?submitted=1.
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(function () {
        var params = new URLSearchParams(location.search);
        params.delete("submitted");
        var query = params.toString();
        history.replaceState(history.state, "", location.pathname + (query ? "?" + query : "") + location.hash);
      }, 0);
    });
  }

  function sendPendingLead() {
    if (!pendingLead || !loaded) return;
    window.fbq("track", "Lead", { content_name: pendingLead });
    window.gtag("event", "generate_lead", { form_type: pendingLead });
    pendingLead = null;
  }

  document.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest('a[href^="tel:"], a[href*="wa.me/"]');
    if (!link || !loaded) return;
    var method = link.href.indexOf("tel:") === 0 ? "phone" : "whatsapp";
    window.fbq("track", "Contact", { content_name: method });
    window.gtag("event", "contact", { method: method });
  });

  // --- Banner ----------------------------------------------------------------
  var banner = null;

  function showBanner() {
    if (banner) {
      banner.hidden = false;
      return;
    }
    banner = document.createElement("div");
    banner.className = "consent-banner";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Cookie choices");
    banner.innerHTML =
      '<p><strong>Cookies.</strong> With your permission we use Google Analytics and the Meta Pixel to see which pages and adverts lead to enquiries. ' +
      'Nothing is loaded unless you accept. <a href="/privacy.html">Privacy policy</a></p>' +
      '<div class="consent-actions">' +
      '<button type="button" class="consent-accept">Accept</button>' +
      '<button type="button" class="consent-reject">Reject</button>' +
      "</div>";
    banner.querySelector(".consent-accept").addEventListener("click", function () {
      choose("granted");
    });
    banner.querySelector(".consent-reject").addEventListener("click", function () {
      choose("denied");
    });
    document.body.appendChild(banner);
  }

  function choose(choice) {
    var wasLoaded = loaded;
    saveChoice(choice);
    banner.hidden = true;
    if (choice === "granted") {
      loadTrackers();
    } else {
      clearTrackerCookies();
      // Scripts already running on this page can't be unloaded, so start
      // afresh without them.
      if (wasLoaded) location.reload();
    }
  }

  document.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest("[data-cookie-settings]");
    if (!link) return;
    e.preventDefault();
    showBanner();
  });

  // --- Start -----------------------------------------------------------------
  var choice = readChoice();
  if (choice === "granted") {
    loadTrackers();
  } else if (choice === null) {
    if (document.body) showBanner();
    else document.addEventListener("DOMContentLoaded", showBanner);
  }
})();
