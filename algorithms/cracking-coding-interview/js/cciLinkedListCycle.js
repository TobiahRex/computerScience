/* Cyclic Detection

A linked list is said to contain a cycle
if any node is visited more than once
while traversing the list.

Complete the function provided in the editor below.
It has one parameter:
a pointer to a Node object named  that points to the head of a linked list.
Your function must return a boolean
denoting whether or not there is a cycle in the list.
If there is a cycle,
return true;
otherwise, return false.

Note: If the list is empty, result will be null.
*/
let linkedList = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4,
        next: {
          data: 5,
          next: {
            data: 6,
            next: null
          }
        }
      }
    }
  }
}
let head = linkedList
head.next.next.next.next.next = head.next.next;  // create a cycle.

console.time('cycleCheck');
console.log(hasCycle(head));
console.timeEnd('cycleCheck');

const hasCycle = (node) => {
  if (!node || !node.next) return false;

  let
    slow = node,
    fast = node,
    result = false;

  while (fast && fast.hasOwnProperty('next')) {
    fast = !!fast.next.next ? fast.next.next : null;
    slow = !!slow.next ? slow.next : null;

    if (fast === slow) {
      result = true;
      break;
    }
  }
  return result;
}
