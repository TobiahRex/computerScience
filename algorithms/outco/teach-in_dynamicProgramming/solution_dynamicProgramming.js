/*
  Problem Description: (30 minutes)

  Given a number, you can perform 3 possible operations:
  1. Divide the number by 3
  2. Divide the number by 2
  3. Subtract 1 from the number.


  Return the least amount of steps of those 3 possible options, that are
  required to reduce the input number to 1.

  The optimal answer should be given an O(n) run time.
*/

function minStepsToOne(n) {

  function traverse(current) {
    if (current === 1) {
      return 0;
    }

    // subtract 1
    let option = traverse(current - 1);

    // divide by 3
    if (current % 3 === 0) {
      let divide3 = traverse(current / 3);
      option = Math.min(option, divide3);
    }

    // divide by 2
    if (current % 2 === 0) {
      let divide2 = traverse(current / 2);
      option = Math.min(option, divide2);
    }

    return option + 1;
  }

  return traverse(n);
}



// 1) Create cache
// 2) Check cache
// 3) Write to cache

let cache = {};

function minStepsToOneMemo(n) {
  function traverse(current) {
    if (current in cache) {
      return cache[current];
    }
    if (current === 1) {
      return 0;
    }

    // subtract 1
    let option = traverse(current - 1);

    // divide by 3
    if (current % 3 === 0) {
      let divide3 = traverse(current / 3);
      option = Math.min(option, divide3);
    }

    // divide by 2
    if (current % 2 === 0) {
      let divide2 = traverse(current / 2);
      option = Math.min(option, divide2);
    }

    cache[current] = option + 1;
    return cache[current];
  }

  return traverse(n);
}


let result = new Array(500 + 1);

function minStepsToOneTab(n) {
  if (result[n] !== undefined) {
    return result[n];
  }
  result[1] = 0;

  for (let i = 2; i < result.length; i++) {
    // subtract 1
    let option = result[i - 1];

    // divide by 3
    if (i % 3 === 0) {
      let divide3 = result[i / 3];
      option = Math.min(option, divide3);
    }

    // divide by 2
    if (i % 2 === 0) {
      let divide2 = result[i / 2];
      option = Math.min(option, divide2);
    }

    result[i] = option + 1;
  }

  return result[n];
}


// console.time('RECURSION: ');
// console.log(minStepsToOne(500));
// console.timeEnd('RECURSION: ');


// console.time('MEMOIZATION: ');
// console.log(minStepsToOneMemo(500));
// console.timeEnd('MEMOIZATION: ');


// console.time('TABULATION: ');
// console.log(minStepsToOneTab(500));
// console.timeEnd('TABULATION: ');



console.time('MEMOIZATION MANY: ');
for (let i = 0; i < 1000; i++) {
  minStepsToOneMemo(500);
}
console.timeEnd('MEMOIZATION MANY: ');


console.time('TABULATION MANY: ');
for (let i = 0; i < 1000; i++) {
  minStepsToOneTab(500);
}
console.timeEnd('TABULATION MANY: ');
