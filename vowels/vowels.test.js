const getNumVowels = require('./vowels');

test('getNumVowels function is defined', () => {
  expect(getNumVowels).toBeDefined();
});

test('returns the number of vowels in the string', () => {
  expect(getNumVowels('hey man whats up')).toBe(4);
});

test('works for a weird string with capital letters', () => {
  expect(getNumVowels('Yoo MAAAAn I can work with even WeirD StUfF')).toBe(15);
});

test('works for an empty string', () => {
  expect(getNumVowels('')).toBe(0);
});

test('works for a string with no letters', () => {
  expect(getNumVowels('11112222 2222')).toBe(0);
});
