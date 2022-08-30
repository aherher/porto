const menuBtn = document.querySelector(".menu_btn");
const nav = document.querySelector(".nav");
const close_nav = document.querySelector(".nav__close");

menuBtn.addEventListener("click", () => {
  nav.classList.add("openedNav");
})

close_nav.addEventListener("click", () => {
  nav.classList.remove("openedNav");
})