const clock = document.getElementById("clock");

setInterval(() => {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    clock.textContent = hours + ":" + minutes + ":" + seconds;
}, 1000);


let seconds = 10;
const timer = document.getElementById("timer");

const interval = setInterval(() => {
    seconds--;

    if (seconds > 0) {
        timer.textContent = "Remaining time: " + seconds + " seconds";
    } else {
        timer.textContent = "Time is up!";
        clearInterval(interval);

        const endTime = new Date();
        console.log(
            "Finished at: " +
            endTime.getHours() + ":" +
            endTime.getMinutes() + ":" +
            endTime.getSeconds()
        );
    }
}, 1000);