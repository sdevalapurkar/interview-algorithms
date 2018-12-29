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

describe('RemoveFirst', () => {
  test('removes the first node when the list has a size of one', () => {
    const l = new List();

    l.insertFirst('a');
    l.removeFirst();

    expect(l.size()).toEqual(0);
    expect(l.getFirst()).toEqual(null);
  });

  test('removes the first node when the list has a size of three', () => {
    const l = new List();

    l.insertFirst('c');
    l.insertFirst('b');
    l.insertFirst('a');
    l.removeFirst();

    expect(l.size()).toEqual(2);
    expect(l.getFirst().data).toEqual('b');

    l.removeFirst();

    expect(l.size()).toEqual(1);
    expect(l.getFirst().data).toEqual('c');
  });
});

describe('RemoveLast', () => {
  test('removes the last node when the list is empty', () => {
    const l = new List();

    expect(() => {
      l.removeLast();
    }).not.toThrow();
  });

  test('removes the last node when the list is of length 1', () => {
    const l = new List();

    l.insertFirst('a');
    l.removeLast();

    expect(l.head).toEqual(null);
  });

  test('removes the last node when the list is of length 2', () => {
    const l = new List();

    l.insertFirst('b');
    l.insertFirst('a');
    l.removeLast();

    expect(l.size()).toEqual(1);
    expect(l.head.data).toEqual('a');
  });

  test('removes the last node when the list is of length 3', () => {
    const l = new List();

    l.insertFirst('c');
    l.insertFirst('b');
    l.insertFirst('a');
    l.removeLast();

    expect(l.size()).toEqual(2);
    expect(l.getLast().data).toEqual('b');
  });
});

describe('InsertLast', () => {
  test('adds to the end of the list when the list contains 1 node', () => {
    const l = new List();

    l.insertFirst('a');
    l.insertLast('b');

    expect(l.size()).toEqual(2);
    expect(l.getLast().data).toEqual('b');
  });

  test('adds to the end of the list when the list contains no nodes', () => {
    const l = new List();

    l.insertLast('b');

    expect(l.size()).toEqual(1);
    expect(l.getLast().data).toEqual('b');
  });

  test('adds to the end of the list when the list contains 4 nodes', () => {
    const l = new List();

    l.insertFirst('a');
    l.insertFirst('a');
    l.insertFirst('a');
    l.insertFirst('a');
    l.insertLast('b');

    expect(l.size()).toEqual(5);
    expect(l.getLast().data).toEqual('b');
  });
});

describe('GetAt', () => {
  test('returns the node at given index', () => {
    const l = new List();

    expect(l.getAt(10)).toEqual(null);

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    expect(l.getAt(0).data).toEqual(1);
    expect(l.getAt(1).data).toEqual(2);
    expect(l.getAt(2).data).toEqual(3);
    expect(l.getAt(3).data).toEqual(4);
  });
});

describe('RemoveAt', () => {
  test('doesnt crash on an empty list', () => {
    const l = new List();

    expect(() => {
      l.removeAt(0);
      l.removeAt(1);
      l.removeAt(2);
    }).not.toThrow();
  });

  test('doesnt crash on an index out of bounds', () => {
    const l = new List();

    expect(() => {
      l.insertFirst('a');
      l.removeAt(1);
    }).not.toThrow();
  });

  test('deletes the first node', () => {
    const l = new List();

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    expect(l.getAt(0).data).toEqual(1);

    l.removeAt(0);

    expect(l.getAt(0).data).toEqual(2);
  });

  test('deletes the node at the given index', () => {
    const l = new List();

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    expect(l.getAt(1).data).toEqual(2);

    l.removeAt(1);

    expect(l.getAt(1).data).toEqual(3);
  });

  test('works on the last node', () => {
    const l = new List();

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    expect(l.getAt(3).data).toEqual(4);

    l.removeAt(3);

    expect(l.getAt(3)).toEqual(null);
  });
});
