String.prototype.hashCode = function(){
  let hash = 0, i = 0;
  if (!this.length) return hash;
  for (; i < this.length; i++) {
    let char = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash &= hash; // convert hash to 32 bit integer
  }
  return hash;
}
// 000001100001
// 110000100000
// 000000000000
// 110100111110
//
// 110100111110
// 110100111110

console.log('abcasdfasdfasdiuasjwepriuwepoiu'.hashCode());
