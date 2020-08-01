/**
 * 프로그래머스 Level 1
 * k번째수
 */
function solution(array, commands) {
  var answer = [];
  let kNum;
  for (let i = 0; i < commands.length; i++) {
    kNum = array.slice(commands[i][0] - 1, commands[i][1]);
    kNum.sort((a, b) => {
      return a - b;
    });
    answer.push(kNum[commands[i][2] - 1]);
  }
  return answer;
}
