/**
 * 체육복 문제
 */
//   return answer;
// }
// function solution(n, lost, reserve) {
//   var answer = 0;
//   var array = [];
//   for (let i = 0; i <= n; i++) {
//     array.push(1);
//   }
//   for (var i = 1; i <= n; i++) {
//     for (var j = 0; j < lost.length; j++) {
//       if (i === lost[j]) {
//         console.log('없냐');
//         array[i] = 0; //여벌없음
//       }
//     }
//     for (var j = 0; j < reserve.length; j++) {
//       if (i === reserve[j]) {
//         console.log('있냐');
//         array[i] += 1; //여벌있음 ?
//       }
//     }
//   }

//   for (var i = 1; i <= n; i++) {
//     if (array[i] === 0 && array[i - 1] === 2) {
//       array[i - 1] = 1;
//       array[i] = 1;
//     } else if (array[i] === 0 && array[i + 1] === 2) {
//       array[i + 1] = 1;
//       array[i] = 1;
//     }
//   }

//   for (var i = 1; i <= n; i++) {
//     if (array[i] > 0) {
//       answer = answer + 1;
//     }
//   }

//   return answer;
// }

function solution(n, lost, reserve) {
  return (
    n -
    lost.filter(a => {
      const b = reserve.find(r => Math.abs(r - a) <= 1);
      if (!b) return true;
      reserve = reserve.filter(r => r !== b);
    }).length
  );
}

solution(5, [2, 4], [1, 3, 5]);
solution(5, [2, 4], [3]);
solution(3, [3], [1]);
console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
