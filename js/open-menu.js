const burgerMenu = document.querySelector(".burger-menu");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector("nav-menu");

function changeClass() {
  menu.classList.toggle("open");
  burgerMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("open")

}
burgerMenu.addEventListener("click", changeClass);
closeMenu.addEventListener("click", changeClass);
