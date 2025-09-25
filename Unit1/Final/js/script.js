const searchButton = document.getElementById('searchButton');
const input = document.getElementById('userInput');
const clearButton = document.getElementById('clearButton');

searchButton.addEventListener('click', () => {
  const query = input.value.trim();
  if (query) {
    window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
  }
});

clearButton.addEventListener('click', () => {
  input.value = '';
  input.focus();
});
