import { describe, test, expect } from 'vitest';
import { isObject } from 'lib/utility/guard/isObject'; 

describe('isObject 함수 테스트', () => {
  // 객체로 인식되어야 하는 케이스들
  test('일반적인 객체는 true를 반환해야 함', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject(new Object())).toBe(true);
  });

  test('배열은 객체이므로 true를 반환해야 함', () => {
    expect(isObject([])).toBe(true);
    expect(isObject([1, 2, 3])).toBe(true);
    expect(isObject(new Array())).toBe(true);
  });

  test('함수는 true를 반환해야 함', () => {
    expect(isObject(() => {})).toBe(true);
    expect(isObject(function() {})).toBe(true);
    expect(isObject(new Function())).toBe(true);
  });

  test('클래스 인스턴스는 true를 반환해야 함', () => {
    class TestClass {}
    expect(isObject(new TestClass())).toBe(true);
  });

  test('내장 객체들은 true를 반환해야 함', () => {
    expect(isObject(new Date())).toBe(true);
    expect(isObject(new RegExp(''))).toBe(true);
    expect(isObject(new Map())).toBe(true);
    expect(isObject(new Set())).toBe(true);
  });

  // 객체가 아닌 케이스들
  test('null은 false를 반환해야 함', () => {
    expect(isObject(null)).toBe(false);
  });

  test('기본 타입들은 false를 반환해야 함', () => {
    expect(isObject(undefined)).toBe(false);
    expect(isObject(42)).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(false)).toBe(false);
    expect(isObject(Symbol())).toBe(false);
    expect(isObject(BigInt(42))).toBe(false);
  });

  test('객체 래퍼 타입의 기본값들은 false를 반환해야 함', () => {
    expect(isObject(String('test'))).toBe(false);
    expect(isObject(Number(123))).toBe(false);
    expect(isObject(Boolean(true))).toBe(false);
  });
});