/*
  Print Duplicate characters from String.
*/

function printDupes(string) {
  if (typeof string !== 'string') return (new Error('Type Error. wrong input.'));

  let dictionary = {};

  string
  .split('')
  .forEach((l) =>
  dictionary.hasOwnProperty(l) ? dictionary[l] += 1 : dictionary[l] = 1);

  return Object
  .keys(dictionary)
  .map((key) => dictionary[key] > 1 ? key : '')
  .join('');
}
console.log(printDupes('mississippi'));
