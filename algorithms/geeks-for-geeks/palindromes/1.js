(() => {
  let input = [35,65,69,28,12,69,37,80,80,50,80,50,15,57,79,69,57,65,15,69,57,50,65,2,14,64,15,65,65,5,15,64,57,37,50,12,64,37,28,20,80,80,50];
  let answer = mergeSort(input);
  console.log(answer)
  // let answer = equalizeArray(input);
  // answer
})();

function equalizeArray(arr) {
  let maxStack = [], max = 0, memo = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in memo) {
      memo[arr[i]].count += 1;
      memo[arr[i]].index.push(i);
      if (memo[arr[i]].count == max) {
        maxStack.push(memo[arr[i]]);
      } else if (memo[arr[i]].count > max) {
        max = memo[arr[i]].count;
        maxStack = [memo[arr[i]]];
      }
    } else {
      memo[arr[i]] = {
        count: 1,
        index: [i]
      };
    }
  }
  console.log(maxStack)
  let saveLength = 0;
  maxStack.forEach((obj) => {
    saveLength += obj.index.length;
  });
  return arr.length - saveLength;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
    leftArray = arr.slice(0, mid),
    rightArray = arr.slice(mid);

  let leftSorted = mergeSort(leftArray),
    rightSorted = mergeSort(rightArray);

  return merge(leftSorted, rightSorted);
}

function merge(leftArr, rightArr) {
  let result = [],
    i = 0,
    j = 0,
    k = 0;

  while(i < leftArr.length && j < rightArr.length) {
    if(leftArr[i] < rightArr[i]) result[k++] = leftArr[i++];
    else result[k++] = rightArr[j++];
  }
  for(; i < leftArr.length; i++) result[k++] = leftArr[i];
  for(; j < rightArr.length; j++) result[k++] = rightArr[j];
  return result;
}
