const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} and ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} and ${inspect(obj2)}`);
  }
};

//TEST CODE
// let obj1 = {a: "1", b: [2, 3]}
// let obj2 = {b: [2, 3], a: "1"}
// assertObjectsEqual(obj1, obj2);

module.exports = assertObjectsEqual;