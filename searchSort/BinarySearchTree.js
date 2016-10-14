/*
Binary Search

O(log(n))
*/
function ezBinarySearch(target, list) {
  let low, high, result;

  while (low <= high) {
    let mid = (low + high) / 2
    /* list is ALL numbers,
    target is the given number to find.

    this if block finds the middle of the current total.*/
    if (target < list[mid]) {
      // we subtract 1 from mid to get one less than the previous high.
      high = mid - 1
      /* then re-evaluate.
      this evaluation determines if the previous high or low
      is the current high or low. */
    } else if (target > list[mid]) {
      /* if the number is greater than the half,
      then add 1 to get one more than the previous low.*/
      low = mid + 1
    }
    // else you found the number.
    return true;
    break;
  }
  return result;
  // NOTE: Example = Phonebook.
};

let testCase = [
  1,
  2,
  4,
  6,
  1,
  100,
  0,
  10000,
  3
];

function binarySearch(items, target){

  let startIndex = 0,
  let stopIndex = items.length - 1,
  let middle = Math.floor((stopIndex + startIndex)/2);

  while(items[middle] != target
    && startIndex < stopIndex){

    //adjust search area
    if (target < items[middle]){
      stopIndex = middle - 1;
    } else if (target > items[middle]){
      startIndex = middle + 1;
    }

    //recalculate middle
    middle = Math.floor((stopIndex + startIndex)/2);
  }

  //make sure it's the right target
  return (items[middle] != target) ? -1 : middle;
}
