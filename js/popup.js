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
    
link.addEventListener("click", function(evt) {
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
    
close.addEventListener("click", function(evt) {
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
