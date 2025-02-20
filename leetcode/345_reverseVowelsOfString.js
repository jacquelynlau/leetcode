// LC 345: reverse vowels of a string

/**
 * given a string, reverse only all the vowels in the string and return it
 * vowels are aeiou and can be lower and upper case
 *
 * example:
 * input: s = "hello"
 * output: "holle"
 */

// 2 pointers
const reverseVowels = (s) => {
  // convert string into array to mutate
  const stringArray = s.split('');
  const vowels = 'aeiouAEIOU';

  // initialize pointers at start and end of array
  let p1 = 0;
  let p2 = stringArray.length - 1;

  while (p1 < p2) {
    if (vowels.includes(stringArray[p1]) === vowels.includes(stringArray[p2])) {
      let temp = stringArray[p2];
      stringArray[p2] = stringArray[p1]; // swap
      stringArray[p1] = temp;
      p1++;
      p2--;
    }
    if (!vowels.includes(stringArray[p1])) {
      p1++;
    }
    if (!vowels.includes(stringArray[p2])) {
      p2--;
    }
  }
  // convert array back to string
  return stringArray.join('');
};
