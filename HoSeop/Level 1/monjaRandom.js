/**
 * 프로그래머스 Level 1
 * 문자열 내마음대로 정렬하기
 */

function solution(strings, n) {
  var answer = [];
  let lenStr = strings.length;

  strings.sort();
  let newStrings = strings.map((str) => str[n]);
  console.log(newStrings);
  newStrings.sort();

  for (var i = 0; i < lenStr; i++) {
    for (var j = 0; j < lenStr; j++) {
      if (newStrings[i] === strings[j][n]) {
        answer[i] = strings[j];
        strings.splice(j, 1);
        break;
      }
    }
  }
  return answer;
}
