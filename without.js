// ASSERTION
const eqArrays = function(arr1, arr2) {
  var result = true;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
}


const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    return console.log("The arrays are the same!");
  }
  else {
    return console.log("The arrays are not the same!");
  }
}

// SOLUTION I
// const without = (source, itemsToRemove) => {
//   return source.filter(element => !itemsToRemove.includes(element))
// };

// SOLUTION II
// const without = function(source, itemsToRemove) {
//   var newArray = [];
//   for (let i of source) {
//     if (!itemsToRemove.includes(i)) newArray.push(i); //if one-line -> no brackets
//   }
//   return newArray;
// }

// CODE
const without = function(source, itemsToRemove) {
  var newArray = [];
    
  for (var i = 0; i < source.length; i++) {
    for (var j = 0; j < itemsToRemove.length; j++) {
      if (!itemsToRemove.includes(source[i]) && !newArray.includes(source[i])) {
        newArray.push(source[i]);
      }
    }
  }
  return newArray;
}


// TEST
console.log(without([1, 2, 3, 4, 5], [2, 5])); // [1, 3, 4]

const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse", "hello"])); 

assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);