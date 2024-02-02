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

  // new node and add to start of list
  // time complexity: O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head; // new node points to head node
      this.head = node;
    }
    this.size++;
  }

  // add node to end of list
  // time complexity: O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      // last node in the list points to new node
      let prev = this.head;
      // traverse to last node of the list
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  // insert node at a specific index
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    }
    if (index > 0) {
      const node = new Node(value);
      let prev = this.head;
      // advance prev pointer to node previous to index
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      // curr pointer traverses the list
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();

console.log("Is the list empty?", list.isEmpty());
console.log("List size: ", list.getSize());
list.print();

list.insert(10, 0);
list.print();
list.insert(20, 0);
// list.append(10);
list.print();
list.insert(30, 1);

// list.append(20);
// list.append(30);
// list.prepend(0);
list.print();
console.log(list.getSize());
