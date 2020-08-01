function solution(a, b) {
    var answer = 0;
    for(var i =0; i <= Math.max(a,b) - Math.min(a,b); i++){
        answer += Math.min(a,b)+i;
    }
    return answer;
}