var LinkedList = function() {
  var list = {};
  var count = 0;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null && list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    if (list.tail !== null) {
      list.tail.next = newNode;
    } 
    list.tail = newNode;
  };

  list.removeHead = function() {
    var tempHead = list.head;
    list.head = list.head.next;
    return tempHead.value;
  };

  list.contains = function(target) {
    var tf = false;
    for (var key in list) {
      if (list[key].value === target) {
        tf = true;
      }
    }
    return tf;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
