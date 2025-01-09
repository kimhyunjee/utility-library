import { describe, expect, it } from 'vitest'
import { isArrayLike } from 'lib/utility/guard/isArraryLike'

describe('isArrayLike 함수', () => {
  it('배열은 true를 반환한다', () => {
    expect(isArrayLike([])).toBe(true)
    expect(isArrayLike([1, 2, 3])).toBe(true)
  })

  it('문자열은 true를 반환한다', () => {
    expect(isArrayLike('')).toBe(true)
    expect(isArrayLike('abc')).toBe(true)
  })

  it('유사 배열 객체는 true를 반환한다', () => {
    expect(isArrayLike({ length: 0 })).toBe(true)
    expect(isArrayLike({ 0: 'a', 1: 'b', length: 2 })).toBe(true)
  })

  it('null과 undefined는 false를 반환한다', () => {
    expect(isArrayLike(null)).toBe(false)
    expect(isArrayLike(undefined)).toBe(false)
  })

  it('함수는 false를 반환한다', () => {
    expect(isArrayLike(() => {})).toBe(false)
    expect(isArrayLike(function() {})).toBe(false)
  })

  it('일반 객체는 false를 반환한다', () => {
    expect(isArrayLike({})).toBe(false)
    expect(isArrayLike({ a: 1, b: 2 })).toBe(false)
  })

  it('음수 length를 가진 객체는 false를 반환한다', () => {
    expect(isArrayLike({ length: -1 })).toBe(false)
  })

  it('소수 length를 가진 객체는 false를 반환한다', () => {
    expect(isArrayLike({ length: 1.5 })).toBe(false)
  })

  it('length가 0인 객체는 true를 반환한다', () => {
    expect(isArrayLike({ length: 0 })).toBe(true)
  })

  it('인덱스로 접근 불가능한 객체는 false를 반환한다', () => {
    expect(isArrayLike({ length: 1 })).toBe(false)
  })
})