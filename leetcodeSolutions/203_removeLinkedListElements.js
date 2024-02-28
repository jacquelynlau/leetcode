// LC 203: remove linked list elements

/**
 * given the head of a linked list and an int, val
 * remove all the nodes that equal the int
 * return new head
 *
 * example:
 * input: head = [1,2,3,6,4,5,6] val = 6
 * output: [1,2,3,4,5]
 */

const removeElements = (head, val) => {
  // check the first node and remove if it's equal to val
  while (head && head.val === val) {
    head = head.next;
  }

  // set pointer to head
  let curr = head;

  // traverse linked list
  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next === curr.next.next; // skip over node that equals to val
    } else {
      curr = curr.next; // move pointer to the next node
    }
  }
  return head;
};
