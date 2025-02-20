// LC 151: reverse words in a string

/**
 * given an input string, reverse the order of the words
 * return a string of the words concatenated by a single space
 * do not include any extra spaces, leading or trailing spaces
 *
 * example:
 * input: s = "  hello world "
 * output: "world hello"
 */

const s = ' the sky is   blue ';

// 2 pointers and js methods
const reverseWords = (s) => {
  // new array
  const stringArray = s
    .trim() // remove leading and trailing spaces of string
    .split(' ') // splits string into array of substrings
    .filter((word) => word !== ''); // filter out any spaces

  // 2 pointers
  let p1 = 0;
  let p2 = stringArray.length - 1;

  while (p1 < p2) {
    let temp = stringArray[p2];
    stringArray[p2] = stringArray[p1]; // swap
    stringArray[p1] = temp;
    p1++;
    p2--;
  }
  // convert back to string separated by spaces ' '
  return stringArray.join(' ');
};

reverseWords(s);
