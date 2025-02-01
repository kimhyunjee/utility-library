import { describe, it, expect } from 'vitest';
import { isError } from 'lib/utility/guard/isError';

describe('isError 함수 테ㅡ트', () => {
  it('Error 객체가 전달되면 true를 반환해야 한다', () => {
    expect(isError(new Error())).toBe(true);
    expect(isError(new Error('테스트 에러'))).toBe(true);
    expect(isError(new TypeError('타입 에러'))).toBe(true);
  });

  it('커스텀 Error 객체도 true를 반환해야 한다', () => {
    class CustomError extends Error {}
    expect(isError(new CustomError('커스텀 에러'))).toBe(true);
  });

  it('Error 객체가 아닌 값이 전달되면 false를 반환해야 한다', () => {
    expect(isError('에러 메시지')).toBe(false);
    expect(isError({})).toBe(false);
    expect(isError(null)).toBe(false);
    expect(isError(undefined)).toBe(false);
    expect(isError(42)).toBe(false);
    expect(isError(true)).toBe(false);
    expect(isError([])).toBe(false);
    expect(isError(() => {})).toBe(false);
  });

  it('타입 가드로 사용할 수 있어야 한다', () => {
    function processError(data: unknown) {
      if (isError(data)) {
        return data.message;
      }
      return '에러가 아닙니다';
    }

    expect(processError(new Error('테스트 에러'))).toBe('테스트 에러');
    expect(processError('not an error')).toBe('에러가 아닙니다');
  });

  it('try-catch 블록에서 사용할 수 있어야 한다', () => {
    try {
      throw new Error('의도적인 에러');
    } catch (e) {
      expect(isError(e)).toBe(true);
      if (isError(e)) {
        expect(e.message).toBe('의도적인 에러');
      }
    }
  });
});