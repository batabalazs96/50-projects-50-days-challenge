const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', showBoxes)


showBoxes();

function showBoxes() {
    let currenctWindowButton = (window.innerHeight/5)*4
     for (const box of boxes) {
         if (box.getBoundingClientRect().top < currenctWindowButton) {
             box.classList.add('show')
         } else { box.classList.remove('show')}
     }
}

