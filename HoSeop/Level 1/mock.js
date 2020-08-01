/**
 * 프로그래머스 Level 1
 * 모의고사
 */
function solution(answers) {
  var answer = [];
  let num1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  let num2 = [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5];
  let num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let a = answers.filter((element, i) => element === num1[i % num1.length])
    .length;
  let b = answers.filter((element, i) => element === num2[i % num2.length])
    .length;
  let c = answers.filter((element, i) => element === num3[i % num3.length])
    .length;

  let countMax = Math.max(a, b, c);
  if (a === countMax) {
    answer.push(1);
  }
  if (b === countMax) {
    answer.push(2);
  }
  if (c === countMax) {
    answer.push(3);
  }
  return answer;
}
