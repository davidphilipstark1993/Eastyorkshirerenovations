const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
  });
}


const formSuccess = document.getElementById("form-success");
if (formSuccess && window.location.search.includes("submitted=1")) {
  formSuccess.style.display = "block";
}

// Damp enquiry form: preselect the service from ?service=<slug>, set by the
// "Book a damp survey" buttons on each damp proofing page.
const dampService = document.querySelector('#damp-enquiry-form select[name="service"]');
if (dampService) {
  const requested = new URLSearchParams(window.location.search).get("service");
  if (requested && dampService.querySelector(`option[value="${CSS.escape(requested)}"]`)) {
    dampService.value = requested;
  }
}
