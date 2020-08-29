function solution(arr1, arr2) {
    var answer = [];
    
    for(var i = 0; i < arr1.length; i++){
        var arr = new Array();
        for (var j = 0; j < arr2[0].length; j++){
           var num = 0;
            for(var q= 0; q < arr1[i].length; q++){
                num += arr1[i][q] * arr2[q][j];
            }
            arr.push(num);
        }
        answer.push(arr);
    }
    
    return answer;
}