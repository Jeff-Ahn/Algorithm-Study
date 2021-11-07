/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
  // Write your code here
  const alphabetMap = {};
  [...s.replace(/ /g, '')].forEach(
    (ch) => (alphabetMap[ch.toLowerCase()] = true)
  );

  return Object.keys(alphabetMap).length === 26 ? 'pangram' : 'not pangram';
}

// [풀이방법]
// 공백 제거 후, 알파벳이 나오면 alphabetMap에 기록
// 모든 알파벳의 종류가 26가지이므로 26개의 알파벳이 나오면 pangram

// [배운점]
// HackerRank는 replaceAll 함수를 지원하지 않음
// pangram이 무엇인지 알게 됨
