import { QUOTES_API_URL } from './endpoints';

function fetchQuotes(callback) {
  fetch(QUOTES_API_URL)
    .then(data => data.json())
    .then(data => callback(data));
}
export { fetchQuotes };
