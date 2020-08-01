/**
 * 프로그래머스 Level 1
 * 문자열 내 p와 y의 개수
 */

function solution(s) {
  var answer = false;
  let pCount = 0;
  let yCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'p' || s[i] === 'P') {
      pCount++;
    }
    if (s[i] === 'y' || s[i] === 'Y') {
      yCount++;
    }
  }

  return pCount === yCount ? true : false;
}
