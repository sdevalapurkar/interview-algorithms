// write a function that outputs the nth value of the fibonacci series

// note that this basic recursive algorithm has exponential runtime
function slowFibonacciAtN(n) {
  if (n === 0) return 0;

  if (n === 1) return 1;

  /* eslint-disable no-use-before-define */
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

const fibonacciAtN = memoize(slowFibonacciAtN);

module.exports = fibonacciAtN;
