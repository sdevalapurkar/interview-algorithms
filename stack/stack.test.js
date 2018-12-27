const Stack = require('./stack');

test('Stack is a class', () => {
  expect(typeof Stack.prototype.constructor).toEqual('function');
});

test('can add elements to a stack', () => {
  const q = new Stack();

  expect(() => {
    q.push(1);
  }).not.toThrow();
});

test('can remove elements from a stack', () => {
  const q = new Stack();

  expect(() => {
    q.push(1);
    q.pop();
  }).not.toThrow();
});

test('can peek at last element in stack without removing it', () => {
  const q = new Stack();

  q.push(1);
  q.push(3);
  expect(q.peek()).toEqual(3);
  expect(q.pop()).toEqual(3);
});

test('order of elements is LIFO', () => {
  const q = new Stack();
  q.push(1);
  q.push(2);
  q.push(3);
  expect(q.pop()).toEqual(3);
  expect(q.pop()).toEqual(2);
  expect(q.pop()).toEqual(1);
  expect(q.pop()).toEqual(undefined);
});
