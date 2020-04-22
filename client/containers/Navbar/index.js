/**
 * Navbar
 */

// Preact
import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { route } from 'preact-router';
import { Link } from 'preact-router/match';

// Reducer actions
import { adminAction, logoutAction } from '../App/actions';

// Dispatcher context
import { Dispatcher } from '../App';

import Background from '../../components/Background';

// Navbar item style
const navLink =
  'py-4 px-5 sm:py-5 sm:px-6 hover:bg-teal-500 duration-200 cursor-pointer outline-none';

const index = ({ loggedIn, admin }) => {
  const dispatch = useContext(Dispatcher);

  const adminClick = () => dispatch(adminAction(true));
  const homeClick = () => dispatch(adminAction(false));

  const logout = () => {
    dispatch(logoutAction(true));
    route('/login');
  };

  return (
    <div className='fixed top-0 z-50 w-full tracking-wider bg-gray-600 shadow-xl text-md sm:text-lg'>
      <Background />

      <div className='container flex justify-between'>
        <div className='flex items-center'>
          <a href='/' className='text-xl sm:text-2xl'>
            Shalabahter
          </a>
        </div>

        <nav className='flex'>
          <Link
            href='/'
            className={navLink}
            activeClassName={`${!admin ? 'bg-teal-500' : ''}`}
            onClick={homeClick}
          >
            Home
          </Link>

          {loggedIn && (
            <div
              className={`${navLink}${admin ? ' bg-teal-500' : ''}`}
              onClick={adminClick}
            >
              Admin
            </div>
          )}

          {(loggedIn && (
            <div className={navLink} onClick={logout}>
              Logout
            </div>
          )) || (
            <Link
              href='/login'
              className={navLink}
              activeClassName='bg-teal-500'
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default index;
