/**
 * 주어진 데이터가 Promise 객체인지 확인하는 함수입니다.
 * 
 * @template T - Promise가 resolve될 때 반환할 값의 타입
 * @param {unknown} data - 검사할 데이터
 * @returns {boolean} 데이터가 Promise 객체이면 true, 아니면 false
 * @category Type Check - Promise
 * 
 * @example 기본 사용
 * const promise = Promise.resolve(42);
 * console.log(isPromise(promise)); // true
 * console.log(isPromise(42)); // false
 * 
 * @example 비동기 함수와 함께 사용
 * async function fetchData() {
 *   return 'data';
 * }
 * const result = fetchData();
 * console.log(isPromise(result)); // true
 * 
 * @example 타입 가드로 사용
 * function processData(data: unknown) {
 *   if (isPromise<string>(data)) {
 *     // 이 블록 내에서 TypeScript는 data를 Promise<string> 타입으로 인식합니다
 *     data.then(result => console.log(result.toUpperCase()));
 *   } else {
 *     console.log('데이터가 Promise가 아닙니다');
 *   }
 * }
 * 
 * @example 에러 처리
 * const rejectedPromise = Promise.reject(new Error('오류 발생'));
 * console.log(isPromise(rejectedPromise)); // true (rejected Promise도 여전히 Promise 객체입니다)
 * 
 * @example 다른 타입과 비교
 * console.log(isPromise({})); // false
 * console.log(isPromise(() => {})); // false
 * console.log(isPromise(null)); // false
 * 
 * @note 이 함수는 `instanceof` 연산자를 사용하여 Promise 객체를 확인합니다. 
 * 따라서 Promise-like 객체(thenable)는 감지하지 못할 수 있습니다.
 */
export function isPromise<T = unknown>(data: unknown): data is Promise<T> {
    return data instanceof Promise;
}
