import {
  FETCH_QUOTES_BEGIN,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_FAILURE,
  RANDOM_QUOTE_GET,
} from '../actions/action-types';

const initialState = {
  quotes: [],
  quote: {},
  loading: false,
  error: null,
};

export const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTES_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_QUOTES_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        quotes: action.payload.quotes,
        quote: action.payload.quotes[Math.floor(Math.random() * action.payload.quotes.length)],
      };

    case FETCH_QUOTES_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        quotes: [],
      };
    case RANDOM_QUOTE_GET:
      return {
        ...state,
        quote: state.quotes[Math.floor(Math.random() * state.quotes.length)],
      };
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
};
