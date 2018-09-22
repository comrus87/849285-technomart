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

var mapLink = document.querySelector(".modal-map");
var mapPopup = document.querySelector(".modal-map-popup");
var mapClose = mapPopup.querySelector(".button-close-window");

mapLink.addEventListener("click", function (evt) {
   evt.preventDefault();
 mapPopup.classList.add("modal-show");
  });
  
mapClose.addEventListener("click", function (evt) {
   evt.preventDefault();
mapPopup.classList.remove("modal-show");
  });

var buyLink = document.querySelectorAll(".buy");
var buyPopup = document.querySelector(".modal-add-goods");
var buyClose = buyPopup.querySelector(".button-close-window");

for(var i=0; i<buyLink.length; i++) {buyLink[i].addEventListener("click", function (evt) {
   evt.preventDefault();
 buyPopup.classList.add("modal-show");
  });
};
  
buyClose.addEventListener("click", function (evt) {
   evt.preventDefault();
buyPopup.classList.remove("modal-show");
  });



