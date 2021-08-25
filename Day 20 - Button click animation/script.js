const button = document.querySelector('button');

button.addEventListener('click', async (e)=> {
    const btnX = e.offsetX;
    const btnY = e.offsetY;  
    button.innerHTML=`Click Me<span class="circle" style="top: ${btnY}px; left: ${btnX}px"></span>`;
    setTimeout(()=> {button.innerHTML="Click Me"}, 200)
}) 

