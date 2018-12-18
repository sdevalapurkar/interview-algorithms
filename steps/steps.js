// write a function that accepts a number n and outputs n steps

function generateSteps(n) {
  if (n <= 0) {
    return;
  }

  for (let x = n; x >= 1; x -= 1) {
    let numSpaces = x - 1;
    let stepString = '';

    while (numSpaces < n) {
      stepString += '#';
      numSpaces += 1;
    }

    while (stepString.length !== n) {
      stepString += ' ';
    }

    /* eslint-disable no-console */
    console.log(stepString);
  }
}

module.exports = generateSteps;
