/**
 * 프로그래머스 Level 1
 * 제일 작은수 제거하기
 */
function solution(arr) {
  var answer = [];
  let arrNum = arr.toString();
  if (arr.length === 1) {
    answer.push(-1);
    return answer;
  }
  let min = Math.min.apply(null, arr);
  answer = arr.filter((element) => {
    return element !== min;
  });
  return answer;
}
