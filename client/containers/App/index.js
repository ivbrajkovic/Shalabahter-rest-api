/**
 * App

 */
import { h, Fragment, createContext } from 'preact';
import { useEffect, useReducer } from 'preact/hooks';
import Router from 'preact-router';

// Reducer action
import { errorAction } from './actions';

// import NProgress from 'nprogress';
import Toast from '../../components/Toast';

// Hooks
import useProgress from '../../hooks/useProgress';

// Components
import Navbar from '../Navbar';
import Home from '../../pages/Home';
import Login from '../../pages/Login';

// Reducer
import { initialState, reducer } from './reducer';

// Export Dicpatcher context
export const Dispatcher = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Remove toast notificytion
  const removeToast = () => dispatch(errorAction());

  // Progress bar hook
  useProgress(state.loading);

  // Remove token on exit
  useEffect(() => {
    return () => {
      sessionStorage.removeItem(settings.appToken);
    };
  }, []);

  return (
    <>
      <Dispatcher.Provider value={dispatch}>
        {/* Navbar */}
        <Navbar loggedIn={state.loggedIn} admin={state.admin} />

        {/* Toast notify message */}
        {state.error && <Toast onDone={removeToast}>{state.error}</Toast>}

        {/* main */}
        <main className='container h-screen pt-20 sm:pt-24'>
          {/* Routes */}
          <Router>
            <Home path='/' admin={state.admin} />
            <Login path='/login' />
          </Router>
        </main>
      </Dispatcher.Provider>
    </>
  );
};

export default App;
