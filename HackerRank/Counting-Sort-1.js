/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
  // Write your code here
  const countTable = new Array(100).fill(0);
  arr.forEach((n) => (countTable[n] += 1));
  return countTable;
}

// [풀이방법]
// 숫자가 나타나는 횟수를 저장하는 배열 선언 후,
// 그 숫자가 나올때마다 해당하는 배열의 값을 증가시킨다.

// [배운점]
// CountingSort Reminder
// 이후 Sorting된 값은 0을 제외하고 나온 숫자를 나열하는 것이 일반적
