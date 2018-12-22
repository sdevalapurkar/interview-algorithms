// write a function that accepts an integer n and outputs a nxn spiral matrix

function generateSpiralMatrix(n) {
  const spiralMatrix = [];

  for (let x = 0; x < n; x += 1) {
    spiralMatrix.push([]);
  }

  let counter = 1;
  let startRow = 1;
  let endRow = n;
  let startCol = 1;
  let endCol = n;

  while (startCol <= endCol && startRow <= endRow) {
    for (let x = startCol; x <= endCol; x += 1) {
      spiralMatrix[startCol - 1][x - 1] = counter;
      counter += 1;
    }

    startRow += 1;

    for (let x = startRow; x <= endRow; x += 1) {
      spiralMatrix[x - 1][endCol - 1] = counter;
      counter += 1;
    }

    endCol -= 1;

    for (let x = endCol; x >= startCol; x -= 1) {
      spiralMatrix[endRow - 1][x - 1] = counter;
      counter += 1;
    }

    endRow -= 1;

    for (let x = endRow; x >= startRow; x -= 1) {
      spiralMatrix[x - 1][startCol - 1] = counter;
      counter += 1;
    }

    startCol += 1;
  }

  return spiralMatrix;
}

module.exports = generateSpiralMatrix;
