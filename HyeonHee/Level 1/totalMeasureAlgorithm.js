function solution(n) {
    var answer = 0;
    
    for(var i = 1; i <= n; i++){
        for(var j = 1; j <= n; j++){
            if(i * j == n){
                answer += i;
            }
        }
    }
    
    return answer;
}