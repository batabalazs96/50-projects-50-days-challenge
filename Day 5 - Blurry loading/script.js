const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let loadNumber = 0;

let setI = setInterval(load ,30);

function load(){
    loadNumber++;

    if (loadNumber > 99) {
        clearInterval(setI);
    }
    console.log(bg.style);

    bg.style.filter = `blur(${scale(loadNumber, 0, 100, 100, 0)}px)`;
    loadText.textContent = `${loadNumber}%`;
    loadText.style.opacity = `${scale(loadNumber, 0, 100, 1, 0)}`
}

function scale(value, inMin, inMax, outMin, outMax) {
    return  (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


