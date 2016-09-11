/*
 Bubble Sort
*/
function swap (items, firstIndex, secondIndex) {
  // Saves the first index value bc it's about to write over it.
  let temp = items[firstIndex]
  /*
  Re-assigns the first index.
  Now both indexes are the same value.
  */
  items[firstIndex] = items[secondIndex]
  /*
   Using the saved temp value.
   We re-assign the second index.
   Now both values have been switched.

   We do not return anything.
   The assignments are seen by the parents func.
  */
  items[secondIndex] = temp
}
function bubbleSort(items) {
  let n = items.length
  /* We will start iterating from the end of the array.*/
  for (let i = n - 1; i >= 0; i--) {
    /*
      The inner loop starts iterating from the beginning of the array.
      As the inner loop completes one iteration
      it decrements itself
      and iterates over the previous indexes again until it's = 0
     */
    for (let j = n - i; j >= 0; j--) {
      /*
        If it finds that the current index is less than the previous index,
        it calls swap with the necessary args.
      */
      if (items[j] < items[j - 1]) {
        swap(items, j, j - 1)
      }
    }
  }
}
