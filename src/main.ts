import { DoublyLinkedList } from "./data-structures/LinkedList/DoublyLinkedList";

import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello!</h1>
  <a href="https://github.com/Aditya1942/js-dsa" target="_blank">Repo</a>
`;

let linkedList = new DoublyLinkedList();
linkedList.prepend(1);
linkedList.prepend(2);
linkedList.prepend(3);

// console.log(linkedList.delete(1));
// console.log(linkedList.delete(2));
// console.log(linkedList.delete(3));
console.log(linkedList);
