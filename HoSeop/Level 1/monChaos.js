/**
 * 프로그래머스 Level 1
 * 이상한 문자 만들기
 */

function solution(s) {
  var answer = '';
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      count = 0;
      answer += ' ';
    } else {
      if (count % 2 === 0) {
        answer += s[i].toUpperCase();
      } else if (count % 2 === 1) {
        answer += s[i].toLowerCase();
      }
      count += 1;
    }
  }
  return answer;
}
