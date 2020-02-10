const assertEqual = require('./assertEqual');

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
};

//TEST CODE
// console.log(countLetters("LHL"));
// console.log(countLetters("mimimi"));

module.exports = countLetters;