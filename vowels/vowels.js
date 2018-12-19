// write a function that returns the number of vowels in a string

function getNumVowels(str) {
  let numVowels = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let x = 0; x < str.length; x += 1) {
    if (vowels.includes(str[x].toLowerCase())) {
      numVowels += 1;
    }
  }

  return numVowels;
}

module.exports = getNumVowels;
