interface DoublyLinkedListInterface {
  head: DoublyLinkedListNodeInterface | null;
  tail: DoublyLinkedListNodeInterface | null;
  length: number;
  at(index: number): any;
  find(data: any): any;
  insert(data: any, index: number): void;
  append(data: any): void;
  prepend(data: any): void;
  // delete(data: any): any;
  // deleteAt(index: number): any;
}
