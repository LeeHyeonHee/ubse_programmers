function solution(a, b) {
    var answer = '';
    var week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var day = '2016-'+a+'-'+b;
    
    answer = week[new Date(day).getDay()];
    
    return answer;
}