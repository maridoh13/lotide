const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  }
  
  return console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function (string) {
  const results = {};
  
  for (const letter of string) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
}

console.log(countLetters("LHL"));
console.log(countLetters("mimimi"));