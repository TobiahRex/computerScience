const array = ['9', '91', '95', '96', '99'];
const x = array
.slice(0)
.reduce((acc, curr, i, arr) => {
    if(i === 2) arr.splice(1);
    return acc += curr;
  }, '');
console.log('x: ', x);  // x:  99195
console.log('array: ', array);
