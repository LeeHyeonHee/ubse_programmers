/**
 * 프로그래머스 2016년 문제 풀이
 */

function solution(a, b) {
  let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  var answer = new Date(2016, a - 1, b);
  return days[answer.getDay()];
}
