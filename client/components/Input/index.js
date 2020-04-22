/**
 * Inputs
 */

import { h } from 'preact';

// Style
import style from './style.css';

const Input = ({ name, type = 'text', autofocus = false }) => {
  return (
    <div className='relative my-6'>
      <input
        type={type}
        className={`text-blue-700 border-b border-gray-400 ${style['form-control']}`}
        name={name}
        autocomplete='off'
        required
        autofocus={autofocus}
      />
      <label
        for='name'
        className={`text-gray-500 ${style['form-control-label']}`}
      >
        {name}
      </label>
      <span className={`bg-blue-700 ${style['form-control-line']}`} />
    </div>
  );
};

export default Input;
