const maxChar = require('./max_char');

test('maxChar function is defined', () => {
  expect(maxChar).toBeDefined();
});

test('returns the character most common to the string', () => {
  expect(maxChar('aaaaabb')).toBe('a');
});

test('returns the first most common character when there is more than one most common to the string', () => {
  expect(maxChar('aann')).toBe('a');
});

test('returns null when the input string is empty', () => {
  expect(maxChar('')).toBe(null);
});

test('returns the character most common to the string', () => {
  expect(maxChar('hello man 1111')).toBe('1');
});
