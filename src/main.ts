import { DoublyLinkedList } from "./data-structures/LinkedList/DoublyLinkedList";

import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello!</h1>
  <a href="https://github.com/Aditya1942/js-dsa" target="_blank">Repo</a>
`;

let linkedList = new DoublyLinkedList();
linkedList.insert(1, 0);
linkedList.insert(2, 1);
linkedList.insert(3, 2);
linkedList.insert(4, 3);
linkedList.insert(5, 4);

console.log(linkedList.deleteAt(3).data);

console.log(linkedList);
