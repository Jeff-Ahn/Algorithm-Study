/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  // Write your code here
  const numSet = new Set();
  a.forEach((n) => {
    if (numSet.has(n)) numSet.delete(n);
    else numSet.add(n);
  });

  return numSet.values().next().value;
}

// [풀이방법]
// Set 자료구조에서 숫자를 하나씩 넣고 이미 있는 것이면
// 그 숫자를 제외시킴. 그러면 남는 하나가 정답

// [배운점]
// iterator에서 값을 꺼내는 방법 기억하기
