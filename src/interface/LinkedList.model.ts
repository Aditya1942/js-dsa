export interface LinkedListNodeInterface<T> {
  data: any;
  next: LinkedListNodeInterface<T> | null;
}

export interface LinkedListInterface<T> {
  head: LinkedListNodeInterface<T> | null;
  tail: LinkedListNodeInterface<T> | null;
  prepend(value: T): any;
  append(value: T): any;
  insert(value: T, index: number): any;
  delete(value: T): any;
  deleteAt(index: number): any;
  deleteHead(): any;
  deleteTail(): any;
  at(index: number): any;
  find(value: any): any;
  toArray(): any[];
  isEmpty(): boolean;
  toString(): string;
  size(): number;
  getHead(): LinkedListNodeInterface<T> | null;
  getTail(): LinkedListNodeInterface<T> | null;
}
