/**
 * Autoresize textarea
 */

import { h } from 'preact';
import { useRef, useEffect } from 'preact/hooks';

const setSize = ta => {
  ta.style.height = '';
  ta.style.height = Math.min(ta.scrollHeight) + 2 + 'px';
};

const Textarea = props => {
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

export default Textarea;
