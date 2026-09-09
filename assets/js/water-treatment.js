(function () {
  "use strict";

  var data = window.WATER_TREATMENT_DATA;

  function trackEvent(name, params) {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params || {});
    }
  }

  // --- Render packages from the shared data file ---------------------------
  function renderPackages() {
    var mount = document.getElementById("package-cards");
    if (!mount || !data || !Array.isArray(data.packages)) return;

    var html = data.packages
      .filter(function (pkg) { return pkg.active; })
      .map(function (pkg) {
        var featureItems = pkg.features
          .map(function (f) { return "<li>" + f + "</li>"; })
          .join("");
        return (
          '<article class="card package-card' + (pkg.popular ? " package-card--popular" : "") + '">' +
          (pkg.popular ? '<p class="package-badge">Most popular</p>' : "") +
          "<p class=\"kicker\">" + pkg.tagline + "</p>" +
          "<h3>" + pkg.name + "</h3>" +
          "<p>" + pkg.description + "</p>" +
          '<p class="package-price">' + pkg.priceLabel + "</p>" +
          '<ul class="package-features">' + featureItems + "</ul>" +
          '<p class="package-ideal-for"><strong>Ideal for:</strong> ' + pkg.idealFor + "</p>" +
          '<a class="btn primary package-cta" href="#water-assessment-form" data-package="' + pkg.slug + '" data-package-name="' + pkg.name + '">Book a Free Assessment</a>' +
          "</article>"
        );
      })
      .join("");

    mount.innerHTML = html;

    var pricingNote = document.getElementById("package-pricing-note");
    if (pricingNote && data.pricingStatus) {
      pricingNote.textContent = data.pricingStatus.note;
    }

    mount.querySelectorAll(".package-cta").forEach(function (btn) {
      btn.addEventListener("click", function () {
        trackEvent("water_treatment_package_cta_click", {
          package: btn.getAttribute("data-package")
        });
        var field = document.getElementById("package-interest-field");
        if (field) field.value = btn.getAttribute("data-package-name") || "";
      });
    });
  }

  // --- Overall investment range, derived from the same package data --------
  // Reads min/max startingPrice directly from data.packages rather than a
  // separately maintained figure, so it can never drift out of sync with
  // the individual package prices above. Updates every element carrying the
  // .investment-range class (currently: one in the hero, one above the
  // package cards) so both stay in sync from this one source automatically.
  function renderInvestmentRange() {
    var els = document.querySelectorAll(".investment-range");
    if (!els.length || !data || !Array.isArray(data.packages)) return;

    var prices = data.packages
      .filter(function (pkg) { return pkg.active; })
      .map(function (pkg) { return pkg.startingPrice; });
    if (!prices.length) return;

    var min = Math.min.apply(null, prices);
    var max = Math.max.apply(null, prices);
    var format = function (n) { return "£" + n.toLocaleString("en-GB"); };
    var text = min === max
      ? "Typical investment: " + format(min)
      : "Typical investment: " + format(min) + "–" + format(max);

    els.forEach(function (el) { el.textContent = text; });
  }

  // --- Postcode water-hardness checker (UI + validation only) --------------
  // No hardness dataset/API of our own is integrated yet, so this intentionally does not
  // invent or estimate a hardness figure - see docs/water-treatment-business-model.md, Part 15.
  // Yorkshire Water (our own water company for this area) publishes its own official
  // postcode-based hardness checker at the URL below - confirmed by direct research to exist
  // and accept a postcode - so we point customers there for an authoritative figure rather than
  // guessing. We do not scrape or reproduce their data ourselves: no public API or reuse terms
  // were found for it, so it's linked to, not integrated. If a licensed dataset/API becomes
  // available later, replace the body of handleCheckerSubmit() with a real lookup.
  var UK_POSTCODE_PATTERN = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;
  var YORKSHIRE_WATER_HARDNESS_URL = "https://www.yorkshirewater.com/your-water/water-hardness/";

  function handleCheckerSubmit(event) {
    event.preventDefault();
    var input = document.getElementById("hardness-postcode");
    var result = document.getElementById("hardness-result");
    if (!input || !result) return;

    var value = input.value.trim();
    trackEvent("water_hardness_checker_used", { postcode_entered: !!value });

    if (!UK_POSTCODE_PATTERN.test(value)) {
      result.textContent = "That doesn't look like a full UK postcode. Please check it and try again.";
      result.className = "checker-result checker-result--error";
      result.hidden = false;
      return;
    }

    result.innerHTML =
      "We don't run our own postcode-level hardness lookup yet, so rather than guess, here are two ways to get a real answer: " +
      '<a href="' + YORKSHIRE_WATER_HARDNESS_URL + '" target="_blank" rel="noopener">check your postcode on Yorkshire Water\'s own hardness checker</a>, ' +
      'or <a href="#water-assessment-form">book a free home water assessment</a> and we\'ll test it on-site.';
    result.className = "checker-result";
    result.hidden = false;
  }

  function initHardnessChecker() {
    var form = document.getElementById("hardness-checker-form");
    if (form) {
      form.addEventListener("submit", handleCheckerSubmit);
    }
  }

  // --- Analytics: CTA + form events -----------------------------------------
  function initCtaTracking() {
    document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
      link.addEventListener("click", function () {
        trackEvent("water_treatment_phone_cta_click", { link_text: link.textContent.trim() });
      });
    });

    document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
      link.addEventListener("click", function () {
        trackEvent("water_treatment_email_cta_click", { link_text: link.textContent.trim() });
      });
    });
  }

  function initAssessmentFormTracking() {
    var form = document.getElementById("water-assessment-form");
    if (!form) return;

    var started = false;
    form.addEventListener(
      "focusin",
      function () {
        if (!started) {
          started = true;
          trackEvent("water_treatment_assessment_form_start");
        }
      },
      true
    );
  }

  // The form does a normal POST + redirect (no fetch/XHR), so the most
  // reliable place to fire the "submitted" event is on page load, after the
  // redirect back with ?submitted=1 - the same pattern main.js already uses
  // to reveal the success message.
  function trackSubmittedFromQueryParam() {
    if (window.location.search.indexOf("submitted=1") !== -1) {
      trackEvent("water_treatment_assessment_form_submit");
    }
  }

  function initPageViewEvent() {
    trackEvent("water_treatment_page_view");
  }

  // --- Lead source capture ---------------------------------------------------
  // Populates hidden form fields from this page's own query string, so a lead
  // submitted straight from a Google/Meta ad (utm_source=google&utm_medium=cpc&
  // utm_campaign=...) carries that context through to the email notification in
  // api/water-assessment.js. Deliberately simple: reads only the current page's
  // URL, no cross-page persistence/localStorage - sufficient for ads that link
  // directly to this landing page, which is how the initial test is planned.
  function initLeadSourceFields() {
    var params = new URLSearchParams(window.location.search);
    var setField = function (id, value) {
      var el = document.getElementById(id);
      if (el && value) el.value = value;
    };
    setField("utm-source-field", params.get("utm_source"));
    setField("utm-medium-field", params.get("utm_medium"));
    setField("utm-campaign-field", params.get("utm_campaign"));
    setField("landing-page-field", window.location.pathname);
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderPackages();
    renderInvestmentRange();
    initHardnessChecker();
    initCtaTracking();
    initAssessmentFormTracking();
    initLeadSourceFields();
    trackSubmittedFromQueryParam();
    initPageViewEvent();
  });
})();
