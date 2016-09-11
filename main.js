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
//(1,1) (1,2) (1,3) (1,4) (1,5) (2,1) (2,2) (2,3) (2,4) (2,5) (3,1) (3,2) (3,3) (3,4) (3,5) (4,1) (4,2) (4,3) (4,4) (4,5) (5,1) (5,2) (5,3) (5,4) (5,5) ​

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
// 5 = O(A * B)
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
// 6  = O(n) Logarithmic because complexity is directly proportional to N.
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
2) O(2n)                 // Linear
3) O(n + logn)              // Linear
4) O(n + m)              // Linear
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
// NOTE: Example = Phonebook.

// Linear Search = O(1)
function linearSearch(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === targetValue) i; //found it
  }
  return -1; // didn't find it.
}
// NOTE: Example =


// Bubble Sort
function swap(items, firstIndex, secondIndex) {
  let temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}
function bubbleSort(items) {
  let n = items.length;

  for (let i = n-1; i >= 0; i--) {
    for (let j = n-i; j >= 0; j--) {
      if (items[j] < items[j-1]){
        swap(items, j, j-1);
      }
    }
  }
  return items;
}

// Insertion Sort
function insertionSort(items) {
  let n = items.length;

  for(let i = 0; i < n; i++) {
    let value = items[i];
    for(let j = i-1; j > -1) {
      items[j+1] = items[j];
    }
    items[j+1] = value;
  }
  return items;
}
// n(n - 1)/2 = n^2/2 - n/2 = O(n^2)
// asymtotic runtime = O(n^2)

