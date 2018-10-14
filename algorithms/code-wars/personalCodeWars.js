////////////////////////////////////// DAY ONE //////////////////////////////////////
// // write a fcn to count # of occurrences of each letter in a given string
// function countOccurences (str) {
//
//   let memo = {},
//   n = str.length;
//
//   for (let i = 0; i < n; i++) {
//     memo[str[i]] = ++memo[str[i]] || 1;
//     // memo[str[i]] ? memo[str[i]]++ : memo[str[i]] = 1;
//   }
//   return memo;
// }
// console.time('hasOccurences')
// countOccurences('oakland athletics') // 2.038
// console.timeEnd('hasOccurences')
//
// // another solution --> this is better in terms of readability:
// function countOccurences(str) {
//   let memo = {}
//   let n = str.length
//   for(let i = 0; i < n; i++) {
//     memo.hasOwnProperty(str[i]) ? ++memo[str[i]] : memo[str[i]] = 1
//   }
//   return memo
// }
// console.time('hasOccurences')
// countOccurences('oakland athletics') // 1.091 ms
// console.timeEnd('hasOccurences')
//
// // another solution... but not as efficient:
// function countOccurences(str) {
//   let memo = {}
//   str.split('').forEach((letter) => {
//
//     memo[letter] ? ++memo[letter] : memo[letter] = 1;
//
//   });
//   return memo
// }
// console.time('countOccurences')
// countOccurences('oakland athletics') // 1.4 ms
// console.timeEnd('countOccurences');


/////////////////////////////////////// DAY TWO //////////////////////////////////////
// // write a fcn that will return data of last node (aka node in which 'next' key returns null)
// let node = {
// data: 1,
// next: {
//   data: 2,
//   next: {
//     data: 3,
//     next: {
//       data: 4,
//       next: null
//     }
//   }
// }
// function last(head) {
//   let node = head;
//   while(node.next) node = node.next;
//   return node;
// }
// // less readable code:
// function last(head) {
//   while(head.next) head = head.next;
//   return head.data;
// }
// console.time('last')
// last(node)
// console.timeEnd('last'); // last: 0.594ms
//
// // // write a fcn that will return index of middle node = BROKEN
// function middle(head) {
//   let runner = 0;
//   while(head.next.next) {
//     runner += 1;
//     console.log(runner);
//   }       // runner = middle if we increment by 2
//   return runner
// }
// console.time('middle')
// middle(node)
// console.timeEnd('middle'); //
//
// // if the obj.next !== null, keep going through the 'next' object until find one that is null
// var head: {
//   data: 'data',
//   next: {
//     data: 'data',
//     next: {
//       data: 'data',
//       next: {
//         data
//         next: null
//       }
//     }
//   }
// }


////////////////////////////////////// DAY THREE //////////////////////////////////////
// function min(stack) {
//   /*
//     everytime we push in something,
//     we store what is the CURRENT min at that time
//     (by comparing it with the previous min)
//     so we are storing 2 things in one node at a time:
//     the ACTUAL number
//     and the MIN when that number was pushed in
//   */
//   let values = [];
//   this.push = (d) => values.push(d);
//   this.pop = () => values.pop();
//   this.min = () => { }
// }


