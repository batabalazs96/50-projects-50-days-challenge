const  progress = document.getElementById("progress");
const  next = document.getElementById("next");
const  prev = document.getElementById("prev");
const  circles = document.querySelectorAll(".circle");

let circleStep = 1;

next.addEventListener('click', () => {
    circleStep++;
    if (circleStep > circles.length) {
        circleStep = circles.length;        
    }
    update();  
})

prev.addEventListener('click', () => {
    circleStep--;
    if (circleStep < 1) {
        circleStep = 1;        
    }  
    update();
})

function update() {
    for (const [i, circle] of circles.entries()) {
        if (i < circleStep) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active');
        }
    }

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length-1)/(circles.length-1) * 100 + '%';

    console.log(circleStep)
    console.log(prev.disabled)

    
    
    if (circleStep === 1) {
        prev.disabled = true; 
    } else if (actives.length === circles.length){
        next.disabled = true;
    } else{
        next.disabled = false;
        prev.disabled = false;
    }
}