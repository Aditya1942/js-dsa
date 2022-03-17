import { DoublyLinkedList } from "../../data-structures/LinkedList/DoublyLinkedList";

test("insert", () => {
  let linkedList = new DoublyLinkedList();
  linkedList.insert(1, 0);
  linkedList.insert(3, 0);
  linkedList.insert(2, 1);
  expect(linkedList.at(0).data).toEqual(3);
  expect(linkedList.at(1).data).toEqual(2);
  expect(linkedList.at(2).data).toEqual(1);
});
test("append", () => {
  let linkedList = new DoublyLinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  expect(linkedList.at(2).data).toEqual(3);
  expect(linkedList.at(1).data).toEqual(2);
  expect(linkedList.at(0).data).toEqual(1);
});
