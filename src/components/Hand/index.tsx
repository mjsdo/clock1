import type { FC } from 'react';

import React, { useEffect, useRef, useState } from 'react';
import delay from '~/utils/delay';

import './styles.css';

interface HandProps {
  className?: string;
  degree: number;
}

const initialStyle = { transform: 'rotate(0deg)' };

const Hand: FC<HandProps> = ({ className = '', degree }) => {
  const ref = useRef<HTMLDivElement>(null);
  const cn = ['clock-hand', className].filter(Boolean).join(' ');
  const [init, setInit] = useState(false);
  const style = init
    ? initialStyle
    : { transform: `rotateZ(${degree || 360}deg)` };

  const initializeDegree = async () => {
    await delay(100);
    ref.current?.classList.add('no-transition');
    setInit(true);

    await delay(100);
    ref.current?.classList.remove('no-transition');
  };

  useEffect(() => {
    initializeDegree();
  }, [degree === 0]);

  if (init && degree > 0) {
    setInit(false);
  }

  return <div className={cn} style={style} ref={ref} />;
};

export default Hand;
