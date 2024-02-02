// LC 206: reverse linked list

// iterative solution
const reverseList = (head) => {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;
  return head;
};
