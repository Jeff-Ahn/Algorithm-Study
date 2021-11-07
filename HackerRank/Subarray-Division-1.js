const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */
function birthday(s, d, m) {
  // Write your code here
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (sum(s.slice(i, i + m)) === d) answer += 1;
  }
  return answer;
}

// [풀이방법]
// 길이 m만큼 잘라서 더하고, 그 값이 d가 되면 answer를 1증가시킨다.

// [배운점]
// 문제 설명에서 continuous segment라고 하는 부분을
// 캐치하지 못해 어떻게 풀어야하나 고민을 길게 함
// 영어를 잘하자..
