/**
 * 주어진 값이 Boolean 타입인지 확인하는 함수입니다
 * 
 * @param {unknown} value - 검사할 값
 * @returns {boolean} Boolean 타입이면 true, 아니면 false를 반환합니다
 * @category Type Check - primitive
 * 
 * @example 기본 사용
 * console.log(isBoolean(true)); // true
 * console.log(isBoolean(false)); // true
 * 
 * @example Boolean 객체와 비교
 * console.log(isBoolean(new Boolean(true))); // false
 * // Boolean 객체는 primitive type이 아니므로 false를 반환합니다
 * 
 * @example 다른 타입과 비교
 * console.log(isBoolean(1)); // false
 * console.log(isBoolean('true')); // false
 * console.log(isBoolean(null)); // false
 * console.log(isBoolean(undefined)); // false
 * 
 * @example 타입 가드로 사용
 * const value: unknown = true;
 * if (isBoolean(value)) {
 *   // 이 블록 내에서 TypeScript는 value를 boolean 타입으로 인식합니다
 *   const result: string = value.toString();
 *   console.log(result); // "true"
 * } else {
 *   console.log('value는 Boolean이 아닙니다');
 * }
 */

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}