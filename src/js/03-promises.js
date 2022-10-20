import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('form');

form.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(evt) {
  evt.preventDefault();
  console.dir(evt);
  const { delay, amount, step } = evt.target.elements;
  let presentStep = +delay.value;

  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, presentStep)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    presentStep += +step.value;
  }

  // evt.target.reset();
}

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
