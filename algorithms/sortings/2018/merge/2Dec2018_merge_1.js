(() => {
  // let arr = [3,5,8,1];
  let arr = [20,14,18,15,11,17,16,12,13,19,3,5,8,1,9,7,6,0,2,4];
  arr = mergeSort(arr);
  console.log(arr);
})();

function mergeSort(arr, lo = 0, hi = arr.length - 1) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let leftArray = arr.slice(0, mid);
  let rightArray = arr.slice(mid);
  leftArray
  rightArray

  let leftSorted = mergeSort(leftArray, lo, mid);
  let rightSorted = mergeSort(rightArray, mid + 1, hi);
  rightSorted

  return merge(leftSorted, rightSorted);
}


function merge(arr1, arr2) {
  arr1
  arr2
  let result = [];

  let i = 0, j = 0, k = 0;
  while((i < arr1.length) && (j < arr2.length)) {
    if (arr1[i] < arr2[j]) {
      result[k++] = arr1[i++];
    } else {
      result[k++] = arr2[j++];
    }
  }
  for (; i < arr1.length; i++) result[k++] = arr1[i];
  for (; j < arr2.length; j++) result[k++] = arr2[j];
  console.log(result)
  return result;
}
