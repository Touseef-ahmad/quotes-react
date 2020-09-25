const THEME = {}; // common

export const THEME_TYPES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

export const THEMES = {
  [THEME_TYPES.LIGHT]: {
    ...THEME,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    background: `linear-gradient(0deg, rgb(136, 216, 176, 0.7), rgba(124, 223, 221, 0.8)),
      url('https://i.ytimg.com/vi/FAKW2lh9r_4/maxresdefault.jpg')`,
    color: 'black',
  },
  [THEME_TYPES.DARK]: {
    ...THEME,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    background: `linear-gradient(0deg, rgb(0, 0, 50, 0.7), rgba(25, 50, 100, 0.8)),
    url('https://i.ytimg.com/vi/FAKW2lh9r_4/maxresdefault.jpg')`,
    color: 'white',
  },
};
