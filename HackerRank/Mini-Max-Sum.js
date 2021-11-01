/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  let min = 10 ** 9 + 1;
  let max = 0;
  let sum = 0;
  arr.forEach((n) => {
    sum += n;
    min = Math.min(min, n);
    max = Math.max(max, n);
  });

  console.log(`${sum - max} ${sum - min}`);
}

// [풀이방법]
// 전체 총합에서 가장 작은 수를 제외한 것이 가장 큰수,
// 가장 큰 수를 제외한 것이 가장 작은 수가 된다.

// [배운점]
// O(n)풀이를 고민해볼 수 있었음
