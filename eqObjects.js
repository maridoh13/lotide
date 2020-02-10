const eqArrays = require('./eqArrays');

// CODE
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
  return true;
};


// TEST CODE
// const ab = { a: "1", b: "2"};
// const ba = { b: "2", a: "1"};
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false


module.exports = eqObjects;