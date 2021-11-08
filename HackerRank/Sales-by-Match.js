/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here
  const numMap = {};
  ar.forEach((n) => {
    if (!numMap[n]) numMap[n] = 0;
    numMap[n] += 1;
  });

  return Object.values(numMap).reduce(
    (acc, cur) => acc + Math.floor(cur / 2),
    0
  );
}

// [풀이방법]
// 배열 안의 n의 갯수를 세는 객체를 가진다.
// 객체안의 2로 나눴을 때의 몫을 더하여 결과를 반환한다.

// [배운점]
// O(n) 풀이 떠올리기
// Object.values, Array.reduce의 사용법
