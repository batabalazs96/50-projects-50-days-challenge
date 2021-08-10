const sounds = ["applause","boo", "gasp", "tada", "victory", "wrong"];

const buttons = document.querySelector(".buttons")

for (const sound of sounds) {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;
    const song = document.getElementById(sound);
    btn.addEventListener('click', ()=> {
        stopSong();
        song.play();
    })
    buttons.appendChild(btn);

}

function stopSong() {
    for (const sound of sounds) {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    }
}
