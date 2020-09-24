import { actionTypes } from '../../actions/theme';

const INITIAL_STATE = {
  theme: {},
};

export const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.THEME_SET:
      return {
        theme: action.payload.theme,
      };
    default:
      return state;
  }
};
