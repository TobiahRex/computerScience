// function swap (items, firstIndex, secondIndex) {
//   var temp = items[firstIndex]
//   items[firstIndex] = items[secondIndex]
//   items[secondIndex] = temp
// }
//
// function partition (items, left, right) {
//   let pivot = items[Math.floor((right + left) / 2)]  // pivot value is middle item
//   let i = left     // starts from left and goes right to pivot index
//   let j = right    // starts from right and goes left to pivot index
//
//   // while the two indices don't match
//   while (i <= j) {
//     // if the item on the left is less than the pivot, continue right
//     while (items[i] < pivot) {
//       i++
//     }
//
//     // if the item on the right is greater than the pivot, continue left
//     while (items[j] > pivot) {
//       j--
//     }
//
//     // if the two indices still don't match, swap the values
//     if (i <= j) {
//       swap(items, i, j)
//
//       // change indices to continue loop
//       i++
//       j--
//     }
//   }
//
//   // this value is necessary for recursion
//   return i
// }
//
// /**
// * A quicksort implementation in JavaScript. The array
// * is sorted in place.
// * @param {Array} items An array of items to sort.
// * @return {Array} The sorted array.
// */
// function quickSort (items, left, right) {
//   var index
//
//   // performance - don't sort an array with zero or one items
//   if (items.length > 1) {
//     // fix left and right values - might not be provided
//     left = typeof left !== 'number' ? 0 : left
//     right = typeof right !== 'number' ? items.length - 1 : right
//
//     // split up the entire array
//     index = partition(items, left, right)
//
//     // if the returned index
//     if (left < index - 1) {
//       quickSort(items, left, index - 1)
//     }
//
//     if (index < right) {
//       quickSort(items, index, right)
//     }
//   }
//   return items
// }
//
// quickSort()

function swap (array, s, e) {
  let item = array[s]
  array[s] = array[e]
  array[e] = item
}

function partition (array, s, e) {
  let n = array.length
  let pivot = array[e]
  let pivotIndex = s
  for (let i = 0; i < n; i++) {
    if (array[i] < pivot) {
      swap(array, array[i], pivotIndex)
      pivotIndex += 1
    }
  }
  swap(array, pivotIndex, array[e])
  return pivotIndex
}
function quickSort (array, s, e) {
  if (s >= e) return
  let pivotIndex = partition(array, s, e)
  quickSort(array, s, pivotIndex - 1)
  quickSort(array, pivotIndex + 1, e)
}

quickSort()
