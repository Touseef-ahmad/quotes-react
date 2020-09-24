import * as actionTypes from './types';

const LIGHT_THEME = {
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  background: `linear-gradient(0deg, rgb(136, 216, 176, 0.7), rgba(124, 223, 221, 0.8)),
    url('https://i.ytimg.com/vi/FAKW2lh9r_4/maxresdefault.jpg')`,
  color: 'black',
};
const DARK_THEME = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  background: `linear-gradient(0deg, rgb(0, 0, 50, 0.7), rgba(25, 50, 100, 0.8)),
    url('https://i.ytimg.com/vi/FAKW2lh9r_4/maxresdefault.jpg')`,
  color: 'white',
};

export const setTheme = theme => ({
  type: actionTypes.THEME_SET,
  payload: { theme },
});

export const setDarkThemeAction = () => dispatch => dispatch(setTheme(DARK_THEME));

export const setLightThemeAction = () => dispatch => dispatch(setTheme(LIGHT_THEME));
