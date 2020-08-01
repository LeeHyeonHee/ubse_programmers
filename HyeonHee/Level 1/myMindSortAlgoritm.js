function solution(strings, n) {
    var answer = [];
    for (var i = 0; i < strings.length; i++){
        answer.push([strings[i],strings[i].substr(n,1), i]);
    } 
    answer.sort((a,b) =>  (a[1].charCodeAt(0) - b[1].charCodeAt(0)) == 0 ?  (a > b) - (a < b) : (a[1].charCodeAt(0) - b[1].charCodeAt(0)));
    var result = [];
    for(var i = 0; i < answer.length; i++){
        result.push(strings[answer[i][2]]);
    }
    return result;
}