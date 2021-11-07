/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
  // Write your code here
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.every((n, idx) => n + B[idx] >= k) ? 'YES' : 'NO';
}

// [풀이방법]
// A는 오름차순 정렬, B는 내림차순 정렬 후
// A와 B의 각 원소를 더한 값이 모두 k를 넘는지 확인

// [배운점]
// 문제이름이 permuting이어서 permutation을 해야하나
// 라고 생각했지만 더 쉬운 풀이가 있었음
// 좀 더 열린 사고를 해보자고 생각
