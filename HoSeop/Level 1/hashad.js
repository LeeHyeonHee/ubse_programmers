/**
 * 프로그래머스 하샤드수 문제
 */
function solution(x) {
  var answer = 0;
  let array = String(x).split('');
  for (let i = 0; i < array.length; i++) {
    answer += Number(array[i]);
  }
  console.log(answer);
  return x % answer === 0 ? true : false;
}
