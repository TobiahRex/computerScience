// Which of these are the equivalent of O(N)?

// 1 = O(N) LINEAR because no matter how large N becomes, it will either increase by N or stay the same.
// O(N)
function foo(arr) {
  var sum = 0;
  var product = 1;
​
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
​
  for (var j = 0; j < arr.length; j++) {
    product *= arr[j];
  }
}
​
// 2  = Quadratic (as N doubles, e.g. arr.length) The time for completion exponentially doubles.
// O(n^2)
function foo(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      console.log(arr[i] + ',' + arr[j]);
    }
  }
}
​
// 3 = Quadratic (as N doubles, e.g. arr.length) The time for completion exponentially doubles.
// O(n^2)
function foo(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ',' + arr[j]);
    }
  }
}
//(1,2) (1,3) (1,4) (1,5) (2,3) (2,4) (2,5) (3,4) (3,5) (4,5)
​
// 4 = Quadratic (as N doubles, e.g. arrA/arrB.length) completion time will increase by a factor of N.
// O(A * B)
function foo(arrA, arrB) {
  for (var i = 0; i < arrA.length; i++) {
    for (var j = 0; j < arrB.length; j++) {
      console.log(arrA[i] + ',' + arrB[j]);
    }
  }
}
//(1,1) (1,2) (1,3) (1,4) (1,5) (2,1) (2,2) (2,3) (2,4) (2,5) (3,1) (3,2) (3,3) (3,4) (3,5) (4,1) (4,2) (4,3) (4,4) (4,5) (5,1) (5,2) (5,3) (5,4) (5,5)
​
// 5 = Exponential / O(A * B)
function foo(arrA, arrB) {
  for (var i = 0; i < arrA.length; i++) {
    for (var j = 0; j < arrB.length; j++) {
      for (var k = 0; k < 100000; k++){
        console.log(arrA[i] + ',' + arrB[j]);
      }
    }
  }
}
​
// 6  = O(n Log N) Logarithmic because complexity is directly proportional to N.
function foo(arr) {
  for (var i = 0; i < arr.length/2; i++) {
    var mirror = arr.length - i - 1;
    var temp = arr[i];
    arr[i] = array[mirror];
    arr[mirror] = temp;
  }
}
// 7
/*
​
Which are equivalent to O(n)? Why?
​
1) O(n + p) where p < n/2   // Linear
-> 2) O(2n)                 // Linear
3) O(n + logn)              // Linear
-> 4) O(n + m)              // Linear
​
*/
// Binary Search = O(log(n));
while(low <= high){
  mid = (low + high) / 2;
  if (target < list[mid]) // list is ALL numbers, target is the given number to find. this finds the middle of the current total.
  high = mid - 1;  // we subtract 1 from mid to get one less than the previous high.
  else if (target > list[mid]) // then re-evaluate. this evaluation determines if the previous high or low is the current high or low.
  low = mid + 1;  // if the number is greater than the half, then add 1 to get one more than the previous low.
  else break; // else you found the number.
}

// Insertion Sort;
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let k = i;
    while (arr[k] < arr[k-1]) {
      let before = arr[k - 1];
      arr[k - 1] = arr[k];
      arr[k] = before;
      k--;
    }
  }
  return arr;
}

// Quick sort: Recursive
function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot_index = Math.floor(arr.length * Math.random));
  let pivot = arr[pivot_index];
  let less = [], more = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (i !== pivot_index) {
      if (pivote >= item) {
        less.push(item);
      } else {
        more.push(item);
      }
    }
  }
  return quickSort(less).concat([pivot]).concat(quickSort(more));
}
