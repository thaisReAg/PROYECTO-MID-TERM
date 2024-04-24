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
});