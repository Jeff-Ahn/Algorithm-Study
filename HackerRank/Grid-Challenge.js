/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
  // Write your code here
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const n = grid.length;
  const sortedGrid = grid.map((v) =>
    [...v].sort((a, b) => a.localeCompare(b)).join('')
  );

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (
        alphabet.indexOf(sortedGrid[j][i]) <
        alphabet.indexOf(sortedGrid[j - 1][i])
      )
        return 'NO';
    }
  }
  return 'YES';
}

// [풀이방법]
// 정렬 후, 세로라인에서 알파벳이 사전순인지 비교
// 알파벳을 두고 indexOf 함수를 이용해 비교 가능

// [배운점]
// O(n^2)의 시간복잡도를 가지고 품
// 정렬 후 같은지를 비교하면 O(nlogn)도 가능해보임
