// LC 1748: sum of unique elements

/**
 * given an integer array, nums
 * unique elements in the array only appear once
 * return the sum of all the unique elements in the array, nums
 *
 * example:
 * input: nums = [1,2,3,2]
 * output: 4 because 1 and 3 are unique
 *
 * input: nums = [1,1,1]
 * output: 0 because there are no unique elements
 */

nums = [1, 1, 2, 8];

const sumOfUnique = (nums) => {
  const numsFrequency = new Map();
  let sum = 0;

  // frequency map
  for (let i = 0; i < nums.length; i++) {
    if (numsFrequency.has(nums[i]))
      numsFrequency.set(nums[i], numsFrequency.get(nums[i]) + 1);
    else numsFrequency.set(nums[i], 1);
  }

  // iterate over map - if frequency is 1, add the keys
  for (let [key, value] of numsFrequency) {
    if (value === 1) {
      sum += key;
    }
  }

  return sum;
};

const result = sumOfUnique(nums);
console.log(result);
