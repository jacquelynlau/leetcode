// LC 283: move zeroes

/**
 * given an integer array, nums, move all the 0's to the end
 * maintain relative order of the non-zero elements
 * must use nums array - do not make a copy of the array
 *
 * example:
 * input: nums = [0,1,0,3,12]
 * output: [1,3,12,0,0]
 */

// using 2 pointers
const moveZeroes = (nums) => {
  // initiate pointer
  let pointer = 0;

  // move all non-zero elements to beginning of array
  for (let i = 0; i < nums.length; i++) {
    // if element is not 0 - swap with pointer element
    if (nums[i] !== 0) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  // start at where the pointer last was and fill the rest of the array with 0's
  for (let i = pointer; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
