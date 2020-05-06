/**
 * Autoresize textarea
 */

import { h } from 'preact';
import { useRef, useEffect } from 'preact/hooks';
import { memo } from 'preact/compat';

const setSize = ta => {
  // console.log('textarea -> setSize');

  ta.style.height = '';
  ta.style.height = Math.min(ta.scrollHeight) + 2 + 'px';
};

const Textarea = props => {
  // console.log('textarea -> component');

  const textareaRef = useRef();

  const onInput = e => {
    const ta = e.target;
    setSize(ta);
    props.onInput && props.onInput(e);
  };

  useEffect(() => {
    setSize(textareaRef.current);
  }, []);

  return (
    <textarea
      ref={textareaRef}
      rows='1'
      cols='50'
      {...props}
      onInput={onInput}
    />
  );
};

export default memo(Textarea);
