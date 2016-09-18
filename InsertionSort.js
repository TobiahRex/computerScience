function insertionSort (items) {
  let n = items.length
  let value // the value currently being compared
  let j
  let i
  for (i = 0; i < n; i++) {
    // save the current value because it may shift later
    value = items[i]
    /*
    Whenever the value in the sorted section
    is greater than the value in the unsorted section,
    shift all items in the sorted section over to the right by one.
    This creates the space in which to insert the new value.

    for loop is always 1 less than i.
    Only iterates if it's greater than -1
    And if it's value is greater than the current unsorted value.

    Once the unsorted value is greater than the sorted value, the loops breaks.
    The loop breaks when j is equal to 1 less than where the unsorted value should be inserted.
    Hence why, we reference [j + 1] on line 30.
    */
    for (j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j]
    }
    items[j + 1] = value
  }
  return items
}
console.log(insertionSort([4,2,6,7,8,1]))
