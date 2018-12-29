const L = require('./linked_list');

const List = L.LinkedList;
const { Node } = L;

test('List is a class', () => {
  expect(typeof List.prototype.constructor).toEqual('function');
});

test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

describe('A Node', () => {
  test('has properties data and next', () => {
    const node = new Node('a', 'b');

    expect(node.data).toEqual('a');
    expect(node.next).toEqual('b');
  });
});

describe('Insert First', () => {
  test('adds a node to the start of the list', () => {
    const l = new List();

    l.insertFirst(1);

    expect(l.head.data).toEqual(1);
  });

  test('appends a node to the start of the list', () => {
    const l = new List();

    l.insertFirst(1);

    expect(l.head.data).toEqual(1);

    l.insertFirst(2);

    expect(l.head.data).toEqual(2);
  });
});

describe('Size', () => {
  test('returns the number of items in the linked list', () => {
    const l = new List();

    expect(l.size()).toEqual(0);

    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);

    expect(l.size()).toEqual(4);
  });
});

describe('Get First', () => {
  test('returns the first node of the linked list', () => {
    const l = new List();

    l.insertFirst(1);
    l.insertFirst(2);

    expect(l.getFirst().data).toEqual(2);
  });
});

describe('Get Last', () => {
  test('returns the last node of the linked list', () => {
    const l = new List();

    l.insertFirst(1);
    l.insertFirst(2);
    l.insertFirst(3);

    expect(l.getLast().data).toEqual(1);
  });
});

describe('Clear', () => {
  test('empties out the list', () => {
    const l = new List();

    expect(l.size()).toEqual(0);

    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);

    expect(l.size()).toEqual(4);

    l.clear();

    expect(l.size()).toEqual(0);
  });
});
