const fs = require('fs');
exports.obj1 = {
  name: 'toby'
}

exports.obj2 = {
  name: 'miguel'
}

// module.exports = {
//     ob1: obj1,
//     ob2: obj2
// }

console.log('exports: ', exports);
console.log('module : ', module.children[0]);
