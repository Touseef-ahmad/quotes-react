import { string, func } from 'prop-types';

export const propTypes = {
  author: string,
  text: string.isRequired,
  chooseRandomQuote: func.isRequired,
};

export const defaultProps = {
  author: '',
};
