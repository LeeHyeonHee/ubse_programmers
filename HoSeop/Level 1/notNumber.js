/**
 * 프로그래머스 Level 1
 * 같은숫자는 싫어
 * @param {array} arr
 */

const solution = (arr) => {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.length > 0) {
      arr[i] !== arr[i + 1] && answer.push(arr[i]);
    } else {
      answer.push(arr[i]);
    }
  }

  return answer;
};
