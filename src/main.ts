import { LinkedList } from "./data-structures/LinkedList/LinkedList";
import { deleteNode } from "./data-structures/LinkedList/Questions/delete-a-node-from-a-linked-list";
import { insertNodeAtPosition } from "./data-structures/LinkedList/Questions/insert-a-node-at-a-specific-position-in-a-linked-list";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello!</h1>
  <a href="https://github.com/Aditya1942/js-dsa" target="_blank">Repo</a>
`;

let list = new LinkedList();
list.append(20);
list.append(6);
list.append(2);
list.append(19);
list.append(7);
list.append(4);
list.append(15);
list.append(9);
deleteNode(list.head, 3);
console.log(list.toString());
