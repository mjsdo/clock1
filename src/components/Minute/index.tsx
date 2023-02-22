import React from 'react';
import Hand from '~/components/Hand';
import { useAppSelector } from '~/hooks/redux';
import { getMinuteHandDegree } from '~/utils/handDegree';

const Minute = () => {
  const { minute, second } = useAppSelector(({ clock }) => clock);
  const degree = getMinuteHandDegree({ minute, second });

  return (
    <div className="absolute x-center">
      <Hand degree={degree} />
    </div>
  );
};

export default Minute;
