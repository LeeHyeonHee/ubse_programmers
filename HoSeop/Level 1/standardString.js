/**
 * 프로그래머스 Level 1
 * 문자열 다루기 기본
 */

function solution(s) {
  var answer = false;
  if ((s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s)) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
