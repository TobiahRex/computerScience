// MEMOIZATION
const memoize = func => {
  let cachedObj = {};

  return function (newVal){
    let val;
    if(newVal in cachedObj){
      val = cachedObj[newVal];
    } else {
      val = cachedObj[newVal] = func(newVal);
    }
    console.log(cachedObj);
    console.log(val);
  }
}

// TESTING
console.clear();

const ourFunction = val => {
  console.log(`calculating.... `);
  return val + 5;
}

const memoizeOurFunction = memoize(ourFunction);
memoizeOurFunction(4);
memoizeOurFunction(5);
memoizeOurFunction(4);
memoizeOurFunction(4);
memoizeOurFunction(6);
memoizeOurFunction(7);
memoizeOurFunction(6);
