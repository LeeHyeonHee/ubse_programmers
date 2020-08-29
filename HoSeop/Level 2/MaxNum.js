/**
 * 프로그래머스 Level 2
 * 가장 큰수
 */
function solution(numbers) {
  var answer = '';
  numbers
    .sort((a, b) => {
      let numA = String(a);
      let numB = String(b);
      return numB + numA - (numA + numB);
    })
    .join('');

  let zero = true;
  for (let element of numbers) {
    answer += element;
    if (element !== 0) {
      zero = false;
    }
  }

  if (zero) answer = '0';

  return answer;
}
