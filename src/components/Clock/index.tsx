import React from 'react';
import Hour from '~/components/Hour';
import Minute from '~/components/Minute';
import Second from '~/components/Second';

const Clock = () => {
  return (
    <div>
      <Hour />
      <Minute />
      <Second />
    </div>
  );
};

export default Clock;
