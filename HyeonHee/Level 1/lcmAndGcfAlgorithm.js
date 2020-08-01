function solution(n, m) {
    var answer = [];
    var max = 0;
    for(var i = 1; i <= (n > m ? m : n); i++){
        if(n % i == 0 && m % i == 0){
            max = i;
        }
    }
    
    answer.push(max);
    
    for(var i = n; i <= n*m  ; i++){
        if( i % n ==0 && i % m == 0){        
            answer.push(i);
            break;
        }

    }
    return answer;
}