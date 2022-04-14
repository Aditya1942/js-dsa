import BubbleSort from "./algo/sorting/BubbleSort";
import { main } from "./js/subjects";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello!</h1>
  <a href="https://github.com/Aditya1942/js-dsa" target="_blank">Repo</a>
`;

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
arr = BubbleSort(arr);
console.log(arr);
