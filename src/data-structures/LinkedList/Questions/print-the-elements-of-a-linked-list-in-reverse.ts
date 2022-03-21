import { LinkedListNode } from "../LinkedList";

export function reversePrint(llist: LinkedListNode | null) {
  // Write your code here
  if (llist === null) {
    return;
  }
  let current: any = llist;
  let previous = null;
  while (current) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    console.log(current);
  }

  return previous;
}
export function reversePrintrecursive(head: LinkedListNode) {
  if (head === null || head.next === null) return head;
  let newHead: any = reversePrintrecursive(head.next);
  let headNext = head.next;
  headNext.next = head;
  head.next = null;
  return newHead;
}
