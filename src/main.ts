import { LinkedList } from "./data-structures/LinkedList";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

const linkedList = new LinkedList();
linkedList.insert(1, 0);
linkedList.insert(3, 0);
linkedList.insert(2, 1);
console.log(linkedList.at(0).data);
console.log(linkedList.at(1).data);
console.log(linkedList.at(2).data);
console.log(linkedList);
