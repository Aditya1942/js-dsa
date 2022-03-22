import { LinkedList } from "../../LinkedList";
import { insertNodeAtPosition } from "../insert-a-node-at-a-specific-position-in-a-linked-list";

test("insertNodeAtPosition", () => {
  let list = new LinkedList<any>();
  list.append(1);
  list.append(2);
  list.append(3);

  expect(
    insertNodeAtPosition(list.head ? list.head : null, 4, 0)?.data
  ).toEqual(4);
});
