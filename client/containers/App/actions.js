/**
 * Reducer actions
 */

// Setings
import settings from '../../settings/settings.json';

// Storage reference
const srorage = sessionStorage;

// Loading action
export const loadingAction = loading => ({
  type: 'SET_LOADING',
  payload: loading
});

// Login action
export const loginAction = token => {
  token && srorage.setItem(settings.appToken, token);
  return { type: 'SET_LOGIN' };
};

// Logout action
export const logoutAction = () => {
  srorage.removeItem(settings.appToken);
  return { type: 'SET_LOGOUT' };
};

// Admin action
export const adminAction = admin => {
  return { type: 'SET_ADMIN', payload: admin };
};

// Format error message
const errorMessage = error => {
  let message;
  if (!error) message = '';
  else if (typeof error === 'string') message = error;
  else if (typeof error.message === 'string') message = error.message;
  else error.message = 'Unknown error';
  return message;
};

// Error action
export const errorAction = error => ({
  type: 'SET_ERROR',
  payload: errorMessage(error)
});

// Unauthorized action
export const unauthorizedAction = error => {
  srorage.removeItem(settings.appToken);
  return { type: 'SET_UNAUTHORIZED', payload: errorMessage(error) };
};
