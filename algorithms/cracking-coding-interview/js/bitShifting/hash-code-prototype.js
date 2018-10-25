String.prototype.hashCode = function(){
  let hash = 0, i = 0;
  if (!this.length) return hash;
  for (; i < this.length; i++) {
    let char = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash &= hash;
  }
  return hash;
}

console.log('abc'.hashCode());
