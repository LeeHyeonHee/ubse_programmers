function solution(numbers) {
    var answer = '';
    var arr = numbers.sort((a,b) =>{
        var num1 = String(a);
        var num2 = String(b);
        
        return (num2 + num1) - (num1+num2);
    })
    arr.forEach(e => answer+=e);
    answer = parseInt(answer) == 0 ? "0" : answer;
    return answer;
}