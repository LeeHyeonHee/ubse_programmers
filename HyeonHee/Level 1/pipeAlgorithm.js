function solution(arrangement) {
    var answer = 0;
    var array = new Array();
    var arr = arrangement.split('');
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "("){
            array.push(arr[i]);
        }else{
            array.pop();
            if(arr[i-1] == "("){
                answer+=  array.length;
            }else{
                answer++;   
            }
        }
    }
    return answer;
}