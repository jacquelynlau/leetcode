// LC 1768: merge strings alternatively

/**
 * given 2 strings: word1 and word2
 * merge the strings by adding letters in alternating order, starting with word1
 * if a string is longer than the other, append the additional letters to the end of merged string
 * return the merged string
 *
 * example:
 * input: word1 = 'ab', word2 = 'pqrs'
 * output: 'apbqrs'
 */

// solution 1: new array
const word1 = 'abc';
const word2 = 'defddd';

const mergeAlternately = (word1, word2) => {
  let merged = [];
  let p1 = 0;
  let p2 = 0;

  while (p2 < word2.length || p1 < word1.length) {
    if (p1 < word1.length) {
      merged.push(word1[p1]);
      p1++;
    }
    if (p2 < word2.length) {
      merged.push(word2[p2]);
      p2++;
    }
  }
  return merged.join('');
};

mergeAlternately(word1, word2);

// solution 2: new string
const mergeAlternately2 = (word1, word2) => {
  let merged = '';
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      merged += word1[i];
    }
    if (i < word2.length) {
      merged += word2[i];
    }
  }
  return merged;
};

mergeAlternately2(word1, word2);
