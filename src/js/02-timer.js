import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/dark.css';
// import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const getEl = selector => document.querySelector(selector);
const getAllEls = selector => document.querySelectorAll(selector);
const startBtn = getEl('[data-start]');

startBtn.disabled = true;
const runMoment = Date.now();
let chosenDate = 0;
let timerId = null;
let currentTimer;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    chosenDate = selectedDates[0];
    console.log('selectedDates', selectedDates);
    if (chosenDate <= runMoment) {
      Notify.warning('Please choose a date in the future');
      return;
    } else {
      startBtn.disabled = false;

      const updateClocks = convertMs(chosenDate - runMoment);
      Object.keys(updateClocks).forEach(key => {
        getEl(`[data-${key}]`).textContent = updateClocks[key];
      });
    }
  },
  // locale: Ukrainian,
};

flatpickr('#datetime-picker', options);

function onStartBtn() {
  startBtn.disabled = true;

  timerId = setInterval(() => {
    currentTimer = chosenDate - Date.now();

    const timerIndicator = convertMs(currentTimer);

    Object.keys(timerIndicator).forEach(key => {
      getEl(`[data-${key}]`).textContent = timerIndicator[key];
    });
    if (currentTimer < 1000) {
      clearInterval(timerId);
    }
  }, 1000);
}

function convertMs(ms) {
  function pad(value) {
    return String(value).padStart(2, '0');
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', onStartBtn);

getEl('.timer').style.display = 'fLex';
getEl('.timer').style.flexWrap = 'wrap';
getEl('.timer').style.gap = '30px';
getEl('.timer').style.justifyContent = 'center';

document.querySelectorAll('.field').style.border = '2px dashed black';
getAllEls('.field').style.padding = '10px';
