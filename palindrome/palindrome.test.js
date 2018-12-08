const isPalindrome = require('./palindrome');

test('returns true if the string is a palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
});
