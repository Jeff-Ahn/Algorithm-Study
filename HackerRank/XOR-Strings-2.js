function stringsXOR(s, t) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) res += '0';
    else res += '1';
  }
  return res;
}

// [풀이방법]
// 문자열의 인덱스를 기준으로 두 문자가 같으면 '0'
// 다르면 '1'을 문자에 더해주고 결과를 반환한다.

// [배운점]
// 이 문제는 js를 제공하지 않아 python으로 푼 후
// js로 작성함
// 이 문제를 풀고 XOR 연산자가 ^인 것을 확인
