/*
  Quick sort is
  Best Case O(n Log n) - Not possible to do purposefully.
  Worst Case O(n^2) - If the array is more than half way reverse-sorted.

  The algorithm works by having a pointer at the beginning and the end,
  iterating forward and backward, locating for items in front to be greater
  than items in the back. Eventually one or more numbers will be completely
  sorted at their current locations, however hte items in front and backward,
  may be unsorted, yet all be less than the sorted item that are in front
  of the item, and all items behind that element will be greater than that item.
*/
let OrderTime = 0;
(() => {
  let arr = [20,14,18,15,11,17,16,12,13,19,3,5,8,1,9,7,6,0,2,4];
  quickSort(arr);
  console.log(arr);
  console.log(OrderTime) // 27
})();

function quickSort(arr, lo = 0, hi = arr.length - 1) {
  OrderTime += 1;
  if (lo >= hi) return;
  const p = partition(arr, lo, hi);
  quickSort(arr, lo, p - 1);
  quickSort(arr, p + 1, hi);
}

function partition(arr, lo, hi) {
  let iNext = lo, iPartition = hi;
  while(iNext < iPartition) {
    if (arr[iNext] > arr[iPartition]) {
      swap(arr, iNext, iPartition - 1);
      swap(arr, iPartition - 1, iPartition);
      iPartition--;
    } else iNext++;
  }
  return iPartition;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
