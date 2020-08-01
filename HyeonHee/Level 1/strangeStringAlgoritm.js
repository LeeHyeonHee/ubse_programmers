function solution(s) {
    var answer = s.split(" ");
    var result = "";
    answer = answer.map(a => a.split(""));
    for(var i = 0; i < answer.length; i++){
        for(var j =0; j< answer[i].length; j++){
            answer[i][j] = j%2 == 0 ? answer[i][j].toUpperCase() : answer[i][j].toLowerCase();
            result += answer[i][j];
        }   
        result += i != answer.length-1 ? " " : "";
    }
            
    return result;
}