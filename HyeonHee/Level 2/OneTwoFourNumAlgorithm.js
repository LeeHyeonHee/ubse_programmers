function solution(n) {
    var answer = '';
    
    for(; n >= 1 ;){
        var char = (n % 3) ;
        if(char == 0){
            char = 4;
        }
        answer = parseInt(char + answer)+'';
        
       console.log(n)
        if(n/3 <= 1){
            return answer;
        }
        if(char == 4){
            n = parseInt(n/3)-1;
        } else{
            n = parseInt(n/3);
        }
        
    }
        
    return answer;
    
}