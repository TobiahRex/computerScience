/* Diagonal String

Reshuffle a given string
in longitudinal and diagonal order,
where the longitudinal size is given by n.


Example:
-------------------------
string = "PAYPALISHIRING"
n = 4
answer = "PINALSIGYAHRPI"
explanation:
-------------------------
P     I     N   = PIN
A   L S   I G   = ALSIG
Y A   H R       = YAHR
P     I         = PI
-------------------------
ANSWER >>> PIN + ALSIG + YAHR + PI = "PINALSIGYAHRPI"
*/

/*
-------------------
Step 2: Define variables.

- string = "PAYPALISHIRING"
- n = 4
- x (x coordinate) = 1
- y (y coordinate) = 1
- Dictionary = {
1: [],
2: [],
3: [],
4: [],
}
-------------------
Step 3: Choose Test Case (see Step 2);

test case = ("PAYPALISHIRING", 4)
-------------------
Step 4: Psuedo Code & Brute Force.

Brute Force ---
Using a matrix, and assigning x and y to initial values of 1, 1.
We obviously need a grid like this. The trick to grids, is going to be to identify the dynamic values, and their inner relationship to other changing values.  In this case, our iterator is dynamically incrementing for each letter in the string.

Therefore, we must find the relationship between x & y for each iteration of i.

Starting with x...
We know that if x is at a value that is divisible by n evenly, then we should return all values of y.
Example:
x = 4
n = 4
4 / 4 % 1 === 0
4 / 8 % 1 === 0
return all values of column x.

with y ...
if x is evenly divisible by n we can safely iterate through the string, while y < (n + 1).  Once y is greater than n (5) we should reset y to 1, and increment x by 1.

if x is NOT evenly divisble by n, we know we need to calculate the diagonal value.  We can do this by obvserving the dynamic relationship between x & y.
For any value of x, when x is not divisible by n, y will equal y - (x - 1).
Example:
y = 4
x = 3
y = 4 - (3 - 1) === 2
if we know what y is, then we know which Dictionary row, to insert the current letter using a push.

-------------------
Step 5: Psuedo Code

1. Declare variables from Step 2.
2. Create dynamically sized dictionary.
3. Iterate over string.
4. Create if block for testing if x is evenly divisble by n.
4a. add the current letter to the dictionary.
5. If x is NOT evenly divisble...
5a. assign y to the value of 4.
5b. decrement y, by (x - 1);
5c. add the current letter to the dictionary.
6. iterate over dictionary.
7. concatenate all array's together in order of their rows.
8. stringify the array.
9. join the results on empty space.
10. Return the result.
-------------------
Step 6: Code
*/


function diagStr(string, n) {
  let x = 0
  let y = 1
  let Dictionary = {}

  for (let i = 0; i < n; i++) Dictionary[i] = []

  // for (let i = 0; i < string.length; i++) {
  //   if ((x / (n - 1)) % 1 === 0) {          //
  //     Dictionary[(y - 1)].push(string[i])
  //     if ((y + 1 ) > n) {
  //       y = 1
  //       x++
  //     } else {
  //       y++
  //     }
  //   } else {
  //     let y = n
  //     y -= x
  //     Dictionary[(y - 1)].push(string[i])
  //     y = 1
  //     if ((x + 1) ===  (n - 1)) {
  //        x = 0;
  //      } else {
  //         x++
  //      }
  //   }
  //
  //   if (x === (n - 1)) x = 0
  // }
  for (let i = 0; i < string.length; i++) {
    /* this first block checks for a specific x condition.  If that condition is present, we do things that can only be done while that x condition is true.  Findind extreme patterns.  Finding situations where things can only happen in specific circumstances.  */

    // is X pattern true?
    if ((x / (n - 1)) % 1 === 0) {
      // whatever y's value at the time, use that to find the right dictionary key.  Push in the current letter.
      Dictionary[(y - 1)].push(string[i])

      // when complete, check to see if y's is about to break a rule.  If so, adjust the conditions to account for that by adjusting x to a different course, and y to a different course of actions.
      if ((y + 1 ) > n) {
        y = 1
        x++
      // otherwise if no rules are going to be broken by y, then continue on...
      } else {
        y++
      }

    // if X pattern is NOT true, then Y pattern is in play.
    } else {
      let y = n
      y -= x
      Dictionary[(y - 1)].push(string[i])
      y = 1

      // when complete with Y pattern, check to see if x' is goign to break a rule.  If so adjust the conditions to account for that by adjusting x to a different course.
      if ((x + 1) ===  (n - 1)) {
        x = 0;
      // otherwise if no rules are going to be broken by x, then continue on...
      } else {
        x++
      }
    }
  }

  return Object.keys(Dictionary).map(key => Dictionary[key]).join().split(',').join('');
}

console.log('ANSWER >>> ', diagStr("PAYPALISHIRING", 4))  // PINALSIGYAHRPI
//  RUNTIME = 2ms > time > 1ms



/* NOTES:
  This is a summary of thoughts in an attempt to understand grid matrixes better...

  1. The key to matrix problems is to identify what the X and Y patterns are.
  2. Once those patterns are identified, there needs to be checks in place to know when those patterns will break.
  3.  If they do break, then re-assignments need to be made, which will likely initiate the complimentary pattern.
  4.  Once that complimentary pattern exhausts itself, adjustments need to be made, to initiate the other pattern.
  5. Dynamisism is always in relationship to some other dynamic variable.  That's what makes things dynamic.  One static entity can capitalize on the qualities of another static entity.  Patterns are all about finding this sharing of qualities.  However, the key to this is knowing that at some point, those patterns will exhust themselves and break, and there needs to be some checks in place to know when they need to be reset.

  If you can find that, you can make the x and y cycles repeat.

  you know when x or y should be reset, based on whether or not, x or y, start to repeat themselves.  If that happens, you need to do the complimentary task.

  This answer is basically a check to see first if x crosses the threshold.  If so, then do why thing. If not, keep doing x thing.
*/
