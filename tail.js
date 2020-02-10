const assertEqual = require('./assertEqual');

const tail = function tail(array) {
  let newArray = array.slice(1)
  return newArray;
};

module.exports = tail;