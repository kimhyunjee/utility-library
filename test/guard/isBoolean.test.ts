import { describe, expect, it } from 'vitest'
import { isBoolean } from 'lib/utility/guard/isBoolean'

describe('isBoolean 함수 테스트', () => {
  // 1. 기본 Boolean 값 테스트
  it('true는 boolean 타입이어야 한다', () => {
    expect(isBoolean(true)).toBe(true)
  })

  it('false는 boolean 타입이어야 한다', () => {
    expect(isBoolean(false)).toBe(true)
  })

  // 2. Boolean 객체 테스트
  it('new Boolean()으로 생성된 객체는 boolean 타입이 아니어야 한다', () => {
    expect(isBoolean(new Boolean(true))).toBe(false)
  })

  // 3. 다른 타입들 테스트
  it('숫자는 boolean 타입이 아니어야 한다', () => {
    expect(isBoolean(1)).toBe(false)
    expect(isBoolean(0)).toBe(false)
  })

  it('문자열은 boolean 타입이 아니어야 한다', () => {
    expect(isBoolean('true')).toBe(false)
    expect(isBoolean('false')).toBe(false)
  })

  it('null은 boolean 타입이 아니어야 한다', () => {
    expect(isBoolean(null)).toBe(false)
  })

  it('undefined는 boolean 타입이 아니어야 한다', () => {
    expect(isBoolean(undefined)).toBe(false)
  })

  it('객체는 boolean 타입이 아니어야 한다', () => {
    expect(isBoolean({})).toBe(false)
  })

  it('배열은 boolean 타입이 아니어야 한다', () => {
    expect(isBoolean([])).toBe(false)
  })
})