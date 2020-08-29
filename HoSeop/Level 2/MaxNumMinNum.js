/**
 * 프로그래머스 Level 2
 * 최대값과 최솟값
 */
function solution(s) {
  var answer = '';
  let array = s.split(' ').sort((a, b) => {
    return a - b;
  });
  answer = array[0] + ' ' + array[array.length - 1];
  return answer;
}
