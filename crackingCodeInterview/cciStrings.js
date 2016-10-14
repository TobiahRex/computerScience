/*
Two strings are anagrams of each other if,
the first strings letters
can be rearranged to form the second string.
IOW, are all letters in string 1 inside string 2?

Also, the frequency of letters must also be the same.
string 2 cannot of different letters,
or more letters than string 1.

Problem:
Given two strings, A & B,
that may or may not be of the same length,
determine the minimum number of char deletions,
required to make A & B anagrams.

Any character can be deleted from either string.

Step 1 - Listen to all details.
can delete from both strings.
minimum # of deletions.
letters are all lowercase.

Step 2 - examples input
a = 'cde'
b = 'abc'
answer = 4

Step 3 - Brute Force

IDEA 1
create Memo from shortest string.
iterate across second string.
check each char to memo.
if match to memo...
1) theres match 1 out of 2. - A has more of this letter, possibly delete from B.
2) theres match 2 out of 2 - both have same number, do nothing.
3) theres match 3 out of 2 - too many matches, delete from B.
4) theres no match from B - delete char from both A & B.

IDEA 1.2
use a for loop.
check A and build memo.
check B against memo.


*/

function anagramCheck(a, b){
  let memo = {}
  let deleteCount = 0

  for (let i = 0; i < a.length; i++) {
    memo.hasOwnProperty(a[i]) ? memo[a[i]] += 1 : memo[a[i]] = 1
  }
  for (let i = 0; i < b.length; i++) {
    if (memo.hasOwnProperty(b[i])){
      memo[b[i]] -= 1
      if (memo[b[i]] === 0) delete memo[b[i]]
    } else {
      deleteCount += 1
    }
  }
  for(let key in memo){
    deleteCount += memo[key];
  }
  return deleteCount;
}
console.time('anagramCheck')
anagramCheck('cccde', 'abc') // Answer = 6 / Runtime = 0.700 - 0.93 ms
console.timeEnd('anagramCheck')

// function anagramCheck(a, b){
//   let memo = {}
//   let deleteCount = 0
//   a.split('').forEach((l) =>
//     memo.hasOwnProperty(l) ? memo[l] += 1 : memo[l] = 1
//   )
//
//   b.split('').forEach((l) => {
//     if (memo.hasOwnProperty(l)){
//       memo[l] -= 1
//       if (memo[l] === 0) {
//         delete memo[l]
//       }
//     } else {
//       deleteCount += 1
//     }
//   })
//   return (deleteCount += Object.keys(memo).length);
// }
// console.time('anagramCheck')
// anagramCheck('cde', 'abc') // 1.032 ms - 1.541ms
// console.timeEnd('anagramCheck')
