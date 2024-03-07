// LC 2215: find the differences of two arrays

/**
 * given 2 arrays: nums1, nums2 - return a list, answer, of size 2
 * answer[0] is a list of unique ints in nums1 not in nums2
 * answer[1] is a list of unique ints in nums2 not in nums1
 *
 * example:
 * input: nums1 = [1,2,3] nums2 = [2,4,6]
 * output: answer = [[1,3], [4,6]]
 *
 * input: nums1 = [1,2,3,3] nums2 = [1,1,2,2]
 * output: answer = [[3], []]
 */

nums1 = [1, 2, 3];
nums2 = [2, 4, 6];

// using sets - sets remove duplicates
const findDifference = (nums1, nums2) => {
  // 2 new sets
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  // loops through the numbers in nums1
  for (let num of nums1) {
    // checks if any of the nums1 numbers are in set2
    if (set2.has(num)) {
      set1.delete(num);
      set2.delete(num);
    }
  }

  // convert back to array
  let answer = [[...set1], [...set2]];
  return answer;
};

findDifference(nums1, nums2);
