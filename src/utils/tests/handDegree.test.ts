import 'vitest';

import {
  getHourHandDegree,
  getMinuteHandDegree,
  getSecondHandDegree,
} from '~/utils/handDegree';

describe('getHourHandDegree', () => {
  it('1시간에 30도씩 증가한다.', () => {
    const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const expectDegrees = hours.map((h) => h * 30);

    hours.forEach((_, i) =>
      expect(getHourHandDegree({ hour: hours[i] })).toBe(expectDegrees[i])
    );
  });

  it('1시, 13시, 25시는 동일한 각도이다.', () => {
    expect(getHourHandDegree({ hour: 1 })).toBe(
      getHourHandDegree({ hour: 13 })
    );
    expect(getHourHandDegree({ hour: 1 })).toBe(
      getHourHandDegree({ hour: 25 })
    );
    expect(getHourHandDegree({ hour: 1 })).toBe(
      getHourHandDegree({ hour: 12, minute: 60 })
    );
  });

  it('1시, 60분, 3600초는 동일한 각도이다.', () => {
    expect(getHourHandDegree({ hour: 1 })).toBe(
      getHourHandDegree({ minute: 60 })
    );
    expect(getHourHandDegree({ hour: 1 })).toBe(
      getHourHandDegree({ second: 3600 })
    );
  });
});

describe('getMinuteHandDegree', () => {
  it('1분에 6도씩 증가한다.', () => {
    const minutes = Array(60)
      .fill(0)
      .map((_, i) => i);
    const expectDegrees = minutes.map((m) => m * 6);

    minutes.forEach((_, i) =>
      expect(getMinuteHandDegree({ minute: minutes[i] })).toBe(expectDegrees[i])
    );
  });

  it('1분, 61분, 721분은 동일한 각도이다.', () => {
    expect(getMinuteHandDegree({ minute: 1 })).toBe(
      getMinuteHandDegree({ minute: 61 })
    );
    expect(getMinuteHandDegree({ minute: 1 })).toBe(
      getMinuteHandDegree({ minute: 721 })
    );
  });

  it('1분, 60초는 동일한 각도이다.', () => {
    expect(getMinuteHandDegree({ minute: 1 })).toBe(
      getMinuteHandDegree({ second: 60 })
    );
  });
});

describe('getSecondHandDegree', () => {
  it('1초에 6도씩 증가한다.', () => {
    const seconds = Array(60)
      .fill(0)
      .map((_, i) => i);
    const expectDegrees = seconds.map((s) => s * 6);

    seconds.forEach((_, i) =>
      expect(getSecondHandDegree(seconds[i])).toBe(expectDegrees[i])
    );
  });

  it('1초, 61초, 3601초는 동일한 각도이다.', () => {
    expect(getSecondHandDegree(1)).toBe(getSecondHandDegree(61));
    expect(getSecondHandDegree(1)).toBe(getSecondHandDegree(3601));
  });
});
