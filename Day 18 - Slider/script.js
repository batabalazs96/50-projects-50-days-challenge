const slides = document.querySelectorAll('.slide');

const left = document.getElementById('left');
const right = document.getElementById('right');

let activeSlide = 0;

left.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length -1;
  }

  setActiveSlide();

}
)


right.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length -1) {
    activeSlide = 0;
  }

  setActiveSlide();

}
)
console.log(activeSlide);

function setActiveSlide(){
  for (const slide of slides) {
    slide.classList.remove('active');
  }
  slides[activeSlide].classList.add('active');
}
