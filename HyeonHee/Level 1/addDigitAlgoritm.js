function solution(n)
{
    var answer = n.toString().split("");
    return answer.reduce((a,b) => parseInt(a)+parseInt(b),0);;
}