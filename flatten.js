const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  let newArray = [];
  for (let i of array) {
    if (Array.isArray(i)) {
      i.forEach(element => newArray.push(element));
    } 
    else newArray.push(i);
  }
  return newArray;
};

//TEST CODE
// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;