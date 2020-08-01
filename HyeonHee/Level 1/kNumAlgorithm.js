function solution(array, commands) {
    var answer = [];
    
    for(var i =0; i< commands.length; i++){
        var copy = array.slice(commands[i][0] - 1, commands[i][1]);
        copy.sort(function(a,b){
                 return a-b;
        });
        answer.push(copy[commands[i][2]-1]);
    }
    return answer;
}