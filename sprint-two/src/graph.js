

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
  // var nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);      
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var tf = false;
  for (var i = 0; i < this.nodes.length; i++) {
    var item = this.nodes[i];
    if (item === node) {
      tf = true;
    } 
  }
  return tf;
};
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // console.log('node', node);
  // console.log('this.edges', this.edges);
  for (var i = 0; i < this.edges.length; i++) {
    var edge = this.edges[i];
    //node = 5
    //edge || this.edges[i] = [5,4];
    //edge[0] = 5      edge[1] = 4
    if (edge[0] === node || edge[1] === node) {
      this.edges.splice(edge, 1);
    }
  }
  console.log('this.edges after filter', this.edges);
  this.nodes = this.nodes.filter(item => item !== node);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var tf0 = false;
  var tf1 = false;
  for (var i = 0; i < this.edges.length; i++) {
    var currEdgePair = this.edges[i];
    if (currEdgePair[0] === fromNode || currEdgePair[0] === toNode) { tf0 = true; }
    if (currEdgePair[1] === toNode || currEdgePair[1] === fromNode) { tf1 = true; }
  }
  if (tf0 && tf1 === true) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    var tf0 = false;
    var tf1 = false;
    var edge = this.edges[i];
    if (edge[0] === fromNode || edge[0] === toNode) { tf0 = true; }
    if (edge[1] === toNode || edge[1] === fromNode) { tf1 = true; } 
    if (tf1 && tf0 === true) {
      this.edges = this.edges.filter(edge => edge === edge[i]);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes = this.nodes.map(item => cb(item));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */