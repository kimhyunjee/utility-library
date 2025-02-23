import { describe, it, expect } from 'vitest';
import { isPromise } from 'lib/utility/guard/isPrimise'; 

describe('isPromise', () => {
  it('Promise.resolve()는 true를 반환해야 합니다', () => {
    expect(isPromise(Promise.resolve())).toBe(true);
  });

  it('Promise.reject()는 true를 반환해야 합니다', () => {
    expect(isPromise(Promise.reject().catch(() => {}))).toBe(true);
  });

  it('new Promise()는 true를 반환해야 합니다', () => {
    expect(isPromise(new Promise(() => {}))).toBe(true);
  });

  it('일반 객체는 false를 반환해야 합니다', () => {
    expect(isPromise({})).toBe(false);
  });

  it('then 메소드를 가진 객체는 false를 반환해야 합니다', () => {
    expect(isPromise({ then: () => {} })).toBe(false);
  });

  it('null은 false를 반환해야 합니다', () => {
    expect(isPromise(null)).toBe(false);
  });

  it('undefined는 false를 반환해야 합니다', () => {
    expect(isPromise(undefined)).toBe(false);
  });

  it('number는 false를 반환해야 합니다', () => {
    expect(isPromise(123)).toBe(false);
  });

  it('string은 false를 반환해야 합니다', () => {
    expect(isPromise('test')).toBe(false);
  });

  // 제네릭 타입 테스트
  it('특정 타입의 Promise를 올바르게 감지해야 합니다', () => {
    const numberPromise = Promise.resolve(123);
    const stringPromise = Promise.resolve('test');
    
    expect(isPromise<number>(numberPromise)).toBe(true);
    expect(isPromise<string>(stringPromise)).toBe(true);
  });
});