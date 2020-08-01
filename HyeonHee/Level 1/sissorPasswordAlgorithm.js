function solution(s, n) {
    var answer = '';
    
    var sp = s.split('');
    
    for(var i = 0; i < sp.length; i++){
        var a = sp[i].charCodeAt(0);
        if(a != 32){
            
            if((a+n > 122 || (a+n > 90 && a+n <= 115))){
                if(a+n > 122){
                    a =  ((a+n) % 122) + 96;
                }else if(a+n >= 97 && a+n <= 115){
                 if(a <= 90){
                     a = ((a+n) % 90) + 64;
                 }else{
                      a+=n;
                 }
                }
                else{
                    a = ((a+n) % 90) + 64;
                }
            }else{
                a+=n;
            }

        }
        answer += String.fromCharCode(a);
    }
    return answer;
}