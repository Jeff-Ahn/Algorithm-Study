/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
  // Write your code here
  const queryMap = {};
  strings.forEach((string) => {
    if (!queryMap[string]) queryMap[string] = 0;
    queryMap[string]++;
  });

  return queries.map((q) => queryMap[q] || 0);
}

// [풀이방법]
// string 배열을 돌면서 각 string이 몇 개가 나왔는지 기록
// 결과 배열은 해당하는 query가 queryMap에 있으면 그 값을 리턴하고,
// 없으면 한 번도 나온 적이 없으므로 0을 리턴

// [배운점]
// 조건값이 작더라도 O(n)풀이를 떠올릴 수 있었음
// sparse 영어 단어 뜻: 부족한, 희박한
