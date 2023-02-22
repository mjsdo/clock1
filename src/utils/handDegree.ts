import type { ClockState } from '~/store/clockSlice';

const secondsPerHour = 3600;
const secondsPerMinute = 60;
const centralAngleDegree = 360;

const secondHandDegreePerSecond = centralAngleDegree / 60;
const minuteHandDegreePerSecond = centralAngleDegree / 60 / secondsPerMinute;
const hourHandDegreePerSecond = centralAngleDegree / 12 / secondsPerHour;
const mod = (a: number, b: number) => a % b;

export const getSecondHandDegree = (second = 0) =>
  mod(secondHandDegreePerSecond * second, 360);
export const getMinuteHandDegree = ({
  minute = 0,
  second = 0,
}: Partial<Omit<ClockState, 'hour'>> = {}) =>
  mod(minuteHandDegreePerSecond * (minute * secondsPerMinute + second), 360);

export const getHourHandDegree = ({
  hour = 0,
  minute = 0,
  second = 0,
}: Partial<ClockState> = {}) =>
  mod(
    hourHandDegreePerSecond *
      (hour * secondsPerHour + minute * secondsPerMinute + second),
    360
  );
