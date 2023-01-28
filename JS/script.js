let input = document.querySelector("input");
let IntroMusic = document.querySelector(".IntroMusic");

document.addEventListener('mouseup', () => {
    IntroMusic.volume = input.value;
});