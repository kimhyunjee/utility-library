/**
 * 주어진 데이터가 null 또는 undefined인지 확인하는 함수
 *
 * @param {unknown} data - 검사할 데이터
 * @returns {boolean} 데이터가 null 또는 undefined이면 true, 아니면 false
 * @category Type Check - primitive
 *
 * @example 기본 사용
 * console.log(isNullish(null)); // true
 * console.log(isNullish(undefined)); // true
 * console.log(isNullish(0)); // false
 * console.log(isNullish('')); // false
 *
 * @example 변수 타입 확인
 * let value: unknown = null;
 * if (isNullish(value)) {
 *   console.log('value는 null 또는 undefined입니다');
 * } else {
 *   console.log('value는 null 또는 undefined가 아닙니다');
 * }
 *
 * @example Optional chaining과 함께 사용
 * const obj: { prop?: { nestedProp?: string } } = {};
 * if (isNullish(obj.prop?.nestedProp)) {
 *   console.log('nestedProp은 null 또는 undefined입니다');
 * } else {
 *   console.log('nestedProp의 값:', obj.prop?.nestedProp);
 * }
 *
 * @example 타입 가드로 사용
 * function processValue(value: string | null | undefined) {
 *   if (isNullish(value)) {
 *     console.log('값이 null 또는 undefined입니다');
 *     return;
 *   }
 *   // 이 시점에서 TypeScript는 value를 string 타입으로 인식합니다
 *   console.log('값의 길이:', value.length);
 * }
 */
export function isNullish(data: unknown): data is null | undefined {
    return data == null;
}