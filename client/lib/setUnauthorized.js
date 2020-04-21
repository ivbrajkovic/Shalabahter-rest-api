/**
 * Dispatch unauthorized event
 */

import { route } from 'preact-router';

import { unauthorizedAction } from '../containers/App/actions';

/**
 * Redirect to login and dispatch error message
 * @param {*} dispatch Dispach to reducer
 * @param {*} message Error message
 */
const setUnauthorized = (dispatch, message) => {
  dispatch(unauthorizedAction(message));
  route('/login');
};

export default setUnauthorized;
