const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  }
    return console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

function head(array) {
  return array[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([2, 7, 8]));
console.log(head([]));
console.log(head([5]));