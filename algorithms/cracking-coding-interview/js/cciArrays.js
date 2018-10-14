/*
A left rotation operation on an array of size n,
shifts each of the array's elements n unit to the left.
For example,
if 2 left rotations are performed on array [1,2,3,4,5],
then the array would become [3,4,5,1,2].

Given an array of n integers and a number d,
perform n left rotations on the array.
Then print the updated array as a single line of space-separated integers.
*/

// Step 1 - Gather all the details.
// n = number of digits.
// d = number of left shifts.

// Step 2 - Create a test case (small)
let array = [1, 2, 3, 4, 5];

// Step 3 - Create a brute Force psuedo code solution.

// iterate through all digits
//

/*
IDEA 1
  splice from the array,
  starting at the 0 index.
  until index d
  push the new array onto the end of the modified array.
  output the results.
*/

/*
  IDEA 2
  create a while loop.
  iterate for length d.
  splice off index 0.
  push on index 0.
*/

const shiftArray = (shifts, arr) => arr.concat(arr.splice(0, shifts)).join(" ");

console.log(shiftArray(5, 3, array));
