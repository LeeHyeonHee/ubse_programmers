/**
 * 프로그래머스 Level 1
 * 수박수박수박수박수박수박수박?
 */

function solution(n) {
  return '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');
}
