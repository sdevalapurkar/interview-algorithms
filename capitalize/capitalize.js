// write a function that capitalizes the first letter of each word in a string

function capitalize(str) {
  let capitalizedString = '';

  capitalizedString = str.charAt(0).toUpperCase();

  for (let x = 1; x < str.length; x += 1) {
    if (str[x - 1] === ' ') {
      capitalizedString += str.charAt(x).toUpperCase();
    } else {
      capitalizedString += str.charAt(x);
    }
  }

  return capitalizedString;
}

module.exports = capitalize;
