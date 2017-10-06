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
  //.contains() takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true;
    }
    // tree.children[0].addChild(7);
    console.log('this.children[i]', this.children[i]);
    console.log('this.children[i].value', this.children[i].value);
    if (this.children[i].children !== 0) {
      // this.contains(this.children[i].children);
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
