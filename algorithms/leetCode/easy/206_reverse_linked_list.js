/*
  Problem Description:
    Reverse a singly linked list.

    Example:

    Input: 1->2->3->4->5->NULL
    Output: 5->4->3->2->1->NULL
*/


(() => {
  const answers = [
    {
      head: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: null
            }
          }
        }
      }
    }
  ].map(reverseLinkedList)
  console.log('answers: ', JSON.stringify(answers, null, 2));
})();

function reverseLinkedList({ head }) {
  if (!head || !head.next) return head;

  let prev = null;
  let current = head
  let next = current.next;

  while(next) {
    current.next = prev;
    prev = current;
    current = next;
    next = next.next;
  }
  current.next = prev;
  head = current;
  return head;
};
