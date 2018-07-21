const main = () => {
  const nums = [3,6,5,4,9,8,7,0,1];
  quickSort(nums);

  console.log(quickSort);
}

function quickSort(arr, lo = 0, hi = (arr.length - 1)) {
  if (lo === hi || lo > hi) return;

  let p = partition(arr, lo, hi);
  quickSort(arr, lo, p - 1);
  quickSort(arr, p + 1, hi);
}

function partition(arr, lo, hi) {
  let iPartition = hi,
    iNext = lo;

  while(true) {
    if (arr[iNext] > arr[iPartition]) {
      swap(arr[iNext], arr[iPartition - 1]);
      swap(arr[iPartition - 1], arr[iPartition]);
      iPartition--;
    } else if (iPartition == iNext) break;
    else iNext++;
  }

  return iPartition;
}

function swap(arr, i1, i2) {
  temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}
