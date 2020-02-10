const middle = function(array) {
  let midArray = [];
  let midIndex = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      midArray.push(array[midIndex - 1]);
      midArray.push(array[midIndex]);
    }
    else {
      midArray.push(array[midIndex]);
    }
    return midArray;
  }
  else {
    return midArray;
  }
};

module.exports = middle;