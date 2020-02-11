const takeUntil = function(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      newArray.push(array[i]);
    }
    else {
      break;
    }
  }
  return newArray;
};

module.exports = takeUntil;