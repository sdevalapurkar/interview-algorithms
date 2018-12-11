// write a function that outputs the numbers 1 to n
// for multiples of 3, output fizz
// for multiples of 5, output buzz
// for multiples of both 3 and 5, output fizzbuzz

function fizzBuzz(n) {
  const fizzBuzzArray = [];

  for (let x = 1; x <= n; x += 1) {
    if (x % 3 === 0 && x % 5 === 0) {
      fizzBuzzArray.push('fizzbuzz');
    } else if (x % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (x % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push(x);
    }
  }

  return fizzBuzzArray;
}

module.exports = fizzBuzz;
