const assertObjectsEqual = require('../assertObjectsEqual');
const assert = ('chai').assert;

describe("Testing the assertObjectsEqual function:", () => {
  it("compares objects {a: '1', b: [2, 3]} and {b: [2, 3], a: '1'} returns a true statement", () => {
    let obj1 = {a: "1", b: [2, 3]};
    let obj2 = {b: [2, 3], a: "1"};
    assert.equal(assertObjectsEqual(obj1, obj2), "✅✅✅ Assertion Passed: {a: '1', b: [2, 3]} and { b: [2, 3], a: '1'} are equal.");
  });

});

//NOT WORKING