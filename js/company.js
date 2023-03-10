const aboutBtn = document.querySelector(".company-about-btn");
const advantagesBtn = document.querySelector(".company-advantages-btn");
const advantages = document.querySelector(".company-advantages");
const company = document.querySelector(".company-about");

const li = document.querySelectorAll("li");

aboutBtn.addEventListener("click", () => {
  aboutBtn.classList.add("aktiv");
  advantagesBtn.classList.remove("aktiv");

  company.classList.add("activ");
  advantages.classList.remove("activ");
});

advantagesBtn.addEventListener("click", () => {
  advantagesBtn.classList.add("aktiv");
  aboutBtn.classList.remove("aktiv");

  advantages.classList.add("activ");
  company.classList.remove("activ");
});
