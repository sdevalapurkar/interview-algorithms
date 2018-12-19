// write a function that accepts a number n and outputs n levels of a pyramid shape

function generatePyramid(n) {
  for (let x = n; x > 0; x -= 1) {
    let counter = 0;
    let pyramidString = '';
    const pyramidLevel = n - x + 1;

    while (counter < (pyramidLevel * 2) - 1) {
      pyramidString += '#';
      counter += 1;
    }

    let numSpaces = x - 1;

    while (numSpaces > 0) {
      pyramidString = ` ${pyramidString} `;
      numSpaces -= 1;
    }

    /* eslint-disable no-console */
    console.log(pyramidString);
  }
}

module.exports = generatePyramid;
