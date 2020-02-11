const flatten = function(array) {
  let newArray = [];
  for (let i of array) {
    if (Array.isArray(i)) {
      i.forEach(element => newArray.push(element));
    } 
    else newArray.push(i);
  }
  return newArray;
};

module.exports = flatten;