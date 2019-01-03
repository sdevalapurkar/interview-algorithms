const L = require('../linked-list/linked_list');
const isCircular = require('./circular');

const List = L.LinkedList;
const { Node } = L;

test('isCircular function is defined', () => {
  expect(isCircular).toBeDefined();
});

test('returns true on a circular list', () => {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;

  expect(isCircular(l)).toBe(true);
});

test('returns false on a non-circular list', () => {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;

  expect(isCircular(l)).toBe(false);
});

test('returns false on an empty list', () => {
  const l = new List();

  expect(isCircular(l)).toBe(false);
});
