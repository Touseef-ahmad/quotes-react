import { QUOTES_API_URL } from './endpoints';

export const fetchQuotes = async () => {
  return fetch(QUOTES_API_URL).then(data => data.json());
};
