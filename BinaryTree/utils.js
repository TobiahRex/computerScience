/*
  Return an array with the numbers from 0 to n - 1, in a random order.
  This function works recursively.
*/
module.exports = {
  getRandomArray: (n) => {
    let res, nextIndex;

    if (n === 0) {
      // n === 0 once we've reached the peak of the recursive calls.
      return [];
    }
    if (n === 1) {
      // n === 1 only on the last function call, hence why we call "return".
      return [0];
    }

    res = module.exports.getRandomArray(n - 1);
    // now "res" is equal to [0] when n === 2.

    nextIndex = Math.floor(Math.random() * n);
    // here we want to find a random index, if one additional value were to be added to the array. Example: if there are currently 2 items in the array, then we want a random index for 3 possible array values, because we're going to insert a new value at that index.

    res.splice(nextIndex, 0 , n - 1);
    // now that we have our random index, it's time to insert the actual value into the array, so we use (n - 1) which will denote the actual value. Placing it randomly inside the array.

    return res;
    // return this new array to the next function call.
  },
  defaultCompareKeys: (a, b) => {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    if (a === b) { return 0; }

    // if we're missing a or b then throw an error.  Othewise return the above.
    let err = new Error('Couldn\'t compare elements');
    err.a = a;
    err.b = b;
    throw error;
  },
  defaultCheckValueEquality: (a, b) => {
    return a === b;

    // simply checks if the 2 values are equal.
  }
}
module.exports.getRandomArray(3);
