import { LinkedList } from "./LinkedList.js";

let linkedList = new LinkedList();
linkedList.append(0);
linkedList.prepend(2);
linkedList.insert(1, 1);
linkedList.insert(3, 5);
console.log(linkedList);
