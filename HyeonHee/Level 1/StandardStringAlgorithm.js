function solution(s) {
    var answer = false;
    var regx = /[0-9]{6}|[0-9]{4}/
    if(s.length == 4 || s.length == 6){
        answer = s.match(regx) != null ? true : false;     
    }
  
    return answer;
}