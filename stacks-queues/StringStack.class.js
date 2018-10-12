class StringStack {
  constructor() {
    this.storage = '';
  }
  show() {
    return console.log(this.storage);
  }
  push(data){
    this.storage += `***${data}`;
  }
  pop(){
    let iLast = this.storage.lastIndexOf('***');
    let result = this.storage.slice(iLast);
    this.storage = this.storage.slice(0, iLast);
    return result;
  }
}
var tobyStack = new StringStack();
tobyStack.push('hello');
tobyStack.push('toby')
tobyStack.show();
tobyStack.pop();
tobyStack.show();
