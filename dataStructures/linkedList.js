// Linked Lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    // return true if size is 0
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
}

const list = new LinkedList();
console.log("Is the list empty?", list.isEmpty());
console.log("List size: ", list.getSize());
