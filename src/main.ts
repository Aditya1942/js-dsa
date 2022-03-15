import { LinkedList } from "./data-structures/LinkedList/LinkedList";
import { deleteNode } from "./data-structures/LinkedList/Questions/delete-a-node-from-a-linked-list";
import { insertNodeAtPosition } from "./data-structures/LinkedList/Questions/insert-a-node-at-a-specific-position-in-a-linked-list";
import { reversePrint } from "./data-structures/LinkedList/Questions/print-the-elements-of-a-linked-list-in-reverse";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello!</h1>
  <a href="https://github.com/Aditya1942/js-dsa" target="_blank">Repo</a>
`;

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log(list.toString());
list.head = reversePrint(list.head);
console.log("reverse", list.toString());
