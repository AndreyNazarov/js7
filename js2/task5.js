const inputRef = document.querySelector('input[id="name-input"]');
const spanRef = document.querySelector('span[id="name-output"]');

inputRef.addEventListener('input', event => {
  if (event.target.value === '') {
    return (spanRef.textContent = 'незнакомец');
  }
  return (spanRef.textContent = event.target.value);
});
