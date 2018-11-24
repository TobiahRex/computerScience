function longestConsecutiveSequence(arr) {
  const memo = {};

  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && i !== j) {
      let slice = arr.slice(j, i + 1);
      memo[slice.length] = slice;
    } else if (arr[i] < arr[i - 1]) {
      j = i;
    }
    if (i === j) memo[1] = arr[i];
  }
  console.log(memo);
  const maxKey = Object.keys(memo).reduce((acc, n) => {
    if (Number(n) > acc) acc = Number(n);
    return acc;
  }, 0);
  return memo[maxKey];
};

console.log(
  longestConsecutiveSequence(
    [15, 27, 14, 38, 26, 55, 46, 65, 85],
  )
)

/*
1: 15
2: 15, 27
1: 14
2: 14, 38
1: 26
2: 26, 55,
1: 46
2: 46, 65
3: 46, 65, 85
                                            i
undefined  [15, 27, 14, 38, 26, 55, 46, 65, 85]
                                    j
*/
