/**
 * 주어진 숫자가 지정된 범위 내에 있는지 확인하는 함수입니다.
 * 
 * @param {number} value - 검사할 숫자 값
 * @param {number} min - 범위의 최소값 (포함)
 * @param {number} max - 범위의 최대값 (포함)
 * @returns {boolean} 주어진 값이 지정된 범위 내에 있으면 true, 그렇지 않으면 false
 * @category Type Check - range
 * 
 * @example 기본 사용
 * console.log(isRange(5, 0, 10)); // true
 * console.log(isRange(15, 0, 10)); // false
 * 
 * @example 경계값 확인
 * console.log(isRange(0, 0, 10)); // true
 * console.log(isRange(10, 0, 10)); // true
 * 
 * @example 소수점 숫자 처리
 * console.log(isRange(3.14, 3, 4)); // true
 * console.log(isRange(2.99, 3, 4)); // false
 * 
 * @example 타입 가드로 사용
 * function processNumber(value: number) {
 *   if (isRange(value, 0, 100)) {
 *     return '유효한 범위입니다';
 *   }
 *   return '유효하지 않은 범위입니다';
 * }
 * console.log(processNumber(50)); // '유효한 범위입니다'
 * console.log(processNumber(150)); // '유효하지 않은 범위입니다'
 * 
 * @example 에러 처리
 * try {
 *   if (!isRange(userInput, 1, 10)) {
 *     throw new Error('입력값이 유효한 범위를 벗어났습니다');
 *   }
 *   // 유효한 입력 처리
 * } catch (error) {
 *   console.error(error.message);
 * }
 */
export function isRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}