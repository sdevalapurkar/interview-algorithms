// write a function that returns an integer that is the reverse ordering of numbers

function reverseInt(int) {
  let originalInt = Math.abs(int);
  let reversedInt = 0;

  while (originalInt > 0) {
    const digit = originalInt % 10;

    originalInt = Math.floor(originalInt / 10);
    reversedInt *= 10;
    reversedInt += digit;
  }

  if (int >= 0) {
    return reversedInt;
  }

  return -reversedInt;
}

module.exports = reverseInt;
