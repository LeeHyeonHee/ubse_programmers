/**
 * 프로그래머스 Level 1
 * 휴대폰 번호 가리기
 */
function solution(phone_number) {
  var answer = '';
  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      answer = answer + '*';
    } else {
      answer += phone_number[i];
    }
  }
  return answer;
}
