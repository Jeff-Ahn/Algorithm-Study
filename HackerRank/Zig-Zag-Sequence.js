const findZigZagSequence = (arr, n) => {
  arr.sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  [arr[mid], arr[n - 1]] = [arr[n - 1], arr[mid]];

  let st = mid + 1;
  let ed = n - 2;
  while (st <= ed) {
    [arr[st], arr[ed]] = [arr[ed], arr[st]];
    st = st + 1;
    ed = ed - 1;
  }

  return arr;
};

console.log(findZigZarrgSequence([1, 3, 2, 4, 5, 6, 7], 7));

// [풀이방법]
// 정렬한 후, 최댓값을 중앙에 보낸다.
// 그 후, mid+1과 n-2의 원소를 서로 교환하고,
// start <= end일 때까지 반복한다.

// [배운점]
// 원래는 주어진 해결 방법을 수정해 제대록 동작하도록 만드는 문제
// 어떻게 디버깅을 해야할지, 어느 곳에 console을 찍을지에 대한 여부를 알게 해줌
