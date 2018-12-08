const reverseInt = require('./reverse_int');

test('reverses a normal integer', () => {
  expect(reverseInt(123)).toBe(321);
});

test('reverses an integer ending with 0s', () => {
  expect(reverseInt(5000)).toBe(5);
});

test('reverses a negative integer', () => {
  expect(reverseInt(-123)).toBe(-321);
});
