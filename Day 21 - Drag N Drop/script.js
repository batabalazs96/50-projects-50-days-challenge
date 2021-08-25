const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');



fill.addEventListener("dragstart", (e)=> {
    e.target.classList += ' hovered'
    setTimeout(() => {e.target.classList = 'invisible'}, 0) 
})
fill.addEventListener("dragend", (e) => {
    e.target.classList = 'fill'
})

for (const empty of empties) {
    empty.addEventListener('dragover', (e) => {
        e.preventDefault();
        
    })    
    empty.addEventListener('dragenter', (e) => {
        e.preventDefault();
        e.target.classList += ' hovered'


    })    
    empty.addEventListener('dragleave', (e) => {
        e.target.classList ='empty'

    })    
    empty.addEventListener('drop', (e) => {
        e.target.classList ='empty'
        e.target.append(fill)
    })    
}

// document.addEventListener("dragend", function(event) {
//   // reset the transparency
//   event.target.style.opacity = "";
// }, false);

// /* events fired on the drop targets */
// document.addEventListener("dragover", function(event) {
//   // prevent default to allow drop
//   event.preventDefault();
// }, false);

// document.addEventListener("dragenter", function(event) {
//   // highlight potential drop target when the draggable element enters it
//   if (event.target.className == "empty") {
//     event.target.style.background = "rgb(182, 182, 182)";
//   }

// }, false);

// document.addEventListener("dragleave", function(event) {
//   // reset background of potential drop target when the draggable element leaves it
//   if (event.target.className == "empty") {
//     event.target.style.background = "";
//   }

// }, false);

// document.addEventListener("drop", function(event) {
//   // prevent default action (open as link for some elements)
//   event.preventDefault();
//   // move dragged elem to the selected drop target
//   if (event.target.className == "empty") {
//     event.target.style.background = "";
//     dragged.parentNode.removeChild( dragged );
//     event.target.appendChild( dragged );
//   }
// }, false);