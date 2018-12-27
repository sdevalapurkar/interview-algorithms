// write a function that weaves together the values of two input queues

const Queue = require('../queue/queue');

function weave(queue1, queue2) {
  const outputQueue = new Queue();
  let isFirstQueue = true;

  while (queue1.peek() !== null || queue2.peek() !== null) {
    if (isFirstQueue) {
      if (queue1.peek() !== null) {
        outputQueue.add(queue1.remove());
        isFirstQueue = false;
      } else {
        isFirstQueue = false;
      }
    } else if (queue2.peek() !== null) {
      outputQueue.add(queue2.remove());
      isFirstQueue = true;
    } else {
      isFirstQueue = true;
    }
  }

  return outputQueue;
}

module.exports = weave;
