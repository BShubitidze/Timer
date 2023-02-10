let min = 00,
sec = 00,
interval;


const minsNumb = document.querySelector(".mins-numb"),
secsNumb = document.querySelector(".secs-numb"),
startBtn = document.querySelector(".start"),
stopBtn = document.querySelector(".stop"),
resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", () => {
    interval = setInterval(timer, 1000)
});


resetBtn.addEventListener("click", () => {
    clearInterval(interval)
    sec = "00";
    min = "00";
    secsNumb.innerHTML = sec;
    minsNumb.innerHTML = min;
});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
})

function timer() {
    sec++;

    if(sec <= 9) {
        secsNumb.innerHTML = "0" + sec;
    }
    if (sec > 9){
        secsNumb.innerHTML = sec;
    }

    if (sec > 59) {
        sec = 0;
        min++;
        minsNumb.innerHTML = "0" + min;
        secsNumb.innerHTML = "0" + 0;
        if (min > 9) {
            minsNumb.innerHTML = min;
        }
    }
}
