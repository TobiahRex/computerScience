# Recursion
  - Started: 26Oct2016
  - Updated: 24Nov2017

## FEM Course
 [here](https://frontendmasters.com/courses/data-structures-algorithms/exercise-recursion-interview-questions)

### Practice Problems
 1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
  ```javascript
    const whileN = (n) => {
      let result = n;
      while(--n) result *= n;
      return result;
    }
    console.log(whileN(5)); // 120
  ```

 2. Next, try looping just like above except using recursion
   ```javascript
   const recursiveN = (n) => {
     if (n === 1) return 1;
     return n * recursiveN(n - 1);
   }
   console.log(recursiveN(5)); // 120
   ```

 3. Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
   ```javascript
   const exponent = (base, expo) => {
     let result = base;
     while (--expo) {
       result *= base;
     }
     return result;
   }
   console.log(exponent(2, 3));  // 3
   ```

 4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

 5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

 6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
