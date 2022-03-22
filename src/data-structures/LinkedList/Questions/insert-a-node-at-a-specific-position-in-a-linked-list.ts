import { LinkedListNode } from "../LinkedList";

export function insertNodeAtPosition(
  llist: LinkedListNode<any> | null,
  data: any,
  position: number
) {
  if (!llist) {
    return;
  }
  if (position === 0) {
    let newNode = new LinkedListNode(data);
    newNode.next = llist;
    return newNode;
  }
  let count = 1;
  let list = llist;
  while (list.next) {
    if (count === position) break;
    list = list.next;
    count++;
  }
  if (list) {
    let next = list.next;
    let newNode = new LinkedListNode(data);
    newNode.next = next;
    list.next = newNode;
  }
  return llist;
}
