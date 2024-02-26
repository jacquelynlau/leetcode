// LC 392: is subsequence

/**
 * given 2 string, s and t
 * return true if s is a subsequence of t (keeping relative position)
 * return false otherwise
 *
 * example:
 * input: s = 'abc', t = 'ahgbdc'
 * output: true
 *
 * input: s = 'axc', t = 'ahbgdc'
 * output: false
 */

// 2 pointers
const isSubsequence = (s, t) => {
  let p1 = 0;
  let p2 = 0;

  while (p1 < s.length && p2 < t.length) {
    // if letters are the same, move both pointers up
    if (s[p1] === t[p2]) {
      p1++;
      p2++;
      // else only move pointer of the longer string
    } else {
      p2++;
    }
  }
  // when p1 is done with subsequence, it will equal its length
  return p1 === s.length;
};
