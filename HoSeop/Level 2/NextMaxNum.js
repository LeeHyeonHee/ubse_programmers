/**
 * 프로그래머스 Level 2
 * 다음 큰 숫자
 */
function solution(n) {
  var answer = 0;
  let count = n.toString(2);
  let nCount = 0;
  for (let i = 0; i < count.length; i++) {
    if (count[i] === '1') {
      nCount++;
    }
  }

  while (true) {
    n = n + 1;
    count = n.toString(2);
    let aCount = 0;
    for (let i = 0; i < count.length; i++) {
      if (count[i] === '1') {
        aCount++;
      }
    }
    if (aCount === nCount) {
      answer = n;
      break;
    }
  }
  return answer;
}
