import { describe, expect, it } from 'vitest'
import { isArray } from 'lib/utility/guard/isArray'

describe('isArray 함수', () => {
  it('배열인 경우 true를 반환 한다', () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
    expect(isArray(['a', 'b', 'c'])).toBe(true)
    expect(isArray([{}, [], 42])).toBe(true)
  })

  it('배열이 아닌 경우 false를 반환한다', () => {
    expect(isArray({})).toBe(false)
    expect(isArray('string')).toBe(false)
    expect(isArray(42)).toBe(false)
    expect(isArray(true)).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(undefined)).toBe(false)
    expect(isArray(() => {})).toBe(false)
  })

  it('유사 배열 객체의 경우 false를 반환한다', () => {
    expect(isArray({ length: 0 })).toBe(false)
    expect(isArray({ 0: 'a', 1: 'b', length: 2 })).toBe(false)
  })

  it('제네릭 타입과 함께 사용할 수 있어야 한다', () => {
    const numbers: number[] = [1, 2, 3]
    expect(isArray<number>(numbers)).toBe(true)

    const strings: string[] = ['a', 'b', 'c']
    expect(isArray<string>(strings)).toBe(true)

    const mixed: (number | string)[] = [1, 'a', 2, 'b']
    expect(isArray<number | string>(mixed)).toBe(true)
  })
})