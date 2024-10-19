// import { LinkedList } from "./LinkedList.js";
// import { Node } from "./Node.js";

class _Node {
  constructor(val, prev=null, next=null, child=null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
  }
}

// function makeLinkedList(arr) {
//   if (arr.length === 0) {
//     return null; // Return null if the array is empty
//   }

//   // Create the head node
//   let head = new ListNode(arr[0]);
//   let currentNode = head;

//   // Iterate over the array to create the linked list
//   for (let i = 1; i < arr.length; i++) {
//     const newNode = new ListNode(arr[i]);
//     currentNode.next = newNode;
//     currentNode = newNode;
//   }

//   return head; // Return the head node
// }

// const array = [1, 2, 3, 4, 5, 6, 7];
// const list = makeLinkedList(array);
// const list2 = makeLinkedList([1]);

let node3= new _Node(3)
let node2= new _Node(2)
let node1= new _Node(1)
node1.next = node2
node2.prev = node1
node2.next = node3
node3.prev = node2
let node4=new _Node(4)
let node5=new _Node(5)
let node6=new _Node(6)
node2.child = node4
node4.child = node6
node4.next = node5
node5.prev =node4

// console.log(node1);

/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
// var flatten = function (head) {
//   let dummmy = new _Node(0, null, head, head.child)
//   let current = dummmy.next
//   current.prev=dummmy
  // let pointer = head

  function flattenNode (preNode, node) {

    if (!node.next && !node.child) {
        node.prev = preNode
        node.next = preNode.next
        return node
      }
    let newDummy = preNode

    let newNode = node

    newDummy.next = newNode
    
    node.prev = newDummy    
    
    let pointer = newDummy.next

    if (!pointer.child) {      
      let nextNode=new _Node(
        pointer.next.val,
        pointer,
        pointer.next.next,
        pointer.next.child
      )
      pointer.next = nextNode
      nextNode = flattenNode(pointer, newNode)
    } else{
      let nextNode = new _Node(
        pointer.child,
        pointer,
        pointer.child.next,
        pointer.child.child
      )
      pointer.next=newNode
      nextNode = flattenNode(pointer, newNode)
    }
    return node
  }
  let temp = flattenNode(dummmy, current)

  console.log(dummmy.next)





// var flatten = function (head) {
//   let curr = head
//   while (curr != null) {
//       if (curr.child != null) {
//           let next = curr.next
//           let chld = curr.child
//           curr.next = chld
//           chld.prev = curr
//           curr.child = null
//           while (chld.next != null) {
//               chld = chld.next
//           }
//           if (next) next.prev = chld
//           chld.next = next
//       }
//       curr = curr.next
//   }
//   return head
// };
console.log(flatten(node1));
