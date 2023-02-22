import React, { memo } from 'react';

const hours = Array(12)
  .fill(undefined)
  .map((_, i) => i);

const rads = hours.map((h) => (h * Math.PI) / 6);

const radius = 270;
const ys = rads.map((rad) => Math.cos(rad) * radius);
const xs = rads.map((rad) => Math.sin(rad) * radius);

const ClockNumbers = () => {
  return (
    <div>
      {hours.map((h) => (
        <div
          key={`clock-number-${h || 12}`}
          className="clock-number"
          style={{
            position: 'absolute',
            fontSize: '22px',
            top: '50%',
            left: '50%',
            transform: `translate3d(calc(-50% + ${xs[h]}px), calc(-50% + ${-ys[h]}px), 0)`,
          }}
        >
          {h || 12}
        </div>
      ))}
    </div>
  );
};

export default memo(ClockNumbers);
