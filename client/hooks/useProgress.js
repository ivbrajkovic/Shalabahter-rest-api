/**
 * Progress hook
 */

import { useEffect } from 'preact/hooks';

import NProgress from 'nprogress';

const useProgress = status => {
  useEffect(() => {
    if (status) NProgress.start();
    else NProgress.done();
  }, [status]);
};

export default useProgress;
