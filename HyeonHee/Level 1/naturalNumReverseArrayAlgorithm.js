function solution(n) {
    var answer = n.toString().split('').reverse();
    return answer.map(e =>  parseInt(e));
}