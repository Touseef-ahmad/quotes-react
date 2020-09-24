import { func, bool, object } from 'prop-types';

export const propTypes = {
  loading: bool.isRequired,
  quote: object.isRequired,
  dispatch: func.isRequired,
};
