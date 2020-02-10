const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  
  sentence = sentence.replace(/\s/g, '');  //removes all spaces

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;

};

//TEST CODE
// console.log(letterPositions("hello"));
// assertArraysEqual(letterPositions("hello").e, [1]);
// console.log(letterPositions("my name is"));

module.exports = letterPositions;