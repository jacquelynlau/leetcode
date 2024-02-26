// LC 344: reverse string

/**
 * write a function that reverses a string
 * the input is an array of characters
 * modify input array in-place with O(1) extra memory
 *
 * example:
 * input: s = ['h','e','l','l','o']
 * output: ['o','l','l','e','h']
 */

const s = ['h', 'e', 'l', 'l', 'o'];

// 2 pointers
const reverseString = (s) => {
  // initialize pointers at start and end of array
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    let temp = s[p2];
    s[p2] = s[p1]; // swap
    s[p1] = temp;
    p1++;
    p2--;
  }
};

reverseString(s);
console.log(s);
