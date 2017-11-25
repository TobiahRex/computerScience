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
     while (--expo) result *= base;
     return result;
   }
   console.log(exponent(2, 3));  // 8
   ```

 4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
   ```javascript
   const recursiveExponent = (base, expo) => {
     if (expo === 1) return base;
     return base * recursiveExponent(base, expo - 1);
   }
   console.log(recursiveExponent(2, 3));  // 8
   ```
   Ternary
   ```javascript
   const recursiveExponent = (base, expo) => (expo === 1) ? base : base * recursiveExponent(base, expo - 1)

   console.log(recursiveExponent(2, 3));  // 8
   ```

 5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
   ```javascript
   const recursiveMultiplier = (arr, num) => {
     const current = arr[0] * num;

     if (arr.length === 1) return current;

     return [current].concat(recursiveMultiplier(arr.slice(1), num));
   }
   console.log(recursiveMultiplier([1, 2, 3], 2));  // [2, 4, 6]
   ```
   Ternary
   ```javascript
   const recursiveMultiplierTern = (arr, num) =>
     (arr.length === 1) ? arr[0] *= num : [arr[0] *= num].concat(recursiveMultiplierTern(arr.slice(1), num));

   console.log(recursiveMultiplierTern([1, 2, 3], 2));  // [2, 4, 6]
   ```

 6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
