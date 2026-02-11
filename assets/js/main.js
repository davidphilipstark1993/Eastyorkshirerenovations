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
