/**
 * 프로그래머스 Level 1
 * 최대공약수와 최소공배수
 */
var answer = [];
let count = [];
let maxCount = 0;
for (let i = 0; i <= (n > m ? m : n); i++) {
  if (n % i === 0 && m % i === 0) {
    maxCount = i;
  }
}
answer.push(maxCount);

for (let i = n; i <= n * m; i++) {
  if (i % n === 0 && i % m === 0) {
    count.push(i);
    break;
  }
}
answer.push(count[count.length - 1]);

return answer;
