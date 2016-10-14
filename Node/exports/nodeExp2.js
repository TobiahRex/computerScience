// const objs = require('./nodeExp');
// console.log('objs', objs);
const asdfasdf = require('./nodeExp')
const fs = require('fs');

// const nodeExports = require('./nodeExp')

// console.log('modules: ', nodeExports);
// console.log('asdfasdf: ', asdfasdf);
// console.log('obj1:', obj1) ;
// console.log('module.exports: ', module.exports)
// console.log('module.exports 2: ', module.children[0].exports);
fs.writeFile('test.json', 'hello this is a test', (err) => {
  err ? console.error(err) : null
    fs.readFile('test', 'utf8', (err, buffer) => {
      console.log('buffer: ', buffer, 'typeof buffer: ', typeof buffer);
    });
});
