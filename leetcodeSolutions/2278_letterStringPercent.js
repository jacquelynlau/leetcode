// LC 2278: percentage of letter in string

/** 
    given a string (s) and a character (letter)
    return the % of characters that equal the letter in the string 
    % must be rounded down 
*/

const percentageLetter = (s, letter) => {
  // initialize a counter
  let count = 0;

  // iterate through the string's characters
  for (let i = 0; i < s.length; i++) {
    // if a character in string matches the given letter, add to counter
    if (s[i] === letter) {
      count++;
    }
  }
  // calculate percentage - Math.floor to round down
  return Math.floor((count / s.length) * 100);
};
