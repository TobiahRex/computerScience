////////// Github user mrkrstrndd ///////////
let list = (e) => {
  let self = this;
  let first, last, head;

  self.insert = (value) => {
    let node = new Node(value);
    if (first === null) {
      first = last = node;
    } else {
      let head = first;
      while (head.next != null) {
        head = head.next;
      }
      head.next = node;
      last = head.next;
    }
  }

  self.show = () => {
    let head = first;
    while (head != null) {
      console.log(head.value);
      head = head.next;
    }
  }

  self.remove = (value) => {
    let found = false;
    let head = first;
    while (head != null) {
      if (first.value == value) {
        prev = head = first = first.next;
        found = true;
      } else {
        if (head.value == value) {
          found = true;
          prev.next = head.next;
        }
        prev = head;
        head = head.next;
      }
    }

    if (!found) {
      console.log("#" + value + " not found");
    }
  }

  self.update = (value, newValue) => {
    let head = first;
    while (head != null) {
      if (head.value == value) {
        head.value = newValue;
      }
      head = head.next;
    }

  }

  let Node = (value) => {
    this.value = value;
    let next = {};
  }

  return self;
};

let list = new list();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

list.show();
console.log("____________________________");

list.update(2, 5);
list.show();
console.log("____________________________");

list.remove(3);
list.show();
