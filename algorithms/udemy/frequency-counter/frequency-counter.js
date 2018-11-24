function same(arr1, arr2) {
  // cache each value from arr 1.
  // key is the sqare of arr1.
  // value is the frequency of each square in arr1.

  // for each arr2 value, look up the value in the memo.
  // if found, delete decrement its frequency.
  // if its frequency is zero, then delete the item.
  // if its not found in the dictionary, then increase the result flag.
  // if the result flag is


  const result = 0, dictionary = {};

  arr1.forEach((n) => {
    const nSquared = n * n;
    dictionary[nSquared] = ++dictionary[nSquared] || 1;
  });

  arr2.forEach((n) => {
    if (!(n in dictionary)) {
      result += 1;
    } else {
      dictionary[n] -= 1;
      if (dictionary[n] == 0) delete dictionary[n];
    }
  });
  return (result || Object.entries(dictionary).length) ? false : true;
}

console.log(
  same(
    3589712,
    7832402
  )
)
