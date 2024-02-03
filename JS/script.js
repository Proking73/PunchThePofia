// Adjust below variable for new classname (volumeSliders)
const volume = document.querySelector("input.volume");
const IntroMusic = document.querySelector(".IntroMusic");
const settings_icon = document.querySelector(".setting-icon");
const settings_modal = document.querySelector(".settings-modal");
const sliders = document.querySelector(".volumeSliders")

volume.addEventListener('mousemove', () => {
    IntroMusic.volume = volume.value / 100;
});

settings_icon.addEventListener('click', () => {
    let state = settings_modal.style.display;
    console.log(state);
    if (state == "") {
        settings_modal.style.display = " flex";
    } else {
        settings_modal.style.display = "";
    }
});



