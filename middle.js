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


// CODE
const middle = function(array) {
  var midArray = [];
  var midIndex = Math.floor(array.length / 2);
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
}

// TEST
console.log("Final result: " + middle([1, 2, 3, 4, 5, 6, 7]));
console.log("Final result: " + middle([1, 2, 3, 4]));
console.log("Final result: " + middle([1, 2]));

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2]), []);