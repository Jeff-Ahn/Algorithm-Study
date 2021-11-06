/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here
  const n = arr.length;
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;
  for (let i = 0; i < n; i++) {
    leftDiagonalSum += arr[i][i];
    rightDiagonalSum += arr[i][n - 1 - i];
  }
  return Math.abs(leftDiagonalSum - rightDiagonalSum);
}

// [풀이방법]
// 왼쪽부터 시작하는 변수, 오른쪽부터 시작하는 변수를 두고,
// 필요한 값을 각각 더해서 합을 구한 후 차이의 절댓값을 리턴한다.

// [배운점]
// matrix가 n*n이 아니라 n*m이어도 적용할 수 있는
// 풀이 방법이고, O(n)에 해결하는 방법을 떠올림
