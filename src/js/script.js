const mobileMenu = document.querySelector("#mobile-menu");
const mobileNav = document.querySelector("#mobile-nav");
const mobileNavItem = document.querySelectorAll("#mobile-menu-item");
const mobileLink = document.querySelectorAll("#mobile-link");

const translatePos = "translate-y-1";
const rotatePos = "rotate-45";
const translateNeg = "-translate-y-1";
const rotateNeg = "-rotate-45";

function toggleMenuBar() {
  mobileNavItem.forEach(() => {
    if (mobileNavItem[1].classList.contains("hidden")) {
      mobileNavItem[1].classList.remove("hidden");
    } else {
      mobileNavItem[1].classList.add("hidden");
    }
  });
}
function changeMenuIcon() {
  if (
    mobileNavItem[0].classList.contains(translatePos) &&
    mobileNavItem[0].classList.contains(rotatePos)
  ) {
    mobileNavItem[0].classList.remove(translatePos);
    mobileNavItem[0].classList.remove(rotatePos);
  } else {
    mobileNavItem[0].classList.add(translatePos);
    mobileNavItem[0].classList.add(rotatePos);
  }
  if (
    mobileNavItem[2].classList.contains(translateNeg) &&
    mobileNavItem[2].classList.contains(rotateNeg)
  ) {
    mobileNavItem[2].classList.remove(translateNeg);
    mobileNavItem[2].classList.remove(rotateNeg);
  } else {
    mobileNavItem[2].classList.add(translateNeg);
    mobileNavItem[2].classList.add(rotateNeg);
  }
}

mobileMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  toggleMenuBar();
  changeMenuIcon();
});
mobileLink.forEach((element) => {
  element.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
    toggleMenuBar();
    changeMenuIcon();
  });
});
