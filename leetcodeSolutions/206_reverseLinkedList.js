// LC 206: reverse linked list

// iterative solution
const reverseList = (head) => {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next; // initiate next pointer
    curr.next = prev; // set curr to point to prev (reversed)
    prev = curr; // move pointer up
    curr = next; // move pointer up
  }
  head = prev;
  return head;
};
