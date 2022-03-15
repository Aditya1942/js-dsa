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
