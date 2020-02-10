const eqArrays = require('./eqArrays');

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    return console.log("The arrays are the same! 😄😄😄");
  }
  else {
    return console.log("The arrays are not the same! 🥺🥺🥺");
  }
};

module.exports = assertArraysEqual;