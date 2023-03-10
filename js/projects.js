
  let bigImg = document.getElementById("big-img");
  let smallImg = document.querySelectorAll(".small-img");

  smallImg.forEach((image) => {
    image.addEventListener("click", () => {
      bigImg.src = image.src;
    });
  });


