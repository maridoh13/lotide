const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  }
  
  return console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  
};

const eqArrays = function(arr1, arr2) {
  var result = true;
  
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
}


// CODE
const eqObjects = function(object1, object2) {
  let result;
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);

  if (arr1.length === arr2.length) {
    for (const elements of arr1) {
      if (Array.isArray(object1[elements])) {
        result = eqArrays(object1[elements], object2[elements]);
        console.log("result of arrays:", result);
      }


      else{ 
        if (object1[elements] !== object2[elements]) {
          result = false;
        }
        else {
          result = true;
        }
      }


    }  

  }
  else {
    result = false;
  }

  return result; //true or false
};


// TEST
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
