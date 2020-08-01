/**
 * 프로그래머스 Level 1
 * 자릿수 더하기
 */

function solution(n) {
  var answer = 0;
  var str = '';
  str = n.toString();
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    answer = answer + parseInt(str[i]);
  }

  return answer;
}
