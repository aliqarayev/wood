// Dark Light Mode

const changeTheme = document.querySelector(".dark-light-mode");
const body = document.getElementById("body");
const blackLogo = document.getElementById("logo");

changeTheme.addEventListener("click", (e) => {
  body.classList.toggle("active");
  e.target.className = "bi bi-sun text-white";
  blackLogo.src = "../images/footerlogo.svg";

  if (body.classList == "") {
    e.target.className = "bi bi-moon";
    blackLogo.src = "../images/logoblack.svg";
  }
});

//! img class adlarini deyis !
