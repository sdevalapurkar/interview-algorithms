// write a function that weaves together the values of two input queues

const Queue = require('../queue/queue');

function weave(queue1, queue2) {
  const outputQueue = new Queue();

  while (queue1.peek() || queue2.peek()) {
    if (queue1.peek()) {
      outputQueue.add(queue1.remove());
    }

    if (queue2.peek()) {
      outputQueue.add(queue2.remove());
    }
  }

  return outputQueue;
}

module.exports = weave;