////////////////////////////////////// DAY FOUR //////////////////////////////////////
// // Calculate Fibonacci Sequence
//
//
// // 1. Using an array, no recursion
// function fib(number) {
//   let fibArray = []
//
//   for (let i = 0; i <= number; i++) {
//     if (number <= 1) {
//       fibArray.push(1)
//     }
//     let second = fibArray.length - 2
//     let last = fibArray.length - 1
//     let sum = second + last
//     fibArray.push(sum)
//   }
//
//   return fibArray[number]
// }
//
//
// // 2. No array, no recursion
// function fib(number) {
//   let previous
//   let current
//   let i = 2
//   let result
//
//   while (i <= number) {
//     result = previous + current
//     current = previous
//     previous = result
//     i++
//   }
//   return result
// }
//
//
// // 3. Recursion
// function fib(number) {
//   if(number < 2) {
//     return 1;
//   } else {
//     return fib(number - 1) + fib(number - 2);
//   }
// }
//
//
// // 4. Recursion with dictionary - Patrick's
// function fib(number) {
//   let memo = {}
//   function recurse(number) {
//     if (number < 2) 1
//     if (memo[number]) memo[number]
//     memo[number] = recurse(number - 1) + recurse(number - 2)
//     return memo[number]
//   }
//   return recurse(number)
// }
//
//
// /////////// DAY FIVE - First Hackerrank challenge ///////////////////
// /*
//   There are n citizens.
//   Each voter writes the name of their chosen candidate on a ballot
//   and places it in a ballot box.
//   The candidate with the highest number of votes wins the election;
//   if two or more candidates have the same number of votes,
//   then the tied candidates' names are ordered alphabetically
//   and the last name wins.
// */
//
// function electionWinner(votes) {
//   let memo = {},
//   n = votes.length
//
//   for (let i = 0; i < n; i++) {
//     let current = votes[i]
//     // with ternary: memo[current] ? ++memo[current] : memo[current] = 1
//     memo.hasOwnProperty(current) ? ++memo[current] : memo[current] = 1
//   }
//
//   let highestVotes = 0
//   let candidate
//   for (let name in memo) {
//     let memoVotes = memo[name];
//
//     if(memoVotes > highestVotes) {
//       highestVotes = memoVotes
//       candidate = name
//     } else if (memoVotes === highestVotes){
//       highestVotes = memoVotes
//     }
//   }
//
//   let winners = []
//   for (let name in memo) {
//     let memoVotes = memo[name]
//
//     if(memoVotes === highestVotes) {
//       winners.push(name)
//     }
//   }
//
//   winners = winners.sort()
//   let winner = winners[winners.length - 1]
//   return winner
// }
//
// // Patrick's
// function electionWinner(votes) {
//   let highestSoFar = {
//     name: '',
//     count:0
//   }
//
//   let memo = {},
//       n = votes.length
//
//   for(let = 0; i < votes.length; i++) {
//     let name = votes[i]
//     let memoVotes = memo[name]
//     memoVotes = memoVotes ? memoVotes + 1 : 1
//
//     if(memoVotes > highestSoFar.count) {
//       highestSoFar = {
//         name,
//         count: memoVotes
//       }
//     } else if (memoVotes === highestSoFar.count) {
//       if (name !== highestSoFar.name) {
//         highestSoFar.name = name
//       }
//     }
//   }
//
//   return highestSoFar.name
// }
//
//
//
//
//
// //////////////////////////////// DAY SIX ////////////////////////////////
// /*
//   The first one-way trip to Mars must have
//   its crew composed of matched opposite-sex couples who are exactly the same age.
//   Many applicants have come forth and passed all the tests to qualify,
//   but the first trip is super-exclusive,
//   and now is the time to shorten the list.
//
//   You are given two arrays, f and m,
//   that give the AGE in DAYS
//   of female applicants and male applicants respectively.
//   You are required to RETURN a SINGLE ARRAY
//   that lists the AGE in days of MATCHED COUPLES
//   in DESCENDING ORDER.
//   If there are two males and one female with the same age,
//   then only one couple can be formed,
//   but if there are two females and two males with the same age,
//   then two couples can be formed,
//   represented by two identical entries in the output array.
//
//   Your task is to complete the function sortIntersect to accomplish this.
//   The code to handle input and output is already written into the system
//   and calibrated to be compatible with the test cases
//   used to evaluate the correctness of your code.
//   There is no need to modify anything outside the definition of sortIntersect.
//   The arguments to sortIntersect are
//   two integer arrays,
//   and the output is a single integer array.
// */
//
// // Eileen's
// function sortIntersect(f, m) {
//
//   let females = {}
//   let males = {}
//   let couples = []
//
//
//   f.forEach(age => {
//     let female = females[age]
//     female ? female += 1 : female = 1
//   })
//
//   m.forEach(age => {
//     if(females[age]) {
//       let male = males[age]
//       male ? male+=1 : male = 1
//     }
//   })
//
//   for(let age in males) {
//     let male = males[age]
//
//     if(male % 2 === 0) {        // check to see if this count is even
//       let couplesNumber = male / 2          // divide by two find how many couples/pairs
//       for (let i = 0; i < couplesNumber; i++) {
//         couples.push(age)
//       }
//     } else {
//       couples.push(age)
//     }
//   }
//
//   return couples.sort((a,b) => b-a)
// }
//
// // Patrick's
// function sortIntersect(f, m) {
//   /*
//     the memo will look like this...
//   let females = {
//     '456': 20
//     '345': 13
//   }
//
//   the key is the number of days.
//   the value is the count
//   of how many females are 456 days old...
//   */
//   let females = f.reduce((memo, age) => {
//     let mFemale = memo[age]
//     mFemale = mFemale ? mFemale + 1 : 1
//
//     return memo
//   }, {})
//
//   let males = m.reduce((memo, age) => {
//     let mMale = memo[age]
//     mMale = mMale ? mMale + 1 : 1
//
//     return memo
//   }, {})
//
//   let result = []
//   for (let age in females) {
//     while(males[age] && females[age]) {
//       result.push(age)
//       // ['456', '345']
//       males[age]--
//       females[age]--
//     }
//   }
//   // ['345', '456']
//   return result.sort((a,b) => b - a )
// }
//
//
//
//
// //////////////////////////////// DAY SEVEN ////////////////////////////////
// // Complete the removeNodes function provided in your editor. It has 2 parameters:
// // list: A reference to a LinkedListNode that is the head of a linked list.
// // x: An integer value.
// //
// // Your function should remove all nodes from the list having data values greater than x, and then return the head of the modified linked list.
// //
// // Input Format
// // The locked stub code in your editor processes the following inputs and passes the necessary arguments to the removeNodes function:
// // The first line contains N, the number of nodes in the linked list. Each line i (where 0 ≤ i < N) of the N subsequent lines contains an integer representing the value of a node in the linked list. The last line contains an integer, x.
// //
// // Constraints
// // 1 ≤ N, x ≤ 105
// // 1 ≤ listi ≤ 105, where 0 ≤ i < N
// //
// // Output Format
// // Return the linked list after removing the nodes containing values > x.
//
// // Patrick's
// function removeNodes(list, x) {
//
//   // first find the head of the list satisfying the conditions
//   var head = list;
//   while (head && head.val > x) {
//     head = head.next;
//   }
//
//   // if no nodes satisfy the condition, return (null)
//   if(!head) return;
//
//   var currentNode = head;
//   var nextNode = head.next;
//
//   while(nextNode) {
//     // we want to skip over any node with a val > x
//     // to do this, point the currentNode's next at the nextNode's next
//     // we'll move the nextNode reference down and keep the currentNode reference in case
//     // otherwise, continue walking through the list by pointing the currentNode's and next
//     if(nextNode.val > x) {
//       nextNode = nextNode.next;
//       currentNode.next = nextNode;
//     } else {
//       currentNode = currentNode.next;
//       nextNode = nextNode.next;
//     }
//   }
//
//   return head;
//
// }
//
//
// //////////////////////////////// DAY EIGHT ////////////////////////////////
// // Each node of a Binary Search Tree (BST) has an integer value and pointers to two children, referred to as left child and right child. The value of left child is always less than the value of its parent node, and the value of right child is always greater than or equal to the value of its parent node.
// //
// // The isPresent function in your editor has two parameters: a reference to the root node of a Binary Search Tree (BST) and an integer value. Complete isPresent so it returns 1 if the value is present in the BST, and returns 0 otherwise.
//
//
// this.isPresent = function(root, val) {
//
//   let currentNode = root;
//
//   while(currentNode) {
//     if (currentNode.data === val) {
//       return 1;
//     } else if (currentNode.data >= val) {
//       if(currentNode.data === val) {
//         return 1;
//       }
//
//       if(currentNode.left === null) {
//         return 0;
//       } else {
//         currentNode = currentNode.left;
//       }
//     } else if (currentNode.data < val) {
//       if (currentNode.right === null) {
//         return 0;
//       } else {
//         currentNode = currentNode.right;
//
//       }
//     }
//   }
//
// };
//
//
// // Patrick's - iterative
// this.isPresent = function(root, val) {
//   let node = root;
//   while(node) {
//     if(node.data === val) {
//       return 1;
//     } else {
//       if(val > node.data) {
//         node = node.right;
//       } else {
//         node = node.left;
//       }
//     }
//   }
//
//   return 0;
// }
//
//
// // Patrick's - recursive
// this.isPresent = function(root, val) {
//   if(root.data === val) {
//     return 1;
//   } else if (val > root.data && root.right) {
//     return this.isPresent(root.right, val);
//   } else if(val > root.data && root.left) {
//     return this.isPresent(root.left, val);
//   } else {
//     return 0;
//   }
// }
//
//
//
//
//
// //////////////////////////////// DAY NINE ////////////////////////////////
// // Asha and Kelly like programming, but Asha practices more than Kelly. Not wanting to fall behind, Kelly resolves to practice more. Let's say Asha solves A problems per day, and Kelly solves K problems per day. Asha is already P problems ahead of Kelly. What is the minimum number of days it will take for Kelly to have solved more problems than Asha?
// //
// // Input Format
// // A single line containing three space-separated integers: A (the number of problems Asha solves per day), K (the number of problems Kelly solves per day), and P (the number of problems Kelly must solve to catch up with Asha), respectively.
//
// function calcDays(input) {
//
//   let ashaPerDay = parseInt(input.split(' ')[0]);
//   let kellyPerDay = parseInt(input.split(' ')[1]);
//   let problemsAhead = parseInt(input.split(' ')[2]);
//   let days = 1;
//
//   if(ashaPerDay >= kellyPerDay) return -1;
//
//   while( ((ashaPerDay * days) + problemsAhead) >= (kellyPerDay * days) ) {
//     days++;
//   }
//
//   return days;
//
// }
//
//
// // Patrick's
// function calcDays(input) {
//   input = input.split(' ');
//
//   let asha = +input[0];
//   let kelly = +input[1];
//   let lead = +input[2];
//
//   let cob = {
//     day: 0,
//     asha: lead,
//     kelly: o
//   }
//
//   if (asha >= kelly) return -1;
//
//   while (cob.asha >= cob.kelly) {
//     cob.asha += asha;
//     cob.kelly += kelly;
//     cob.day++;
//   }
//
//   return cob.day;
//
// }
//
//
//
//
//
//
//
//
//
// //////////////////////////////// DAY TEN ////////////////////////////////
// // Charles has found a rock collection in the basement of his deceased grandmother's house. Each rock is composed of various elements, and each element is represented by a lowercase English letter from 'a' to 'z'. An element can be present multiple times in a rock. An element is called a 'gem-element' if it occurs at least once in each of the rocks.
// // Complete the function "gemstones" containing the list of N rocks with their compositions in the form of an string array "rocks" as its argument , return the number of gem-elements that exist in those rocks.
// //
// // Input Format:
// // The function "gemstones" containing the list of N rocks with their compositions in the form of an string array "rocks" as its argument.
// //
// // Output Format:
// // Return a single integer that gives the number of gem-elements that are common in these rocks. If there are none, return 0.
//
//
// function gemstones(rocks) {
//
//   let memo = {};
//   let letters = [];
//   let length = rocks.length;
//   let counter = 0;
//
//   rocks.forEach((string, index) => {
//     string = string.split('').map((letter) => {
//       letters.push(index+letter);
//     })
//   })
//
//   letters.forEach(letter => {
//
//     if(!memo[letter.split('')[letter.split('').length - 1]]){
//       if(!memo[letter]) {
//         memo[letter.split('')[letter.split('').length - 1]] = 1;
//         memo[letter] = 1;
//       } else {
//         memo[letter] = 1;
//       }
//     } else if(memo[letter.split('')[letter.split('').length - 1]]) {
//       if(!memo[letter]) {
//         memo[letter.split('')[letter.split('').length - 1]] += 1;
//         memo[letter] = 1;
//       } else {
//         memo[letter] = 1;
//       }
//     }
//
//   })
//
//   for(let letter in memo) {
//     if(memo[letter] >= length) {
//       counter += 1;
//     }
//   }
//
//   return counter;
//
// }
//
//
// function gemStones(arr){
//   let count = 0;
//   let firstWordArr = arr[0].split('');
//
//   firstWordArr.forEach(letter => {
//     let innerCount = 0;
//     for(let i = 1; i < arr.length; i++) {
//       if(arr[i].indexOf(letter) > -1) {
//         innerCount++;
//         arr[i] = arr[i].slice(0, arr[i].indexOf(letter)) + arr[i].slice(arr[i].indexOf(letter) + 1);
//       }
//       if(innerCount === arr.length - 1) {
//         count++;
//       }
//     }
//   })
//   return count;
// }
//
//
//
// // Patrick's
// function gemstones(rocks) {
//   let result = 0;
//   let smallest = rocks[0];
//   let otherRocks = [];
//
//   // find the smallest rock
//   for(let i = 1; i<rocks.length; i++) {
//     if(rocks[i].length < smallest.length) {
//       otherRocks.push(smallest);
//       smallest = rocks[i];
//     } else {
//       otherRocks.push(rocks[i]);
//     }
//   }
//
//   // smallest = rock with the fewest stones
//   // otherRocks = every rock but the smallest
//   // iterate thru smallest rock, check if ea stone is present in every other rock
//   let stones = {};
//
//   for(let i = 1; i<smallest.length; i++) {
//     let stone = smallest[i];
//
//     if(!stones[stone] && checkRocks(stone)) {
//       result += 1;
//     }
//     stones[stone] = 1;
//   }
//
//   function checkRocks(stone) {
//     return otherRocks.every((rock) => rock.includes(stone));
//   }
//
//   return result;
//
// }
//
//
//
// //////////////////////////////// DAY ELEVEN ////////////////////////////////
// // A subsequence of string, s, is obtained by deleting one or more characters from s. For example, the set of subsequences for string s = "abc" would be {"a", "ab", "ac", "abc", "b", "bc", "c", ""} (recall that the empty string is a subsequence of all strings).
// //
// // Complete the buildSubsequences function in your editor. It has 1 parameter: a string, s. It must return an array of strings containing all possible subsequences of s in alphabetical order. Do not include the empty string in your returned array of subsequences.
//
//
// // recursion
// // var memo = {}
// //
// // function seq(str) {
// //   memo[str] = 1;
// //   for(str) => {
// //     drop char;
// //     seq(new string)
// //   }
// // }
// //
// //
// // "abcd" --> "bcd", "acd", "abd", "abc"
// //
// // where the three letter sequences: "abc" => ["a", "ab", "abc", "ac", "b", "bc", "c"]
//
//
// // for(let i = 0; i<length; i++) {
// //   buildSubsequences(s.slice(1));
// //   buildSubsequences(s.slice(0, s.length - 1));
// // }
//
// var memo = {};
//
// function buildSubsequences(s) {
//   memo[s] = 1;
//   let length = s.length;
//   let results = [];
//
//
//   while(length) {
//     buildSubsequences(s.slice(1)) && buildSubsequences(s.slice(0, s.length - 1));
//     length--;
//   }
//
//   for(let key in memo) {
//     results.push(key)
//   }
//
//   results.sort().splice(0, 1);
//
//   return results;
//
// }
//
//
//
// // Patrick's
// function buildSubsequences(s) {
//   let result = {};
//
//   function sub(s) {
//     // base case
//     // !s.length
//
//     result[s] = 1;
//
//
//     // test
//     for(let i =0; i<s.length; i++) {
//       let newString = s.substr(0, i) + s.substr(i+1);
//       if(!result[newString] && newString.length) {
//         sub(newString);
//       }
//     }
//   }
//
//   sub(s);
//
//   return Object.keys(result).sort();
// }
//
//
//
//
//
//
//
//
// //////////////////////////////// DAY TWELVE ////////////////////////////////
// // Michael is a shop owner who keeps n list, L, of the name and sale price for each item in inventory. The store employees record the name and sale price of every item sold. Michael suspects his manager, Alex, of embezzling money and modifying the sale prices of some of the items. Write a program that finds the number of times Alex recorded an incorrect sale price.
// //
// // Complete the verifyItems function provided in your editor so that it returns the number of incorrect sale prices recorded by Alex. It has 4 parameters:
// // origItems: An array of strings, where each element is an item name.
// // origPrices: An array of floating point numbers, where each element contains the original (correct) price of the item in the corresponding index of origItems.
// // items: An array of strings containing the name of the items with sales recorded by Alex.
// // prices: An array of floating point numbers, where each element contains the sale price recorded by Alex for the item in the corresponding index of items.
//
//
// function verifyItems(origItems, origPrices, items, prices) {
//
//   let memo = {};
//   let results = [];
//
//   for(let i = 0; i<origItems.length; i++) {
//     memo[origItems[i]] = origPrices[i];
//   }
//
//   for(let i=0; i<items.length; i++) {
//     if(memo[items[i]] !== prices[i]) {
//       results.push(items[i])
//     }
//   }
//
//   return results.length;
//
//   // make a memo to document everything in orig Items
//   // then check if the memo exists with the keys in items
//   // after that, if it exists, check the value
//   // if the value matches, push that into an array
//   // get array length
// }
//
//
// // Patrick's
// function verifyItems(origItems, origPrices, items, prices) {
//
//   var items = items.reduce((memo, item, i) => {
//     memo[item] = prices[i];
//   }, {});
//
//   return origItems.reduce((count, origItem, i) => {
//     return (items[origItem] && items[origItem] !== origPrices[i]) ? count + 1 : count;
//   }, 0);
// }
//
//
//
//
//
// //////////////////////////////// DAY THIRTEEN ////////////////////////////////
// // Sherlock Holmes and his dear friend Dr. Watson are working on an urgent problem. Watson had earlier learned through his "special relationship" contacts at MI6 that that the CIA has lately been facing weird problems with their supercomputer, 'The Beast'. Then, Sherlock received a note from Professor Moriarty, his archenemy, boasting that he has infected 'The Beast' with a virus.
// //
// // Now, all of Sherlock's past efforts to subdue Moriarty had been in vain, but the note gave him new hope to finally triumph over his nemesis. You see, the note had been written on a piece of paper previously sat on Moriaty's desk under another piece of paper. Unbeknownst to anyone but the intrepid Sherlock Holmes, it had an impression of a number N on it. After following up with more clues from his past experience with Moriarty, Sherlock figured out that the key to remove the virus is the largest 'Decent' Number having N digits.
// //
// // A 'Decent' Number has -
// // Only 3 and 5 as its digits.
// // The number of times 3 appears is divisible by 5.
// // The number of times 5 appears is divisible by 3.
// //
// // Meanwhile, the trigger date of the virus to completely wipe the disk and burn out the processors of 'The Beast' is fast approaching. Can you save 'The Beast', and find the key for Sherlock?
//
//
// function decentNumber(arr) {
//
// }
//
//
//
//
// // a decent number can ONLY have 3 and 5 as its numbers... but how can we keep adding 3 or 5?
// //
// // so the number of times 3 appears in that number MUST be divisible by 5
// // the number of times 5 appears in that number MUST be divisible by 3
// //
// // test cases:
// //   3 - 33333 would be the first one --> so each time 3 is added, it must be added in groups of 5
// //
// //   5 - 555 would be the first one --> so each time 5 is added, it must be added in groups of 3
// //
// //   so we should go in order... 555 is the smallest one, 33333 is the next, 555555 is the next... :
// //
// //   555, 33333, 555555, 33333555, 55533333, 555555555
// //
// //
// // given an array, loop through array. as long as the number is bigger than 3, we can use the below logic
//
// while(!decent) {
//
// }
//
// for(let i = 0; i<Infinity; i++) {
//   if(number)
// }
//
// let decent = 555;
//
//
// if(decent % number && decent % 3 && decent % 5) {
//   return decent;
// } else {
//   decent =
// }
//
// let decentFive = 555;
// let decentThree = 33333;
// let decent;
//
// if(number<3) {
//   return -1;
// } else {
//   if(decentFive % number === 0) {
//     return decentFive;
//   } else if (decentThree % number === 0) {
//     return decentThree;
//   } else {
//     decent = '' + decentFive;
//   }
//
// }
//
//
//
//
// // Given an array array of integers of length L, modify array in place by applying the following rules to array from index 0 to L - 1 in order:
// //
// // If i is a multiple of 2 and i is greater than 0, array[i] = array[i] + array[i - 1]
// // If i is a multiple of 3 and i is greater than 0 and i + 1 < L, swap array[i] and array[i + 1]
// // If i is a multiple of 5 and i is greater than 0, array[i] = array[i] * 2
// // If i is a multiple of 7 or when no other rules apply, array[i] = array[i] - 1
// //
// // If more than one rule applies (e.g. when i is 6, 10, etc.), then each applicable rule applies in the order in which they are listed above.
// //
// // Your function should return the array after modifying it. If you create and return a new array instead of mutating and returning array, that's fine too.
// //
// //
// // /*
// // 1. If i is a multiple of 2 and i is greater than 0,
// //      array[i] = array[i] + array[i - 1]
// // 2. If i is a multiple of 3 and i is greater than 0 and i + 1 < L,
// //      Swap array[i] and array[i + 1]
// // 3. If i is a multiple of 5 and i is greater than 0,
// //      array[i] = array[i] * 2
// // 4. If i is a multiple of 7 or when no other rules apply,
// //      array[i] = array[i] - 1
// // */
//
// function processArray(array) {
//   console.log('array:', array);
//   // iterate over array, apply rules individually
//   for (let i =0; i<array.length; i++) {
//     if(i%2 === 0 && i > 0) {
//       array[i] = array[i] + array[i - 1]
//     } else if (i%3 ===0 && i >0 && i + 1 < array.length) {
//       let temp = array[i];
//       array[i] = array[i+1];
//       array[i+1] = temp;
//     } else if (i%5 ===0 && i>0) {
//       array[i] = array[i] * 2;
//     } else {
//       array[i] = array[i]- 1;
//     }
//   }
//
//   return array;
//
// }
//
//
// // Given a string of length L and a number M, find the number of characters in the string that appear a multiple of M times. The string may consist of mixed-case alphanumeric characters and symbols. You code should treat different cases of the same letter as distinct characters.
// //
// // Constraints
// // You can assume all input will follow these constraints:
// // 0 <= L <= 100,000
// // 1 <= M <= 100,000
// // L[i] can be A through Z (mixed case), 0 through 9, or basically any symbol on your keyboardOutput Format
// // Return an array characters of length T, where characters[i] is the number of characters (case-sensitive) in strings[i] that appear a multiple of multiples[i] times.
// //
// // Example
// // Input:
// // strings: ['aababcabcd', 'aababcabcd'],
// // multiples: [3, 2]
// //
// // Output:
// // [1, 2]
// //
// // Explanation:
// //
// // output[0] is 1 because only one character ('b') appears in strings[0] a multiple of 3 (multiples[0]) times
// //
// // output[1] is 2 because two characters ('a' and 'c') appear in strings[1] a multiple of 2 (multiples[1]) times (4 and 2 times, respectively)
//
// /*
// * Complete the function below.
// */
// function countCharacters(strings, multiples) {
//
//   let countArr = [];
//
//   // make a dictionary for each item in the array
//   // after making dictionary, compare number (eg a: 3) with the number given in the corresponding index in multiples array
//   // increment a counter to count number of instances
//
//   strings.forEach((string, index) => {
//     let memo = {};
//     let count = 0;
//     string = string.split('');
//     string.forEach((letter, letIndex) => {
//       memo[letter] ? memo[letter]+=1 : memo[letter] = 1;
//     })
//
//     for(let letter in memo) {
//       if(memo[letter] % multiples[index] === 0) {
//         ++count;
//       }
//     }
//     countArr.push(count);
//   });
//
//   return countArr;
//
// }
//
//
//
//
//
//
//
//
//
// // You're creating a 2D game with randomly generated levels consisting of columns on a flat ground. The height of each column varies, as does the distance between each column. You want to know the largest valid lake that any given level can contain. Note that:
// // A lake is valid if no columns protrude from the surface of the water.
// // A lake is larger than another lake when it contains more water.
// // Since we're in a 2D game, the amount of water in a lake is the height of the lake times the width of the lake.
// // The amount of water in a lake is affected by submerged columns (note that columns have a width of 1).
// //
// // Your task is to implement a method that takes the following arguments and returns the amount of water in the largest valid lake:
// // heights
// // An array of columnCount integers
// // heights[i] is the height of the ith column from the left
// // 2 <= columnCount <= 100,000
// // 1 <= heights[i] <= 100,000 for all i
// // distances
// // An array of (columnCount - 1) integers
// // distances[i] is the distance between column i and column i + 1
// // 1 <= distances[i] <= 100,000 for all i
//
//
//
//
// function getMaxLakeVolume(heights, distances) {
//   console.log('heights:', heights);
//   console.log('distances:', distances);
//
//
//   // iterate through heights array
//   // compare value: if value is bigger, stop, get distance between the two heights
//   // if the value is smaller, keep going, and increment a counter
//   // how to use the counter: in a for loop (from that current index + COUNTER to get to the specific index in distances array)
//   // how to check to see the start of heights?
//
//   let count = 0;
//   let heightArr = [];
//   let distArr = [];
//
//   heights.forEach((number, index) => {
//     if(heights[index] > heights[index+1]) {
//       count++;
//       heightArr.push(heights[index]);
//     }
//   })
//
//   console.log('count:', count);
//   console.log('heightArr:', heightArr);
//   let start = heightArr[0]; // index of start of the height
//   let end = heights[count+2] || heights[count];
//   console.log('start:', start);
//   console.log('end:', end)
//
//   let startIndex = heights.indexOf(heightArr[0])
//
//   console.log('startIndex:', startIndex);
//   for(let i = startIndex; i<startIndex+count; i++) {
//     distArr.push(distances[i]);
//   }
//
//   console.log('distArr:', distArr);
//
//   let sum = distArr.length > 1 ? distArr.length + 1 + distArr.reduce((prev, curr) => prev+ curr, 0) : distArr.reduce((prev, curr) => prev+curr, 0);
//   console.log('sum:', sum);
//
//   return sum * end;
//
// }
//
//
//
//
// // A group of friends, who shall remain nameless, have hacked into the logistics system of an evil dictator. They want to deplete the dictator's fuel supply by making his army units travel as much distance as possible when they go to suppress rebellions in various locations up and down the coast. While these friends are good at cracking security, they need some help with elementary computing tasks. So they reach out to you. They want to be able to give you an array of positive and negative integers, representing distances north or south of the capital, and they want to see the elements of the array in zigzag order. This means that the largest member appears first, the smallest appears second, and the remaining elements alternate between the larger members decreasing from the largest, and the smaller members increasing from the smallest.
// //
// // For example, the array {1, 3, 6, 9, -3} becomes {9, -3, 6, 1, 3} in zigzag order.
// //
// // Specifically, your job is to complete the blank function zigzagArray to accomplish this task within a reasonable time. zigzagArray takes one argument, an array intArray of n integers, and returns an identically-sized array with the elements arranged in zigzag order. Code to process input and output is already present in the system and guaranteed to work with the format of the test case files. There is no need to modify that part of the program.
// /*
// * Complete the function below.
// */
// function wiggleArrangeArray(intArr) {
//   let resArray = [];
//   let flag = true;
//   intArr.sort((a,b) => a-b);
//   while(intArr.length) {
//     if(flag) {
//       var num = intArr.pop();
//     } else {
//       var num = intArr.shift();
//     }
//
//     resArray.push(num);
//     flag = !flag;
//   }
//
//   return resArray;
// }
//
// // Complete the function lonelyInteger that has one parameter- an array numbers, of n integers. In the array, all the elements except one, occur more than one times. The function should return the integer, which occurs only one time.
// //
// // Input Format
// // The first line of the input is an integer, n, total number of elements in array numbers. Each of the next n lines, contains single integer.
// //
// // Constraints
// // 1 ≤ n ≤ 100
// // n is odd.
// // 0 ≤ Ai ≤ 100, 0 ≤ i < n
// //
// // Output Format
// // Your function should return the integer, which occurs only once in the array.
//
// /*
// * Complete the function below.
// */
// function lonelyInteger(arr) {
//   let memo = {};
//   let result;
//
//   arr.forEach(number => {
//     memo[number] ? memo[number]+=1 : memo[number] = 1;
//   })
//
//   for(let number in memo) {
//     if(memo[number] === 1) {
//       result = number;
//     }
//   }
//
//   return result;
//
// }
//
//
//
//
// // Complete the function closestNumbers that has one parameter, array numbers of n distinct integers. Your function should print all the pairs which have the minimum absolute difference. The pairs should be printed in the ascending order, and each pair should be printed on a new line. Each pair should print the elements separated by space, also the smallest element should be printed first, for example, if (5, 4) is a pair, then output should be 4 5.
// //
// // Input Format
// // The first line of the input is an integer n, total number of elements in the array. Each of the next n lines contains a single integer.
// //
// // Constraints
// // 1 ≤ n ≤ 105
// // -2 x 106 ≤ numbersi ≤ 2 x 106
// // Array, numbers, has no duplicate elements.
// //
// // Output Format
// // Your function should print the pairs with a minimum absolute difference on a new line and in ascending order.
// function closestNumbers(numbers) {
//
//   let length = numbers.length;
//   let resStr = '';
//   numbers.sort((a,b) => a-b);
//   let minDiff = numbers[length - 1] - numbers[0];
//
//   for(let i = 0; i<numbers.length-1; i++) {
//     let diff = numbers[i+1] - numbers[i];
//     if(diff<minDiff) {
//       minDiff = diff
//     }
//   }
//
//   for(let i = 0; i<numbers.length-1; i++) {
//     if(numbers[i+1] - numbers[i] === minDiff) {
//       resStr = resStr.concat(numbers[i] + ' ' + numbers[i+1] + '\n');
//     }
//   }
//
//   return resStr;
//
//
//
// }
//
//
//
//
//
// // FizzBuzzWoof
//
// // you can write to stderr for debugging purposes, e.g.
// // process.stderr.write('this is a debug message');
// 'use strict'
//
// function solution(N) {
//   // let newArr = [];
//   let newArr = '';
//   for(let i = 1; i<=N;i++) {
//     if(i%3===0 && i%5===0 && i%7===0) {
//       newArr = newArr.concat("FizzBuzzWoof" + "\n");
//     }  else if (i%3===0 && i%5===0) {
//       newArr = newArr.concat("FizzBuzz" + "\n")
//     } else if (i%3===0 && i%7===0){
//       newArr = newArr.concat("FizzWoof" + "\n")
//     } else if (i%5===0 && i%7===0){
//       newArr = newArr.concat("BuzzWoof" + "\n");
//     } else if (i%3===0) {
//       newArr = newArr.concat("Fizz" + "\n");
//     } else if(i%5===0) {
//       newArr = newArr.concat("Buzz" + "\n")
//     } else if(i%7===0) {
//       newArr = newArr.concat("Woof" + "\n")
//     } else {
//       newArr = newArr.concat(i + "\n")
//     }
//   }
//
//   console.log(newArr);
// }
//
//
//
// // An integer P is a whole square if it is a square of some integer
// // For example, given A = 4 and B = 17, the function should return 3 because there are 3 square of integers in the interval [4...17], namely 4, 9, and 16.
// //
// // A and B are integers within the range [-10k, 10k]
// //
// //
// //
// // // you can write to stdout for debugging purposes, e.g.
// // // console.log('this is a debug message');
// 'use strict'
// function solution(A, B) {
//   // write your code in JavaScript (Node.js 4.0.0)
//   let arr = [];
//   let count = 0;
//
//   for(let i = A; i<=B; i++){
//     arr.push(i);
//   }
//
//   arr.forEach(num => {
//     num = Math.abs(num);
//     let squareRoot = Math.sqrt(num);
//     if(squareRoot % 1 === 0){
//       count++;
//     }
//   })
//
//   return count;
// }
//
//
// // with PostgreSQL
// // Given a table invoice_items with the following structure:
// //   create table invoice_items (
// //     inv_num integer not null,
// //     item varchar(10) not null,
// //     price integer not null
// //   );
// //
// //   write an SQL query that returns a list of invoices (inv_num) with the total price of each. The list should be ordered by inv_num (in descending order).
// //
// //   For example, given:
// //
// //   inv_num | item | price
// //   ----------------------
// //   3       | a   | 10
// //   3       | b   | 15
// //   1       | c   | 7
// //
// //   your query should return:
// //   inv_num | sum
// //   -------------
// //   3       | 25
// //   1       | 7
