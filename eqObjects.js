const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;