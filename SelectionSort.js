function swap (array, f, s) {
  let item = array[f]
  array[f] = array[s]
  array[s] = item
}

function selectionSort (items) {
  let len = items.length
  let min
  let i
  let j

  for (i = 0; i < len; i++) {
    // set minimum to this position
    min = i

    // check the rest of the array to see if anything is smaller
    for (j = i + 1; j < len; j++) {
      if (items[j] < items[min]) {
        min = j
      }
    }

    // if the minimum isn't in the position, swap it
    if (i !== min) {
      swap(items, i, min)
    }
  }
  return items
}
selectionSort()
