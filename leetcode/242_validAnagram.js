// LC 242: valid anagram

/**
 * given 2 string, s and t
 * return true if t is an anagram of s
 * return false otherwise
 */

s = 'abba';
t = 'abba';

// solution #1
const isAnagram1 = (s, t) => {
  if (s.length !== t.length) return false;

  // new map object
  let map = {};

  // create frequency map of the characters in s
  for (const char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  // check if chars in t are in the frequency map
  for (const char of t) {
    // if 0 then it will be -1 --> false
    if (!map[char] || map[char] === 0) return false;
    map[char]--;
  }

  return true;
};

// solution #2
const isAnagram2 = (s, t) => {
  // if lengths are not equal = not anagram
  if (s.length !== t.length) {
    return false;
  }

  const sFrequency = new Map();

  // populate string s frequency map
  for (const char of s) {
    sFrequency.set(char, (sFrequency.get(char) || 0) + 1);
  }

  // check each char in t against frequency map of s
  for (const char of t) {
    if (!sFrequency.has(char)) {
      return false; // t is not found in s
    }
    // get value of each char and subtract 1
    const frequency = sFrequency.get(char) - 1;
    if (frequency === 0) {
      sFrequency.delete(char); // remove char from map if frequency is 0
    } else {
      sFrequency.set(char, frequency); // update frequency of char
    }
  }
  // if frequency map is empty = anagram
  return sFrequency.size === 0;
};
