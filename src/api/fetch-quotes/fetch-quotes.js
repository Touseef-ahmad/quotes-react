import { QUOTES_API_URL } from './endpoints';

async function fetchQuotes(callback) {
  return await fetch(QUOTES_API_URL)
      .then(data => data.json())   
}

export { fetchQuotes };