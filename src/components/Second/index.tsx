import React from 'react';
import Hand from '~/components/Hand';
import { useAppSelector } from '~/hooks/redux';
import { getSecondHandDegree } from '~/utils/handDegree';

const Second = () => {
  const { second } = useAppSelector(({ clock }) => clock);
  const degree = getSecondHandDegree(second);

  return (
    <div className="hand-container">
      <Hand degree={degree} className="second-hand" />
    </div>
  );
};

export default Second;
