const date = document.querySelector('.date');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const startStopBtn = document.getElementById('start-stop');
const resetBtn = document.getElementById('reset');
function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    date.textContent = formattedDate;
}
updateDate();
startStopBtn.addEventListener('click', () => {
    if (startStopBtn.firstElementChild.src.includes('right-arrow')) {
        startTimer();
    } else {
        stopTimer();
    }
});
function startTimer() {
    startStopBtn.firstElementChild.src = 'img/pause.png';
   time= setInterval(() => {
        secondsEl.textContent = String(parseInt(secondsEl.textContent) + 1).padStart(2, '0');
        if (secondsEl.textContent === '60') {
            secondsEl.textContent = '00';
            minutesEl.textContent = String(parseInt(minutesEl.textContent) + 1).padStart(2, '0');
        }
        if (minutesEl.textContent === '60') {
            minutesEl.textContent = '00';
            hoursEl.textContent = String(parseInt(hoursEl.textContent) + 1).padStart(2, '0');
        }
    }, 1000);
}
function stopTimer() {
    startStopBtn.firstElementChild.src = 'img/right-arrow.png';
    clearInterval(time);
}
resetBtn.addEventListener('click', () => {
    stopTimer();
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
});