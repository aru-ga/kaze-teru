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

    }, 50); // Typing speed, 50 ms

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

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const content = document.getElementById('hero');
    const contentOffsetTop = content.offsetTop;
    const navbarHeight = navbar.offsetHeight;
    const scrollTop = window.scrollY.offsetHeight || document.documentElement.scrollTop;
  
    if (scrollTop > contentOffsetTop) {
      navbar.classList.add('sticky');
      navbar.classList.add('bg-slate-900');
      navbar.classList.add('border-b-2');
      navbar.classList.add('border-cyan-200');
      navbar.classList.add('mx-16');
      content.style.marginTop = `${navbarHeight}px`;
    } else {
      navbar.classList.remove('sticky');
      navbar.classList.remove('bg-slate-900');
      navbar.classList.remove('border-b-2');
      navbar.classList.remove('border-cyan-200');
      navbar.classList.remove('mx-16');
    }
  });