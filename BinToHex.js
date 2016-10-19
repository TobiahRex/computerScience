function binToHex(binString) {
  let hexList = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  let hexCount = 0;
  let accumulator = 0;
  let ret = '';

  for (let i = binString.length - 1; i >= 0; --i) {
    let b = binString[i];
    if (b !== '0' && b !== '1') return null;
    if (b === '1') {
      accumulator += Math.pow(2, hexCount);
    }
    if (hexCount === 3 || i === 0) {    // if we've seen 4 characters or when we're iterating over the first group.
      ret = hexList[accumulator] + ret; // use the accumulator, to extract the needed index, from the hex list && accumulate the total accordingly.
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

console.log(binToHex('10001010111010001'))
