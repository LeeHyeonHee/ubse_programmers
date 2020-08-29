function solution(n) {
    //    var answer = fibo(0,1,3,n) % 1234567;
        var arr = new Array();
        for(var i = 0; i <= n; i++){
            if(i < 2){
                arr.push(i);
            }else{
                arr.push((arr[i-2]+arr[i-1])%1234567);                    
            }
    
        }
        var answer = arr[n];
        
        return answer;
    }
    
    
    /* function fibo(a,b,n,fin) {
        var num = a + b; 
        console.log(n, num);
        return fin+2 == n? b : fibo(b, num, n+1,fin);
    } */