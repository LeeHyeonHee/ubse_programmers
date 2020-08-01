function solution(answers) {
    var answer = [];
    var one = [1, 2, 3, 4, 5];
    var two = [2, 1, 2, 3, 2, 4, 2, 5];
    var three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var num1 = 0;
    var num2 = 0;
    var num3 = 0;
    
    answers.forEach((res, idx) => {
        if(res == one[idx % 5]){
            num1++;
        }
        if(res == two[idx % 8]){
            num2++;
        }
        if(res == three[idx % 10]){
            num3++;
        }
    })
     
   var max =  Math.max(num1,num2,num3);
    if(max == num1){
        answer.push(1);
    }
    if(max == num2){
        answer.push(2);
    }
    if(max == num3){
        answer.push(3);
    }

    return answer;
}