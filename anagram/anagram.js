// write a function that checks whether two strings are anagrams of one another
// a string is an anagram of another string if it uses the same characters
// in the same quantity

function isAnagram(stringA, stringB) {
  const strippedStringA = stringA.replace(/[^A-Z0-9]+/ig, '').toLowerCase();
  const strippedStringB = stringB.replace(/[^A-Z0-9]+/ig, '').toLowerCase();
  const charMapA = {};
  const charMapB = {};

  for (let x = 0; x < strippedStringA.length; x += 1) {
    if (charMapA[strippedStringA[x]] >= 1) {
      charMapA[strippedStringA[x]] += 1;
    } else {
      charMapA[strippedStringA[x]] = 1;
    }
  }

  for (let x = 0; x < strippedStringB.length; x += 1) {
    if (charMapB[strippedStringB[x]] >= 1) {
      charMapB[strippedStringB[x]] += 1;
    } else {
      charMapB[strippedStringB[x]] = 1;
    }
  }

  const aProps = Object.getOwnPropertyNames(charMapA);
  const bProps = Object.getOwnPropertyNames(charMapB);

  if (aProps.length !== bProps.length) return false;

  for (let x = 0; x < aProps.length; x += 1) {
    if (charMapA[x] !== charMapB[x]) return false;
  }

  return true;
}

module.exports = isAnagram;
