import {
  fetchQuotesBegin,
  fetchQuotesSuccess,
  fetchQuotesFailure,
  getRandomQuote,
} from './action-creators';
import { fetchQuotes } from '../api';

export const fetchQuotesAction = () => {
  return async dispatch => {
    dispatch(fetchQuotesBegin());
    try {
      fetchQuotes()
        .then(data => dispatch(fetchQuotesSuccess(data)))
        .then(() => dispatch(getRandomQuote()));
      // dispatch(fetchQuotesSuccess(await data));
    } catch (error) {
      dispatch(fetchQuotesFailure(error));
    }
  };
};
