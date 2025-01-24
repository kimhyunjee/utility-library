/**
 * 주어진 값이 유효한 Date 객체인지 확인하는 타입 가드 함수입니다.
 * 
 * @param {unknown} value - 검사할 값
 * @returns {boolean} 값이 유효한 Date 객체이면 true, 아니면 false를 반환합니다.
 * @category Type Check - Object
 * 
 * @example 기본 사용
 * console.log(isDate(new Date())); // true
 * console.log(isDate('2023-05-01')); // false
 * 
 * @example 유효하지 않은 Date 객체 처리
 * console.log(isDate(new Date('invalid date'))); // false
 * 
 * @example 다양한 타입과 비교
 * console.log(isDate({})); // false
 * console.log(isDate(null)); // false
 * console.log(isDate(undefined)); // false
 * 
 * @example 타입 가드로 사용
 * const value: unknown = new Date();
 * if (isDate(value)) {
 *   // 이 블록 내에서 TypeScript는 value를 Date 타입으로 인식합니다
 *   console.log(value.toISOString());
 * } else {
 *   console.log('value는 유효한 Date 객체가 아닙니다');
 * }
 * 
 * @example 잘못된 Date 객체 처리
 * const invalidDate = new Date('2023-13-32');
 * console.log(isDate(invalidDate)); // false
 */

export function isDate(value: unknown): value is Date {
  return (
    value instanceof Date &&
    !isNaN(value.getTime())
  );
}


