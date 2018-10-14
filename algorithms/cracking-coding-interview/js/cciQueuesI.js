/*
Sample Input:

10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2

- The first number "10" denotes how many inputs there will be.
- 1 x : the 1 denotes an enqueue operation.  x is the values to be enqueued.
- 2 : denotes a dequeue operation.
- 3 : denotes a retrieval of the first element to be dequeued.

Sample Output:

14
14

Step 1: Read the problem slowly and carefully.
Step 2: Assign Variables.
Step 3: Choose Simple Test Case.
Step 4: Brute force it in your brain.
Step 5: Pseudo Code.
Step 6: Start Coding.
Step 7: Verify Edge Cases with more complicated Test Case.
Step 8: Optimize Run Time.
*/

/* Solution 1:
function hackerRankCCI(input) {
const inputArr = input.split('\n')
const queue = []

for (let i = 1; i < inputArr.length; i++) {
if (inputArr[i].match(/\s+/g)) {
let number = Number(inputArr[i].split(' ')[1]);
queue.push(number);
}

switch(inputArr[i]) {
case '2': { queue.shift()} break;

case '3': { console.log(queue[0]) } break;
}
}
}
*/
function hackerRankCCI(input) {
  let inputArr = input.split('\n');

  let enqueueStack = [];
  let dequeueStack = [];

  for (let i = 1; i < inputArr.length; i++) {
    if (inputArr[i].match(/\s+/g)) {
      let number = Number(inputArr[i].split(' ')[1]);
      enqueueStack.push(number);
    }

    switch(inputArr[i]) {
      case '2': { dequeue() } break;
      case '3': { console.log(enqueueStack[0]) } break;
    }
  }

  function reverse(stack) {
    let n = stack.length;
    let result = [];
    for (i = 0; i < n; i++) {
      result.push(stack.pop());
    }
    return result;
  }

  function dequeue() {
    if (!dequeueStack.length){
      dequeueStack = reverse(enqueueStack);
      dequeueStack.pop();
      enqueueStack = reverse(dequeueStack);
    } else {
      dequeueStack.pop();
      enqueueStack = reverse(dequeueStack);
    }
  }
}

const testCase = `10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`

hackerRankCCI(testCase);
