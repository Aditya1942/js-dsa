export interface StackInterface<T> {
  isEmpty(): boolean;
  peek(): T | null;
  push(data: T): T;
  pop(): T | null;
  toArray(): T[] | null;
  toString(): string;
}
