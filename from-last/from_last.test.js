const L = require('../linked-list/linked_list');
const fromLast = require('./from_last');

const List = L.LinkedList;

test('fromLast function is defined', () => {
  expect(fromLast).toBeDefined();
});

test('returns the 3rd last element', () => {
  const l = new List();

  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  l.insertLast(4);
  l.insertLast(5);
  l.insertLast(6);
  l.insertLast(7);
  l.insertLast(8);

  expect(fromLast(l, 3).data).toBe(5);
  expect(fromLast(l, 3).next.data).toBe(6);
});
