const expirationDate = '2026-05-23T17:44:59';
let deadlineTime = new Date(expirationDate);

deadlineTime.setDate(deadlineTime.getDate());
let deadline = deadlineTime.getTime();

// Function to update countdown timer
function updateCountdown() {
    if (countdownInterval !== null) {
        // Getting current time in required format
        let now = new Date().getTime();
        let timeToLive = deadline - now;

        // Getting value of days, hours, minutes, seconds
        let days = Math.floor(timeToLive / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeToLive % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeToLive % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeToLive % (1000 * 60)) / 1000);

        let daysElements = document.getElementsByClassName("days");
        let hoursElements = document.getElementsByClassName("hours");
        let minutesElements = document.getElementsByClassName("minutes");
        let secondsElements = document.getElementsByClassName("seconds");

        // If you have many countdowns, you could fill all the tags using the classname
        Array.from(daysElements).forEach(el => el.innerHTML = days);
        Array.from(hoursElements).forEach(el => el.innerHTML = hours);
        Array.from(minutesElements).forEach(el => el.innerHTML = minutes);
        Array.from(secondsElements).forEach(el => el.innerHTML = seconds);

        // Output for over time
        if (timeToLive < 0) {
            countdownInterval && clearInterval(countdownInterval);
            Array.from(daysElements).forEach(el => el.innerHTML = 0);
            Array.from(hoursElements).forEach(el => el.innerHTML = 0);
            Array.from(minutesElements).forEach(el => el.innerHTML = 0);
            Array.from(secondsElements).forEach(el => el.innerHTML = 0);
        }
    }
}

// To call defined function every second
let countdownInterval = null;
updateCountdown();
countdownInterval = setInterval(updateCountdown, 1000);

const audio = document.getElementById("musica");
const btn = document.getElementById("toggleMusic");
const icon = document.getElementById("musicIcon");

audio.loop = true;

btn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        icon.innerHTML = `<rect x="6" y="5" width="4" height="14"></rect>
                          <rect x="14" y="5" width="4" height="14"></rect>`;
    } else {
        audio.pause();
        icon.innerHTML = `<path d="M8 5v14l11-7z"></path>`;
    }
});
