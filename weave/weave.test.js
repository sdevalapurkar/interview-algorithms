const Queue = require('../queue/queue');
const weave = require('./weave');

test('weave function is defined', () => {
  expect(weave).toBeDefined();
});

test('weaves the two input queues as expected when lengths are uneven where queue 2 length is more than queue 1', () => {
  const a = new Queue();
  const b = new Queue();

  a.add(3);
  a.add(2);
  b.add(4);
  b.add(5);
  b.add(6);

  const outputQueue = weave(a, b);

  expect(outputQueue.remove()).toEqual(3);
  expect(outputQueue.remove()).toEqual(4);
  expect(outputQueue.remove()).toEqual(2);
  expect(outputQueue.remove()).toEqual(5);
  expect(outputQueue.remove()).toEqual(6);
});

test('weaves the two input queues as expected when lengths are uneven where queue 1 length is more than queue 2', () => {
  const a = new Queue();
  const b = new Queue();

  b.add(3);
  b.add(2);
  a.add(4);
  a.add(5);
  a.add(6);

  const outputQueue = weave(a, b);

  expect(outputQueue.remove()).toEqual(4);
  expect(outputQueue.remove()).toEqual(3);
  expect(outputQueue.remove()).toEqual(5);
  expect(outputQueue.remove()).toEqual(2);
  expect(outputQueue.remove()).toEqual(6);
});

test('weaves the two input queues as expected when lengths are even', () => {
  const a = new Queue();
  const b = new Queue();

  a.add(3);
  a.add(2);
  a.add(1);
  b.add(4);
  b.add(5);
  b.add(6);

  const outputQueue = weave(a, b);

  expect(outputQueue.remove()).toEqual(3);
  expect(outputQueue.remove()).toEqual(4);
  expect(outputQueue.remove()).toEqual(2);
  expect(outputQueue.remove()).toEqual(5);
  expect(outputQueue.remove()).toEqual(1);
  expect(outputQueue.remove()).toEqual(6);
});
