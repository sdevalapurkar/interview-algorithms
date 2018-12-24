// write a function that outputs the nth value of the fibonacci series

// note that this basic recursive algorithm has exponential runtime
function fibonacciAtN(n) {
  if (n === 0) return 0;

  if (n === 1) return 1;

  return fibonacciAtN(n - 1) + fibonacciAtN(n - 2);
}

// we can use memoization to improve the runtime complexity of the above algorithm
function memoize(fn) {
  const cache = {};

  return function memoizedResult(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

/* eslint-disable no-func-assign */
fibonacciAtN = memoize(fibonacciAtN);

module.exports = fibonacciAtN;
