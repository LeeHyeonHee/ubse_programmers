/**
 * 프로그래머스 Level 2
 * 피보나치 수
 */
function solution(n) {
  var answer = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      answer.push(0);
    }
    if (i === 1) {
      answer.push(1);
    }
    if (i >= 2) {
      let pibo = answer[i - 1] + answer[i - 2];
      answer.push(pibo % 1234567);
    }
  }
  return answer[n];
}
