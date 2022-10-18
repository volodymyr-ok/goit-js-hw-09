// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/themes/dark.css';
// import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';

// const getEl = selector => document.querySelector(selector);
// const startBtn = getEl('[data-start]');
// const calendar = getEl('#datetime-picker');
// const days = getEl('[data-days]');
// const hours = getEl('[data-hours]');
// const minutes = getEl('[data-minutes]');
// const seconds = getEl('[data-seconds]');

// let chosenTime;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//     chosenTime = selectedDates[0];
//     console.log(selectedDates);
//   },
//   locale: Ukrainian,
// };

// flatpickr(calendar, options);

// function onStartBtn() {
//   setInterval(() => {
//     console.log('hello');
//     const res = chosenTime - Date.now();
//     console.log();
//   }, 1000);
// }

// startBtn.addEventListener('click', onStartBtn);
