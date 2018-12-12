const chunk = require('./chunk_array');

test('chunk function is defined', () => {
  expect(chunk).toBeDefined();
});

test('chunks a given array as expected', () => {
  const chunkedArray = chunk([1, 2, 3, 4, 5, 6], 5);

  expect(chunkedArray).toEqual(expect.arrayContaining([
    [1, 2, 3, 4, 5], [6],
  ]));
});

test('chunks a given array as expected', () => {
  const chunkedArray = chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);

  expect(chunkedArray).toEqual(expect.arrayContaining([
    [1, 2, 3], [4, 5, 6], [7, 8],
  ]));
});
