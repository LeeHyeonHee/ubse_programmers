function solution(priorities, location) {
    var answer = 0;
    var state = 0;
    
    for(var i = 0; i < priorities.length; i++){
        for(var j = i+1; j < priorities.length; j++ ){
            if(priorities[i] < priorities[j]){
                 priorities.push(priorities.splice(i, 1));  
                if(i == location){
                    location = priorities.length-1;
                }else{
                    location-=1;
                }
                i--;
                 break;
            }else if(j == priorities.length-1){
                state += 1;
            } 
        }
         if(state == location)
                answer = state;
    }
    
    answer += 1;
    return answer;
}