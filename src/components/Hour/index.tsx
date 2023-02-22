import React from 'react';
import Hand from '~/components/Hand';
import { useAppSelector } from '~/hooks/redux';
import { getHourHandDegree } from '~/utils/handDegree';

const Hour = () => {
  const { hour, minute, second } = useAppSelector(({ clock }) => clock);
  const degree = getHourHandDegree({ hour, minute, second });

  return (
    <div className="hand-container">
      <Hand degree={degree} className="hour-hand" />
    </div>
  );
};

export default Hour;
