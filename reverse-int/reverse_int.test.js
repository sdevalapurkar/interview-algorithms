const reverseInt = require('./reverse_int');

test('reverseInt function is defined', () => {
  expect(reverseInt).toBeDefined();
});

test('reverses a normal integer', () => {
  expect(reverseInt(123)).toBe(321);
});

test('reverses an integer ending with 0s', () => {
  expect(reverseInt(5000)).toBe(5);
});

test('reverses a negative integer', () => {
  expect(reverseInt(-123)).toBe(-321);
});

test('reverses a negative integer ending with 0s', () => {
  expect(reverseInt(-900)).toBe(-9);
});

test('does not modify a single digit integer', () => {
  expect(reverseInt(0)).toBe(0);
});
