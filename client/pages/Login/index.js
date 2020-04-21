/**
 * Login component
 */

import { h } from 'preact';
import { route } from 'preact-router';
import { useRef, useContext } from 'preact/hooks';

// Reducer actions
import { loginAction, loadingAction } from '../../containers/App/actions';

// Input component
import Input from '../../components/Input';

// Dispatcher context
import { Dispatcher } from '../../containers/App';

// POST function
import { loginUserApi } from '../../lib/fetchApi';

// Setings
import settings from '../../settings/settings.json';

// Clear form inputs
const clearFormInputs = form => {
  form.elements.name.value = '';
  form.elements.password.value = '';
  form.elements.name.focus();
};

const Login = () => {
  const formRef = useRef();
  const dispatch = useContext(Dispatcher);

  // OnSubmit handler
  const onSubmit = async e => {
    // Prevent default behavior
    e.preventDefault();

    // Start progress
    dispatch(loadingAction(true));

    // Form reference
    const form = e.currentTarget;
    const data = {
      user: form.elements.name.value,
      password: form.elements.password.value
    };

    loginUserApi(settings.urls.login, data, dispatch, data => {
      const token = data && data.token;
      // Dispatch logget in
      dispatch(loginAction(token));
      // Redirect to home page
      route('/');
    });

    // Clear form inputs
    clearFormInputs(form);
  };

  return (
    <div className='container flex items-center justify-center h-full'>
      <form
        ref={formRef}
        className='w-full overflow-hidden text-gray-400 bg-white shadow-xl sm:w-8/12 lg:w-1/3'
        onSubmit={onSubmit}
      >
        <div className='py-4 text-2xl text-center text-gray-100 bg-teal-500'>
          <h2>Login</h2>
        </div>
        <div className='px-10'>
          <Input name='name' autofocus={true} />
          <Input name='password' type='password' />
          <div className='mt-8 mb-10'>
            <input
              className='px-4 py-3 text-gray-100 duration-200 bg-teal-500 cursor-pointer hover:bg-teal-600'
              type='submit'
              value='Submit'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
