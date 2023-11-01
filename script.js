// Set the target date for the countdown to November 4, 2023, 3:00 PM EST
const targetDate = new Date('2023-11-04T15:00:00-05:00').getTime(); // Note: -05:00 represents Eastern Standard Time (EST)

// Get the countdown-display element
const countdownDisplay = document.getElementById("countdown-display");

// Update the countdown every second
const interval = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        clearInterval(interval);
        countdownDisplay.innerText = "Countdown Expired";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const countdownString = `${String(days).padStart(2, '0')} Days : ${String(hours).padStart(2, '0')} Hours : ${String(minutes).padStart(2, '0')} Minutes : ${String(seconds).padStart(2, '0')} Seconds`;
        countdownDisplay.innerText = countdownString;
    }
}, 1000);