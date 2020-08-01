/**
 * 프로그래머스 Level 1
 * 서울에서 김서방 찾기
 */

function solution(seoul) {
  var answer = '';
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') {
      answer = '김서방은 ' + i + '에 있다';
    }
  }
  return answer;
}
