const clock = document.querySelector("#clock");

/**
 * Print this time.
 */
function getClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const nowTime = `${hours}:${minutes}:${seconds}`;
    clock.innerText = nowTime;
}

// show this Time instantly
getClock();
// show looping this Time by 1s
setInterval(getClock, 1000);
