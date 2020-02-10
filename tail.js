const assertEqual = require('./assertEqual');

const tail = function tail(array) {
  let newArray = array.slice(1)
  return newArray;
};

//Test Cases: Check the original array
// console.log(tail([1, 2, 3, 4, 5]));

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// console.log(result);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

module.exports = tail;