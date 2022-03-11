import { LinkedList } from "../data-structures/LinkedList/LinkedList";
import { insertNodeAtPosition } from "../data-structures/LinkedList/Questions/insert-a-node-at-a-specific-position-in-a-linked-list";

test("at", () => {
  let list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);

  expect(
    insertNodeAtPosition(list.head ? list.head : null, 4, 0)?.data
  ).toEqual(4);
});
