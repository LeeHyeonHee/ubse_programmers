/**
 * 프로그래머스 Level 2
 * 행렬의 곱셉
 */
function solution(arr1, arr2) {
  var answer = [];
  let row = arr1.length;
  let col1 = arr1[0].length;
  let col2 = arr2[0].length;

  for (let l = 0; l < row; l++) {
    answer.push([]);
    for (let m = 0; m < col2; m++) {
      answer[l].push(0);
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col2; j++) {
      for (let k = 0; k < col1; k++) {
        answer[i][j] = answer[i][j] + arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
}
