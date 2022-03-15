interface LinkedListInterface {
  head: LinkedListNodeInterface | null;
  tail: LinkedListNodeInterface | null;
  prepend(value: any): any;
  append(value: any): any;
  insert(value: any, index: number): any;
  delete(value: any): any;
  deleteAt(index: number): any;
  deleteHead(): any;
  deleteTail(): any;
  at(index: number): any;
  find(value: any): any;
  toArray(): string[];
  isEmpty(): boolean;
  toString(): string;
  size(): number;
  getHead(): LinkedListNodeInterface | null;
  getTail(): LinkedListNodeInterface | null;
}
