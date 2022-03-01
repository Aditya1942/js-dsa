import { LinkedList } from "./data-structures/LinkedList";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello!</h1>
  <a href="https://github.com/Aditya1942/js-dsa" target="_blank">Repo</a>
`;

const linkedList = new LinkedList();

for (let index = 0; index < 100; index++) {
  linkedList.append(index);
}
console.log(linkedList.toArray());
console.log(linkedList);
