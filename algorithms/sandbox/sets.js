let mySet = new Set()

mySet.add(1)           // Set [ 1 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add('some text') // Set [ 1, 5, 'some text' ]
let o = {a: 1, b: 2}
mySet.add(o)

mySet.add({a: 1, b: 2})   // o is referencing a different object, so this is okay

mySet.has(1)              // true
mySet.has(3)              // false, since 3 has not been added to the set
mySet.has(5)             // true
mySet.has(Math.sqrt(25))  // true
mySet.has('Some Text'.toLowerCase()) // true
mySet.has(o)       // true

mySet.size         // 5

mySet.delete(5)    // removes 5 from the set
mySet.has(5)       // false, 5 has been removed

mySet.size         // 4, since we just removed one value

const exposureFilter = {
  type: 'exposure',
}
const fundamentalFilter = {
  type: 'fundamental',
}
let filterSetBlue = new Set();

filterSetBlue.add(exposureFilter);
filterSetBlue.add(fundamentalFilter);
console.log(filterSetBlue);

let filterSetRed = new Set();
filterSetRed.add(exposureFilter);
filterSetRed.add(exposureFilter);
filterSetRed.add(filterSetBlue);
console.log(filterSetRed)

filterSetRed.delete(filterSetBlue);
console.log(filterSetRed)

const containerGroup = new Set();
const blueGroup = new Set();
const maverickGroup = new Set();
containerGroup.add(blueGroup);
containerGroup.add(maverickGroup);
console.log(containerGroup)


const filterIndexMap = new Map();
filterIndexMap.set(0, blueGroup);
filterIndexMap.set(1, maverickGroup);
filterIndexMap.set(2, maverickGroup);
filterIndexMap.set(3, maverickGroup);
console.log(filterIndexMap.size)

filterIndexMap.get(2).add({ data: 'my filter' });
maverickGroup
containerGroup
