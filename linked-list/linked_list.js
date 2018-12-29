// implement the node class and linked list class
// based on the directions specified in specifications.html

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

module.exports = { Node, LinkedList };
