function solution(s){
    var answer = true;
    var arr = s.split(''); 
    var p = 0;
    var y = 0;
    
    arr.forEach((r) => {
        if(r == 'p' || r == 'P'){
            p++;
        }else if(r == 'y' || r == 'Y'){
            y++;
        }
    })
    
    answer = p == y ? true : false;

    return answer;
}