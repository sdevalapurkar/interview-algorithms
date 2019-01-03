// write a function that returns the middle node of a linked list
// if the list has an even number of nodes, return node left of the midpoint
// do not use any counters, do not retrieve the size of the list, only iterate through the list once

function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

module.exports = midpoint;
