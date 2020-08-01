/**
 * 프로그래머스 Level 1
 * 콜라츠 추측
 */

function solution(num) {
  var answer = parseInt(num);
  let count = 0;
  while (1) {
    if (count >= 500) {
      return -1;
    }
    if (answer === 1) {
      return count;
    }
    answer = handleNumber(answer);
    count++;
  }
}

const handleNumber = (num) => {
  let number = 0;
  if (num % 2 === 0) {
    number = num / 2;
  } else {
    number = num * 3 + 1;
  }
  return number;
};
