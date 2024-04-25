/* ----- FORM VALIDATION ----- */
const form = document.querySelector(".contact-form");
const fullName = document.getElementById("FullName");
const inputs = form.querySelectorAll("input, textarea");

form.addEventListener("submit", function (event) {
  let isValid = true;

  if (fullName.value.toLowerCase() === "ironhack") {
    alert("You cannot be Ironhack, because I am Ironhack.");
    isValid = false;
  }

  inputs.forEach(function (input) {
    const errorElement = input.nextElementSibling; // next.ElementSibiling -> // Get the next element sibling (span) to display error message
    if (!input.value.trim()) {
      // Check if the input field is empty or contains only whitespace
      errorElement.textContent = "This field cannot be left empty";
      errorElement.style.color = "red";
      errorElement.style.fontSize = "14px";
      input.style.border = "1px solid red";
      isValid = false;
    } else if (input.type === "tel" && !/^\d+$/.test(input.value)) {
      // Check if the value of the input field contains only digits
      errorElement.textContent = "Please enter a valid phone number";
      isValid = false;
    }
  });
  if (!isValid) {
    event.preventDefault();
  }
});
