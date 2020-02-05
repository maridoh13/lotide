// FUNCTION IMPLEMENTATION
// with Template Literals
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  }
  
  return console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  
};

// TEST CODE;
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Mariana", "Mariana");
assertEqual(1, "1");