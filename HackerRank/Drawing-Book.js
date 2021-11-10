/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
  // Write your code here
  const totalTurns = Math.floor(n / 2);
  const fromStart = Math.floor(p / 2);
  const fromEnd = totalTurns - fromStart;

  return fromStart > fromEnd ? fromEnd : fromStart;
}

// [풀이방법]
// 최대수는 전체 페이지 수의 절반
// 처음부터 페이지를 넘길 경우, Math.floor(p/2)만큼이 필요
// 뒤에서부터 페이지를 넘길 경우, 전체 - 앞에서부터
// 결과가 작은 것을 반환한다.

// [배운점]
// 문제 이해가 너무 어려웠음(영어 공부를 더 해야 할 듯)
// 마지막 엣지 케이스를 찾지 못해 discussion에서 찾아봄
