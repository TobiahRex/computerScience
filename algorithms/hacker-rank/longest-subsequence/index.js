function longestSubsequence(arr) {
  let longest = arr.length ? [arr[0]] : [];
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] > arr[j] && i !== j) {
      j = i;
      longest.push(arr[i]);
    }
  }
  return longest;
};

console.log(
  longestSubsequence(
    [15, 27, 14, 38, 26, 95, 55, 46, 65, 85]
  )
);

/*
n = 85

added = 0
[15, 27, 38, 95]
 j
length = 4

27 : 1 trashed | 1 added
38 : 1 trashed | 1 added
95 : 4 trashed | 0 added

trashed = 4
[14, 26, 55, 46, 65, 85]
          k
length = 6


15
  27
14
    38
  26
                    95
        55
      46
          65
                85
                              k
*/
