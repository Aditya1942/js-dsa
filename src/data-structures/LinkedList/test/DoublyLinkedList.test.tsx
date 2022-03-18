import { DoublyLinkedList } from "../DoublyLinkedList";
describe("DoublyLinkedList", () => {
  let linkedList: DoublyLinkedList;
  beforeEach(() => {
    linkedList = new DoublyLinkedList();
  });
  it("find", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.find(3).data).toEqual(3);
    expect(linkedList.find(1).data).toEqual(1);
    expect(linkedList.find(2).data).toEqual(2);
    expect(linkedList.find(5)?.data).toBeUndefined();
  });
  it("at", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.at(2).data).toEqual(3);
    expect(linkedList.at(5).data).toEqual(null);
    expect(linkedList.at(-1).data).toEqual(null);
  });
  it("insert", () => {
    linkedList.insert(1, 0);
    linkedList.insert(3, 0);
    linkedList.insert(2, 1);
    expect(linkedList.at(0).data).toEqual(3);
    expect(linkedList.at(1).data).toEqual(2);
    expect(linkedList.at(2).data).toEqual(1);
  });
  it("append", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.at(2).data).toEqual(3);
    expect(linkedList.at(1).data).toEqual(2);
    expect(linkedList.at(0).data).toEqual(1);
  });
  it("prepend", () => {
    linkedList.prepend(1);
    linkedList.prepend(2);
    linkedList.prepend(3);
    expect(linkedList.at(2).data).toEqual(1);
    expect(linkedList.at(1).data).toEqual(2);
    expect(linkedList.at(0).data).toEqual(3);
  });
  it.todo("delete", () => {
    linkedList.prepend(1);
    linkedList.prepend(2);
    linkedList.prepend(3);

    expect(linkedList.delete(1).data).toEqual(1);
    expect(linkedList.delete(2).data).toEqual(2);
    expect(linkedList.delete(3).data).toEqual(3);
    // expect(linkedList.delete(-1)?.data).toBeUndefined();
  });
});
