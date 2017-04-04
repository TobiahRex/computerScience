function insertionSort (items) {
  let n = items.length
  let value // the value currently being compared
  let j
  let i
  for (i = 0; i < n; i++) {
    // save the current value because it may shift later
    value = items[i]
    /* ------------------------ Explanation -----------------------------
    Whenever the value in the sorted section
    is greater than the value in the unsorted section,
    shift all items in the sorted section over to the right by one.
    This creates the space in which to INSERT the new value.

    for loop is always 1 less than i.
    Only iterates if it's greater than -1
    AND if it's value is greater than the current unsorted value.

    Once the unsorted value is greater than the sorted value, the loops breaks.
    The loop breaks when j is 1 less than where the unsorted value should be inserted.
    Hence why, we reference [j + 1] on line 28.

    ----------------------------- Advantages -----------------------------
    This algorithm uses an "IN PLACE" technique, meaning it doesn't need a swap helper algorithm.  This make the space complexity constant as we're sorting.

    This is also a "STABLE" sort, if two items in the list are equal, then whoever was second in the original unsorted list, will also come second in the sorted list. This is desirable property sometimes.

    Beneficial when  ADDING an item to an already sorted array.
    */
    for (
      j = i - 1;
      j > -1 && items[j] > value;
      j--
    ) {
      items[j + 1] = items[j]
    }
    items[j + 1] = value
  }
  return items
}
console.log(insertionSort([4,2,6,7,8,1]))
