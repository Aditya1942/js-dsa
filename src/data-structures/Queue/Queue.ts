import { QueueInterface } from "../../interface/Queue.model";
import { LinkedList } from "../LinkedList/LinkedList";

export class Queue<T> implements QueueInterface<T> {
  private linkedList = new LinkedList<T>();
  peek(): T {
    return this.linkedList.at(this.linkedList.length - 1)?.data;
  }
  enqueue(data: T): T {
    this.linkedList.insert(data, 0);

    return this.linkedList.at(0)?.data;
  }
  dequeue(): T | null {
    if (this.isEmpty()) return null;
    return this.linkedList.deleteTail()?.data;
  }
  isEmpty(): boolean {
    return !this.linkedList.head;
  }
  toString(): string {
    return this.linkedList.toString();
  }
}
