import { describe, it, expect } from 'vitest';
import { isFunction } from 'lib/utility/guard/isFunction'; // 실제 파일 경로에 맞게 수정해주세요

describe('isFunction', () => {
  it('함수가 전달되면 true를 반환해야 한다', () => {
    // 일반 함수
    function normalFunction() {}
    expect(isFunction(normalFunction)).toBe(true);

    // 화살표 함수
    const arrowFunction = () => {};
    expect(isFunction(arrowFunction)).toBe(true);

    // 메서드
    const obj = {
      method() {}
    };
    expect(isFunction(obj.method)).toBe(true);

    // 생성자 함수
    class TestClass {}
    expect(isFunction(TestClass)).toBe(true);

    // 내장 함수
    expect(isFunction(setTimeout)).toBe(true);
    expect(isFunction(console.log)).toBe(true);
  });

  it('함수가 아닌 값이 전달되면 false를 반환해야 한다', () => {
    // 기본 타입
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(42)).toBe(false);
    expect(isFunction('string')).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(Symbol())).toBe(false);
    expect(isFunction(123n)).toBe(false);

    // 객체 타입
    expect(isFunction({})).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction(new Date())).toBe(false);
    expect(isFunction(/regex/)).toBe(false);
    expect(isFunction(new Map())).toBe(false);
    expect(isFunction(new Set())).toBe(false);
  });
});