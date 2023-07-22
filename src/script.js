function typingEffect() {
    const contactTexts = shuffleArray(['arr', 'arr1', 'arr2', 'arr3',]);
    const ngetik = document.getElementsByClassName("ngetik")[0];
    let removing = false;
    let idx = char = 0;

    setInterval(() => { // We define the interval of the typing speed

        // If we do not reach the limit, we insert characters in the html
        if (char < contactTexts[idx].length) ngetik.innerHTML += contactTexts[idx][char];

        // 15*150ms = time before starting to remove characters
        if (char == contactTexts[idx].length + 15) removing = true;

        // Removing characters, the last one always
        if (removing) ngetik.innerHTML = ngetik.innerHTML.substring(0, ngetik.innerHTML.length - 1);

        char++; // Next character

        // When there is nothing else to remove
        if (ngetik.innerHTML.length === 0) {

            // If we get to the end of the texts we start over
            if (idx === contactTexts.length - 1) idx = 0
            else idx++;

            char = 0; // Start the next text by the first character
            removing = false; // No more removing characters
        }

    }, 40); // Typing speed, 50 ms

}
typingEffect();
function shuffleArray(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
const navmob = document.getElementById('nav-mobile');
const navmobE = document.getElementById('navmob-extend');

const navLeftSide = document.getElementById('left-side');
const navRightSide = document.getElementById('right-side')

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const hero = document.getElementById('hero');
    const heroOffsetTop = hero.offsetTop;
    const navbarHeight = navbar.offsetHeight;
    const scrollTop = window.scrollY.offsetHeight || document.documentElement.scrollTop;
  
    if (scrollTop > heroOffsetTop) {
      navbar.classList.add('sticky');
      navbar.classList.add('border-b-2');
      navbar.classList.add('border-cyan-200');
      // hero.style.marginTop = `${navbarHeight}px`;
      navbar.classList.add('backdrop-blur-sm')
      // navbar.classList.add('dark:bg-slate-900')
      navbar.classList.add('py-4');
      navbar.classList.add('px-10');
    } else {
      navbar.classList.remove('sticky');
      navbar.classList.remove('border-b-2');
      navbar.classList.remove('border-cyan-200');
      navbar.classList.remove('backdrop-blur-sm');
      // navbar.classList.remove('dark:bg-slate-900');
      navbar.classList.remove('py-4');
      navbar.classList.remove('px-10');
    }
  });


navmob.addEventListener('click', () => {
  const isBackgroundSet = navbar.classList.contains('bg-slate-900');
  navmobE.classList.toggle('hidden');
  navmobE.classList.remove('ml-60');
  navmobE.classlist.add('mr-56')
  
  navmobE.classlist.add('duration-300')
});
// main.js
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const body = document.querySelector("body");
const themeToggle = document.querySelector("#theme-toggle");
let darkTheme = false;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  darkTheme = !darkTheme;
  sun.classList.toggle('hidden');
  moon.classList.toggle('hidden');
});

const backToTopBtn = document.getElementById('backToTopBtn');

  // Show the button when the user scrolls down 200px from the top
  window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
      backToTopBtn.classList.remove('hidden');
    } else {
      backToTopBtn.classList.add('hidden');
    }
  });

  // Smooth scroll back to the top when the button is clicked
  backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const topElement = document.getElementById('top');
    topElement.scrollIntoView({ behavior: 'smooth' });
  });