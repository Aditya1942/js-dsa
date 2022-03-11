import { LinkedListNode } from "../LinkedList";

export function deleteNode(llist: LinkedListNode | null, position: number) {
  // Write your code here
  if (!llist) return;
  if (position === 0) {
    llist = llist.next;
    return llist;
  }
  let count = 1;
  let list = llist;
  while (list.next) {
    if (position === count) {
      list.next = list.next.next;
      return llist;
    }
    list = list.next;
    count++;
  }
  return;
}
