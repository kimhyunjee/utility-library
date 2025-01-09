/**
 * 주어진 데이터가 Array 타입인지 확인하는 함수
 * 
 * @template T - Array의 요소 타입
 * @param {unknown} data - 검사할 데이터
 * @returns {boolean} 데이터가 Array 타입이면 true, 아니면 false
 * @category Type Check - complex
 * 
 * @example 기본 사용
 * console.log(isArray([1, 2, 3])); // true
 * console.log(isArray([])); // true
 * console.log(isArray({})); // false
 * 
 * @example 다양한 타입과 비교
 * console.log(isArray('string')); // false
 * console.log(isArray(42)); // false
 * console.log(isArray(null)); // false
 * console.log(isArray(undefined)); // false
 * 
 * @example 제네릭 타입 사용
 * const numbers: number[] = [1, 2, 3];
 * if (isArray<number>(numbers)) {
 *   // 이 블록 내에서 TypeScript는 numbers를 number[] 타입으로 인식합니다
 *   console.log(numbers.reduce((a, b) => a + b, 0));
 * } else {
 *   console.log('numbers는 Array가 아닙니다');
 * }
 * 
 * @example 타입 가드로 사용
 * function processData(data: unknown) {
 *   if (isArray<string>(data)) {
 *     // 이 블록 내에서 data는 string[] 타입으로 처리됩니다
 *     console.log(data.join(', '));
 *   } else {
 *     console.log('데이터가 String Array가 아닙니다');
 *   }
 * }
 * 
 * @example 복잡한 객체 구조에서 사용
 * const complexObject = { items: [1, 2, 3], meta: { count: 3 } };
 * console.log(isArray(complexObject.items)); // true
 * console.log(isArray(complexObject.meta)); // false
 */

export function isArray<T>(data: unknown): data is T[] {
    return Array.isArray(data);
}
