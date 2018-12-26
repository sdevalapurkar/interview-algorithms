// create a queue data structure
// the queue should be a class with methods add and remove

class Queue {
  constructor() {
    this.arr = [];
  }

  add(value) {
    this.arr.unshift(value);
  }

  remove() {
    return this.arr.pop();
  }

  peek() {
    if (!this.arr.length) return null;
    return this.arr[this.arr.length - 1];
  }
}

module.exports = Queue;
