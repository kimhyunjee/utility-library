import { describe, it, expect } from 'vitest';
import { isRange } from 'lib/utility/guard/isRange';

describe('isRange 함수 테스트', () => {
  it('주어진 숫자가 범위 내에 있으면 true를 반환해야 한다', () => {
    expect(isRange(5, 0, 10)).toBe(true);
    expect(isRange(0, 0, 10)).toBe(true);
    expect(isRange(10, 0, 10)).toBe(true);
  });

  it('주어진 숫자가 범위를 벗어나면 false를 반환해야 한다', () => {
    expect(isRange(-1, 0, 10)).toBe(false);
    expect(isRange(11, 0, 10)).toBe(false);
  });

  it('최소값과 최대값이 같은 경우에도 정상 작동해야 한다', () => {
    expect(isRange(5, 5, 5)).toBe(true);
    expect(isRange(4, 5, 5)).toBe(false);
    expect(isRange(6, 5, 5)).toBe(false);
  });

  it('소수점 숫자도 처리할 수 있어야 한다', () => {
    expect(isRange(3.14, 3, 4)).toBe(true);
    expect(isRange(2.99, 3, 4)).toBe(false);
  });

  it('타입 가드로 사용할 수 있어야 한다', () => {
    function processNumber(value: number) {
      if (isRange(value, 0, 100)) {
        return '유효한 범위입니다';
      }
      return '유효하지 않은 범위입니다';
    }

    expect(processNumber(50)).toBe('유효한 범위입니다');
    expect(processNumber(150)).toBe('유효하지 않은 범위입니다');
  });
});