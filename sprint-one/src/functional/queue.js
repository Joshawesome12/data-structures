var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.enqueue = function(value) {
    someInstance[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    size--;
    var item = someInstance[size];
    delete someInstance[size];
    return item; 

    // size--;
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
    }
    return size;
  };

  return someInstance;
};