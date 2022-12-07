let submitForm = document.getElementById("submitForm");

submitForm.addEventListener("click", function (e) {
  e.preventDefault();
  prompt("indiquez vote adresse mail");
  alert("email envoyé");
});
