function binToHex(binString) {
  let hexList = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  let hexCount = 0;
  let accumulator = 0;
  let ret = '';

  for (let i = binString.length - 1; i >= 0; --i) {

    let b = binString[i];

    // if we've added a bad binary character.
    if (b !== '0' && b !== '1') return null;

    if (b === '1') {
      accumulator += Math.pow(2, hexCount);
    }

    // if we've seen 4 characters or when we're iterating over the last char from the bin string.
    if (hexCount === 3 || i === 0) {

      // use the accumulator, to extract the needed index, from the hex list && concatenate to the total accordingly.
      ret = hexList[accumulator] + ret;
      accumulator = 0;
      hexCount = 0;
    } else {
      ++ hexCount;
    }
  }
  return ret;
}

const binToHexBuiltIn = binString => parseInt(binString, 2).toString(16);

function binToHexTest() {
  for (let i = 0; i < 1000; i++) {
    if (binToHex(i.toString(2)) !== binToHexBuiltIn(i.toString(2))) {
      console.log(`TEST FAILED: binToHex output ${binToHex(i.toString(2))}
      Expected: ${binToHexBuiltIn(i.toString(2))}
      `);
      return false;
    }
    console.log('TEST PASSED');
    return true;
  }
}

console.log(binToHexTest());

console.log(binToHex('10001010111010001'));

/* Other questions.

1) Write functions to convert Decimal to Hex and Hex to Decimal.
  Store hex as a string.
  Do not call any built in functions to do this conversion for you.

2) Use the 2 bit adder we built in the video to write an N bit adder.
  Your function should take 2 binary strings.
  If one is longer than the other,
  pad the left side of the shorter string with 0s.
  Your output should be the length of the strings + 1 bit.

3) Implement the ternary operator
  without using any conditional statements.
  Your function, ternary(a, b, c),
  should return b if
  a is true
  and c if a is false.
  You can assume a, b and c are all integers.

4) Write a function negTwosComplement(bin)
  that takes as input a 32 bit binary string.
  Return a 32 bit binary string representing the negative of that number in two’s complement.
  Remember flip the bits and add 1.

5) Write a function that takes as input
  two 32 binary strings a and b.
  Return a 32 bit binary string
  representing the result of a - b.
  Do not convert to decimal.
  Hint: Use your answers to Questions 2 and 4.
*/
