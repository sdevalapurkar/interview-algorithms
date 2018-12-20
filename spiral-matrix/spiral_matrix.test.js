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
