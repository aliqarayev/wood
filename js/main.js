const overlayMenu = document.querySelector(".overlay-menu");
const overlayOpen = document.querySelector(".openbtn");
const overlayClose = document.querySelector(".bi-x-lg");

overlayOpen.addEventListener("click", () => {
  overlayMenu.classList.add("aktive");
});

overlayClose.addEventListener("click", () => {
  overlayMenu.classList.remove("aktive");
});
