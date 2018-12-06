const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -6 + 4 to equal -2', () => {
  expect(sum(-6, 4)).toBe(-2);
});