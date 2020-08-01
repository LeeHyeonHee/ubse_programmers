function solution(numbers, hand) {
    var answer = '';
    
    const keyPad = {
        1: [0, 0],
        2: [1, 0],
        3: [2, 0],
        4: [0, 1],
        5: [1, 1],
        6: [2, 1],
        7: [0, 2],
        8: [1, 2],
        9: [2, 2],
        "*": [0, 3],
        0: [1, 3],
        "#": [2, 3]       
    }
    
    var rightChk = "#";
    var leftChk = "*"; 
    numbers.forEach(function(element){
        
        if(answer.lastIndexOf('R') != -1){
          rightChk = numbers[answer.lastIndexOf('R')]
        }
        if(answer.lastIndexOf('L') != -1){
            leftChk = numbers[answer.lastIndexOf('L')];
        }
          var right = calDistance(keyPad[rightChk], keyPad[element]);            
          var left = calDistance(keyPad[leftChk], keyPad[element]);        

        
        answer += (element % 3 == 1) ? "L" :
                    (element % 3 == 0 && element != 0) ? "R" : 
                        (element % 3 == 2 || element == 0) ?  (right == left) ?  hand.substr(0,1).toUpperCase() :
                            (right < left) ? "R" : "L": "L"
    })
    
    return answer;
    }

function calDistance(number1, number2) {
    return Math.abs(number1[0] - number2[0]) + Math.abs(number1[1] - number2[1]);
}