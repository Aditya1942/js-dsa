import { Queue } from "../Queue";

export function queueUsingTwoStacks(input: any) {
  //Enter your code here

  let n: any = "";
  let i;
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
  let array = parseQuery(i + 1, input);
  let result = "";
  for (let j = 0; j < array.length; j++) {
    const element = array[j];
    if (element[0] === "1") {
      let data = element.split(" ");
      queue.enqueue(data[1]);
    }
    if (element[0] === "2") {
      queue.dequeue();
    }
    if (element[0] == "3") {
      console.log(queue.peek());
      result += queue.peek() + " ";
    }
  }
  return result;
}
