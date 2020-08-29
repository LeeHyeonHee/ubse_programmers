/**
 * 프로그래머스 Level 2
 * 올바른 괄호
 */

function solution(s) {
  var answer = true;
  let array = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      array.push(s[i]);
    } else {
      if (array[array.length - 1] === '(') {
        array.pop();
      } else {
        array.push(s[i]);
      }
    }
  }
  if (array.length > 0) {
    return (answer = false);
  } else {
    return (answer = true);
  }
}
