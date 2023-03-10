const names = document.getElementById("name");
const form = document.getElementById("form");
const number = document.getElementById("number");
const textarea = document.getElementById("textarea");

names.addEventListener("keyup", (e) => {
  if (
    names.value.trim() === "" ||
    names.value === undefined ||
    names.value === " "
  ) {
    names.classList.add("error");
  } else {
    names.classList.remove("error");
    names.classList.add("success");
  }
});

number.addEventListener("keyup", (e) => {
  if (
    number.value.trim() === "" ||
    number.value === undefined ||
    number.value === " "
  ) {
    number.classList.add("error");
  } else {
    number.classList.remove("error");
    number.classList.add("success");
  }
});

textarea.addEventListener("keyup", (e) => {
  if (
    textarea.value.trim() === "" ||
    textarea.value === undefined ||
    textarea.value === null
  ) {
    textarea.classList.add("error");
  } else {
    textarea.classList.remove("error");
    textarea.classList.add("success");
  }
});

form.addEventListener("submit", (e) => {
  if (names.value === "" || names.value === undefined || names.value === " ") {
    names.classList.add("error");

    e.preventDefault();
  } else {
    names.classList.remove("error");
    names.classList.add("success");
  }

  if (
    number.value === "" ||
    number.value === undefined ||
    number.value === " "
  ) {
    number.classList.add("error");
    e.preventDefault();
  } else {
    number.classList.remove("error");
    number.classList.add("success");
  }
  if (
    textarea.value === "" ||
    textarea.value === undefined ||
    textarea.value === " "
  ) {
    textarea.classList.add("error");
    e.preventDefault();
  } else {
    textarea.classList.remove("error");
    textarea.classList.add("success");
  }
});
