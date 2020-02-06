const eqArrays = function(arr1, arr2) {
  var result = true;
  if (arr1.length === arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        result = false;
      }
    }
  } else {
    result = false;
  }
  return result;
}

const eqObjects = function(object1, object2) {
  let result;
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);

  if (arr1.length === arr2.length) {
    for (const element of arr1) {
      if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
        if (! eqArrays(object1[element], object2[element])) {
          return false;
        }
      } else{ 
        if (object1[element] !== object2[element]) {
          return false;
        }
      }
    }  
  }
  else {
    return false;
  }
  return true; //true or false
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} and ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} and ${inspect(obj2)}`);
  }
};


let obj1 = {a: "1", b: [2, 3]}
let obj2 = {b: [2, 3], a: "1"}

assertObjectsEqual(obj1, obj2);
