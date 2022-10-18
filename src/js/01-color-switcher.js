const getEl = selector => document.querySelector(selector);
const startBtn = getEl('[data-start]');
const stopBtn = getEl('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

function changeColor() {
  timerId = setInterval(() => {
    getEl('body').style.backgroundColor = getRandomHexColor();
  }, 1000);
}

startBtn.addEventListener('click', changeColor);
startBtn.addEventListener('click', () => (startBtn.disabled = true));

stopBtn.addEventListener('click', () => clearInterval(timerId));
stopBtn.addEventListener('click', () => (startBtn.disabled = false));
