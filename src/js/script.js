const mobileMenu = document.querySelector("#mobile-menu");
const mobileNav = document.querySelector("#mobile-nav");
const mobileNavItem = document.querySelectorAll("#mobile-menu-item");
const mobileLink = document.querySelectorAll("#mobile-link");
const projectContainer = document.querySelector("#project-container");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

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

//make this object not counter
let numProject = 10;
let projectName = "Project Tittle";
// let currentProject = 1;
let section;

for (i = 1; i <= numProject; i++) {
  section = projectContainer.appendChild(document.createElement("section"));
  let div = section.appendChild(document.createElement("div"));
  div.classList.add(
    "min-h-[514px]",
    "min-w-[300px]",
    "rounded-[10px]",
    "bg-light-violet",
    "md:min-w-[522px]",
  );
  div.setAttribute("id", "project");
  let p = section.appendChild(document.createElement("p"));
  p.classList.add("pt-3", "font-sora", "text-18", "font-semibold", "text-dark");
  p.textContent = projectName;
}
// let projectWidth = section.firstElementChild.offsetWidth;

// let project = document.querySelectorAll("#project");
// project[0].classList.add("opacity-20");

// next.addEventListener("click", () => {
//   projectContainer.scrollLeft =
//     projectContainer.scrollWidth / 2 - projectContainer.clientWidth / 2;

//   if (currentProject >= numProject) {
//     currentProject = 1;
//     projectContainer.scrollLeft = 0;
//   } else {
//     currentProject++;
//   }
//   console.log(currentProject + "next");
//   project.forEach((elem) => {
//     elem.classList.remove("opacity-20");
//     project[currentProject - 1].classList.add("opacity-20");
//   });
// });
// prev.addEventListener("click", () => {
//   projectContainer.scrollLeft =
//     projectContainer.scrollWidth / 2 - projectContainer.clientWidth / 2;
//   if (currentProject <= 1) {
//     currentProject = numProject;
//     projectContainer.scrollLeft =
//       projectContainer.scrollWidth - projectContainer.clientWidth;
//   } else {
//     currentProject--;
//   }
//   console.log(currentProject + "prev");
//   project.forEach((elem) => {
//     elem.classList.remove("opacity-20");
//     project[currentProject - 1].classList.add("opacity-20");
//   });
// });
