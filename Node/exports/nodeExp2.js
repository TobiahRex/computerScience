// const objs = require('./nodeExp');
// console.log('objs', objs);
const { obj1 } = require('./nodeExp')

// const nodeExports = require('./nodeExp')

// console.log('modules: ', nodeExports);
console.log('obj1: ', obj1);
// console.log('obj1:', obj1) ;
// console.log('module.exports: ', module.exports)
console.log('module.exports 2: ', module.children[0].exports);
