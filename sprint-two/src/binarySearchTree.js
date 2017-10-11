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
	var newTree = Object.create(BinarySearchTree.prototype);
	newTree.left = null;
	newTree.right = null;
	newTree.value = value;
	return newTree;
};

BinarySearchTree.prototype.insert = function(value){
	var node = BinarySearchTree(value);
	function insertNode(tree){

		if (tree.value > value && tree.left === null){
			tree.left = node;
		}
		else if (tree.value > value){
			insertNode(tree.left);	
		}
		if (tree.value < value && tree.right === null){
			tree.right = node;
		}
		else if (tree.value < value){
			insertNode(tree.right);
		}

	}
	insertNode(this);

}

BinarySearchTree.prototype.contains = function(target){
	var tf = false;
	function containsNode(tree){

	if (tree.value === target){
		tf = true;
	}
	else if (tree.value > target && tree.left !== null){
		containsNode(tree.left);	
	}
	else if (tree.value < target && tree.right !== null){
		containsNode(tree.right);
	}

}
containsNode(this);
return tf;
}

BinarySearchTree.prototype.depthFirstLog = function(callBack){
	function cbOnTree(tree){
	callBack.call(tree, tree.value);
	//left
	if (tree.left !== null){
		cbOnTree(tree.left);
	}
	//right
	if (tree.right !== null){
		cbOnTree(tree.right);
	}
}
	cbOnTree(this);
}





/*
 * Complexity: What is the time complexity of the above functions?
 */