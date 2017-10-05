var Stack = function() {
  var funcHolder = {
    storage: {},
    count: 0
  };
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.  
  _.extend(funcHolder, stackMethods);
  return funcHolder;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    if (this.count > 0) {
      this.count--;
      var place = this.storage[this.count];
      // delete this.storage[this.count];
      return place;
    }
  },
  size: function() {
    return this.count;
  }
};


