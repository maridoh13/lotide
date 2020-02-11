const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters function", () => {
  it("returns {L: 2, H: 1} when given 'LHL'", () => {
    assert.deepEqual(countLetters("LHL"), {L: 2, H: 1});
  });

});
