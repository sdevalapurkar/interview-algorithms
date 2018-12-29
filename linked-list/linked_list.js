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

  insertFirst(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      const currNode = this.head;

      newNode.next = currNode;
      this.head = newNode;
    }
  }

  size() {
    let counter = 1;
    let currNode = this.head;

    if (!currNode) return 0;

    while (currNode.next) {
      counter += 1;
      currNode = currNode.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currNode = this.head;

    if (!this.head) return this.head;

    while (currNode.next) {
      currNode = currNode.next;
    }

    return currNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    let currNode = this.head;

    if (currNode && !currNode.next) {
      this.head = null;
    }

    if (currNode && currNode.next) {
      while (currNode.next.next) {
        currNode = currNode.next;
      }

      currNode.next = null;
    }
  }

  insertLast(data) {
    const newNode = new Node(data);
    let currNode = this.head;

    if (!currNode) {
      this.head = newNode;
    } else if (!currNode.next) {
      this.head.next = newNode;
    } else {
      while (currNode.next) {
        currNode = currNode.next;
      }

      currNode.next = newNode;
    }
  }

  getAt(index) {
    let currNode = this.head;
    let counter = 0;

    while (counter !== index) {
      if (currNode && currNode.next) {
        currNode = currNode.next;
        counter += 1;
      } else {
        return null;
      }
    }

    return currNode;
  }

  removeAt(index) {
    let nodeBeforeIndex = this.head;
    let currNode = this.head;
    let counter = 0;

    if (currNode && currNode.next) {
      while (counter !== index) {
        if (counter === index - 1) {
          nodeBeforeIndex = currNode;
        }

        currNode = currNode.next;
        counter += 1;
      }

      if (nodeBeforeIndex === currNode) {
        this.head = this.head.next;
      } else if (currNode.next) {
        nodeBeforeIndex.next = currNode.next;
        currNode = null;
      } else {
        nodeBeforeIndex.next = null;
      }
    }
  }
}

module.exports = { Node, LinkedList };
