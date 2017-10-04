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
    var item = someInstance[0];
    delete someInstance[0];
    size--;
    for (var i = 0; i < size; i++) {
      someInstance[i] = someInstance[i + 1];
    }
    return item; 
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
    }
    return size;
  };

  return someInstance;
};  