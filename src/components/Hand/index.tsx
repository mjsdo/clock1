import type { FC } from 'react';

import React from 'react';

import './styles.css';

interface HandProps {
  className?: string;
  degree: number;
}

const Hand: FC<HandProps> = ({ className = '', degree }) => {
  const cn = ['clock-hand', className].filter(Boolean).join(' ');
  const style = { transform: `rotate(${degree}deg)` };

  return <div className={cn} style={style} />;
};

export default Hand;
