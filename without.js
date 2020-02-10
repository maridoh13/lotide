const assertArraysEqual = require('./assertArraysEqual');

// SOLUTION I
// const without = (source, itemsToRemove) => {
//   return source.filter(element => !itemsToRemove.includes(element))
// };

// SOLUTION II
// const without = function(source, itemsToRemove) {
//   let newArray = [];
//   for (let i of source) {
//     if (!itemsToRemove.includes(i)) newArray.push(i); //if one-line -> no brackets
//   }
//   return newArray;
// }

// CODE
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (!itemsToRemove.includes(source[i]) && !newArray.includes(source[i])) {
        newArray.push(source[i]);
      }
    }
  }
  return newArray;
};


// TEST CODE
// console.log(without([1, 2, 3, 4, 5], [2, 5])); // [1, 3, 4]

// const words = ["hello", "world", "lighthouse"];
// console.log(without(["hello", "world", "lighthouse"], ["lighthouse", "hello"])); 

// assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);

module.exports = without;