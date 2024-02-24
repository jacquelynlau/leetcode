// LC 412: Fizz Buzz

/**
 * given an integer, n, return a string array where:
 * if divisible by 3 and 5 --> 'FizzBuzz'
 * if divisible by 3 --> 'Fizz'
 * if divisible by 5 --> 'Buzz'
 * else just return i as a string
 *
 * example:
 * input: n = 3
 * output: ['1','2','Fizz']
 */

const fizzBuzz = (n) => {
  // initialize an array to store string results
  let answer = [];

  // loop through numbers 1 to n (inclusive)
  for (let i = 1; i <= n; i++) {
    // use modulo/remainder operator
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push('FizzBuzz');
    } else if (i % 3 === 0) {
      answer.push('Fizz');
    } else if (i % 5 === 0) {
      answer.push('Buzz');
    } else {
      // return i as a string
      answer.push(`${i}`);
    }
  }
  return answer;
};
