import { QueueInterface } from "../../interface/Queue.model";

export class QueueWithArray<T> implements QueueInterface<T> {
  array: Array<T> = [];
  peek(): T {
    return this.array[0];
  }
  enqueue(data: T): T {
    this.array.unshift(data);
    return this.array[0];
  }
  dequeue(): T | null {
    return this.array.pop() || null;
  }
  isEmpty(): boolean {
    return !this.array.length;
  }
  toString(): string {
    return this.array.join("=>");
  }
}
