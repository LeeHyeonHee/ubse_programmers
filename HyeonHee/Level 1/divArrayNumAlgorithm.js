function solution(arr, divisor) {
    var answer = [];
    
//     for(var i =0; i < arr.length; i++){
//         if(arr[i] % divisor == 0){
//             answer.push(Number(arr[i]));
//         }
//     }

    answer = arr.filter(res => res % divisor == 0);
    
    if(answer.length == 0){
        answer.push(-1);
    }
    
    answer.sort(function(a, b){
        return a-b;
    });
    
    return answer;
}