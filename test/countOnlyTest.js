const assert = require('chai').assert;
const countOnly = require('../countOnly');


describe("#countOnly function:", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  console.log("Names:", firstNames);

  it("returns {'Salima': 2} when asked to count Salima", () => {
    assert.deepEqual(countOnly(firstNames, {"Salima": true}), {"Salima": 2});
  });

  it("returns just Jason when asked for Jason and Karima", () => {
    assert.deepEqual(countOnly(firstNames, {"Jason": true, "Karima": true,}), {Jason: 1});
  });

});