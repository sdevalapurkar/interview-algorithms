// write a function that outputs the nth value of the fibonacci series

function fibonacciAtN(n) {
  if (n === 0) return 0;

  if (n === 1) return 1;

  return fibonacciAtN(n - 1) + fibonacciAtN(n - 2);
}

module.exports = fibonacciAtN;
