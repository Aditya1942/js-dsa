export class DoublyLinkedListNode implements DoublyLinkedListNodeInterface {
  data: any;
  next: DoublyLinkedListNode | null;
  previous: DoublyLinkedListNode | null;
  constructor(data: any, next: any = null, previous: any = null) {
    this.previous = previous;
    this.data = data;
    this.next = next;
  }
}
export class DoublyLinkedList implements DoublyLinkedListInterface {
  head: DoublyLinkedListNode | null; // Head
  tail: DoublyLinkedListNode | null; // Tail
  length: number = 0; // length of linked list
  constructor() {
    this.head = null; // first element in linked list
    this.tail = null; // last element in linked list
    this.length = 0;
  }
  at(index: number): any {
    if (!this.head) return;
    if (index === 0) return this.head;
    let currentNode: DoublyLinkedListNode | null = this.head;
    let count = 0;
    while (currentNode) {
      if (index === count) return currentNode;
      currentNode = currentNode.next;
      count++;
    }
    if (!currentNode) return { data: null, next: null };
  }
  find() {
    throw new Error("Method not implemented.");
  }
  insert(data: any, index: number): void {
    let newNode = new DoublyLinkedListNode(data);
    index = index < 0 ? 0 : index ?? 0;

    // inserting Node at beginning
    if (!this.head) {
      this.head = newNode;
      if (this.tail?.data !== null) {
        this.tail = newNode;
      }
      this.length++;
      return;
    }
    if (index === 0) {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
      if (this.tail?.data !== null) {
        this.tail = newNode;
      }
      this.length++;
      return;
    }
    // inserting Node at somewhere middle
    let count = 1;
    let currentNode = this.head;
    while (currentNode.next) {
      if (count === index) break;
      currentNode = currentNode.next;
      count++;
    }
    if (currentNode.next) {
      newNode.next = currentNode.next;
      newNode.previous = currentNode;
      currentNode.next = newNode;
      this.length++;

      return;
    }
    // inserting Node at end
    if (this.tail) this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.length++;

    return;
  }
}
