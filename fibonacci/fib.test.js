const fibonacciAtN = require('./fib');

test('fibonacciAtN function is defined', () => {
  expect(fibonacciAtN).toBeDefined();
});

test('returns the nth element of fibonacci series', () => {
  expect(fibonacciAtN(8)).toBe(21);
});

test('returns the right value for a large n', () => {
  expect(fibonacciAtN(34)).toBe(5702887);
});
