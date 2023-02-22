import type { AnyFunction } from '~/types';

import { useEffect } from 'react';

export default function useInterval(fn: AnyFunction, interval: number) {
  useEffect(() => {
    const timer = setInterval(fn, interval);
    return () => clearInterval(timer);
  }, [fn, interval]);
}
