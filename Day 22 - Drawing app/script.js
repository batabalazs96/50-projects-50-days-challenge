const canvas = document.querySelector('#canvas');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const sizeEl = document.querySelector('#size');
const colorEl = document.querySelector('#color');
const clearEl = document.querySelector('#clear');
const ctx = canvas.getContext('2d');

let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;

//Trying to figure how to draw with touch
// canvas.addEventListener("touchstart", (e) => {
//     let touch = e.touches[0];
//     let mouseEvent = new MouseEvent('mousedown', (e) => {
//         isPressed = true;
      
//         x = touch.offsetX;
//         y = touch.offsetY;
//       });
//       canvas.dispatchEvent(mouseEvent)
// } )

// canvas.addEventListener("touchend", (e) => {
//     let mouseEvent = new MouseEvent('mouseup', (e) => {
//         isPressed = false;
      
//         x = undefined;
//         y = undefined;
//       });
//       canvas.dispatchEvent(mouseEvent)
// } )

// canvas.addEventListener("touchmove", (e) => {
//     let touch = e.touches[0];
//     let mouseEvent = new MouseEvent('mousemove', (e) => {
//         if (isPressed) {
//           const x2 = touch.offsetX;
//           const y2 = touch.offsetY;
      
//           drawCircle(x2, y2);
//           drawLine(x, y, x2, y2);
      
//           x = x2;
//           y = y2}});
//       canvas.dispatchEvent(mouseEvent)
// } )


canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}

increaseBtn.addEventListener('click', () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

colorEl.addEventListener('change', (e) => {
  color = e.target.value;
});

clearEl.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
