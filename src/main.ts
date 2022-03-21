import { DoublyLinkedList } from "./data-structures/LinkedList/DoublyLinkedList";
import { LinkedList } from "./data-structures/LinkedList/LinkedList";
import { reversePrintrecursive } from "./data-structures/LinkedList/Questions/print-the-elements-of-a-linked-list-in-reverse";
import { Queue } from "./data-structures/Queue/Queue";

import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello!</h1>
  <a href="https://github.com/Aditya1942/js-dsa" target="_blank">Repo</a>
`;

let linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log(linkedList);
console.log(linkedList.toString());
console.log(linkedList.toReverseString());
// let queue = new Queue<number>();
// queue.enqueue(1);
// console.log(queue.peek());
// queue.enqueue(2);
// console.log(queue.peek());
// console.log(queue.dequeue());
// console.log(queue.peek());
