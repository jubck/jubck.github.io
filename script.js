const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secsEl = document.getElementById('seconds');
const startButton = document.getElementById('startButton');
const hourInput = document.getElementById('hourInput');

let judgingHour = 0; // Initialize with 0 hours

// Function to update the countdown
function updateCountdown() {
    const newBeginnings = `4 Nov 2023 ${judgingHour}:15:00`; // Use judgingHour
    const newDate = new Date(newBeginnings);
    const currentDate = new Date();

    const totalSeconds = (newDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secsEl.innerHTML = seconds;
}

// Function to start the countdown
function startCountdown() {
    judgingHour = parseInt(hourInput.value);
    if (judgingHour >= 0 && judgingHour <= 23) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    } else {
        alert('Please enter a valid hour (0-23)');
    }
}

// Add a click event listener to the "Start Countdown" button
startButton.addEventListener('click', startCountdown);
