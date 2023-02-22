import React from 'react';
import ClockNumbers from '~/components/ClockNumbers';
import Hour from '~/components/Hour';
import Minute from '~/components/Minute';
import Second from '~/components/Second';
import Tooltip from '~/components/Tooltip';
import { useAppDispatch, useAppSelector } from '~/hooks/redux';
import useInterval from '~/hooks/useInterval';
import { updateTime } from '~/store/clockSlice';

import './styles.css';

const Clock = () => {
  const dispatch = useAppDispatch();
  const { hour, minute, second } = useAppSelector(({ clock }) => clock);
  const timeText = `${hour}:${minute}:${second}`;

  useInterval(() => {
    dispatch(updateTime());
  }, 1000);

  return (
    <Tooltip text={timeText} direction="top-right">
      <div className="clock relative">
        <ClockNumbers />
        <Hour />
        <Minute />
        <Second />
      </div>
    </Tooltip>
  );
};

export default Clock;
