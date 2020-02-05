const eqArrays = function(arr1, arr2) {
  var result = true;
  
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
}


const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    return console.log("The arrays are the same!");
  }
  else {
    return console.log("The arrays are not the same!");
  }
}


// CODE

const letterPositions = function(sentence) {
  const results = {};
  //remove all spaces
  sentence = sentence.replace(/\s/g, ''); 
       
  for (var i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;

};

console.log(letterPositions("hello"));
console.log(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").e, [1]);

// console.log(letterPositions("my name is"));
// {   l: [0],   i: [1, 11],   g: [2]... 
