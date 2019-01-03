// given a linked list, write a function that determines if the list is circular

function isCircular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}

module.exports = isCircular;
