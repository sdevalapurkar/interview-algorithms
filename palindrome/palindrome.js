// write a function that returns whether or not a given string is a palindrome

function isPalindrome(str) {
  // we can reverse the given string and then compare it to the original string
  // if they are equivalent, then the input string is a palindrome
  let reversedString = '';

  for (let x = str.length - 1; x >= 0; x -= 1) {
    reversedString += str[x];
  }

  if (reversedString === str) {
    return true;
  }

  return false;
}

module.exports = isPalindrome;
