// LC 1207: unique occurences

/**
 * given an array of integers, arr
 * return true if the # of occurrences of each value in the array is unique
 * return false otherwise
 *
 * example:
 * input: arr = [1,2,2,1,1,3]
 * output: true because no two values has the same number of occurrences
 *
 * input: arr = [1,2]
 * output: false because both values occur once
 */

const arr = [1, 2, 2, 1, 1, 3];

const uniqueOccurrences = (arr) => {
  const uniqueOccurrences = new Map();
  const occurences = new Set();

  // find number of occurrences of each array element using hash map
  for (let i = 0; i < arr.length; i++) {
    if (uniqueOccurrences.has(arr[i])) {
      uniqueOccurrences.set(arr[i], uniqueOccurrences.get(arr[i]) + 1);
    } else {
      uniqueOccurrences.set(arr[i], 1);
    }
  }

  // iterate through hash map and add values to a set to check uniqueness
  for (let [key, value] of uniqueOccurrences) {
    if (occurences.has(value)) {
      return false;
    } else {
      occurences.add(value);
    }
  }
  return true;
};

const result = uniqueOccurrences(arr);
console.log(result);
