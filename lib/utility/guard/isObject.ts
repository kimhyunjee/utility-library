/**
 * 주어진 값이 Object 타입인지 확인하는 함수입니다.
 * 이 함수는 null이 아닌 모든 Object와 Function을 Object로 간주합니다.
 *
 * @param {unknown} value - 검사할 값
 * @returns {boolean} 값이 Object 타입이면 true, 아니면 false
 * @category Type Check - Object
 *
 * @example 기본 사용
 * console.log(isObject({})); // true
 * console.log(isObject([])); // true
 * console.log(isObject(new Date())); // true
 * console.log(isObject(() => {})); // true
 *
 * @example 다른 타입과 비교
 * console.log(isObject(null)); // false
 * console.log(isObject(42)); // false
 * console.log(isObject('string')); // false
 * console.log(isObject(true)); // false
 *
 * @example 변수 타입 확인
 * let value: unknown = { key: 'value' };
 * if (isObject(value)) {
 *   // 이 블록 내에서 TypeScript는 value를 object 타입으로 인식합니다
 *   console.log(Object.keys(value));
 * } else {
 *   console.log('value는 Object가 아닙니다');
 * }
 *
 * @example Function 타입 확인
 * function testFunction() {}
 * console.log(isObject(testFunction)); // true
 *
 * @note 이 함수는 null을 Object로 간주하지 않습니다. 
 * JavaScript에서 typeof null은 'object'를 반환하지만, 
 * 이 함수는 명시적으로 null을 제외합니다.
 */
export function isObject(value: unknown): value is object {
    return typeof value === 'object' && value !== null || typeof value === 'function';
}