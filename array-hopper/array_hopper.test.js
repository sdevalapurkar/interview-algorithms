const arrayHopper = require('./array_hopper');

test('arrayHopper function is defined', () => {
  expect(arrayHopper).toBeDefined();
});

test('returns failure for an array where a path does not exist out of the array', () => {
  expect(arrayHopper([0,1,2,3,4,5])).toBe('failure');
});

test('returns the shortest path for an array where a path exists out of array', () => {
  expect(arrayHopper([1,2,3,4,5,5,6,6,6])).toBe(
    '0, 1, 3, 4, out'
  );
});
