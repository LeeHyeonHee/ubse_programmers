/**
 * 프로그래머스 Level 1
 * 약수의 합
 */

function solution(s) {
  return s
    .split('')
    .sort()
    .reverse()
    .join('');
}
