const without = require('../without');
const assert = require('chai').assert;

const words = ["hello", "world", "lighthouse"];
console.log('Words:', words);

describe("#without function", () => {
  it("returns ['hello', 'world'] from words when asking to remove ['lighthouse']", () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });

  it("returns [1, 3, 4] from [1, 2, 3, 4, 5] when asking to remove [2, 5]", () => {
    assert.deepEqual(without([1, 2, 3, 4, 5], [2, 5]), [1, 3, 4]);
  });

});