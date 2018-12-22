const generateSpiralMatrix = require('./spiral_matrix');

test('generateSpiralMatrix function is defined', () => {
  expect(generateSpiralMatrix).toBeDefined();
});

test('works when n = 0', () => {
  const spiralMatrix = generateSpiralMatrix(0);

  expect(spiralMatrix).toEqual(expect.arrayContaining([]));
});

test('works for n = 1', () => {
  const spiralMatrix = generateSpiralMatrix(1);

  expect(spiralMatrix).toEqual(expect.arrayContaining([
    [1],
  ]));
});

test('returns the proper spiral 3x3 matrix', () => {
  const spiralMatrix = generateSpiralMatrix(3);

  expect(spiralMatrix).toEqual(expect.arrayContaining([
    [1, 2, 3], [8, 9, 4], [7, 6, 5],
  ]));
});

test('returns the proper spiral 4x4 matrix', () => {
  const spiralMatrix = generateSpiralMatrix(4);

  expect(spiralMatrix).toEqual(expect.arrayContaining([
    [1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7],
  ]));
});

test('returns the proper spiral 7x7 matrix', () => {
  const spiralMatrix = generateSpiralMatrix(7);

  expect(spiralMatrix).toEqual(expect.arrayContaining([
    [1, 2, 3, 4, 5, 6, 7],
    [24, 25, 26, 27, 28, 29, 8],
    [23, 40, 41, 42, 43, 30, 9],
    [22, 39, 48, 49, 44, 31, 10],
    [21, 38, 47, 46, 45, 32, 11],
    [20, 37, 36, 35, 34, 33, 12],
    [19, 18, 17, 16, 15, 14, 13],
  ]));
});
