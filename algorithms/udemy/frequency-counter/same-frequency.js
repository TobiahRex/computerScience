function same(num1, num2) {
  // cache each value from arr 1.
  // key is the sqare of arr1.
  // value is the frequency of each square in arr1.

  // for each arr2 value, look up the value in the memo.
  // if found, delete decrement its frequency.
  // if its frequency is zero, then delete the item.
  // if its not found in the dictionary, then increase the result flag.
  // if the result flag is


  let result = 0, dictionary = {};

  String(num1).split('').forEach((n) => {
    dictionary[n] = ++dictionary[n] || 1;
  });

  String(num2).split('').forEach((n) => {
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
    3589712
  )
)
