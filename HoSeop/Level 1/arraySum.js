/**
 * 프로그래머스 Level 1
 * 행렬의 덧셈
 */
function solution(arr1, arr2) {
  var answer = [[]];
  answer = arr1.map((arr, i) => arr.map((num, j) => num + arr2[i][j]));

  return answer;
}
