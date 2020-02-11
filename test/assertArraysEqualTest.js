const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("Testing the assertArraysEqual function:", () => {
  it("compares arrays and returns a false statement", () => {
    assert.equal(assertArraysEqual([1, 2], [1, "2"]), "The arrays are not the same! 🥺🥺🥺");
  });

  it("compares arrays and returns true statement", () => {
    assert.equal(assertArraysEqual([1, 2], [1, 2]), "The arrays are the same! 😄😄😄");
  });

});
