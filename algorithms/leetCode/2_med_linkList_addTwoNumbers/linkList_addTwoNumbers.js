(() => {
  const answers = [
    {
      l1: {
        val: 2,
        next: {
          val: 4,
          next: {
            val: 3,
            next: null,
          }
        }
      },
      l2: {
        val: 5,
        next: {
          val: 6,
          next: {
            val: 4,
            next: null,
          }
        }
      },
    }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ l1, l2 }) {
  function getSum(ll) {
    let current = ll,
      sum = 0,
      multiplier = 1;
    while(current) {
      sum += (multiplier * current.val);

      current = current.next;
      multiplier *= 10;
    }
    return sum;
  }

  function createLinkList(val) {  // val 208
    let digits = [];
    while(num > 0) {
      digits[digits.length] = num % 10;
      num = Math.floor(num / 10);
    }

    let linkedList = null;
    for (let i = digits.length - 1; i > 0; i--) {
      let node = new ListNode(digits[i]);
      if (linkedList === null) {
        linkedList = node;
        linkedList.tail = linkedList;
      } else {
        linkedList.tail = node;
      }
      linkedList.tail = linkedList.tail.next;
    }
  }

  function reverseLList(ll) {

  }

  const sum = getSum(l1) + getSum(l2);
  const l3 = createLinkList(sum);
  return l3;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}
