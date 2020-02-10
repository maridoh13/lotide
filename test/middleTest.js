const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CODE
console.log("Final result: " + middle([1, 2, 3, 4, 5, 6, 7]));
console.log("Final result: " + middle([1, 2, 3, 4]));
console.log("Final result: " + middle([1, 2]));

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2]), []);