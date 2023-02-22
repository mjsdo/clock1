import type { FC, MouseEventHandler, ReactNode } from 'react';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import useHover from '~/hooks/useHover';

import './styles.css';

interface TooltipProps {
  text: string;
  children: ReactNode;
  direction: 'top-right';
}

const offset = 30;

const directionOffset = {
  'top-right': [offset, -offset],
};

const $tooltip = document.querySelector('.tooltip') as HTMLDivElement;

const Tooltip: FC<TooltipProps> = ({ children, text, direction }) => {
  const { isHover, ...hoverHandlers } = useHover();
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const [offsetX, offsetY] = directionOffset[direction];
    setPosition({
      left: offsetX + e.clientX,
      top: offsetY + e.clientY,
    });
  };

  return (
    <>
      <div {...hoverHandlers} onMouseMove={handleMouseMove}>
        {children}
      </div>
      {isHover &&
        createPortal(
          <div className="absolute" style={{ ...position }}>
            {text}
          </div>,
          $tooltip
        )}
    </>
  );
};

export default Tooltip;
