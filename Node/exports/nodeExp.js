const fs = require('fs');
const obj1 = {
  name: 'toby'
}

const obj2 = {
  name: 'miguel'
}

module.exports = {
    ob1: obj1,
    ob2: obj2
}

console.log('exports: ', exports);
console.log('module.exports : ', module.exports);
