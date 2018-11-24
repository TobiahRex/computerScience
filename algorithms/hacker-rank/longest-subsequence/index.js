function longestSubsequence(arr) {
  let longest = arr.length ? [arr[0]] : [];
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] > arr[j] && i !== j) {
      j = i;
      longest.push(arr[i]);
    }
  }
};

console.log(
  longestSubsequence(
    [15, 27, 14, 38, 26, 55, 46, 65, 85]
  )
);

/*
15
15, 27,
15, 27, 38
15, 27, 38, 55

                      i
[15, 27, 14, 38, 26, 55, 46, 65, 85]
                      k
*/
