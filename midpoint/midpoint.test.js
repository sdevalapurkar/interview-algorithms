const L = require('../linked-list/linked_list');
const midpoint = require('./midpoint');

const List = L.LinkedList;

test('returns the middle node when the list has an odd number of nodes', () => {
  const l = new List();

  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  l.insertLast(4);
  l.insertLast(5);

  expect(midpoint(l).data).toBe(3);
});

test('returns the middle node when the list has an odd number of nodes', () => {
  const l = new List();

  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  l.insertLast(4);
  l.insertLast(5);
  l.insertLast(6);

  expect(midpoint(l).data).toBe(3);
});

test('does not error on an empty list', () => {
  const l = new List();

  expect(midpoint(l)).toBe(null);
});
