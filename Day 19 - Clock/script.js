const hourEL = document.querySelector('.hour');
const minuteEL = document.querySelector('.minute');
const secondEL = document.querySelector('.second');
const timeEL = document.querySelector('.time');
const dateEL = document.querySelector('.date');
const toggleEL = document.querySelector('.toggle');

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dev',
  ];


toggleEL.addEventListener('click', () => {
    const html = document.querySelector('html');
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
        toggleEL.innerHTML="Light Mode"
    }
    else toggleEL.innerHTML = "Dark Mode"
})

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    hourEL.style.transform = `translate(-50%, -100%) rotate(${
      hoursForClock * 30 + minutes * 0.5
    }deg)`;
    minuteEL.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`;
    secondEL.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`;

    timeEL.innerHTML = `${hours} : ${minutes < 10 ? `0${minutes}` : minutes}`
    dateEL.innerHTML = `${days[day]}, ${months[month]} <span class="circle" >${date}</span>`
}
setTime();

setInterval(setTime, 1000);