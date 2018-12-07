const reverse_string = require('./reverse_string');

test('reverses a basic string', () => {
  expect(reverse_string('hello')).toBe('olleh');
});

test('reverses a string with some capital letters', () => {
  expect(reverse_string('HelLo hoW aRE YOU?')).toBe('?UOY ERa Woh oLleH');
});

test('reverses an empty string', () => {
  expect(reverse_string('')).toBe('');
});
