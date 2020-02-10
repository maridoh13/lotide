const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail function", () => {
  it("returns ['Lighthouse', 'Labs'] from ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs'])
  });

  it("the original array should be not modified", () => {
    const input = [1, 2, 3];
    tail(input);
    assert.deepEqual(input, [1, 2, 3]);
  });

  it("an array with one element should return an empty array", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("empty array returns empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});