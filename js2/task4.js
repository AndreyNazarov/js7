const decrementbuttonRef = document.querySelector(
  'button[data-action = "increment"]',
);
const incrementbuttonRef = document.querySelector(
  'button[data-action = "decrement"]',
);
const counterRef = document.querySelector('span[id="value"]');

decrementbuttonRef.addEventListener('click', event => {
  counterRef.textContent = Number(counterRef.textContent) + 1;
});

incrementbuttonRef.addEventListener('click', event => {
  counterRef.textContent = Number(counterRef.textContent) - 1;
});
