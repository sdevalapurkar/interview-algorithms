// given a linked list and an integer n, return the element
// n spaces from the last node in the list
// do not use size method, and assume that n < length of list

function fromLast(list, n) {
  let a = list.getFirst();
  let b = list.getFirst();
  let counter = 0;

  while (b && b.next && counter !== n) {
    b = b.next;
    counter += 1;
  }

  while (b.next) {
    b = b.next;
    a = a.next;
  }

  return a;
}

module.exports = fromLast;
