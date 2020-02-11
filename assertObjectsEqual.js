const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    return `✅✅✅ Assertion Passed: ${inspect(actual)} and ${inspect(expected)} are equal.`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} and ${inspect(expected)} are different.`;
  }
};

module.exports = assertObjectsEqual;