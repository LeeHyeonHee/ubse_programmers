function solution(arr) {
    var answer = [];
    var result = arr.filter(a =>  a != Math.min.apply(null,arr)); 
    answer = result.length != 0 
        ? result : [-1];
    return answer;
    
}