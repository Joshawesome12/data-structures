var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.count = 0;
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  if (this.count > 0) {
    this.count--;
    var place = this.storage[this.count - this.count];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    } 
    return place;
  }

};
queueMethods.size = function() {
  return this.count;
};