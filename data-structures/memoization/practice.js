const memoize = (func) => {
  let cache = {};

  return function(val){
    let newVal;
    if (val in cache) {
      newVal = cache[val];
    } else {
      newVal = cache[val] = func(val);
    }
    console.log(newVal);
  }
}

// TESTING
console.clear();

const increment = (val) => {
  console.log('incrementing...');
  return val += 50;
}

const memoizeThisValue = memoize(increment);
memoizeThisValue(4);
memoizeThisValue(4);
memoizeThisValue(5);
memoizeThisValue(9);
memoizeThisValue(4);
