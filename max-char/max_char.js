// write a function that returns the character that is most commonly used in a string

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxCharValue = '';

  if (str === '') return null;

  for (let x = 0; x < str.length; x += 1) {
    charMap[str[x]] = charMap[str[x]] ? charMap[str[x]] += 1 : 1;
  }

  Object.keys(charMap).forEach((charKey) => {
    if (charMap[charKey] > max) {
      max = charMap[charKey];
      maxCharValue = charKey;
    }
  });

  return maxCharValue;
}

module.exports = maxChar;
