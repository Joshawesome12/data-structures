var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    // size++;
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    size--;
    var place = storage[size];
    delete storage[size];
    return place;
    // size--;
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
      return size;
    } else {
      return size;
    }
  };

  return someInstance;
};
