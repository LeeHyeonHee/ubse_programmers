/**
 * 프로그래머스 Level 2
 * 숫자의 표현
 */
function solution(n) {
  var answer = [];
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = i;
    if (sum === n) {
      answer.push(sum);
      break;
    }
    for (let j = i + 1; j <= n; j++) {
      sum = sum + j;
      if (sum == n) {
        answer.push(sum);
        break;
      } else if (sum > n) {
        break;
      }
    }
  }
  return answer.length;
}
