const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

function tail(array) {
  let newArray = array;
  let b = newArray.slice(1);
  return b;
}

console.log(tail([1, 2, 3, 4, 5]));

//Test Cases: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"