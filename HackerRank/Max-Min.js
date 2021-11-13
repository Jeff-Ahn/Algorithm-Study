/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function maxMin(k, arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i + k - 1 < arr.length; i++) {
    min = Math.min(min, arr[i + k - 1] - arr[i]);
  }
  return min;
}

// [풀이방법]
// 정렬 후, 배열을 처음부터 끝까지 순회하면서 차이가
// 가장 작은 값을 찾아서 반환한다.

// [배운점]
// n의 제약시간이 10^5이므로, 정렬 후 풀어도 괜찮음
