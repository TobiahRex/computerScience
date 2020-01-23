(() => {
  const answers = [
    {
      nums1: [1,0,0,0,0,0],
      nums2: [2,5,6,7,8,9],
      m: 1,
      n: 3,
    },
    {
      nums1: [1,2,3,0,0,0],
      nums2: [2,5,6],
      m: 3,
      n: 3,
    },
    {
      nums1: [0,0,0,0,0,0],
      nums2: [2,3,4,5,6,7],
      m: 0,
      n: 6,
    },
    {
      nums1: [4,0,0,0,0,0],
      nums2: [1,2,3,5,6],
      m: 1,
      n: 5,
    }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ nums1, m, nums2, n }) {
  let i = 0;
  let j = 0;

  if (m > 0) {                              // if it's even worth the trouble of splicing 2 arrays together...
    while (true) {
      if (nums2[j] <= nums1[i]) {           // if nums2 value can be inserted into nums1 then chop off a placeholder, and insert the target value, at the target index.
        nums1.pop();
        nums1.splice(i++, 0, nums2[j++]);
      } else if (nums2[j] > nums1[i]) {     // if nums2 can't insert yet (because it's greater), then increment nums1 target pointer to the next value.
        i += 1;
      } else {                              // if we got to the end of one of the arrays: nums1 or nums2, eject.
        break;
      }
    }

    i = m + j;                              // reset i to the last significant index of nums1 (m), + add all the change occurences taken from nums2 (j).
    while (j < n) {                         // while nums2 still has numbers left to insert, then do so...
      nums1[i++] = nums2[j++];
    }
  } else { // if not, then just over-write nums1.
    while(i < n) {
      nums1[i] = nums2[i++];
    }
  }

  return nums1;
}
