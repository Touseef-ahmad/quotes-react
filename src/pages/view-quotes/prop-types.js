import { func, bool, object } from 'prop-types';

export const propTypes = {
  loading: bool,
  quote: object,
  dispatch: func.isRequired,
};
