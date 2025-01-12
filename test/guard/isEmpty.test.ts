import { isEmpty } from 'lib/utility/guard/isEmpty';
import { describe, expect, it } from 'vitest';

describe('isEmpty 함수 테스트', () => {
  it('null과 undefined는 비어있는 것으로 처리해야 하므로 true', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('빈 문자열과 공백 문자열은 비어있는 것으로 처리해야 하므로 true', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('   ')).toBe(true);
  });

  it('비어있지 않은 문자열은 false', () => {
    expect(isEmpty('hello')).toBe(false);
  });

  it('빈 배열은 비어있는 것으로 처리해야 한다', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('요소가 있는 배열은 false를 반환해야 한다', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it('빈 객체는 비어있는 것으로 처리해야 한다', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('속성이 있는 객체는 false를 반환해야 한다', () => {
    expect(isEmpty({ key: 'value' })).toBe(false);
  });

  it('빈 Set과 Map은 비어있는 것으로 처리해야 한다', () => {
    expect(isEmpty(new Set())).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
  });

  it('요소가 있는 Set과 Map은 false를 반환해야 한다', () => {
    expect(isEmpty(new Set([1]))).toBe(false);
    expect(isEmpty(new Map([['key', 'value']]))).toBe(false);
  });

  it('WeakSet과 WeakMap은 항상 false를 반환해야 한다', () => {
    expect(isEmpty(new WeakSet())).toBe(false);
    expect(isEmpty(new WeakMap())).toBe(false);
  });

  it('Symbol은 항상 false를 반환해야 한다', () => {
    expect(isEmpty(Symbol())).toBe(false);
  });

  it('Promise는 항상 false를 반환해야 한다', () => {
    expect(isEmpty(Promise.resolve())).toBe(false);
  });

  it('유효한 Date 객체는 false를 반환해야 한다', () => {
    expect(isEmpty(new Date())).toBe(false);
  });

  it('유효하지 않은 Date 객체는 true를 반환해야 한다', () => {
    expect(isEmpty(new Date('Invalid Date'))).toBe(true);
  });

  it('RegExp는 항상 false를 반환해야 한다', () => {
    expect(isEmpty(/test/)).toBe(false);
    expect(isEmpty(new RegExp(''))).toBe(false);
  });

  it('Error 객체는 메시지가 비어있을 때만 true를 반환해야 한다', () => {
    expect(isEmpty(new Error(''))).toBe(true);
    expect(isEmpty(new Error('message'))).toBe(false);
  });

  it('함수는 항상 false를 반환해야 한다', () => {
    expect(isEmpty(() => {})).toBe(false);
    expect(isEmpty(function() {})).toBe(false);
  });

  it('Node.js 환경에서만 테스트', () => {
    if (typeof Buffer !== 'undefined') {
      expect(isEmpty(Buffer.from(''))).toBe(true);
      expect(isEmpty(Buffer.from('test'))).toBe(false);
    }
  });

  it('브라우저 환경에서만 테스트', () => {
    if (typeof Blob !== 'undefined') {
      expect(isEmpty(new Blob([]))).toBe(true);
      expect(isEmpty(new Blob(['test']))).toBe(false);
    }
  });
});