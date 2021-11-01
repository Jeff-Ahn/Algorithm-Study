/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  let hour = Number(s.slice(0, 2));
  const unit = s.slice(8);
  if (unit === 'PM') {
    hour += 12;
    if (hour === 24) hour = 12;
  } else {
    if (hour === 12) hour = 0;
  }
  return `${hour < 10 ? `0${hour}` : hour}${s.slice(2, 8)}`;
}

// [풀이방법]
// 문제에서 경우가 갈리는 hour와 unit(pm인지 am인지 구분)을 추출
// pm일 경우 hour에 12를 더하고, edge 케이스에 대한 처리

// [배운점]
// 지금까지 해커랭크 모두 console로 답을 출력했지만
// 여기서는 답을 리턴해줘야 해서 맞왜틀 했던 문제
// 알고보니 위에 주석에도 `return a STRING`이라는 문구가 있었음
// 문제를 더 꼼꼼히 읽어야 함을 배움
