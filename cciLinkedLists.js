/*
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
head.next.next.next.next.next = head.next.next;

function hasCycle(node) {
  if (!node || !node.next ) return null || false;

  let current = node;
  let current2 = node;
  let result = false;

  // check if loop exists.
  while (current2.next.next) {
    current = current.next;        // moves one node at a time.
    current2 = current2.next.next; // moves two nodes at a time.

    if (current2 === current) {    // if the faster node laps the slower node.
      result = true;
      break;
    }
  }
  return result;
  // // loop beginning detection
  // if (result) {
  //   current = head;
  //   while (current !== current2) {
  //     current = current.next;
  //     current2 = current2.next;
  //   }
  //   return current;
  // } else {
  //   return;
  // }
};
console.time('cycleCheck');
hasCycle(head);
console.timeEnd('cycleCheck');
console.log('hasCycle(head)', hasCycle(head));
