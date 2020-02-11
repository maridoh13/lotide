const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions function", () => {
  it("returns true when 'e' in 'hello' is [1]", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("returns the positions of the letters in 'hello'", () => {
    assert.deepEqual(letterPositions("hello"), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });

});
//TEST CODE
// console.log(letterPositions("hello"));
// assertArraysEqual(letterPositions("hello").e, [1]);
// console.log(letterPositions("my name is"));