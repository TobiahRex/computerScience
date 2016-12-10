function insertionSort(array) {
  for (let i = 1; i < array.length; ++i) {
    let item = array[i];        // save the items location
    let k = i - 1;              // item to the "left" of the current space.
    for (; k >= 0; --k) {
      if (array[k] > item) {
        array[k + 1] = array[k];// shift into the empty space
      }
      else {
        break;                  // space is where the item should go
      }
    }
    array[k + 1] = item;        // k + 1 is the current space.
  }
  return array;
}
