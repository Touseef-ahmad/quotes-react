import * as actionTypes from '../../actions/quotes';

const INITIAL_STATE = {
  quotes: [],
  quote: { text: '', author: '' },
  loading: false,
  error: null,
};

export const quotesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUOTES_ATTEMPT:
      /* *
       * * Mark the state as "loading" so we can show a spinner or something
       * * Also, reset any errors. We're starting fresh.
       */
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.FETCH_QUOTES_SUCCESS:
      /**
       * * All done: set loading "false".
       * * Also, replace the items with the ones from the server
       */
      return {
        ...state,
        loading: false,
        quotes: action.payload.quotes,
      };

    case actionTypes.FETCH_QUOTES_FAILURE:
      /**
       * * The request failed. It's done. So set loading to "false".
       * * Save the error, so we can display it somewhere.
       * * Since it failed, we don't have items to display anymore, so set `items` empty.
       * * This is all up to you and your app though:
       * * maybe you want to keep the items around!
       * * Do whatever seems right for your use case.
       */
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        quotes: [],
      };
    case actionTypes.RANDOM_QUOTE_SET:
      return {
        ...state,
        quote: action.payload.quote,
      };
    default:
      /**
       * * ALWAYS have a default case in a reducer
       */
      return state;
  }
};
