var link = document.querySelector(".link-map");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".button-close-window");

link.addEventListener("click", function (evt) {
   evt.preventDefault();
    popup.classList.add("modal-show");
  });
  
close.addEventListener("click", function (evt) {
   evt.preventDefault();
  popup.classList.remove("modal-show");
  });