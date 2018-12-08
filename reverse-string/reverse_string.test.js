const reverseString = require('./reverse_string');

test('reverses a basic string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverses a string with some capital letters', () => {
  expect(reverseString('HelLo hoW aRE YOU?')).toBe('?UOY ERa Woh oLleH');
});

test('reverses an empty string', () => {
  expect(reverseString('')).toBe('');
});
