// shamelessly copied from the left-pad module :P
function leftPad(str, len, ch) {
  // convert `str` to a `string`
  str = str + '';
  // `len` is the `pad`'s length now
  len = len - str.length;
  // doesn't need to pad
  if (len <= 0) return str;
  // `ch` defaults to `' '`
  if (!ch && ch !== 0) ch = ' ';
  // convert `ch` to a `string` cuz it could be a number
  ch = ch + '';
  // `pad` starts with an empty string
  var pad = '';
  // loop
  while (true) {
    // add `ch` to `pad` if `len` is odd
    if (len & 1) pad += ch;
    // divide `len` by 2, ditch the remainder
    len >>= 1;
    // "double" the `ch` so this operation count grows logarithmically on `len`
    // each time `ch` is "doubled", the `len` would need to be "doubled" too
    // similar to finding a value in binary search tree, hence O(log(n))
    if (len) ch += ch;
    // `len` is 0, exit the loop
    else break;
  }
  // pad `str`!
  return pad + str;
}

function toBin(input, max) {
  return leftPad(input.toString(2), max, '0')
}

function hashCode(str){
  var hash = 0;
  var oldhash;
  if (str.length == 0)
    return hash;

  var base = 2

  for (i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);

    let oldHash = Number(hash); // no reference-tied vars pls
    let shift = (oldHash << 5)
    let beforeAdd = (shift - oldHash);
    let newHash = beforeAdd + char;

    let len = shift.toString(base).length;

    hash = ((hash<<5)-hash)+char;

    console.log("old hash == \t\t",         toBin(oldHash, len));
    console.log("hash << 5 == \t\t",        toBin(shift, len));
    console.log("(hash << 5) - hash == \t", toBin(beforeAdd, len));
    console.log("char code == \t\t",        toBin(char, len));
    console.log("new hash == \t\t",         toBin(newHash, len));

    hash = hash & hash; // Convert to 32bit integer
    console.log();
  }

  return hash;
}

String.prototype.hashCode = function(){
  var hash = 0;
  if (this.length == 0) return hash;
  for (i = 0; i < this.length; i++) {
    char = this.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}


console.log(hashCode("abc"));
console.log("abc".hashCode());


/*
       000001100001 (final "a" hash)
  11000010000100000 (final "b" hash)
-
---------------------------------------
       00000110000100001  (result of "a" - "b")
  1011110000110001000000  (final "c" hash)
-
-----------------------------------------
  0000010111100001100010  (final result)
*/
