"use strict";
// Check email to show information
const email = document.querySelector(".email");
const submit = document.querySelector(".submit");

email.addEventListener("click", function () {
  document.querySelector(".email-suggestions").classList.remove("hidden");
});

submit.addEventListener("click", function (event) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = regex.test(email.value);
  if (isValidEmail) {
    document.querySelector(".information").classList.remove("hidden");
    document.querySelector(".form-check").classList.add("hidden");
  } else {
    alert("Vui lòng nhập lại email");
  }
  event.preventDefault();
});

// Button show/hidden background information
const showViewMore = document.querySelectorAll(".showViewMore");
const viewMore = document.querySelectorAll(".viewMore");
const viewLess = document.querySelectorAll(".viewLess");
const viewMoreLess = document.querySelectorAll(".viewMoreLess");

for (let i = 0; i < showViewMore.length; i++) {
  showViewMore[i].addEventListener("mouseover", function () {
    if (viewLess[i].classList.contains("hidden")) {
      viewMore[i].classList.remove("hidden");
    }
  });

  showViewMore[i].addEventListener("mouseout", function () {
    viewMore[i].classList.add("hidden");
  });

  viewMore[i].addEventListener("click", function () {
    viewMoreLess[i].classList.remove("hidden");
    viewLess[i].classList.remove("hidden");
    viewMore[i].classList.add("hidden");
    console.log(viewMore[i].classList.contains("hidden"));
    console.log(viewMoreLess[i].classList.contains("hidden"));
    console.log(viewLess[i].classList.contains("hidden"));
  });

  viewLess[i].addEventListener("click", function () {
    viewMoreLess[i].classList.add("hidden");
    viewMore[i].classList.remove("hidden");
    viewLess[i].classList.add("hidden");
  });
}
