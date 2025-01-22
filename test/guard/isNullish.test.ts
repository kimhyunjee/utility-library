import { describe, it, expect } from 'vitest';
import { isNullish } from 'lib/utility/guard/isNullish';

describe('isNullish 함수 테스트', () => {
  it('null과 undefined에 대해 true를 반환해야 한다', () => {
    expect(isNullish(null)).toBe(true);
    expect(isNullish(undefined)).toBe(true);
  });

  it('null과 undefined가 아닌 값에 대해 false를 반환해야 한다', () => {
    expect(isNullish(0)).toBe(false);
    expect(isNullish('')).toBe(false);
    expect(isNullish(false)).toBe(false);
    expect(isNullish({})).toBe(false);
    expect(isNullish([43534,21313,213])).toBe(false);
    expect(isNullish(NaN)).toBe(false);
    expect(isNullish(Infinity)).toBe(false);
    expect(isNullish(/regex/)).toBe(false);
    expect(isNullish(new Error())).toBe(false);
    expect(isNullish(() => {})).toBe(false);
    expect(isNullish(console.log)).toBe(false);
    expect(isNullish(Symbol('test'))).toBe(false);
    expect(isNullish(BigInt(1))).toBe(false);

    const complexObj = {
      a: {
        b: [1, 2, { c: 3 }]
      }
    };
    expect(isNullish(complexObj)).toBe(false);
    expect(isNullish(complexObj.a.b[2])).toBe(false);

    expect(isNullish(Promise.resolve())).toBe(false);
  });

  it('Optional chaining과 함께 사용할 수 있어야 한다', () => {
    const obj: { prop?: { nestedProp?: string } } = {};
    expect(isNullish(obj.prop?.nestedProp)).toBe(true);

    obj.prop = { nestedProp: 'value' };
    expect(isNullish(obj.prop?.nestedProp)).toBe(false);
  });

  it('타입 가드로 사용할 수 있어야 한다', () => {
    function processValue(value: string | null | undefined): string {
      if (isNullish(value)) {
        return '값이 null 또는 undefined입니다';
      }
      return `값의 길이: ${value.length}`;
    }

    expect(processValue(null)).toBe('값이 null 또는 undefined입니다');
    expect(processValue(undefined)).toBe('값이 null 또는 undefined입니다');
    expect(processValue('test')).toBe('값의 길이: 4');
  });
});