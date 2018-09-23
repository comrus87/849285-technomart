var index = document.querySelector("#index");
if (index) {
    var link = document.querySelector(".link-map");
    var popup = document.querySelector(".modal-write-us");
    var close = popup.querySelector(".button-close-window");
    var login = popup.querySelector("[name=name]");
    var email = popup.querySelector("[name=email]");
    var textletter = popup.querySelector("[name=textletter]")
    var form = popup.querySelector("form");
    link.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        login.focus();
    });
    close.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
    });
    form.addEventListener("submit", function(evt) {
        if (!login.value || !email.value || !textletter.value) {
            evt.preventDefault();
            console.log("Нужно ввести ваше имя, e-mail и текст письма");
        }
    });
    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (popup.classList.contains("modal-show")) {
                popup.classList.remove("modal-show");
            }
        }
    });
    var mapLink = document.querySelector(".modal-map");
    var mapPopup = document.querySelector(".modal-map-popup");
    var mapClose = mapPopup.querySelector(".button-close-window");
    mapLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapPopup.classList.add("modal-show");
    });
    mapClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
    });
}
var buyLink = document.querySelectorAll(".buy");
var buyPopup = document.querySelector(".modal-add-goods");
var buyClose = buyPopup.querySelector(".button-close-window");
for (var i = 0; i < buyLink.length; i++) {
    buyLink[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        buyPopup.classList.add("modal-show");
    });
};
buyClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-show");
});