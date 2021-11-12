/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
  // Write your code here
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = lower.toUpperCase();

  let answer = '';
  [...s].forEach((ch) => {
    if (lower.includes(ch)) answer += lower[(lower.indexOf(ch) + k) % 26];
    else if (upper.includes(ch)) answer += upper[(upper.indexOf(ch) + k) % 26];
    else answer += ch;
  });
  return answer;
}

// [풀이방법]
// 알파벳의 소문자, 대문자를 각 배열에 저장
// k만큼 해당하는 알파벳의 인덱스를 찾아 answer에 추가

// [배운점]
// 여기선 z이후에 다시 a로 돌아오기 때문에 ascii를 사용하지 않음
