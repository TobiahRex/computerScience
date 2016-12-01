/* Balanced Brackets
A matching pair of brackets is not balanced if
the set of brackets it encloses are not matched.
For example, {[(])} is not balanced because
the contents in between { and } are not balanced.
The pair of square brackets encloses a single,
unbalanced opening bracket,
(, and the pair of parentheses encloses a single,
unbalanced closing square bracket, ].

By this logic,
we say a sequence of brackets is considered to be balanced
if the following conditions are met:

It contains no unmatched brackets.
The subset of brackets enclosed
within the confines of a matched pair of brackets
is also a matched pair of brackets.

Given  strings of brackets,
determine whether each sequence of brackets is balanced.
If a string is balanced,
print YES on a new line;
otherwise,
print NO on a new line.

Sample Input:
3
{[()]}
{[(])}
{{[[(())]]}}

Smaple Output:
YES
NO
YES
*/

// Step 1 - Gather all the information.
// Step 2 - Choose a simple Test Case.
// Step 3 - delcare your variables
// Step 4 - Mentally solve the problem
// Step 5 - Psuedo Code
// Step 6 - Code
// Step 7 - Edge Cases
// Step 8 - Optimize: Effeciency & Comlex Test Cases

class Stack {
  constructor() {
    this.top = null;
  }

  createNode(type, direction) {
    const node = {
      type,
      direction,
      next: null
    }
    return node;
  }

  push(type, direction) {
    const node = this.createNode(type, direction);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (this.top === null) {
      return this.top;
    } else {
      const oldTop = this.top;
      this.top = this.top.next;
      return oldTop;
    }
  }
}
const stack = new Stack;

function popCheck(t) {
  const { type, direction } = stack.pop();

  if ((type === t) && (direction === 'right')) return true
  return false;
}

function checkString(n) {
  let str = n
  let checks = [];

  if ((str[0] === '}') || (str[0] === ')') || (str[0] === ']')) return 'NO';
  else if (!n.length) return 'NO';

  for (let i = 0; i < str.length; i++) {
    switch(str[i]) {
      case '{': { stack.push('curly', 'right') } break;
      case '[': { stack.push('square', 'right') } break;
      case '(': { stack.push('parens', 'right') } break;
      case ')': { checks.push(popCheck('parens')) } break;
      case ']': { checks.push(popCheck('square')) } break;
      case '}': { checks.push(popCheck('curly')) } break;
      default: { checks.push('error: ', str[i]) } break;
    }
  }
  if(checks.includes(false)) return 'NO'
  return 'YES'
}

// const testCases = '{[()]}'; // YES
// const testCases = '{{[[(())]]}}']; // YES
const testCases = '{[(])}'; // NO
console.log(checkString(testCases));
