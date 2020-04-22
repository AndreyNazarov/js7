const inputRef = document.querySelector('input[id = "font-size-control"]');
const spanRef = document.querySelector('span[id = "text"]');

inputRef.addEventListener('input', event => {
  spanRef.style.fontSize = event.target.value + 'px';
});
