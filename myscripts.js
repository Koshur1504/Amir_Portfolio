const sections = document.querySelectorAll("section");
const animate = document.querySelectorAll(".animate");
const animate1 = document.querySelectorAll(".animate1");
const navLinks = document.querySelectorAll(".header_links");
const hiddenElements = document.querySelectorAll(".hidden");
const projectBtn = document.querySelector(".nav_project");
const project = document.querySelector("#projects");
const burger = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".burgerMenu");
const resumebtn = document.querySelector("#resume-btn");
const connectbtn = document.querySelector(".connect-btn");

//burger menu functionality
//closing burger menu
const closeBurger = () => {
  const visibility = burgerMenu.getAttribute("data-visible");

  if (visibility === "false") {
    burgerMenu.setAttribute("data-visible", true);
    burger.setAttribute("data-visible", true);
  } else {
    burgerMenu.setAttribute("data-visible", false);
    burger.setAttribute("data-visible", false);
  }
  burgerMenu.classList.toggle("hidden");
};
//event listner on burger button
burger.addEventListener("click", closeBurger);
// Event listener on button menu items
navLinks.forEach((item) => {
  item.addEventListener("click", closeBurger);
});

//fix for scrolling to project section
projectBtn.addEventListener("click", (e) => {
  e.preventDefault(e);
  window.scrollTo({
    behavior: "smooth",
    top:
      project.getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      90,
  });
});

//resume and connect button functionality
resumebtn.addEventListener("click", () => {
  window.open(
    "https://koshur1504.github.io/Amir_Portfolio/assets/CV_amir.pdf",
    "_blank"
  );
});
connectbtn.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/mir-amir", "_blank");
});

// overview section animation
const animatation = () => {
  animate.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height + 90) {
      sec.classList.add("show");
    } else {
      sec.classList.remove("show");
    }
  });
};

// tech icons animation
const animatation1 = () => {
  animate1.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 800;
    let height = sec.offsetHeight;

    if (top >= offset && top - 700 < offset) {
      sec.classList.add("show1");
    } else {
      sec.classList.remove("show1");
    }
  });
};

//scroll spy
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 600;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[data-nav*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  animatation();
  animatation1();
};

//running animation on mount
document.addEventListener("DOMContentLoaded", function () {
  animatation();
  animatation1();
});