// Selection Sort
function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}
function selectionSort(items) {
  let n = items.length, i, j, min;

  for (i = 0, i < n; i++){
    min = i;
    for (j = i+1; j < n; j++){
      if (items[j] < items[min]){
        min = j;
      }
    }

    if (i != min){
      swap(items, i, min);
    }
  }
  return items;
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
// Merge Sort - Iterative
// Merges two arrays in order based on their natural relationship.
function merge(left, right) {
  let result = [];

  while(left.length > 0 && right.length > 0) {
    if (left[0] < right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  result = result.concat(left).concat(right);
  // make sure remaining arrays are empty
  left.splice(0, left.length); // remove any left over elements in array.
  right.splice(0, right.length); // remove any left over element in array.

  return result;
}
function mergeSort(items) {
  // Terminal condition - don't need to do anything for arrays with 0 or 1 items.
  if (items.length < 2) {
    return items;
  }

  let work = [];
  let n = items.length;

  for(let i = 0; i < n; i++) {
    work.push([items[i]]);  // seperate each array item into a "work array" as own array.
  }
  work.push([]); // in case of odd number of items.


  for (let lim = n; lim > 1; lim = Math.floor((lim+1)/2)) {
    for (let j = 0, k = 0; k < lim; j++, k +=2){
      work[j] = merge(work[k], work[k + 1]);
    }
    work[j] = [];  // in case of odd number of items;
  }
  return work[0];
}

//Merge Sort - Recursive
// Merges two arrays in order based on their natural relationship.
function merge(left, right) {
  let result = [];
  let ileft = 0;
  let iright = 0;

  while (ileft < left.length && ir < right.length){
    if (left[i] < right[iright]){
      result.push(left[ileft++]);
    } else {
      result.push(right[iright++]);
    }
  }
  return result.concat(left.slice(ileft)).concat(right.slice(iright));
}
function mergeSort(items) {
  if(items.length < 2) {
    return items;
  }

  let middle = Math.floor(itmes.length/2),
  left = items.slice(0, middle),
  right = items.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

//Hash Table
var LinkedList = require('./linked_list');

/**
* HashTable constructor
* @param Number? initially allocated size
*/
function HashTable(initialCapacity) {
  this._table = new Array(initialCapacity || 64);
  this._items = 0;

  Object.defineProperty(this, 'capacity', {
    get: function() {
      return this._table.length;
    }
  });

  Object.defineProperty(this, 'size', {
    get: function() {
      return this._items;
    }
  });
}


//////////////////////////////////////////// HASH TABLES //////////////////////
/**
* (Same algorithm as Java's String.hashCode)
* Returns a hash code for this string. The hash code for a String object is
* computed as: s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]
* using int arithmetic, where s[i] is the ith character of the string,
* n is the length of the string, and ^ indicates exponentiation.
* (The hash value of the empty string is zero.)
*/
HashTable.prototype.hash = function(s) {
  if (typeof s !== 'string') s = JSON.stringify(s);
  var hash = 0;
  for (var i = 0; i < s.length; i++) {
    hash = ((hash << 5) - hash) + s.charCodeAt(i);
    hash &= hash; // Keep it a 32bit int
  }
  return hash;
};

HashTable.prototype.get = function(key) {
  var i = this._position(key);
  var node;
  if ((node = this._findInList(this._table[i], key))) {
    return node.value.v;
  }
  return undefined;
};

HashTable.prototype.put = function(key, value) {
  var i = this._position(key);
  if (!this._table[i]) {
    // Hashing with chaining
    this._table[i] = new LinkedList();
  }
  var item = {k: key, v: value};

  var node = this._findInList(this._table[i], key);
  if (node) {
    // if the key already exists in the list, replace
    // by the current item
    node.value = item;
  } else {
    this._table[i].add(item);
    this._items++;

    if (this._items === this.capacity) this._increaseCapacity();
  }
};

HashTable.prototype.del = function(key) {
  var i = this._position(key);
  var node;

  if ((node = this._findInList(this._table[i], key))) {
    this._table[i].delNode(node);
    this._items--;
  }
};

HashTable.prototype._position = function(key) {
  return Math.abs(this.hash(key)) % this.capacity;
};

HashTable.prototype._findInList = function(list, key) {
  var node = list && list.head;
  while (node) {
    if (node.value.k === key) return node;
    node = node.next;
  }
};

HashTable.prototype._increaseCapacity = function() {
  var oldTable = this._table;
  this._table = new Array(2 * this.capacity);
  this._items = 0;

  for (var i = 0; i < oldTable.length; i++) {
    var node = oldTable[i] && oldTable[i].head;
    while (node) {
      this.put(node.value.k, node.value.v);
      node = node.next;
    }
  }
};

HashTable.prototype.forEach = function(fn) {
  var applyFunction = function(linkedList) {
    linkedList.forEach(function(elem) {
      fn(elem.k, elem.v);
    });
  };

  for (var i = 0; i < this._table.length; i++) {
    if (this._table[i]) {
      applyFunction(this._table[i]);
    }
  }
};
///////////////////////////////////////////////////////////////////////////////

function fibonacciSequence() {
  let fibArr = [1, 2];

  for (let i = 2; i < Infinity; i++){
    fibArr[i] = [i-2] + [i -1];
    console.log(fibArr[i]);
  }
}

// Count up using fibonacciSequence;
function fib(n) {
  if(n < 2) {
    return 1
  } else {
    return (fib(n-2) + fib(n-1));
  }
}
// fibonacciSequence using a memo.
function fibMemo() {
  const memo = {};

  function f(n) {
    const value;

    if (n in memo) {
      value = memo[n];
    } else {
      if (n < 2)
      value = n;
      else
      value = f(n - 1) + f(n - 2);

      memo[n] = value;
    }
    return value;
  }
  return f;
}


// Recursive fibonacciSequence
function fib(n) {
  let memo = [];

  function recurse(n) {
    if (n < 2) return 1;
    if (memo[n]) return memo[n];

    memo[n] == recurse(n-1) + recurse(n-2);
    return memo[n];
  }
  return recurse(n);
}

// Determines who won the election given the number of votes.
function electionWinner(votes) {
  let highestSoFar = {
    name: '',
    count: 0
  };

  let memo = {};
  for (let i = 0; i < votes.length; i++){
    let name = votes[i];
    memo[name] = memo[name] ? memo[name] + 1 : 1;

    if (memo[name] > highestSoFar.count) {
      highestSoFar = {
        name,
        count: memo[name]
      }
    } else if (memo[name] === highestSoFar.count) {
      if (name > highestSoFar.name) {
        highestSoFar.name = name;
      }
    }
  }
  return highestSoFar.name;
}



// Remove node at position X from list;
// Patrick Solution
function removeNodes(list, x) {
  let head = list;
  while(head && head.val > x) {
    head = head.next;
  }
  // if no nodes satisfy the condition return (null);
  if (!head) return
  let currentNode = head;
  let nextNode = head.next;

  while(nextNode) {
    // we want to skip over any node with a val > x;
    // to do this, point the currentNode's next at the nextNode's next
    /// We'll move the nextNode reference down and keep the currentNode reference in case;
    // Otherwise, continue walking through the list by pointing to the currentNode's next.

    if (nextNode.val > x) {
      nextNode = nextNode.next;
      currentNode.enxt = nextNode;
    } else {
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    }
  }
  return head;
};

// Determine if val is inside a binary search tree.
// MY SOLUTION.
let isPresent = function(root, val) {
  let result;
  let node = root;

  while (result === undefined) {
    if (node.data < val) {
      if (node.right !== null){
        node = node.right;
      } else {
        result = 0;
        break;
      }
    } else if (node.data > val) {
      if (node.left !== null) {
        node = node.left;
      } else {
        result = 0;
        break;
      }
    } else {
      result = 1;
      break;
    }
  }
  return result;
}

// Asha and Kelly
function calcDays(input){
  let params = (input.split(' ')),
  aStart = parseInt(params[0]),
  aAhead = parseInt(params[2]),
  aTotal = aStart + Ahead,
  kStart = parseInt(params[1]),
  kTotal = 0,
  days = 1;

  if (aStart >= kStart) return -1;

  while(aTotal >= kTotal) {
    aTotal += aStart;
    kTotal += kStart;
    days += 1;
  }
  return days;
}

// Gem Stones Challenge
// Charles has found a rock collection in the basement of his deceased grandmother's house. Each rock is composed of various elements, and each element is represented by a lowercase English letter from 'a' to 'z'. An element can be present multiple times in a rock. An element is called a 'gem-element' if it occurs at least once in each of the rocks.
// Complete the function "gemstones" containing the list of N rocks with their compositions in the form of an string array "rocks" as its argument , return the number of gem-elements that exist in those rocks.

// function gemStones(rocks){
//
// let D = {};
//
//   for (let i = 0; i < rocks[0].length; i++){
//
//     if(!D[rocks[0][i]]){
//       D[rocks[0][i]] = 1;
//     } else {
//       D[rocks[0][i]]++
//     }
//   }
//   // D:  { a: 1, b: 1, c: 1, d: 2, e: 1 }
//
//   for (let x of rocks){
//
//   }
// };

function gemStones(rocks){

  let result = 0;
  let smallest = rocks[0];
  let otherRocks = [];

  for (let i = 0; i <rocks.length; i++){
    if (rocks[i] < smallest.length){
      otherRocks.push(smallest);
      smallest = rocks[i]
    } else {
      otherRocks.push(rocks[i]);
    }
  }

  // smallest = rock with the fewest stones;
  // other rocks = every rock but the smallest;
  // iterate through smallest rock, check if each stone is present in every other rock.

  let stones = {};

  for (let i = 0; i <smallest.length; i++){
    let stone = smallest[i];

    if (!stones[stone] && checkRocks(stone)){
      result += 1;
    }
    stones[stone] = 1;
  }

  function checkRocks(stone){
    return otherRocks.every(rock => rock.includes(stone));
  }

  return result;
}

gemStones([ 'abcdde', 'baccd', 'eeabg' ]);

// 16 August, 2016
// A subsequence of string, s, is obtained by deleting one or more characters from s.  For example, the set of subsequences for string s= 'abc'
// would be {'a', 'ab', 'ac', 'abc', 'b', 'bc', 'c', ''}
// recall that the empty string is a subsequence of all strings.
//
// Complete the buildSubsequences function in your editor.  It has 1 parameter: a string, s.  It must return an array
// of strings containing all possible subsequences of s in alphabetical order.  Do not include the empty string in your
// returned array of subsequences.
//
// Input format: The locked stub code in your editor reads a single string, s, from stdin and passes it to your function.
//
// Constrains:
// 1 < \s\ < 16
// s is a string of unique lowercase letters (a - z);
//
// Output format:
// Output to stdout is handled by the locked stub code in your editor, which prints each element of the returned array on a new line.


function subSequence(s){
  let result = {};

  function sub(s){
    //base case = if we don't have an empty string. e.g. !s.length
    result[s] = 1;

    for (let i = 0; i < s.length; i++){
      let newString = s.substr(0, i) + s.substr(i + 1); // making new string,
      // The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.

      if (!result[newString] && newString.length) {
        sub(newString);
      }
    }
  }
  // must return alphabetically sorted result.
  return result;
}

// 16 August, 2016
// Michael is a shop owner who keeps n list, L, of the name and sale price for each item in inventory. The store employees record the name and sale price of every item sold. Michael suspects his manager, Alex, of embezzling money and modifying the sale prices of some of the items. Write a program that finds the number of times Alex recorded an incorrect sale price.
//
// Complete the verifyItems function provided in your editor so that it returns the number of incorrect sale prices recorded by Alex. It has 4 parameters:
// origItems: An array of strings, where each element is an item name.
// origPrices: An array of floating point numbers, where each element contains the original (correct) price of the item in the corresponding index of origItems.
// items: An array of strings containing the name of the items with sales recorded by Alex.
// prices: An array of floating point numbers, where each element contains the sale price recorded by Alex for the item in the corresponding index of items.
//
// Note: Where required by the language, there may also be 2 additional integer parameters for passing the array sizes (N and M).
//
// Input Format
// The locked stub code in your editor processes the following inputs and passes the necessary arguments to the verifyItems function:
// The first line contains an integer, N, the size of the origItems array. Each line i (where 0 ≤ i < N) of the N subsequent lines describes element i in origItems. The next line contains an integer, N, the size of the origPrices array. Each line i of the N subsequent lines describes element i in origPrices. The next line contains an integer, M, the size of the items array. Each line j (where 0 ≤ j < M) of the M subsequent lines describes element j in items. The next line contains an integer, M, the size of the prices array. Each line j of the M subsequent lines contains the price of element j in items.
//
// Constraints
// 1 ≤ N ≤ 105
// 1 ≤ M ≤ N
// 1.00 ≤ origPricesi, pricesj ≤ 100000.00, where 0 ≤ i < N, and 0 ≤ j < M
//
// Output Format
// Return the number of items whose sale prices were incorrectly recorded by Alex.
function verifyItems(origItems, origPrices, items, prices) {
  let orig = {}, result = [];

  origItems.forEach((item, i) => {
    if (!orig[item]) {
      orig[item] = origPrices[i];
    }
  });
  items.forEach((item, i) => {
    if (orig.hasOwnProperty(item)){
      if (orig[item] !== prices[i]){
        result.push(orig[item]);
      }
    }
  });
  return result.length;
};
