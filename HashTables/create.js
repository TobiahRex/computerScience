// const ht = {}; // ht = 'hash table'
// ht['one'] = 1;
// ht['two'] = 2;
// ht['three'] = 3;
//
// for (let i in ht) {
//   console.log('prop =', i, '| value =', ht[i]);
// }

var a = new Array(); // or just []
a[0] = 0
a['one'] = 1;
a['two'] = 2;
a['three'] = 3;

for (var k in a) {
    if (a.hasOwnProperty(k)) {
        console.log('key is: ' + k + ', value is: ' + a[k]);
    }
}
console.log(a.length);
console.log(Object.keys(a).length);
