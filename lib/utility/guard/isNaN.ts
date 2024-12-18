/**
 * 주어진 값이 NaN인지 확인하는 함수입니다.
 * 
 * @param {unknown} value - 검사할 값
 * @returns {boolean} 값이 NaN이면 true, 아니면 false
 * @category Type Check - Number
 * 
 * @example 기본 사용
 * console.log(isNaN(NaN)); // true
 * console.log(isNaN(1)); // false
 * 
 * @example 다양한 타입과 비교
 * console.log(isNaN('NaN')); // false
 * console.log(isNaN(undefined)); // false
 * console.log(isNaN({})); // false
 * 
 * @example 계산 결과 확인
 * console.log(isNaN(0 / 0)); // true
 * console.log(isNaN(1 / 0)); // false (Infinity)
 * 
 * @example 변수 타입 확인
 * let value: unknown = NaN;
 * if (isNaN(value)) {
 *   console.log('value는 NaN입니다');
 * } else {
 *   console.log('value는 NaN이 아닙니다');
 * }
 * 
 * @note 이 함수는 JavaScript의 isNaN() 함수와 다르게 동작합니다.
 * isNaN() 함수는 몇몇 혼란스러운 케이스를 가지고 있으므로, JavaScript 내장 메서드를 사용할 시에는 ECMAScript 2015에서 추가한 Number.isNaN()을 사용하는 편이 좋습니다.
 * 이 함수는 NaN인지 아닌지만 확인합니다.
 * 
 * 혼란스러운 케이스 example
 * console.log(isNaN('wtf')) // 무엇이 나올까요?? => true
 *  
 * NaN는 비교 연산자( ==, === )를 사용해 판별할 수 없는 JavaScript의 유일한 값입니다.
 * NaN == NaN , NaN === NaN => false 로 나오기 때문에 NaN판별 함수가 필요합니다.
 */

export function isNaN(value: unknown): boolean {
    return value !== value;
}