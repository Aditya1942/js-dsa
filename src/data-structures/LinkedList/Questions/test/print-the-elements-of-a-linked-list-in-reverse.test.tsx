import { LinkedList } from "../../LinkedList";
import { reversePrint } from "../print-the-elements-of-a-linked-list-in-reverse";

test("reverseLinkedList", () => {
  let linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.append(5);
  expect(linkedList.toString()).toEqual("1=>2=>3=>4=>5");
  linkedList.head = reversePrint(linkedList.head);
  expect(linkedList.toString()).toEqual("5=>4=>3=>2=>1");
});
