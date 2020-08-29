function solution(s){
    var array = new Array();
    
    for(var i =0; i< s.length; i++){
        if(s.charAt(i) == "("){
            array.push(1);
        }else{
            if(array.length == 0){
             return false;   
            }else{
                array.pop();                
            }
        }
    }
    var answer = array.length == 0 ? true : false;
    
    return answer;
}