/*
String Rotation: Assume you have a method isSubstring which
checks if one word is a substring of another.
Given two strings, sl and s2,
write code to check if s2 is a rotation of sl
using only one call to isSubstring

(e.g., "waterbottle" is a rotation of"erbottlewat").
*/

/*
S1 can be assigned as dictionary...
1: w
2: a
3: t
4: e r b o t t l e w a t
5: r
6: b
7: o
8: t
9: t
10: l
11: e

OR

w a t e r b o t t l e
      r
      b
      o
      t
      t
      l
      e
      w
      a
      t

Start by finding the first occurence of str2[0] in str1.
Then, str2[1] should match str1[i + 1];
Then, str2[2] should match str1[i + 2];
... etc.
Each iteration needs to check str1 for the end of the string...
If found, reset, iterator to the beginning of str[i = 0];
Then continue, comparing until str2 counter is at the end.

Should also check for substring NOT being the entire string.
- Such as verifying the lengths are equal. or that all characters,
have been looked at.
*/
class LinkedList {
  constructor(data) {
    this.head = null;
    this.data = data;
    this.tail = null;
  }

  createNode = (data) => {
    return {
      data,
      next: null,
    };
  }

  insert = (data) => {
    const newNode = this.createNode(data);
    let current = this.head;

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode
      this.data = data;
    } else {
      while(current.next) {
        current = current.next;
      }
      current.next = newNode;
      this.tail = newNode;
    }
  }

  lookup = (subString) => {
    let currentNode = this.head;
    while(currentNode.data !== subString[0]) {
      currentNode = currentNode.next;
    }
    for (let i = 0; i < subString.length; i++) {
      if (subString[i] === currentNode.data) {
        currentNode = currentNode.next;
      } else {
        return false;
      }
    }
    return true;
  }

  makeCycle = () => {
    this.tail.next = this.head;
  }
}
const stringRotation = (s1, s2) => {
  const linkedList = new LinkedList();

  for (let i = 0; i < s1.length; i++) {
    linkedList.insert(s1[i]);
  }
  linkedList.makeCycle();
  return linkedList.lookup(s2);
}

console.log(
  stringRotation(
  'waterbottle',
  'erbottlewat',
));
