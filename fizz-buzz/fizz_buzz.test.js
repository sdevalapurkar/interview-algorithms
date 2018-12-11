const fizzBuzz = require('./fizz_buzz');

test('fizzBuzz function is defined', () => {
  expect(fizzBuzz).toBeDefined();
});

test('outputs the proper fizz buzz combination of numbers from 1 to 16', () => {
  const output = fizzBuzz(16);

  expect(output).toEqual(expect.arrayContaining([
    1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16,
  ]));
});
