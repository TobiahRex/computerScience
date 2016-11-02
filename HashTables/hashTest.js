function HashTable () {
  console.log('created');
}
HashTable();
HashTable.prototype.hash = function(s) {
  if (typeof s !== 'string') s = JSON.stringify(s);
  var hash = 0;
  for (var i = 0; i < s.length; i++) {
    console.log('hash <<< 5 \n', (hash << 5).toString(2));
    console.log('(hash << 5) - hash): \n', ((hash << 5 ) - hash).toString(2));
    console.log('s.charCodeAt(i): \n', s.charCodeAt(i).toString(2));
    hash = ((hash << 5) - hash) + s.charCodeAt(i);
    console.log('hash: \n', hash.toString(2));
    hash &= hash; // Keep it a 32bit int
    console.log('new hash: \n', hash.toString(2), '\n------------------\n');

  }
  console.log('final hash: \n', hash.toString(2));
  return hash;
};

HashTable.prototype.hash('to')
