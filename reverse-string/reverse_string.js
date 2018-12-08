// write a function that reverses a given string

function reverseString(string) {
  let reversedString = '';

  for (let x = string.length - 1; x >= 0; x -= 1) {
    reversedString += string[x];
  }

  return reversedString;
}

module.exports = reverseString;
