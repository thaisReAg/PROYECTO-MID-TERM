/* window.onload = function () {
  fetch(
    "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const projectUuid1 = data.find((project) => project.uuid === "1");
      document.getElementById("project-name").innerText = projectUuid1.name;
      document.getElementById("project-descrition").innerText =
        projectUuid1.description;
      document.getElementById("project-date").innerText =
        projectUuid1.completed_on;
      document.getElementById("project-img").src = projectUuid1.image;
      document.getElementById("project-content").innerHTML =
        projectUuid1.content;

    

      const otherProjects = data.filter((project) => project.uuid !== "1");

      otherProjects.reverse();

      const otherCards = document.querySelectorAll(".card");
      for (let i = 0; i < otherCards.length; i++) {
        otherCards[i].querySelector("img").src = otherProjects[i].image;
        otherCards[i].querySelector("h4").innerText = otherProjects[i].name;
        otherCards[i].querySelector("p").innerText =
          otherProjects[i].description;

        if (otherProjects[i].link) {
          otherCards[i]
            .querySelector(".learn-more")
            .setAttribute("href", otherProjects[i].link);
        }
      }
    })
    .catch(function (error) {
      console.log(
        "Vaya, algo estás haciendo mal, ¡prueba otra vez! " + error.message
      );
    });
}; */

async function getProjects() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
    const data = await response.json();

    let projectUuid1;

    data.forEach((project) => {
      if (project.uuid === "1") {
        projectUuid1 = project;
      }
    });

    if (projectUuid1) {
      document.getElementById("project-name").innerText = projectUuid1.name;
      document.getElementById("project-description").innerText = projectUuid1.description;
      document.getElementById("project-date").innerText = projectUuid1.completed_on;
      document.getElementById("project-img").src = projectUuid1.image;
      document.getElementById("project-content").innerHTML = projectUuid1.content;
    }

    const otherProjects = data.filter((project) => project.uuid !== "1");
    otherProjects.reverse();

    const otherCards = document.querySelectorAll(".card");
    otherProjects.forEach((project, index) => {
      const card = otherCards[index];
      card.querySelector("img").src = project.image;
      card.querySelector("h4").innerText = project.name;
      card.querySelector("p").innerText = project.description;

      card.addEventListener("click", function () {
        showProjectInfo(project); // Mostrar la información del proyecto al hacer clic en la tarjeta
        window.scroll(0, 0); // Hacer que la página vuelva al principio
      });
    });
  } catch (error) {
    console.log("Vaya, algo estás haciendo mal, ¡prueba otra vez! " + error.message);
  }
}

function showProjectInfo(project) {
  document.getElementById("project-name").innerText = project.name;
  document.getElementById("project-description").innerText = project.description;
  document.getElementById("project-date").innerText = project.completed_on;
  document.getElementById("project-img").src = project.image;
  document.getElementById("project-content").innerHTML = project.content;
}

window.onload = function () {
  getProjects();
};

/* ¿Cuándo tenemos que tener cuidado con innerHTML?
        Si vamos a crear una tabla es común crearla en tres fases:
        1ª Fase -> Parte estática
        2ª Fase -> Parte dinámica
        3ª Fase -> Cierre de tabla

        Si esto lo hacemos en 3 partes distintas del código, aunque no lo veamos el código se inyecta.
        Eso significa que el HTML cierra automáticamente la tabla desde el primer paso, lo que da problemas.

        Para evitar este tipo de problemas, debemos inyectar todo el HTML a la vez, de una.
        */
