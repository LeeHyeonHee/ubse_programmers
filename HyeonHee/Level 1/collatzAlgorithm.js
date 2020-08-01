function solution(num) {
    var answer = 0;
    var result = num; 
    for(;;){
        if(num == 1){
            return answer;
        }else if(answer > 500){
            return -1;
        }
        num = collatz(num);   
        answer++;
    }
}


function collatz(num){
    return  num % 2 == 0 ? num / 2 : num * 3 + 1; 
}
