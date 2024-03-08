// LC 27: remove element

/**
 * given an integer array, nums, and integer, val
 * remove all occurrences of val in nums in place
 * return number of elements in nums which are not equal to val
 *
 * example:
 * input: nums = [3,2,2,3] val = 3
 * output: 2, nums = [2,2,_,_]
 */

nums = [3, 2, 2, 2, 2, 3, 3, 3];
val = 3;

const removeElement = (nums, val) => {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    // if element is not val - swap with pointer element
    // this shifts all non-val elements to the front of the array
    if (nums[i] !== val) {
      nums[k] = nums[i];
      //move pointer - counts elements not equal to val
      k++;
    }
  }

  console.log(k);
  return k;
};

removeElement(nums, val);
