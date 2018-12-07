// write a function that reverses a given string

function reverse_string(string) {
  let reversed_string = '';

  for(let x = string.length - 1; x >= 0; x--) {
    reversed_string += string[x];
  }

  return reversed_string;
}

module.exports = reverse_string;
