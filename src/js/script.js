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
  let firstBar = mobileNavItem[0];
  let lastBar = mobileNavItem[2];

  if (
    firstBar.classList.contains(translatePos) &&
    firstBar.classList.contains(rotatePos)
  ) {
    firstBar.classList.remove(translatePos);
    firstBar.classList.remove(rotatePos);
  } else {
    firstBar.classList.add(translatePos);
    firstBar.classList.add(rotatePos);
  }
  if (
    lastBar.classList.contains(translateNeg) &&
    lastBar.classList.contains(rotateNeg)
  ) {
    lastBar.classList.remove(translateNeg);
    lastBar.classList.remove(rotateNeg);
  } else {
    lastBar.classList.add(translateNeg);
    lastBar.classList.add(rotateNeg);
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

const projectList = [
  {
    title: "in-progress",
    imgPath: "assets/icon1-desktop.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus deserunt at illum atque blanditiis temporibus ratione quibusdam voluptates corporis amet aut illo doloribus repellat facilis aliquid saepe, autem quos.",
  },
  {
    title: "in-progress",
    imgPath: "assets/icon2-desktop.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus deserunt at illum atque blanditiis temporibus ratione quibusdam voluptates corporis amet aut illo doloribus repellat facilis aliquid saepe, autem quos.",
  },
  {
    title: "in-progress",
    imgPath: "assets/icon1-desktop.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus deserunt at illum atque blanditiis temporibus ratione quibusdam voluptates corporis amet aut illo doloribus repellat facilis aliquid saepe, autem quos.",
  },
  {
    title: "in-progress",
    imgPath: "assets/icon2-desktop.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus deserunt at illum atque blanditiis temporibus ratione quibusdam voluptates corporis amet aut illo doloribus repellat facilis aliquid saepe, autem quos.",
  },
  {
    title: "in-progress",
    imgPath: "assets/icon1-desktop.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus deserunt at illum atque blanditiis temporibus ratione quibusdam voluptates corporis amet aut illo doloribus repellat facilis aliquid saepe, autem quos.",
  },
];

let numProject = projectList.length;
let section;
let div;
let divContent;
let p;

for (i = 1; i <= numProject; i++) {
  section = projectContainer.appendChild(document.createElement("section"));
  div = section.appendChild(document.createElement("div"));
  p = section.appendChild(document.createElement("p"));
  div.setAttribute("id", "project");
  p.setAttribute("id", "projectTitle");
  div.classList.add(
    "min-h-[514px]",
    "min-w-[300px]",
    "rounded-[10px]",
    "bg-dark-grey",
    "border",
    "md:min-w-[522px]",
    "lg:min-w-[440px]",
    "bg-contain",
    "bg-no-repeat",
    "bg-center",
    "p-10",
  );

  p.classList.add("pt-3", "font-sora", "text-18", "font-semibold", "text-dark");
  p.textContent = "...";

  // temporay

  divContent = div.appendChild(document.createElement("div"));

  divContent.classList.add(
    "w-full",
    "h-[250px]",
    "bg-grey",
    "relative",
    "rounded-md",
    "after:rounded-full",
    "after:absolute",
    "after:top-[270px]",
    "after:w-[100%]",
    "after:h-[10px]",
    "after:bg-grey",
    "before:rounded-full",
    "before:absolute",
    "before:top-[300px]",
    "before:w-[200px]",
    "before:h-[10px]",
    "before:bg-grey",
    "animate-pulse",
  );
}

let pCounter = 0;
let pIndex = 0;
p = document.querySelectorAll("#projectTitle").forEach((elem, index) => {
  if (index == pCounter) {
    elem.textContent = projectList[pIndex].title;
    pCounter++;
    pIndex++;
  }
});

// let divCounter = 0;
// let divIndex = 0;
// div = document.querySelectorAll("#project").forEach((elem, index) => {
//   if (index == divCounter) {
//     elem.style.backgroundImage = `url(${projectList[divIndex].imgPath})`;
//     divCounter++;
//     divIndex++;
//   }
// });

let projectWidth = section.firstElementChild.offsetWidth;
let projectGap = 20;

let project = document.querySelectorAll("#project");

next.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    projectContainer.scrollLeft += projectWidth + projectGap;
  } else if (window.innerWidth <= 1280) {
    projectContainer.scrollLeft += projectWidth * 2 + projectGap * 2;
  } else if (window.innerWidth <= 1536 || window.innerWidth > 1536) {
    projectContainer.scrollLeft += projectWidth * 3 + projectGap * 3;
  }
});

prev.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    projectContainer.scrollLeft -= projectWidth + projectGap;
  } else if (window.innerWidth <= 1280) {
    projectContainer.scrollLeft -= projectWidth * 2 + projectGap * 2;
  } else if (window.innerWidth <= 1536 || window.innerWidth > 1536) {
    projectContainer.scrollLeft -= projectWidth * 3 + projectGap * 3;
  }
});
