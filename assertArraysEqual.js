const eqArrays = require('./eqArrays');

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    return "The arrays are the same! 😄😄😄";
  }
  else {
    return "The arrays are not the same! 🥺🥺🥺";
  }
};

module.exports = assertArraysEqual;