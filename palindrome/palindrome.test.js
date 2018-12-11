const isPalindrome = require('./palindrome');

test('isPalindrome function is defined', () => {
  expect(isPalindrome).toBeDefined();
});

test('returns true if the input string is a palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

test('returns true if the input string is empty', () => {
  expect(isPalindrome('')).toBe(true);
});

test('returns false if the input string is not a palindrome', () => {
  expect(isPalindrome('abc')).toBe(false);
});
