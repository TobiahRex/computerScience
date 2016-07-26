// Which of these are the equivalent of O(N)?

// 1 = O(N) because no matter how large N becomes, it will either increase by N or stay the same.
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
function foo(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      console.log(arr[i] + ',' + arr[j]);
    }
  }
}
​
// 3 = Quadratic (as N doubles, e.g. arr.length) The time for completion exponentially doubles.
function foo(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ',' + arr[j]);
    }
  }
}

​
// 4 = Quadratic (as N doubles, e.g. arrA/arrB.length) completion time will increase by a factor of N.
function foo(arrA, arrB) {
  for (var i = 0; i < arrA.length; i++) {
    for (var j = 0; j < arrB.length; j++) {
      console.log(arrA[i] + ',' + arrB[j]);
    }
  }
}
​
// 5
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
// 6  = O(N) because no matter how large N becomes, it will either increase by N or stay the same.
function foo(arr) {
  for (var i = 0; i < arr.length/2; i++) {
    var mirror = arr.length - i - 1;
    var temp = arr[i];
    arr[i] = array[mirror];
    arr[mirror] = temp;
  }
}
