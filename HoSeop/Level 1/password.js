/**
 * 프로그래머스 Leval 1
 * 시저 암호
 */

function solution(s, n) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    let code = s[i].charCodeAt();
    if (code >= 97 && code <= 122) {
      let ascil = code + n;
      if (ascil > 122) {
        answer += String.fromCharCode(ascil - 26);
      } else {
        answer += String.fromCharCode(ascil);
      }
    } else if (code >= 65 && code <= 90) {
      let ascil = code + n;
      if (ascil > 90) {
        answer += String.fromCharCode(ascil - 26);
      } else {
        answer += String.fromCharCode(ascil);
      }
    } else if (s[i] === ' ') {
      answer += ' ';
    }
  }
  console.log(answer);
  return answer;
}
