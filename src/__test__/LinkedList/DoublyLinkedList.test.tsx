import { DoublyLinkedList } from "../../data-structures/LinkedList/DoublyLinkedList";
test("find", () => {
  let linkedList = new DoublyLinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  expect(linkedList.find(3).data).toEqual(3);
  expect(linkedList.find(1).data).toEqual(1);
  expect(linkedList.find(2).data).toEqual(2);
  expect(linkedList.find(5)?.data).toBeUndefined();
});
test("at", () => {
  let linkedList = new DoublyLinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  expect(linkedList.at(2).data).toEqual(3);
  expect(linkedList.at(5).data).toEqual(null);
  expect(linkedList.at(-1).data).toEqual(null);
});
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
test("prepend", () => {
  let linkedList = new DoublyLinkedList();
  linkedList.prepend(1);
  linkedList.prepend(2);
  linkedList.prepend(3);
  expect(linkedList.at(2).data).toEqual(1);
  expect(linkedList.at(1).data).toEqual(2);
  expect(linkedList.at(0).data).toEqual(3);
});
