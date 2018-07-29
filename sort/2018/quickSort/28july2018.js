(() => {
  const nums = [3,5,8,1,9,7,6,0,2,4];
  quickSort(nums);
  console.log(nums);
})();

function quickSort(nums, lo = 0, hi = (nums.length - 1)) {
  if (lo === hi || lo > hi) return;

  const p = partition(nums, lo, hi);
  quickSort(nums, lo, p - 1);
  quickSort(nums, p + 1, hi);
}

function partition(nums, lo, hi) {
  let iPartition = hi;
  let iNext = lo;

  while(true) {
    if (nums[iNext] > nums[iPartition]) {
      swap(nums, iNext, iPartition - 1);
      swap(nums, iPartition - 1, iPartition);
      iPartition--;
    } else if (iNext === iPartition) break;
    else iNext++;
  }
  return iPartition;
}

function swap(nums, i1, i2) {
  const temp = nums[i1];
  nums[i1] = nums[i2];
  nums[i2] = temp;
}
