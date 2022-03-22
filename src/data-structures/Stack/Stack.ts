import { StackInterface } from "../../interface/Stack.model";
import { LinkedList } from "../LinkedList/LinkedList";

export class Stack<T> implements StackInterface<T> {
  private linkedList = new LinkedList<T>();
  isEmpty(): boolean {
    return !this.linkedList.head;
  }
  peek(): T | null {
    throw new Error("Method not implemented.");
  }
  push(data: T): T {
    data;
    throw new Error("Method not implemented.");
  }
  pop(): T | null {
    throw new Error("Method not implemented.");
  }
  toArray(): T[] | null {
    throw new Error("Method not implemented.");
  }
  toString(): string {
    throw new Error("Method not implemented.");
  }
}
