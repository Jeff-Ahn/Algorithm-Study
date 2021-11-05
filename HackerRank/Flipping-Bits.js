/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
  // Write your code here
  return parseInt(
    [...n.toString(2).padStart(32, '0')]
      .map((v) => (v === '1' ? '0' : '1'))
      .join(''),
    2
  );
}

// [풀이방법]
// JS에서 제공하는 함수들을 이용해서 풀이
// toString(2): 2진수로 변환
// padStart(): 앞에서부터 지정한 길이만큼 채우기

// [배운점]
// 혹시나 문제 범위가 JS의 Number 최대 크기를 넘기나라고
// 생각해서 Number의 최댓값을 찾아봄
// Number 자료형의 최댓값은 2^53 - 1
// 그 이상을 넘기는 숫자를 사용할 경우 BigInt로 변환해서 사용하는 것이 좋음
