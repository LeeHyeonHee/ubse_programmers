function solution(n) {
    var arr = n.toString().split("");
    
    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[i]){
                var rep = arr[j];
                arr[j] = arr[i];
                arr[i] = rep; 
            }
        }
    }
    return parseInt(arr.reduce((a,b) => a+b));
}