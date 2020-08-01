/**
 * 프로그래머스 Level 1
 * 정수 제곱근 판별
 */

function solution(n) {
  var answer = 0;
  let sqrt = Math.sqrt(n);
  if (sqrt % 1 !== 0) {
    return -1;
  }

  return Math.pow(sqrt + 1, 2);
}
