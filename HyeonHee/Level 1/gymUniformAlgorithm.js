function solution(n, lost, reserve) {
    var answer =0; 
    var answerInfo = []
    
    for(var i = 0; i < n; i++){
        answerInfo.push(1);
    }
    
    for(var i = 0; i < answerInfo.length; i++){
        for(var j = 0; j < reserve.length; j++){
            if(i == reserve[j]-1) answerInfo[i]+=1;
        }
        for(var j = 0; j < lost.length; j++){
            if(i == lost[j]-1) answerInfo[i]-=1;
        }
    }
    
    for(var i = 0; i < answerInfo.length; i++){
        if(i != 0 && i != answerInfo.length-1){
            if(answerInfo[i] == 0 && answerInfo[i+1] == 2){
                answerInfo[i] = 1;
                answerInfo[i+1] = 1;
            }else if(answerInfo[i] == 0 && answerInfo[i-1] == 2){
                answerInfo[i] = 1;
                answerInfo[i-1] = 1;
            }
        }else{
            if(i == 0){
                if(answerInfo[i] == 0 && answerInfo[i+1] == 2){
                    answerInfo[i] = 1;
                    answerInfo[i+1] = 1;
                }
            }else{
                if(answerInfo[i] == 0 && answerInfo[i-1] == 2){
                     answerInfo[i] = 1;
                    answerInfo[i-1] = 1;
                }
            }
        }

    }

    for(var i = 0; i < answerInfo.length; i++){
        if(answerInfo[i] != 0){
            answer++;
        }
    }
    
    return answer;

}