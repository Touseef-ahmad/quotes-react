import {
  FETCH_QUOTES_BEGIN,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_FAILURE,
  RANDOM_QUOTE_GET,
} from './action-types';

export const fetchQuotesBegin = () => ({
  type: FETCH_QUOTES_BEGIN,
});

export const fetchQuotesSuccess = quotes => ({
  type: FETCH_QUOTES_SUCCESS,
  payload: { quotes },
});

export const fetchQuotesFailure = error => ({
  type: FETCH_QUOTES_FAILURE,
  payload: { error },
});

export const getRandomQuote = () => ({
  type: RANDOM_QUOTE_GET,
});
