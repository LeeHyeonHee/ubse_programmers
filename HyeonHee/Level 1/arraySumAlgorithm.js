function solution(arr1, arr2) {
    var answer = new Array();
    arr1.forEach((a, idx) => {
        var b = arr2[idx];
        var array = [];
        a.forEach((c, idxNum) =>{
            array.push(c + b[idxNum]);
        })
        answer.push(array);
    })
    return answer;
}