import { DoublyLinkedList } from "./data-structures/LinkedList/DoublyLinkedList";

import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello!</h1>
  <a href="https://github.com/Aditya1942/js-dsa" target="_blank">Repo</a>
`;

let linkedList = new DoublyLinkedList();
linkedList.insert(1, 0);
linkedList.insert(3, 0);
linkedList.insert(2, 1);

console.log(linkedList.at(0));
console.log(linkedList.at(1));
console.log(linkedList.at(2));
