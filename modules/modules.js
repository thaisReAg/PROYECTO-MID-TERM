function loadHeader() {
  fetch("modules/header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("header-placeholder").innerHTML = html;
    });
}

function loadFooter() {
  fetch("modules/footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer-placeholder").innerHTML = html;
    });
}
function loadCta() {
  fetch("modules/cta-section.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("cta-placeholder").innerHTML = html;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  loadHeader();
  loadFooter();
  loadCta();

  setTimeout(() => {
    let urlActual = window.location.href;

    if (urlActual.includes("index")) {
      document.querySelector(".nav-bar ul li a").classList.add("link-activated");
    }

    if (urlActual.includes("project-page")) {
      document.querySelector(".nav-bar ul li a").classList.add("link-activated");
    }
  }, 100);
});
