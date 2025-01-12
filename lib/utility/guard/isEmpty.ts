import { isNaN } from "lib/utility/guard/isNaN";


/**
 * 주어진 데이터가 비어있는지 확인하는 함수
 * 
 * @param {unknown} data - 검사할 값
 * @returns {boolean} 값이 비어있으면 true, 아니면 false
 * @throws {Error} Date 객체의 getTime() 메서드 호출 시 예외가 발생할 수 있음
 * @category Guard
 * 
 * @signature
 * isEmpty(data)
 * @example 기본 사용
 * console.log(isEmpty('')); // true
 * console.log(isEmpty([])); // true
 * console.log(isEmpty({})); // true
 * console.log(isEmpty(null)); // true
 * console.log(isEmpty(undefined)); // true
 * 
 * @example 다양한 타입 처리
 * console.log(isEmpty('  ')); // true (공백 문자열)
 * console.log(isEmpty(new Set())); // true
 * console.log(isEmpty(new Map())); // true
 * console.log(isEmpty(new Date('Invalid Date'))); // true
 * 
 * @example 비어있지 않은 경우
 * console.log(isEmpty('Hello')); // false
 * console.log(isEmpty([1, 2, 3])); // false
 * console.log(isEmpty({ key: 'value' })); // false
 * console.log(isEmpty(new Date())); // false
 * 
 * @example 특수한 타입 처리
 * console.log(isEmpty(Symbol())); // false
 * console.log(isEmpty(new WeakMap())); // false
 * console.log(isEmpty(new Promise(() => {}))); // false
 * console.log(isEmpty(() => {})); // false
 * 
 * @example Node.js Buffer와 Browser Blob 처리
 * if (typeof Buffer !== 'undefined') {
 *   console.log(isEmpty(Buffer.from(''))); // true
 *   console.log(isEmpty(Buffer.from('Hello'))); // false
 * }
 * if (typeof Blob !== 'undefined') {
 *   console.log(isEmpty(new Blob([]))); // true
 *   console.log(isEmpty(new Blob(['Hello']))); // false
 * }
 * 
 */


export function isEmpty(data: unknown) {
    // null, undefined 체크
    if (data == null) {
        return true;
    }

    if (typeof data === 'string') {
        return data.trim() === '';
    }

    if (Array.isArray(data)) {
        return data.length === 0;
    }

    if (typeof data === 'object') {
        return Object.keys(data).length === 0;
    }

    if (data instanceof Set || data instanceof Map) {
        return data.size === 0;
    }

    // WeakMap과 WeakSet은 .size를 지원하지 않아서 비어있는지 확인 불가
    // => 비어있지 않은 것으로 처리하여 항상 false를 반환
    if (data instanceof WeakSet || data instanceof WeakMap) {
        return false;
    }

    if (typeof data === 'symbol') {
        return false;
    }

    // Promise는 항상 상태를 가지므로 비어있지 않음
    if (data instanceof Promise) {
        return false; 
    }

    if (data instanceof Date) {
        return isNaN(data.getTime());
    }

    // RegExp는 항상 패턴을 가지므로 비어있지 않음
    if (data instanceof RegExp) {
        return data.source === '(?:)';
    }

    if (data instanceof Error) {
        return data.message === '';
    }

    // 함수는 비어있지 않은 것으로 처리
    if (typeof data === 'function') {
        return false;
    }

    // Node.js Buffer 체크
    if (typeof Buffer !== 'undefined' && Buffer.isBuffer(data)) {
        return data.length === 0;
    }

    // Browser Blob 체크
    if (typeof Blob !== 'undefined' && data instanceof Blob) {
        return data.size === 0;
    }

    // 기타 나머지는 비어있지 않은 것으로 처리
    return false;
}