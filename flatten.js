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
    return console.log("The arrays are the same! 😄😄😄");
  }
  else {
    return console.log("The arrays are not the same! 🥺🥺🥺");
  }
}



const flatten = function(array) {
  let newArray = []
  for (let i of array) {
    console.log(i);
    console.log(Array.isArray(i));
    newArray.push(i);

  }
  console.log(newArray);
  return newArray;
}


flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]