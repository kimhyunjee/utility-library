import { describe, it, expect } from 'vitest';
import { isDate } from 'lib/utility/guard/isDate';

describe('isDate 함수 테스트', () => {
  it('유효한 Date 객체에 대해 true를 반환해야 한다', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(new Date('2023-05-01'))).toBe(true);
  });

  it('유효하지 않은 Date 객체에 대해 false를 반환해야 한다', () => {
    expect(isDate(new Date('invalid date'))).toBe(false);
  });

  it('Date 객체가 아닌 값에 대해 false를 반환해야 한다', () => {
    expect(isDate('2023-05-01')).toBe(false);
    expect(isDate({})).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate(42)).toBe(false);
    expect(isDate(true)).toBe(false);
    expect(isDate([])).toBe(false);
  });

  it('타입 가드로 사용할 수 있어야 한다', () => {
    const value: unknown = new Date();
    if (isDate(value)) {
      expect(typeof value.toISOString).toBe('function');
    } else {
      throw new Error('Date 객체로 인식되지 않았습니다');
    }
  });

  it('잘못된 날짜에 대해 false를 반환해야 한다', () => {
    expect(isDate(new Date('2023-13-32'))).toBe(false);
  });
});