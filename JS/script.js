const volume = document.querySelector("input.volume");
const IntroMusic = document.querySelector(".IntroMusic");
const settings_icon = document.querySelector(".settings-icon");
const settings_modal = document.querySelector(".settings-modal");

volume.addEventListener('mousemove', () => {
    IntroMusic.volume = volume.value / 100;
});

settings_icon.addEventListener('click', () => {
    settings_modal.style.display = "block";
});