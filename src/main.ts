import { DoublyLinkedList } from "./data-structures/LinkedList/DoublyLinkedList";

import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello!</h1>
  <a href="https://github.com/Aditya1942/js-dsa" target="_blank">Repo</a>
`;

let linkedList = new DoublyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log(linkedList.at(0));
console.log(linkedList.at(1));
console.log(linkedList.at(2));
console.log(linkedList);
