const maxChar = require('./max_char');

test('returns the character most common to the string', () => {
  expect(maxChar('aaaaabb')).toBe('a');
});

test('returns null when there is no character most common to the string', () => {
  expect(maxChar('aann')).toBe(null);
});

test('returns null when the input string is empty', () => {
  expect(maxChar('')).toBe(null);
});

test('returns the character most common to the string', () => {
  expect(maxChar('hello man 1111')).toBe('1');
});
