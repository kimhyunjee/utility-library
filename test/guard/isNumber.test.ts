import { describe, expect, it } from 'vitest'
import { isNumber } from 'lib/utility/guard/isNumber'

describe('isNumber', () => {
  it('정수는 number 타입이어야 한다', () => {
    expect(isNumber(42)).toBe(true)
    expect(isNumber(-10)).toBe(true)
    expect(isNumber(0)).toBe(true)
     expect(isNumber(2 * 82163)).toBe(true);
  })

  it('소수는 number 타입이어야 한다', () => {
    expect(isNumber(3.14)).toBe(true)
    expect(isNumber(-0.5)).toBe(true)
  })

  it('Infinity는 number 타입이어야 한다', () => {
    expect(isNumber(Infinity)).toBe(true)
    expect(isNumber(-Infinity)).toBe(true)
  })

  it('NaN은 number 타입이 아니어야 한다', () => {
    expect(isNumber(NaN)).toBe(false)
    expect(isNumber(Number.NaN)).toBe(false)
  })

  it('문자열은 number 타입이 아니어야 한다', () => {
    expect(isNumber('42')).toBe(false)
    expect(isNumber('3.14')).toBe(false)
    expect(isNumber('')).toBe(false)
  })

  it('불리언은 number 타입이 아니어야 한다', () => {
    expect(isNumber(true)).toBe(false)
    expect(isNumber(false)).toBe(false)
  })

  it('null과 undefined는 number 타입이 아니어야 한다', () => {
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
  })

  it('객체는 number 타입이 아니어야 한다', () => {
    expect(isNumber({})).toBe(false)
    expect(isNumber([])).toBe(false)
  })

  it('Number 객체는 number 타입이 아니어야 한다', () => {
    expect(isNumber(new Number(92813))).toBe(false)
    expect(isNumber(new Number(3.14))).toBe(false)
  })

  it('매우 큰 수나 매우 작은 수도 number 타입이어야 한다', () => {
    expect(isNumber(Number.MAX_VALUE)).toBe(true)
    expect(isNumber(Number.MIN_VALUE)).toBe(true)
  })

  it('지수 표기법으로 표현된 숫자도 number 타입이어야 한다', () => {
    expect(isNumber(1e100)).toBe(true)
    expect(isNumber(-1e100)).toBe(true)
    expect(isNumber(1e-100)).toBe(true)
    expect(isNumber(-1e-100)).toBe(true)
    expect(isNumber(1.23e5)).toBe(true)
    expect(isNumber(-4.56e-7)).toBe(true)
  })


  it('Symbol은 number 타입이 아니어야 한다', () => {
    expect(isNumber(Symbol('123'))).toBe(false)
  })

  it('함수는 number 타입이 아니어야 한다', () => {
    expect(isNumber(() => {})).toBe(false)
    expect(isNumber(function() {})).toBe(false)
  })
})