import { StackInterface } from "../../interface/Stack.model";
import { LinkedList } from "../LinkedList/LinkedList";

// Stack with linkedList
export class Stack<T> implements StackInterface<T> {
  private linkedList = new LinkedList<T>();
  isEmpty(): boolean {
    return !this.linkedList.head;
  }
  peek(): T | null {
    return this.linkedList.at(0)?.data || null;
  }
  push(data: T): T {
    this.linkedList.prepend(data);
    return this.linkedList.at(0)?.data;
  }
  pop(): T | null {
    return this.linkedList.deleteHead()?.data || null;
  }
  toArray(): T[] | null {
    return this.linkedList.toArray();
  }
  toString(): string {
    return this.linkedList.toString();
  }
}

export class StackWithArray<T> implements StackInterface<T> {
  array: Array<T> = [];
  isEmpty(): boolean {
    return !this.array.length;
  }
  peek(): T | null {
    return this.array[0] || null;
  }
  push(data: T): T {
    this.array.unshift(data);
    return this.array[0];
  }
  pop(): T | null {
    return this.array.shift() || null;
  }
  toArray(): T[] | null {
    return this.array;
  }
  toString(): string {
    return this.array.join("=>");
  }
}
