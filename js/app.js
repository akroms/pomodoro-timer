/* Start Btn */
const start = document.getElementsByClassName(
    "pomodoro-start-stop-btn pomodoro-option__item"
)[0];

/* Option Btns*/
const pomodoro = document.querySelector(".pomodoros");
const shortBreak = document.querySelector(".shortBreak");
const longBreak = document.querySelector(".longBreak");
const darkMode = document.querySelector(".pomodoro-dark-mode");

/* Time */
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

let minute = Number(min.textContent);
let secund = Number(sec.textContent);
secund = 60;

/* Pomodoro Mode */
pomodoro.addEventListener("click", () => {
    minute = 25;
    min.textContent = minute;
});

/* Short Break Mode */
shortBreak.addEventListener("click", () => {
    minute = 5;
    min.textContent = minute;
});

/* Long Break Mode */
longBreak.addEventListener("click", () => {
    minute = 15;
    min.textContent = minute;
});

/* Dark Mode */
darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document
        .querySelector(".pomodoro-title")
        .classList.toggle("dark-mode-border");
    document
        .querySelector(".pomodoro-time")
        .classList.toggle("dark-mode-border");

    document.getElementsByClassName("creator-name")[0].classList.toggle("dark-mode-border");
    document.getElementsByClassName("more-info")[0].classList.toggle("dark-mode-border");

    // Items
    let pomodoroOptionClass = document.getElementsByClassName(
        "pomodoro-option__item"
    );

    for (i = 0; i < pomodoroOptionClass.length; i++) {
        pomodoroOptionClass[i].classList.toggle("dark-mode-border");
        pomodoroOptionClass[i].classList.toggle("dark-mode-hover");
    }
});

/* Timer Start */
start.addEventListener("click", () => {
    document.title = `Timer Started`;

    if (secund == 60 && minute > 0) {
        let timerInterval = setInterval(() => {
            min.textContent = minute;
            if (minute >= 0) {
                secund--;
                sec.innerHTML = secund;
                if (secund < 10) {
                    sec.innerHTML = `0${secund}`;
                }
                if (secund == 0) {
                    secund = 60;
                    if (minute == 0) {
                        clearInterval(timerInterval);
                        min.textContent == 00;
                        sec.textContent == 00;
                    }
                }
            }
        }, 1000);
    }

    if (minute == 25 || minute == 15 || minute == 5) {
        minute--;
    }

    setInterval(() => {
        if (minute > 0) {
            minute--;
            min.textContent = minute;
        }
    }, 1000 * 61);
});

/* Languages RU*/
const pageTitle = `Помидорo Таймер`,
      pomodoroModes = `Помидорo`, 
      shortBreaks = `Короткий перерыв`,
      longBreaks = `Длинный перерыв`;
      darkModes =`Ночной режим`,
      language = `Язык`,
      starts = `Начинать`,
      creatorName1 = `Создано с`,
      creatorName2 = `Akrom`,
      moreInfo = "больше информации";

let changeLang = document.querySelector('.pomodoro-lang');

let lang = () => {
    if (changeLang.addEventListener("click", lang)) {
        changeLang.removeEventListener("click", lang);
    } else {
        changeLang.addEventListener("click", lang);
    }
    document.querySelector(".pomodoro-title").innerHTML = pageTitle; 
    document.querySelector(".pomodoros").textContent = pomodoroModes;
    document.querySelector(".shortBreak").textContent = shortBreaks;
    document.querySelector(".longBreak").textContent = longBreaks;
    document.querySelector(".pomodoro-dark-mode").textContent = darkModes;
    document.querySelector(".pomodoro-lang").textContent = language;
    document.querySelector(".pomodoro-start-stop-btn").textContent = starts;
    document.querySelector(".creator-name1").textContent = creatorName1;
    document.querySelector(".creator-name2").textContent = creatorName2;
    document.querySelector(".more-info").textContent = moreInfo;
}

changeLang.addEventListener("click", lang);

/* Typing Effects */

let i = 0;
const speed = 50;
let string = `Pomodoro Timer`;
let type = document.getElementsByClassName("pomodoro-title")[0];
console.log();

function writer() {
    if (i < string.length) {
        type.innerHTML = type.innerHTML + string.charAt(i);
        i++;
        setTimeout(writer, speed); 
    }
} 
writer();






