const assertArraysEqual = require('./assertArraysEqual');

// CODE
const middle = function(array) {
  let midArray = [];
  let midIndex = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      midArray.push(array[midIndex - 1]);
      midArray.push(array[midIndex]);
    }
    else {
      midArray.push(array[midIndex]);
    }
    return midArray;
  }
  else {
    return midArray;
  }
};

// TEST CODE
// console.log("Final result: " + middle([1, 2, 3, 4, 5, 6, 7]));
// console.log("Final result: " + middle([1, 2, 3, 4]));
// console.log("Final result: " + middle([1, 2]));

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2]), []);

module.exports = middle;