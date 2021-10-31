/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  let zeroCnt = 0;
  let positiveCnt = 0;
  let negativeCnt = 0;
  arr.forEach((v) => {
    if (v > 0) positiveCnt++;
    else if (v === 0) zeroCnt++;
    else negativeCnt++;
  });

  const n = arr.length;
  console.log((positiveCnt / n).toFixed(6));
  console.log((negativeCnt / n).toFixed(6));
  console.log((zeroCnt / n).toFixed(6));
}

// [풀이방법]
// 각각의 정수들을 분류하고 카운트를 세서 비율 출력

// [배운점]
// toFixed를 이용한 소수점 표기 방법
