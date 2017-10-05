var Queue = function() {
  var instance = {
    storage: {},
    count: 0
  };
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function(string) {
    this.storage[this.count] = string;
    this.count++;
  },
  dequeue: function() {
    if (this.count > 0) {
      this.count--;
      var place = this.storage[this.count];
      for (var key in this.storage) {
        this.storage[key] = this.storage[key];
      } 
      return place;
    }
  },
  size: function() {
    return this.count;  
  }
};