/**
 * GET service
 */

// Reducer actions
import { loadingAction, errorAction } from '../containers/App/actions';

// Set unauthorized
import setUnauthorized from './setUnauthorized';

// Setings
import settings from '../settings/settings.json';

/**
 * GET data from API service
 * @param {*} url Service API url
 * @param {*} dispatch Dispatch to reducer
 * @param {*} cb Callback to call wen finished
 */
const fetchApi = async ({ url, method, headers, postData, dispatch, cb }) => {
  // Start loading progress
  dispatch(loadingAction(true));

  // Check if we call a secured route
  const secured = headers && !!headers.authorization;

  // Fetch posts
  try {
    const res = await fetch(url, {
      method,
      headers,
      body: postData ? JSON.stringify(postData) : undefined
    });

    // Get JSON from response
    const data = await res.json();

    // Stop loading progress
    dispatch(loadingAction(false));

    // Logout if unauthorized
    if (secured && res.status === 401)
      return setUnauthorized(dispatch, data.error);

    // Dispatch error received
    if (data && !data.success) return dispatch(errorAction(data.error));

    // Call callback if success
    if (data && data.success) cb(data.data);
  } catch (err) {
    throw err;
  }
};

const fetchSecureApi = ({ url, method = 'GET', postData, dispatch, cb }) => {
  // Get token from local storage
  const token = sessionStorage.getItem(settings.appToken);

  // Logout if no token found
  if (!token) return setUnauthorized(dispatch, 'No token found');

  // Set headers
  const headers = { authorization: 'Bearer ' + token };
  if (method === 'POST' || method === 'PUT')
    headers['Content-Type'] = 'application/json';

  fetchApi({ url, method, headers, postData, dispatch, cb });
};

export const loginUserApi = (url, postData, dispatch, cb) =>
  fetchApi({
    url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    postData,
    dispatch,
    cb
  });

// export const verifyUserApi = (url, dispatch, cb) =>
//   fetchSecureApi({ url, dispatch, cb });

export const getAllPostsApi = (url, dispatch, cb) =>
  fetchApi({ url, dispatch, cb });

export const updatePostApi = (url, postData, dispatch, cb) =>
  fetchSecureApi({ url, method: 'PUT', postData, dispatch, cb });

export const deletePostApi = (url, dispatch, cb) =>
  fetchSecureApi({ url, method: 'DELETE', dispatch, cb });

export const insertPostApi = (url, postData, dispatch, cb) =>
  fetchSecureApi({ url, method: 'POST', postData, dispatch, cb });
