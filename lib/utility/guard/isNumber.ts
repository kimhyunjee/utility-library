/**
 * 주어진 데이터가 Number 타입인지 확인하는 함수
 * 
 * @param {unknown} data - 검사할 데이터
 * @returns {boolean} 데이터가 Number 타입이고 NaN이 아니면 true, 그렇지 않으면 false
 * @category Type Check - primitive
 * 
 * @example 기본 사용
 * console.log(isNumber(42)); // true
 * console.log(isNumber(3.14)); // true
 * console.log(isNumber(-10)); // true
 * 
 * @example 다른 타입과 비교
 * console.log(isNumber('42')); // false
 * console.log(isNumber(true)); // false
 * console.log(isNumber(null)); // false
 * 
 * @example NaN 처리
 * console.log(isNumber(NaN)); // false
 * console.log(isNumber(Number.NaN)); // false
 * 
 * @example 변수 타입 확인
 * let value: unknown = 100;
 * if (isNumber(value)) {
 *   // 이 블록 내에서 TypeScript는 value를 number 타입으로 인식합니다
 *   console.log(value.toFixed(2));
 * } else {
 *   console.log('value는 Number가 아닙니다');
 * }
 * 
 * @example Infinity 처리
 * console.log(isNumber(Infinity)); // true
 * console.log(isNumber(-Infinity)); // true
 */
export function isNumber(data: unknown): data is number {
    return typeof data === 'number' && !isNaN(data);
}