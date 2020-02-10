const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  for (let name in object) {
    if (callback(object[name])) {
      return name;
    }
  }
};

//TEST CODE
// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)) // => "noma"

// let resultOfFindKey = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2);

// assertEqual(resultOfFindKey, "noma")

// assertEqual(findKey(
//     {LadyGaga: {songs: 17}, 
//      Britney: {songs: 9}, 
//      Madonna: {songs: 34}}, x => x.songs === 9), "Britney");

     
module.exports = findKey;