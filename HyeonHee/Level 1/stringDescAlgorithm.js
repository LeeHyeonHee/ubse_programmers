function solution(s) {
    var answer = "";
    s.split('').sort().reverse().forEach((b) => answer += b);
    // forEach말고 Join도 가능 
    return answer;
}