/**
 * Reducer
 */

// Initial state
export const initialState = {
  loading: false,
  loggedIn: false,
  admin: false,
  error: ''
};

// Action reducer
export const reducer = (state, action) => {
  console.log('reducer -> action', action);

  switch (action.type) {
    case 'SET_LOGOUT':
      // Set initial state
      return { ...initialState };

    case 'SET_LOGIN':
      // Set logged in status
      return { ...initialState, loggedIn: true, admin: true };

    case 'SET_ADMIN':
      // Set logged in status
      return { ...state, admin: action.payload };

    case 'SET_LOADING':
      // Set loading status
      return { ...state, loading: action.payload };

    case 'SET_ERROR':
      // Set error, stop loading progress
      return { ...state, loading: false, error: action.payload };

    case 'SET_UNAUTHORIZED':
      // Set error, stop loading progress
      return { ...initialState, error: action.payload };

    default:
      // Do not change
      return state;
  }
};
