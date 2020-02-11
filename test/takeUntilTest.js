const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

console.log('data1:', data1);
console.log('data2:', data2);


describe("#takeUntil function", () => {
  it("returns [1, 2, 5, 7, 2] for slice after cbFn of data1", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });

  it("returns [ 'I\'ve', 'been', 'to', 'Hollywood' ] for slice after cbFn of data2", () => {
    assert.deepEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
  
});
