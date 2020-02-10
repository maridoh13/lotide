const eqArrays = function(arr1, arr2) {
  let result = true;
  
  for (let i = 0; i < arr1.length; i++) {
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
  let newArray = [];
  for (let i of array) {
    if (Array.isArray(i)) {
      i.forEach(element => newArray.push(element));
    } 
    else newArray.push(i);
  }
  return newArray;
};


console.log(flatten([1, 2, [3, 4], 5, [6]]));

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);