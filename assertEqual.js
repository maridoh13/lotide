// FUNCTION IMPLEMENTATION
// with Template Literals

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `😀 Assertion Passed: ${actual} === ${expected}`;
  }
  return `❌ Assertion Failed: ${actual} !== ${expected}`;
};

module.exports = assertEqual;