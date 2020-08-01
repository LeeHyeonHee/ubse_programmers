function solution(s) {
    var answer = '';
    var test = (s.length % 2) == 0;
    if(test){
       answer =  s.slice(s.length/2 -1 ,s.length/2 + 1 );
    }else{
       answer = s.slice(parseInt(s.length/2) , parseInt(s.length/2) + 1);
    }
    return answer;
}