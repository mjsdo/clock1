import React from 'react';
import Hour from '~/components/Hour';
import Minute from '~/components/Minute';
import Second from '~/components/Second';
import { useAppDispatch } from '~/hooks/redux';
import useInterval from '~/hooks/useInterval';
import { updateTime } from '~/store/clockSlice';

import './styles.css';

const Clock = () => {
  const dispatch = useAppDispatch();

  useInterval(() => {
    dispatch(updateTime());
  }, 1000);

  return (
    <div className="clock relative">
      <Hour />
      <Minute />
      <Second />
    </div>
  );
};

export default Clock;
