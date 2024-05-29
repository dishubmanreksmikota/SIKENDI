let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
}); 

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}

let [milliseconds2, seconds2, minutes2, hours2] = [0, 0, 0, 0];
let timeRef2 = document.querySelector(".timer-display2");
let int2 = null;

document.getElementById("start-timer2").addEventListener("click", () => {
    if(int2 !== null) {
        clearInterval(int2);
    }
    int2 = setInterval(displayTimer2, 10);
});

document.getElementById("pause-timer2").addEventListener("click", () => {
    clearInterval(int2);
});

document.getElementById("reset-timer2").addEventListener("click", () => {
    clearInterval(int2);
    [milliseconds2, seconds2, minutes2, hours2] = [0, 0, 0, 0];
    timeRef2.innerHTML = "00 : 00 : 00 : 000 ";
}); 

function displayTimer2() {
    milliseconds2 += 10;
    if(milliseconds2 == 1000) {
        milliseconds2 = 0;
        seconds2++;
        if(seconds2 == 60) {
            seconds2 = 0;
            minutes2++;
            if(minutes2 == 60) {
                minutes2 = 0;
                hours2++;
            }
        }
    }

    let h2 = hours2 < 10 ? "0" + hours2 : hours2;
    let m2 = minutes2 < 10 ? "0" + minutes2 : minutes2;
    let s2 = seconds2 < 10 ? "0" + seconds2 : seconds2;
    let ms2 = 
        milliseconds2 < 10
        ? "00" + milliseconds2
        : milliseconds2 < 100
        ? "0" + milliseconds2
        : milliseconds2;

    timeRef2.innerHTML = `${h2} : ${m2} : ${s2} : ${ms2}`;

}