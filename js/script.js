var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var nameInput = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email-feedback]");
var text = popup.querySelector("[name=feedback-text]");
var form = popup.querySelector("form");
    
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";
try {
  storageName = localStorage.getItem("nameInput");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}
    
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storageName) {
    nameInput.value = storageName;
    email.focus();
    if (storageEmail) {
      email.value = storageEmail;
      text.focus();
    }
  } else {
    nameInput.focus();
  }
});
    
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
    
form.addEventListener("submit", function (evt) {
  if (!nameInput.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("nameInput", nameInput.value);
      localStorage.setItem("email", email.value);
    }
  }
});
    
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

var button1 = document.querySelector(".slide-btn-1");
var button2 = document.querySelector(".slide-btn-2");
var button3 = document.querySelector(".slide-btn-3");
var bgImage = document.querySelector("body");
var text = document.querySelectorAll(".slider-list-item");

button1.addEventListener("click", function (evt) {
  evt.preventDefault();
  bgImage.classList.remove("index-slide-2");
  bgImage.classList.remove("index-slide-3");
  bgImage.classList.add("index-slide-1");
  text[0].classList.remove("visually-hidden");
  text[1].classList.add("visually-hidden");
  text[2].classList.add("visually-hidden");
  button1.classList.add("slider-item-current");
  button2.classList.remove("slider-item-current");
  button3.classList.remove("slider-item-current");
});

button2.addEventListener("click", function (evt) {
  evt.preventDefault();
  bgImage.classList.remove("index-slide-1");
  bgImage.classList.remove("index-slide-3");
  bgImage.classList.add("index-slide-2");
  text[0].classList.add("visually-hidden");
  text[1].classList.remove("visually-hidden");
  text[2].classList.add("visually-hidden");
  button1.classList.remove("slider-item-current");
  button2.classList.add("slider-item-current");
  button3.classList.remove("slider-item-current");
});

button3.addEventListener("click", function (evt) {
  evt.preventDefault();
  bgImage.classList.remove("index-slide-1");
  bgImage.classList.remove("index-slide-2");
  bgImage.classList.add("index-slide-3");
  text[0].classList.add("visually-hidden");
  text[1].classList.add("visually-hidden");
  text[2].classList.remove("visually-hidden");
  button1.classList.remove("slider-item-current");
  button2.classList.remove("slider-item-current");
  button3.classList.add("slider-item-current");
});

