const generateSpiralMatrix = require('./spiral_matrix');

test('generateSpiralMatrix function is defined', () => {
  expect(generateSpiralMatrix).toBeDefined();
});

test('returns the proper spiral nxn matrix', () => {
  const spiralMatrix = generateSpiralMatrix(3);

  expect(spiralMatrix).toEqual(expect.arrayContaining([
    [1, 2, 3], [8, 9, 4], [7, 6, 5],
  ]));
});

test('returns the proper spiral nxn matrix', () => {
  const spiralMatrix = generateSpiralMatrix(4);

  expect(spiralMatrix).toEqual(expect.arrayContaining([
    [1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7],
  ]));
});
