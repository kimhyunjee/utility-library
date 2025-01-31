/**
 * 주어진 데이터가 Error 객체인지 확인하는 함수입니다.
 * 
 * @param {unknown} data - 검사할 데이터
 * @returns {boolean} 데이터가 Error 객체이면 true, 아니면 false
 * @category Type Check - Error
 * 
 * @example 기본 사용
 * console.log(isError(new Error('테스트 에러'))); // true
 * console.log(isError('에러 메시지')); // false
 * 
 * @example 다른 타입과 비교
 * console.log(isError({})); // false
 * console.log(isError(null)); // false
 * console.log(isError(undefined)); // false
 * 
 * @example 커스텀 에러 클래스 사용
 * class CustomError extends Error {}
 * console.log(isError(new CustomError('커스텀 에러'))); // true
 * 
 * @example 타입 가드로 사용
 * function handlePossibleError(data: unknown) {
 *   if (isError(data)) {
 *     // 이 블록 내에서 TypeScript는 data를 Error 타입으로 인식합니다
 *     console.log('에러 메시지:', data.message);
 *   } else {
 *     console.log('데이터는 Error가 아닙니다');
 *   }
 * }
 * 
 * @example try-catch 블록에서 사용
 * try {
 *   throw new Error('의도적인 에러');
 * } catch (e) {
 *   if (isError(e)) {
 *     console.log('캐치된 에러:', e.message);
 *   } else {
 *     console.log('알 수 없는 예외가 발생했습니다');
 *   }
 * }
 */
export function isError(data: unknown): data is Error {
    return data instanceof Error;
}