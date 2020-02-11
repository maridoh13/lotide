const findKey = require('../findKey');
const assert = require('chai').assert;

describe("#findKey function", () => {
  it("returns noma when looking for 2 stars using cbFn", () => {
    assert.equal(findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => x.stars === 2), "noma");
  });

  it("returns Britney when looking for 9 songs using cbFn", () => {
    assert.equal(findKey(
      {LadyGaga: {songs: 17}, 
      Britney: {songs: 9}, 
      Madonna: {songs: 34}}, x => x.songs === 9), "Britney");
  });

});