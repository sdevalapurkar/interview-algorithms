// given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size

function chunk(array, size) {
  let counter = 0;
  const chunkedArray = [];
  let mockArray = [];

  for (let x = 0; x < array.length; x += 1) {
    if (counter < size) {
      mockArray.push(array[x]);
      counter += 1;
    }

    if (counter === size || x === array.length - 1) {
      counter = 0;
      chunkedArray.push(mockArray);
      mockArray = [];
    }
  }

  return chunkedArray;
}

module.exports = chunk;
