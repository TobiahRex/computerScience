(() => {
  let arr = [3,5,8,1,9,7,6,0,2,4];
  mergeSort(arr);
  console.log(arr);
})();


function mergeSort(arr, lo, hi) {

}


function merge(arr, lo, mid, hi) {
  let arr1 = arr.slice(0, mid + 1);
  let arr2 = arr.slice(mid);
  let result = [];

  let i = 0, j = 0, k = 0;
  while(arr1[i] && arr[j]) {
    if (arr[i] < arr[j]) {
      result[k] = arr[i];
      i += 1;
    } else {
      result[k] = arr[j];
      j += 1;
    }
    k += 1;
  }
  for (; i < arr1.length; i++) result[i] = arr1[i];
  for (; j < arr1.length; j++) result[j] = arr1[j];
}
