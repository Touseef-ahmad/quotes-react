import { fetchQuotes } from '../../api';
import * as actionTypes from './types';

export const fetchQuotesAttempt = () => ({
  type: actionTypes.FETCH_QUOTES_ATTEMPT,
});

export const fetchQuotesSuccess = quotes => ({
  type: actionTypes.FETCH_QUOTES_SUCCESS,
  payload: { quotes },
});

export const fetchQuotesFailure = error => ({
  type: actionTypes.FETCH_QUOTES_FAILURE,
  payload: { error },
});

export const setRandomQuote = quote => ({
  type: actionTypes.RANDOM_QUOTE_SET,
  payload: { quote },
});

export const fetchQuotesAction = () => {
  return async dispatch => {
    dispatch(fetchQuotesAttempt());
    try {
      const data = await fetchQuotes();
      dispatch(fetchQuotesSuccess(data));
    } catch (error) {
      dispatch(fetchQuotesFailure(error));
    }
  };
};

//   quote: action.payload.quotes[Math.floor(Math.random() * action.payload.quotes.length)],
