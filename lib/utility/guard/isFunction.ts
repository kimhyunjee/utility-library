/**
 * 주어진 데이터가 Function 타입인지 확인하는 함수
 *
 * @param {unknown} data - 검사할 데이터
 * @returns {boolean} 데이터가 Function 타입이면 true, 아니면 false
 * @category Type Check - primitive
 *
 * @example 기본 사용
 * console.log(isFunction(() => {})); // true
 * console.log(isFunction(function() {})); // true
 * console.log(isFunction(Math.random)); // true
 *
 * @example 다른 타입과 비교
 * console.log(isFunction({})); // false
 * console.log(isFunction('function')); // false
 * console.log(isFunction(null)); // false
 *
 * @example 변수 타입 확인
 * let value: unknown = () => console.log('Hello');
 * if (isFunction(value)) {
 *   // 이 블록 내에서 TypeScript는 value를 Function 타입으로 인식합니다
 *   value();
 * } else {
 *   console.log('value는 Function이 아닙니다');
 * }
 *
 * @example 메서드 체크
 * const obj = {
 *   method: function() {}
 * };
 * console.log(isFunction(obj.method)); // true
 *
 * @example 생성자 함수 체크
 * class MyClass {}
 * console.log(isFunction(MyClass)); // true
 */
export function isFunction(data: unknown): data is Function {
    return typeof data === 'function';
}

