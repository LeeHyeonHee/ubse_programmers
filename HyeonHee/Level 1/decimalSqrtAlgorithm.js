function solution(n) {
    var num = Math.sqrt(n) + 1; 
    return Number.isInteger(num) == true ? num  * num  : -1;
}