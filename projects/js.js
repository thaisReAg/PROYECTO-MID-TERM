fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const projectUuid1 = data.find((project) => project.uuid === "1"); 
      document.getElementById("project-name").innerText = projectUuid1.name;
      document.getElementById("project-descrition").innerText = projectUuid1.description;
      document.getElementById("project-date").innerText = `Completed on ${projectUuid1.completed_on}`;
      document.getElementById("project-img").src = projectUuid1.image;
      document.getElementById("project-content").innerText = projectUuid1.content;
  })
  .catch(function(error) {
    console.log('Vaya, algo estás haciendo mal, ¡prueba otra vez! ' + error.message);
  });
  