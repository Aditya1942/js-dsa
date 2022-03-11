import { LinkedList } from "./data-structures/LinkedList/LinkedList";
import { insertNodeAtPosition } from "./data-structures/LinkedList/Questions/insert-a-node-at-a-specific-position-in-a-linked-list";
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
if (list.head) {
  let result = insertNodeAtPosition(list.head, 1, 0);
  console.log(result);
}
