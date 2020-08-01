/**
 * 프로그래머스 Level 1
 * 나누어 떨어지는 숫자 배열
 */
function solution(arr, divisor) {
  let answer = [];
  answer = arr.filter((data) => {
    return data % divisor == 0;
  });
  if (answer.length === 0) {
    answer.push(-1);
  }
  answer.sort(function(a, b) {
    return a - b;
  });
  return answer;
}
