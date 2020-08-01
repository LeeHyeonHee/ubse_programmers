function solution(x) {
    var answer = true;
    var num = 0;
    for(var i = 1; i <= x.toString().length; i++){
       var a = 1; 
        if(i != 1){
            for(var j = 1; j< i; j++){
                a*=10;
            }
        }
        num +=  parseInt((x/a)  % 10  )  ;   
    }
    answer = x % num == 0 ?  true: false;
    return answer;
}