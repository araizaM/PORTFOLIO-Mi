const mobileMenu = document.querySelector("#mobile-menu");
const mobileNav = document.querySelector("#mobile-nav");
const mobileLink = document.querySelectorAll("#mobile-link");

mobileMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});
mobileLink.forEach((element) => {
  element.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });
});
