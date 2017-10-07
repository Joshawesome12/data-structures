var Tree = function(value) {
  var newTree = {
    //value: value
    //children: [];
  };
  newTree.value = value;
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //.addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
  this.children.push(Tree(value));
  // console.log(this);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
