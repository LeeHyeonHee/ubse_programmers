function solution(n) {
    var answer = 0;
    for(var i=1; i <= n; i++){
        var num = i;
        for(var j=i+1; num <= n; j++){
            if(num == n){
                answer++;
                break;
            }else{
                num+=j;
            }
        }
    }
    return answer;
}