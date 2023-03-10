//   Slider
const sliders = document.querySelectorAll(".slide");

const nextSlide = () => {
  const activeSlide = document.querySelector(".aktiv");

  activeSlide.classList.remove("aktiv");
  if (activeSlide.nextElementSibling) {
    activeSlide.nextElementSibling.classList.add("aktiv");
  } else {
    sliders[0].classList.add("aktiv");
  }
};


// setInterval(nextSlide, 2500);



function changeBlog() {
  const blog1 = document.querySelector(".blog1");
  const blog2 = document.querySelector(".blog2");
  const blogBtn1 = document.querySelector(".blog-btn-1");
  const blogBtn2 = document.querySelector(".blog-btn-2");

  blogBtn1.addEventListener("click", () => {
    blog1.classList.add("active");
    blog2.classList.remove("active");
    blogBtn1.classList.add("active");
    blogBtn2.classList.remove("active");
  });
  blogBtn2.addEventListener("click", () => {
    blog2.classList.add("active");
    blog1.classList.remove("active");
    blogBtn2.classList.add("active");
    blogBtn1.classList.remove("active");
  });
}

changeBlog();
