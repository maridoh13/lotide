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

/// CODE

const takeUntil = function(array, callback) {
  let newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      newArray.push(array[i]);
    }
    else {
      break;
    }
  }

  return newArray;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];


const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
