function loadHeader() {
  fetch("modules/header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("header-placeholder").innerHTML = html;
      insertHTML();
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

function insertHTML() {
  let urlActual = window.location.href;

  if (urlActual.includes("index")) {
    document.querySelector("#home").classList.add("link-activated");
    console.log("index");
  }

  if (urlActual.includes("project-page")) {
    document.querySelector("#project").classList.add("link-activated");
    console.log("project page");
  }
}

loadHeader();
loadFooter();
loadCta();
