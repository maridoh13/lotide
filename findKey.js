const findKey = function(object, callback) {
  for (let name in object) {
    if (callback(object[name])) {
      return name;
    }
  }
};
    
module.exports = findKey;