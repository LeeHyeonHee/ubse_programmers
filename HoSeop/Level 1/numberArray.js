/**
 * 프로그래머스 Level 1
 * 자연수 뒤집어 배열로 만들기
 */
function solution(n) {
  var answer = [];
  let num = String(n)
    .split('')
    .reverse((a, b) => b - a);
  for (let i = 0; i < num.length; i++) {
    answer.push(parseInt(num[i]));
  }
  return answer;
}
