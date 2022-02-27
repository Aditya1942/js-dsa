import { LinkedList } from "../LinkedList";

test("at", () => {
  let linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  expect(linkedList.at(2).data).toBe(1);
  expect(linkedList.at(5).data).toBe(null);
});
test("append", () => {
  let linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  expect(linkedList.at(0).data).toBe(3);
  expect(linkedList.at(1).data).toBe(2);
  expect(linkedList.at(2).data).toBe(1);
});
test("prepend", () => {
  let linkedList = new LinkedList();
  linkedList.prepend(1);
  linkedList.prepend(2);
  linkedList.prepend(3);
  expect(linkedList.at(0).data).toBe(1);
  expect(linkedList.at(1).data).toBe(2);
  expect(linkedList.at(2).data).toBe(3);
});
test("insert", () => {
  let linkedList = new LinkedList();
  linkedList.insert(1, 0);
  linkedList.insert(3, 0);
  linkedList.insert(2, 1);
  expect(linkedList.at(0).data).toBe(1);
  expect(linkedList.at(1).data).toBe(2);
  expect(linkedList.at(2).data).toBe(3);
});
test("delete", () => {
  let linkedList = new LinkedList();
  linkedList.prepend(1);
  linkedList.prepend(2);
  linkedList.prepend(3);

  expect(linkedList.delete(1).data).toBe(1);
  expect(linkedList.delete(2).data).toBe(2);
  expect(linkedList.delete(3).data).toBe(3);
});
test("deleteAt", () => {
  let linkedList = new LinkedList();
  linkedList.insert(1, 0);
  linkedList.insert(2, 1);
  linkedList.insert(3, 2);
  expect(linkedList.deleteAt(2).data).toBe(3);
  expect(linkedList.deleteAt(1).data).toBe(2);
  expect(linkedList.deleteAt(0).data).toBe(1);
});
test("deleteHead", () => {
  let linkedList = new LinkedList();
  linkedList.prepend(1);
  linkedList.prepend(2);
  linkedList.prepend(3);
  expect(linkedList.deleteHead().data).toBe(1);
  expect(linkedList.deleteHead().data).toBe(2);
  expect(linkedList.deleteHead().data).toBe(3);
});
test("deleteTail", () => {
  let linkedList = new LinkedList();
  linkedList.prepend(1);
  linkedList.prepend(2);
  linkedList.prepend(3);
  expect(linkedList.deleteTail().data).toBe(3);
  expect(linkedList.deleteTail().data).toBe(2);
  expect(linkedList.deleteTail().data).toBe(1);
});
test("find", () => {
  let linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  expect(linkedList.find(3).data).toBe(3);
  expect(linkedList.find(1).data).toBe(1);
  expect(linkedList.find(2).data).toBe(2);
  expect(linkedList.find(5).data).toBe(null);
});
