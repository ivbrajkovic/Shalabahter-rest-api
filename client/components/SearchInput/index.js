/**
 * Search Input
 */

import { h, Fragment } from 'preact';

import style from './style.css';

const SearchInput = props => {
  const { iconClasses, borderClasses } = props;
  iconClasses && delete props.iconClasses;
  borderClasses && delete props.borderClasses;

  // Add comopnent style
  if (props.class) props.class += ' ' + style['input'];
  // if (props.className) props.className += ' ' + style['input'];
  else props.className = style['input-default'] + ' ' + style['input'];

  // (([^\s]+)?shad.[^\s]+)

  return (
    <div className={style['root']}>
      {/* Icon */}
      <svg className={iconClasses || style['icon']} viewBox='0 0 24 24'>
        <g
          stroke-linecap='square'
          stroke-linejoin='miter'
          stroke-width='2'
          stroke='currentColor'
          fill='none'
          stroke-miterlimit='10'
        >
          <line x1='22' y1='22' x2='15.656' y2='15.656'></line>
          <circle cx='10' cy='10' r='8'></circle>
        </g>
      </svg>

      {/* Input */}
      <input {...props} />

      {/* Lines */}
      {['bottom', 'right', 'top', 'left'].map(el => (
        <span
          className={`${style[el]} ${borderClasses || style['span-default']}`}
        ></span>
      ))}
    </div>
  );
};

export default SearchInput;
