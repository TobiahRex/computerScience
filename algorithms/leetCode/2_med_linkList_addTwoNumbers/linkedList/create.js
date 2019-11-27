(() => {
  const answers = [
    {
      num: 208,
    }
  ].map(getAnswer)
  console.log('answers: ', JSON.stringify(answers));
})();

function getAnswer({ num }) {
  let digits = [];
  while(num > 0) {
    digits[digits.length] = num % 10;
    num = Math.floor(num / 10);
  }
  digits

  let list = null;
  let current = null;
  for (let i = digits.length - 1; i > -1; i--) {
    let node = new ListNode(digits[i]);
    if (list === null) {
      list = node;
      current = list;
    } else {
      while(current.next !== null) {
        current = current.next;
        break;
      }
      current.next = node;
    }
  }

  return list;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/*
  Problem Description:

  Create a Linked list from a list of numbers
*/
