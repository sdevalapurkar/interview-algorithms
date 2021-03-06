const Queue = require('./queue_from_stack');

test('Queue is a class', () => {
  expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can add elements to a queue', () => {
  const q = new Queue();

  expect(() => {
    q.add(1);
  }).not.toThrow();
});

test('can remove elements from a queue', () => {
  const q = new Queue();

  expect(() => {
    q.add(1);
    q.remove();
  }).not.toThrow();
});

test('can peek at last element in queue without removing it', () => {
  const q = new Queue();

  q.add(1);
  q.add(3);
  expect(q.peek()).toEqual(1);
  expect(q.remove()).toEqual(1);
});

test('order of elements is maintained', () => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.add(3);
  expect(q.remove()).toEqual(1);
  expect(q.remove()).toEqual(2);
  expect(q.remove()).toEqual(3);
  expect(q.remove()).toEqual(undefined);
});
