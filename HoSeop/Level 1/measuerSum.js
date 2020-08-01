/**
 * 프로그래머스 Level 1
 * 문자열 내림차순으로 배치하기
 */
function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}
