const isAnagram = require('./anagram');

test('isAnagram function is defined', () => {
  expect(isAnagram).toBeDefined();
});

test('returns true for two strings that are anagrams', () => {
  expect(isAnagram('aaab', 'baaa')).toBe(true);
});

test('returns false for two strings that are not anagrams', () => {
  expect(isAnagram('hey man', 'yo sup dawg')).toBe(false);
});

test('returns true for two strings that are anagrams', () => {
  const anagram = isAnagram('rails safety', 'fairy tales');

  expect(anagram).toBe(true);
});

test('returns true for two strings that are anagrams despite punctuation', () => {
  const anagram = isAnagram('RAILS!!! SAFETY!!!', 'fairy TalEs');

  expect(anagram).toBe(true);
});
