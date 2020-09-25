import { combineReducers } from 'redux';
import { quotesReducer } from './quotes';
import { themeReducer } from './theme';

export const rootReducer = combineReducers({
  quotesReducer,
  themeReducer,
});
