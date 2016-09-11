/*
 Binary Search

 O(log(n))
*/
let low, high, target, list

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
  break
}
// NOTE: Example = Phonebook.
