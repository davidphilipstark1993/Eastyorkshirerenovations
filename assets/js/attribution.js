// Records where an enquiry came from so it can be reported on.
//
// On the first page of a visit it notes the campaign parameters in the URL
// (utm_source, utm_medium, utm_campaign), the landing page and the referring
// site, and keeps them in sessionStorage for the rest of the visit (no cookies,
// nothing sent to any third party). When a form posting to /api/ is on the
// page, they are added to it as hidden fields and arrive in the notification
// email. No personal information is involved.
(function () {
  "use strict";

  var KEY = "eyr-attribution";

  function read() {
    try {
      return JSON.parse(sessionStorage.getItem(KEY)) || null;
    } catch (e) {
      return null;
    }
  }

  function write(data) {
    try {
      sessionStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      /* private browsing: attribution then covers this page only */
    }
  }

  var params = new URLSearchParams(location.search);
  var hasCampaign = params.has("utm_source") || params.has("utm_medium") || params.has("utm_campaign") || params.has("fbclid") || params.has("gclid");

  var referrer = "";
  try {
    if (document.referrer) {
      var host = new URL(document.referrer).hostname.replace(/^www\./, "");
      if (host !== location.hostname.replace(/^www\./, "")) referrer = host;
    }
  } catch (e) {
    /* ignore a malformed referrer */
  }

  var data = read();
  // A new campaign link replaces what was stored; otherwise the first page of the visit wins.
  if (!data || hasCampaign) {
    var source = params.get("utm_source") || (params.has("fbclid") ? "facebook" : params.has("gclid") ? "google" : "");
    var medium = params.get("utm_medium") || (params.has("fbclid") || params.has("gclid") ? "paid (click id)" : "");
    data = {
      utmSource: source,
      utmMedium: medium,
      utmCampaign: params.get("utm_campaign") || "",
      landingPage: location.pathname,
      referrer: referrer,
    };
    write(data);
  }

  function fill() {
    var forms = document.querySelectorAll('form[action^="/api/"]');
    Array.prototype.forEach.call(forms, function (form) {
      Object.keys(data).forEach(function (name) {
        var field = form.querySelector('input[name="' + name + '"]');
        if (!field) {
          field = document.createElement("input");
          field.type = "hidden";
          field.name = name;
          form.appendChild(field);
        }
        if (!field.value) field.value = data[name];
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fill);
  else fill();
})();
