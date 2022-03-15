import { LinkedList } from "../../data-structures/LinkedList/LinkedList";

test("at", () => {
  let linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  expect(linkedList.at(2).data).toEqual(3);
  expect(linkedList.at(5).data).toEqual(null);
  expect(linkedList.at(-1).data).toEqual(null);
});
test("append", () => {
  let linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  expect(linkedList.at(2).data).toEqual(3);
  expect(linkedList.at(1).data).toEqual(2);
  expect(linkedList.at(0).data).toEqual(1);
});
test("prepend", () => {
  let linkedList = new LinkedList();
  linkedList.prepend(1);
  linkedList.prepend(2);
  linkedList.prepend(3);
  expect(linkedList.at(2).data).toEqual(1);
  expect(linkedList.at(1).data).toEqual(2);
  expect(linkedList.at(0).data).toEqual(3);
});
test("insert", () => {
  let linkedList = new LinkedList();
  linkedList.insert(1, 0);
  linkedList.insert(3, 0);
  linkedList.insert(2, 1);
  expect(linkedList.at(0).data).toEqual(3);
  expect(linkedList.at(1).data).toEqual(2);
  expect(linkedList.at(2).data).toEqual(1);
});
test("delete", () => {
  let linkedList = new LinkedList();
  linkedList.prepend(1);
  linkedList.prepend(2);
  linkedList.prepend(3);

  expect(linkedList.delete(1).data).toEqual(1);
  expect(linkedList.delete(2).data).toEqual(2);
  expect(linkedList.delete(3).data).toEqual(3);
  expect(linkedList.delete(-1)?.data).toBeUndefined();
});
test("deleteAt", () => {
  let linkedList = new LinkedList();
  linkedList.insert(1, 0);
  linkedList.insert(2, 1);
  linkedList.insert(3, 2);
  expect(linkedList.deleteAt(2).data).toEqual(3);
  expect(linkedList.deleteAt(1).data).toEqual(2);
  expect(linkedList.deleteAt(0).data).toEqual(1);
});
test("deleteHead", () => {
  let linkedList = new LinkedList();
  linkedList.prepend(1);
  linkedList.prepend(2);
  linkedList.prepend(3);
  expect(linkedList.deleteHead().data).toEqual(3);
  expect(linkedList.deleteHead().data).toEqual(2);
  expect(linkedList.deleteHead().data).toEqual(1);
});
test("deleteTail", () => {
  let linkedList = new LinkedList();
  linkedList.prepend(1);
  linkedList.prepend(2);
  linkedList.prepend(3);
  expect(linkedList.deleteTail().data).toEqual(1);
  expect(linkedList.deleteTail().data).toEqual(2);
  expect(linkedList.deleteTail().data).toEqual(3);
});
test("find", () => {
  let linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  expect(linkedList.find(3).data).toEqual(3);
  expect(linkedList.find(1).data).toEqual(1);
  expect(linkedList.find(2).data).toEqual(2);
  expect(linkedList.find(5)?.data).toBeUndefined();
});
test("toArray", () => {
  let linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  expect(linkedList.toArray()).toEqual([1, 2, 3]);
});
test("toString", () => {
  let linkedList = new LinkedList();
  linkedList.append(0);
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  expect(linkedList.toString()).toEqual("0=>1=>2=>3");
});
test("full test", () => {
  let linkedList = new LinkedList();
  expect(linkedList.isEmpty()).toEqual(true);
  expect(linkedList.size()).toEqual(0);
  linkedList.append("appended");
  expect(linkedList.isEmpty()).toEqual(false);
  expect(linkedList.toString()).toEqual("appended");
  expect(linkedList.size()).toEqual(1);
  linkedList.prepend("prepended");
  expect(linkedList.size()).toEqual(2);
  expect(linkedList.toString()).toEqual("prepended=>appended");
  linkedList.insert("inserted", 1);
  expect(linkedList.size()).toEqual(3);
  expect(linkedList.toString()).toEqual("prepended=>inserted=>appended");
  linkedList.delete("inserted");
  expect(linkedList.toString()).toEqual("prepended=>appended");
  linkedList.deleteHead();
  expect(linkedList.toString()).toEqual("appended");
  linkedList.deleteTail();
  expect(linkedList.toString()).toEqual("");
  linkedList.append("appended");
  expect(linkedList.toString()).toEqual("appended");
  linkedList.prepend("prepended");
  expect(linkedList.toString()).toEqual("prepended=>appended");
  linkedList.insert("inserted", 1);
  expect(linkedList.toString()).toEqual("prepended=>inserted=>appended");
  linkedList.deleteAt(1);
  expect(linkedList.toString()).toEqual("prepended=>appended");
  linkedList.delete("prepended");
  expect(linkedList.toString()).toEqual("appended");
  linkedList.delete("appended");
  expect(linkedList.toString()).toEqual("");
  linkedList.delete("sadfasdfasdf");
  linkedList.deleteAt(100);
  linkedList.deleteHead();
  linkedList.deleteTail();
  expect(linkedList.toString()).toEqual("");
  expect(linkedList.isEmpty()).toEqual(true);
});
