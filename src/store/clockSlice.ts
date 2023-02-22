import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

export interface ClockState {
  hour: number;
  minute: number;
  second: number;
}

const initialState: ClockState = {
  hour: 0,
  minute: 0,
  second: 0,
};

export const clockSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    updateTime: {
      reducer: (state, action: PayloadAction<ClockState>) => ({
        ...action.payload,
      }),
      prepare: () => {
        const date = new Date();
        return {
          payload: {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
          },
        };
      },
    },
  },
});

export const { updateTime } = clockSlice.actions;

export default clockSlice.reducer;
