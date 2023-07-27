function typingEffect() {
  const contactTexts = shuffleArray(["arr", "arr1", "arr2", "arr3"]);
  const ngetik = document.getElementsByClassName("ngetik")[0];
  let removing = false;
  let idx = (char = 0);

  setInterval(() => {
    if (char < contactTexts[idx].length)
      ngetik.innerHTML += contactTexts[idx][char];
    if (char == contactTexts[idx].length + 15) removing = true;

    if (removing)
      ngetik.innerHTML = ngetik.innerHTML.substring(
        0,
        ngetik.innerHTML.length - 1
      );

    char++;
    if (ngetik.innerHTML.length === 0) {
      if (idx === contactTexts.length - 1) idx = 0;
      else idx++;

      char = 0;
      removing = false;
    }
  }, 40);
}
typingEffect();
function shuffleArray(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
const navmob = document.getElementById("nav-mobile");
const navmobE = document.getElementById("navmob-extend");
const toggleNavmob = document.getElementById("toggle-navmob");
const navLeftSide = document.getElementById("left-side");
const navRightSide = document.getElementById("right-side");
const backToTopBtn = document.getElementById("backToTopBtn");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const body = document.querySelector("body");
const themeToggle = document.querySelector("#theme-toggle");
let darkTheme = false;

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const hero = document.getElementById("hero");
  const heroOffsetTop = hero.offsetTop;
  const navbarHeight = navbar.offsetHeight;
  const scrollTop =
    window.scrollY.offsetHeight || document.documentElement.scrollTop;

  if (scrollTop > heroOffsetTop) {
    navbar.classList.add("sticky");
    navbar.classList.add("border-b-2");
    navbar.classList.add("border-cyan-200");
    navbar.classList.add("backdrop-blur-sm");
    navbar.classList.add("py-4");
    navbar.classList.add("px-10");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("border-b-2");
    navbar.classList.remove("border-cyan-200");
    navbar.classList.remove("backdrop-blur-sm");
    navbar.classList.remove("py-4");
    navbar.classList.remove("px-10");
  }
});

navmob.addEventListener("click", () => {
  const isBackgroundSet = navbar.classList.contains("bg-slate-900");
  navmobE.classList.toggle("-mt-full");
  navmobE.classList.toggle("duration-500");
  navmob.classList.toggle("text-cyan-400");
});


themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  darkTheme = !darkTheme;
  sun.classList.toggle("hidden");
  moon.classList.toggle("hidden");
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});

backToTopBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const topElement = document.getElementById("top");
  topElement.scrollIntoView({ behavior: "smooth" });
});
