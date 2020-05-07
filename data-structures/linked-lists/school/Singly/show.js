LinkedList.prototype = {
  show: () => {
    let current = this._head;
    console.log('head: ', current, '\ndata: ', current.data);
    while(current.next) {
      current = current.next;
      console.log('node: ', current, '\ndata: ', current.data);
    }
  }
}
