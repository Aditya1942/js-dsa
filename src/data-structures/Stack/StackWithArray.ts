import { StackInterface } from "../../interface/Stack.model";

// Stack with Array
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
