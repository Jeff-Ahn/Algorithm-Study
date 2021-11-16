/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
  // Write your code here
  const arr = Array.from(Array(n), () => new Array());
  let lastAnswer = 0;
  const answers = [];

  const query = (type, x, y) => {
    const idx = (x ^ lastAnswer) % n;
    if (type === 1) {
      arr[idx].push(y);
    } else {
      lastAnswer = arr[idx][y % arr[idx].length];
      answers.push(lastAnswer);
    }
  };
  queries.forEach(([type, x, y]) => query(type, x, y));
  return answers;
}

// [풀이방법]
// 문제에 나와 있는 설명을 그대로 구현하기만 하면 되는 문제

// [배운점]
// 문제 설명이 약간 불친절한 듯 함
// 영어를 못하는 나의 잘못인건가..
// (주의사항)
// 문제 설명과 달리 js의 경우 input을 수정해서
// 사용자에게 함수를 작성하라고 요청하여 변수 타입이 다른 경우가 있음
