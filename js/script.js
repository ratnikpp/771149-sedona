var popup = document.querySelector(".search-modal");
var open = document.querySelector(".btn-search");


open.addEventListener("click", function(event) {
  event.preventDefault(event);
  popup.classList.toggle("modal-show");
});






