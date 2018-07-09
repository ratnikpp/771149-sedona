var popup = document.querySelector(".search-modal");
var open = document.querySelector(".btn-search");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=arrival]");
var password = popup.querySelector("[name=arrival]");

window.onload = function(event) {
    popup.classList.toggle("modal-show");
}

open.addEventListener("click", function(event) {
    event.preventDefault(event);
    popup.classList.toggle("modal-show");
    popup.classList.toggle("modal-error");
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-error");
    $(".search-modal").hide();
});



