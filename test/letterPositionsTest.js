const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions function", () => {
  it("returns true when 'e' in 'hello' is [1]", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("returns the positions of the letters in 'hello'", () => {
    assert.deepEqual(letterPositions("hello"), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });

  it("returns the positions of the letters in 'my name is' (no spaces)", () => {
    assert.deepEqual(letterPositions("my name is"), { m: [ 0, 4 ],
      y: [ 1 ],
      n: [ 2 ],
      a: [ 3 ],
      e: [ 5 ],
      i: [ 6 ],
      s: [ 7 ] });
  });

});