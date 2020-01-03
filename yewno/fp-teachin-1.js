/*
Key Words
    -
  * non-deterministic (hard to repeat the results)

- Pure Functional Programming
  WHY
  - Declaritive | What to do (not HOW to do it) VS imperative
    - Declarative programs abstract the flow control process, and instead spend
      lines of code describing the data flow: What to do. The how gets abstracted away.
    - Expressions (not Statements)
      * Expressions evaluate to some value (function invocations)
      * Statements perfom some action (for, if, switch, throw)
  - deterministic (the answer is always predictable)
    non-deterministic: i can't predict what will happen 100% of the time.
  - Immutability | shared state | WHY?
  - Compositional functions
  - Pure Functions
    - no side effects
    - always give the same output with the same input.
  - Currying
  - Higher Order Functions | reduce, closure


  Functional programming favors:
  - Pure functions instead of shared state & side effects
  - Immutability over mutable data
  - Function composition over imperative flow control
  - Lots of generic, reusable utilities that use higher order functions to act on many data types instead of methods that only operate on their colocated data
  - Declarative rather than imperative code (what to do, rather than how to do it)
  - Expressions over statements
  - Containers & higher order functions over ad-hoc polymorphism


  HOW
  - map & reduce

*/
//
// const doubleMapImperative = numbers => {
//   const doubled = [];
//   for (let i = 0; i < numbers.length; i++) {
//     doubled.push(numbers[i] * 2);
//   }
//   return doubled;
// };
//
// doubleMapImperative([2, 3, 4]); // [4, 6, 8]
//
//
// const doubleMapDeclarative = numbers => numbers.map(n => n * 2);
//
// doubleMapDeclarative([2, 3, 4]); // [4, 6, 8]
//
//
// function imperative() {
//   /*
//     statements - switch, for, if,
//   */
//
//   let count = 0;
//   for( let i = 0; i < 10; i++) {
//     count += i;
//   }
//
//   if (count > 9) console.log('hi');
//
//   switch('hi') {
//     case 'hi': 'bye';
//     case 'somthing': 'nothing'
//     default: '',
//   }
// }
//
// function declarative() {
//   // declarative programming = abstracted PURE functions.
//   count = countToN(10); // 10
//   giveReply('hi');  // 'bye'
// }
//
// function reducer(state, action) {
//   const { payload } = action;
//
//   return state.set(fromJS(payload)); // returns new state 100% of the time.
// }
//
// function actionFilterSomething(state, action) {
//   switch(action.type) {
//     case 'DO_SOMETHING': handleDoSomething(state, action);
//   }
// }



const add = (a) => a + 10;
const subtract = (a) => a - 5;
const multiply = (a) => a * 100;

let operations = [
  add,
  subtract,
  multiply,
];

let answer = operations.reduce((lastAnswer, nextFunc) => {
  return nextFunc(lastAnswer); // iterator function | pure function
}, 0)
answer

answer = multiply(subtract(add(0))); // Compositional function | pure function
answer

const getAnswer = (initialValue) => {
  return (subtractValue) => {
    return (multiplicationValue) => {
      return (((initialValue + 10) - subtractValue) * multiplicationValue);
    }
  }
}


answer = getAnswer(0)(5)(100) // currying function | pure function
answer




/*
  - map (return new array)
  - flatMap (return new array)
  - reduce (return anything we want)

  - slice (return section)
  - concat (return new array)
*/


/*
  Instructions
  - for each item in our array, add + 2 to each item.
  - consolidate items into a single number.
  - return the number.
*/

const handleSelectionChange = (selectionArgs) => {
  const {
    actions: subActions,
    filterList: subFilteList,
    handleFilterListUpdate: subHandleFilterListUpdate,
  } = selectionArgs;

  const updatedFilter = subFilterList.get(index);
  const filter = updatedFilter.set(option, selection);
  subHandleFilterListUpdate(filterList, filter, index, actions, id);
};
