//mobile menu

let menuBtn = document.getElementById("menu-btn");
let menu = document.querySelector("nav");
let header = document.querySelector("header");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("-translate-y-full");
});

//nav links

let links = document.querySelectorAll("nav ul li a");

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    links.forEach((link) => {
      link.classList.remove("active-link");
      link.parentElement.classList.remove("border-main-0");
      link.parentElement.classList.add("border-gray-100");
    });
    link.classList.add("active-link");
    link.parentElement.classList.remove("border-gray-100");
    link.parentElement.classList.add("border-main-0");
    e.preventDefault();
    let currentSection = document.getElementById(
      e.currentTarget.getAttribute("data-target")
    );
    window.scroll({
      top: currentSection.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  });
});

let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  let position = window.scrollY;
  let main = document.querySelector("main");
  if (
    position >= main.offsetTop - header.clientHeight &&
    position < main.offsetTop + main.clientHeight
  ) {
    links.forEach((link) => link.classList.remove("active-link"));
  }
  sections.forEach(function (section) {
    if (
      position >= section.offsetTop - header.clientHeight &&
      position < section.offsetTop + section.clientHeight
    ) {
      links.forEach((link) => link.classList.remove("active-link"));
      let currentLink = document.querySelector(
        `a[data-target = "${section.id}"]`
      );
      currentLink.classList.add("active-link");
    }
  });
});

//scroll to top + fixed nav

let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", function () {
  if (window.scrollY >= header.clientHeight) {
    scrollTop.classList.remove("hidden");
    header.classList.add("fixed", "shadow-md", "bg-white");
  } else {
    scrollTop.classList.add("hidden");
    header.classList.remove("fixed", "shadow-md", "bg-white");
  }
});

scrollTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

//work btns

let btns = document.querySelectorAll(".btn-container button");
let works = document.querySelectorAll("#work article");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    btns.forEach((btn) => {
      btn.classList.remove("btn-active");
    });
    e.currentTarget.classList.add("btn-active");
    let data = e.currentTarget.getAttribute("id");
    works.forEach((work) => work.classList.remove("hidden"));
    works.forEach(function (work) {
      if (work.getAttribute("data-id") !== data) {
        work.classList.add("hidden");
      }
      if (data === "all") {
        works.forEach((work) => work.classList.remove("hidden"));
      }
    });
  });
});

//about hover

let persons = document.querySelectorAll(".person");

persons.forEach(function (person) {
  person.addEventListener("mouseenter", function (e) {
    e.currentTarget.children[1].classList.add("-translate-x-full");
    e.currentTarget.children[2].classList.remove("lg:translate-y-full");
  });
  person.addEventListener("mouseleave", function (e) {
    e.currentTarget.children[1].classList.remove("-translate-x-full");
    e.currentTarget.children[2].classList.add("lg:translate-y-full");
  });
});

//blog hover

let blogs = document.querySelectorAll("#blog article");

blogs.forEach(function (blog) {
  blog.addEventListener("mouseenter", function (e) {
    let layer = e.currentTarget.querySelector(".blog-hover");
    layer.classList.remove("-translate-x-full");
  });
  blog.addEventListener("mouseleave", function (e) {
    let layer = e.currentTarget.querySelector(".blog-hover");
    layer.classList.add("-translate-x-full");
  });
});
