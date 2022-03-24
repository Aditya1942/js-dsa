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

let input = `10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`;
let n: any = "";
let i;
// class Queue {
//   array: any = [];
//   peek() {
//     return this.array[0];
//   }
//   enqueue(data: any) {
//     this.array.push(data);
//     return data;
//   }
//   dequeue() {
//     return this.array.shift();
//   }
// }
let queue = new Queue();

function parseQuery(start: any, input: any) {
  let q = "";
  let qArr = [];
  for (let i = start; i <= input.length; i++) {
    if (input[i] === "\n" || i === input.length) {
      qArr.push(q);
      q = "";
      i++;
    }
    q += input[i];
  }
  return qArr;
}
for (i = 0; i < input.length; i++) {
  if (input[i] === "\n") break;
  n += input[i];
}

n = +n;
console.log("n", +n);
let array = parseQuery(i + 1, input);
console.log("array", array);
for (let j = 0; j < array.length; j++) {
  const element = array[j];
  if (element[0] === "1") {
    let data = element.split(" ");

    console.log("enqueue->", queue.enqueue(data[1]));
  }
  if (element[0] === "2") {
    console.log("dequeue->", queue.dequeue());
  }
  if (element[0] == "3") {
    console.log("peek ->", queue.peek());
  }
}
