class Stack {
  constructor() {
    this.top = null;
  }

  createNode(type, direction) {
    if (!type || !direction) {
      return Error('Missing required arguments for "createNode()"');
    }
    else return ({
      type,
      direction,
      next: null,
    });
  }
}




// class Stack {
//   constructor() {
//     this.top = null;
//   }
//
//   createNode(type, direction) {
//     const node = {
//       type,
//       direction,
//       next: null,
//     };
//     return node;
//   }
//
//   push(type, direction) {
//     const node = this.createNode(type, direction);
//
//     if (this.top === null) this.top = node;
//     else {
//       node.next = this.top;
//       this.top = node;
//     }
//   }
//
//   pop() {
//     if (this.top === null) return this.top;
//     else {
//       const oldTop = this.top;
//       this.top = this.top.next;
//       return oldTop;
//     }
//   }
// }
//
// const stack = new Stack();
//
// function popCheck(t) {
//   const { type, direction } = stack.pop();
//
//   if ((type === t) && (direction === 'right')) return true;
//   return false;
// }
//
// function checkString(n) {
//   let str = n;
//   let checks = [];
//
//   if (
//     (str[0] === '}') ||
//     (str[0] === ')') ||
//     (str[0] === ']')
//   ) return 'NO';
//   else if (!n.length) return 'NO';
//
//   for (let i = 0; i < str.length; i++) {
//     switch(str[i]) {
//       case '{': { stack.push('curly', 'right') } break;
//       case '[': { stack.push('square', 'right') } break;
//       case '(': { stack.push('parens', 'right') } break;
//       case ')': { checks.push(popCheck('parens')) } break;
//       case ']': { checks.push(popCheck('square')) } break;
//       case '}': { checks.push(popCheck('curly')) } break;
//       default: { checks.push('error: ', str[i]) } break;
//     }
//   }
//
//   if (checks.includes(false)) return 'NO';
//   else return 'YES';
// }
