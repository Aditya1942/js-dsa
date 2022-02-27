import { LinkedList } from "./LinkedList.js";

let linkedList = new LinkedList();
linkedList.prepend(1);
linkedList.prepend(2);
linkedList.prepend(3);
console.log(linkedList.deleteTail());
console.log(linkedList);
