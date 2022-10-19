import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// console.log(populateDelay);

function onSubmitBtn(evt) {
  evt.preventDefault();
  let populateDelay = +form.delay.value;

  for (let i = 1; i <= form.amount.value; i++) {
    console.log(populateDelay);
    createPromise(i, populateDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    populateDelay += +form.step.value;
  }
}

form.addEventListener('submit', onSubmitBtn);
