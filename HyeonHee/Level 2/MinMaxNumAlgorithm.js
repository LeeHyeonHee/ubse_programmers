function solution(s) {
    var answer = '';
    var split = s.split(' ');
    var intArray = split.map(a=>parseInt(a));
    answer = Math.min.apply(null, intArray)+ " " + Math.max.apply(null, intArray);
    return answer;
}