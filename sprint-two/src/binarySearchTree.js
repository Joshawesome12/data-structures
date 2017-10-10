// Implement a binarySearchTree class with the following properties:
// A .left property, a binary search tree (BST) where all values are lower than than it the current value.
// A .right property, a BST where all values are higher than than it the current value.
// A .insert() method, which accepts a value and places in the tree in the correct position.
// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
// What is the time complexity of the above functions?
// Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. 
//Profile this against the same operation using an array.

var BinarySearchTree = function(value) {
	var newTree = {};
	newTree.left = null;
	newTree.right = null;
};

BinarySearchTree.prototype.insert = function(value){
	var currentValue = 0;
	if (value > currentValue){

	}
}

BinarySearchTree.prototype.contains = function(target){

}

BinarySearchTree.prototype.depthFirstLog = function(cb){

}





/*
 * Complexity: What is the time complexity of the above functions?
 */