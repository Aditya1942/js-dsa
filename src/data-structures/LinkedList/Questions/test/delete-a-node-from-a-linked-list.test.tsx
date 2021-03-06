import { LinkedList } from "../../LinkedList";
import { deleteNode } from "../delete-a-node-from-a-linked-list";

test("deleteNode", () => {
  let list = new LinkedList<any>();
  list.append(20);
  list.append(6);
  list.append(2);
  list.append(19);
  list.append(7);
  list.append(4);
  list.append(15);
  list.append(9);
  deleteNode(list.head, 3);

  expect(list.toString()).toEqual("20=>6=>2=>7=>4=>15=>9");
});
