// LC 83: remove duplicates from sorted linked list

const deleteDuplicates = (head) => {
  let curr = head;
  while (curr && curr.next) {
    // check for duplicate
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next; // update pointer to skip the next node
    } else {
      curr = curr.next; // move pointer to next node
    }
  }
  return head;
};
