const sections = document.querySelectorAll("section");
const animate = document.querySelectorAll(".animate");
const animate1 = document.querySelectorAll(".animate1");
const navLinks = document.querySelectorAll(".header_links");
const hiddenElements = document.querySelectorAll(".hidden");
const projectBtn = document.querySelector(".nav_project");
const project = document.querySelector("#projects");
const burger = document.querySelector('.burger-btn')
const burgerMenu = document.querySelectorAll('.burgerMenu')


burger.addEventListener('click',()=> {
  burgerMenu.forEach((item) => {
    item.classList.toggle('hidden')
  })
  
})

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

// overview section animation
const animatation = () => {
  animate.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
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
