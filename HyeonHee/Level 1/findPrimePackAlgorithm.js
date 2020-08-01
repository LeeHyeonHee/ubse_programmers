function solution(n) {
    var answer = 0;
    
    let arr = []; 
    for (let i = 2; i <= n; i++) { 
        arr[i] = i; 
    } 
    for (let i = 2; i <= n; i++) { 
        if (arr[i] === 0) 
            continue; 
        for (let j = i + i; j <= n; j += i) { 
            arr[j] = 0; 
        } 
    } 
    for (let i = 2; i <= n; i++) { 
        if (arr[i] !== 0) 
            answer++;
    }

    // for(var i = 2; i <=  n; i++){
    //     var check = 0;
    //     for(var j = 1; j<= i; j++){
    //         if(i%j == 0){
    //             check++;
    //         }   
    //     }     
    //     if(check == 2){
    //         answer++;
    //     }
    // }
    return answer;
}