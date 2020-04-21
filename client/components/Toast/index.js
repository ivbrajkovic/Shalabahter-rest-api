/**
 * Toast message
 */

import { h } from 'preact';
import { useEffect, useState /*, useRef*/ } from 'preact/hooks';

const Tosat = ({ children, onDone, timeout = 3000 }) => {
  // const toastRef = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Enter animation
    setShow(true);

    setTimeout(() => {
      // Exit animation
      setShow(false);

      // Unmount toast component
      onDone && setTimeout(() => onDone(), 1000);
    }, timeout);
  }, []);

  return (
    <div
      /*ref={toastRef}*/ className={`fixed z-50 left-0 bottom-0 ml-8 mb-8 py-4 px-8 text-gray-100 bg-teal-500 transition duration-1000 transform ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
    >
      {children}
    </div>
  );
};

export default Tosat;
