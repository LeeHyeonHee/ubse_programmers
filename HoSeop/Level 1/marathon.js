/**
 * 프로그래머스 완주하지 못한 선수
 */
function solution(participant, completion) {
  var answer = '';
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return (answer = participant[i]);
  }
  return answer;
}
