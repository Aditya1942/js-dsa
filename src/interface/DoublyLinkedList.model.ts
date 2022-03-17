interface DoublyLinkedListInterface {
  head: DoublyLinkedListNodeInterface | null;
  tail: DoublyLinkedListNodeInterface | null;
  length: number;
  at(index: number): any;
  find(): any;
  insert(data: any, index: number): void;
  append(data: any): void;
  prepend(data: any): void;
}
