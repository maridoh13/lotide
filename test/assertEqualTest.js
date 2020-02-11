const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("Testing the assertArraysEqual function:", () => {
  it("compares strings 'Lighthouse Labs' and 'Bootcamp' and returns false statement", () => {
    assert.equal(assertEqual("Lighthouse Labs", "Bootcamp"), "❌ Assertion Failed: Lighthouse Labs !== Bootcamp");
  });

  it("compares strings 'Lighthouse' and 'Lighthouse' and returns true statement", () => {
    assert.equal(assertEqual("Lighthouse", "Lighthouse"), "😀 Assertion Passed: Lighthouse === Lighthouse");
  });

  it("compares '1' and 1 and returns false statement", () => {
    assert.equal(assertEqual('1', 1), "❌ Assertion Failed: 1 !== 1");
  });
  
  it("compares 3 and 3 and returns true statement", () => {
    assert.equal(assertEqual(3, 3), "😀 Assertion Passed: 3 === 3");
  });
  
});
