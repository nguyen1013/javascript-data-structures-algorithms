import DoublyLinkedList from "./DoublyLinkedList.js";
import Node from "./Node.js";

function makeLinkedList(arr) {
  if (arr.length === 0) {
    return null; // Return null if the array is empty
  }

  // Create the head node
  let head = new Node(arr[0]);
  let currentNode = head;

  // Iterate over the array to create the linked list
  for (let i = 1; i < arr.length; i++) {
    const newNode = new Node(arr[i]);
    currentNode.setNextNode(newNode);
    currentNode = newNode;
  }

  return head; // Return the head node
}

const array = [1, 2, 3, 4, 5];
const list = makeLinkedList(array);

console.log(list);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let pointer = this.head;
  let pre = null;
  let cur = this.head;
  let next = cur.next;
  let count = 0;

  while (pointer) {
    count++;
    pointer = pointer.next;

    if (count > n) {
      pre = cur;
      cur = next;
      next = next.next;
    }
  }

  if (pre) {
    pre.next = next;
  } else {
    this.head = next;
  }

  return this.head;

};

console.log(removeNthFromEnd(list));
