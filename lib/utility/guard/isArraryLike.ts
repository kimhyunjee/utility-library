import { isArray } from 'lib/utility/guard/isArray';

/**
 * 주어진 객체가 유사 배열(array-like) 객체인지 확인합니다.
 * 유사 배열 객체는 length 속성을 가지고 있으며 숫자 인덱스로 요소에 접근할 수 있는 객체입니다.
 *
 * @param {any} obj - 검사할 객체
 * @returns {boolean} 객체가 유사 배열이면 true, 아니면 false
 * @category Type Check - Object
 *
 * @example 기본 사용
 * console.log(isArrayLike([1, 2, 3])); // true
 * console.log(isArrayLike('문자열')); // true
 * console.log(isArrayLike({ length: 3, 0: 'a', 1: 'b', 2: 'c' })); // true
 *
 * @example 유사 배열이 아닌 경우
 * console.log(isArrayLike(null)); // false
 * console.log(isArrayLike(undefined)); // false
 * console.log(isArrayLike(() => {})); // false
 * console.log(isArrayLike({ a: 1, b: 2 })); // false
 *
 * @example length 속성 검사
 * console.log(isArrayLike({ length: -1 })); // false
 * console.log(isArrayLike({ length: 1.5 })); // false
 * console.log(isArrayLike({ length: 0 })); // true
 *
 * @example 타입 가드로 사용
 * function processArrayLike(obj: any) {
 *   if (isArrayLike(obj)) {
 *     // 이 블록 내에서 obj는 유사 배열로 취급됩니다
 *     console.log(`유사 배열의 길이: ${obj.length}`);
 *   } else {
 *     console.log('유사 배열이 아닙니다');
 *   }
 * }
 *
 * @note  성능에 민감한 작업에서 주의!!
 * 객체의 여러 속성을 확인하므로 큰 객체나 깊은 프로토타입 체인을 가진 객체에 대해
 * 성능 저하가 발생할 수 있습니다.
 */

export function isArrayLike(obj:any): boolean {
    // null이나 undefined는 false
    if (obj == null) {
        return false;
    }

    // 함수는 length 프로퍼티를 가지지만 유사배열로 취급하지 않음
    if (typeof obj === 'function') {
        return false;
    }

    // 문자열은 유사배열
    if (typeof obj === 'string') {
        return true;
    }

    // length 프로퍼티가 없거나 음수면 false
    if (!('length' in obj) || obj.length < 0) {
        return false;
    }

    // length가 0이면 유사배열로 간주
    if (obj.length === 0) {
        return true;
    }

    // length가 정수가 아니면 false
    if (obj.length % 1 !== 0) {
        return false;
    }

    // isArray로 실제 배열은 true
    if (isArray(obj)) {
        return true;
    }

    // 유사배열 조건: 
    // 1. length 프로퍼티가 있고
    // 2. length가 0 이상의 정수이며
    // 3. 인덱스로 접근 가능해야 함
    return obj[0] !== undefined;
}